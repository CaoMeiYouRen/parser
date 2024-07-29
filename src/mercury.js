import URL from 'url';
import cheerio from 'cheerio';
import TurndownService from 'turndown';

import addCustomExtractor from '@/extractors/add-extractor';
import getExtractor from '@/extractors/get-extractor';
import RootExtractor, {
  selectExtendedTypes,
} from '@/extractors/root-extractor';
import collectAllPages from '@/extractors/collect-all-pages';
import { validateUrl } from '@/utils';
import Resource from '@/resource';

const Parser = {
  /**
   * @param {string} url
   * @param {{
   * html?: string
   * fetchAllPages?: boolean;
   * fallback?: boolean;
   * contentType?: 'html' | 'markdown' | 'text';
   * headers?: Record<string, string>;
   * extend?: (loader: any) => void;
   * customExtractor?: (content: HTMLElement) => string;
   * }} opts
   * @returns {Promise<{
   * title: string | null;
   * content: string | null;
   * author: string | null;
   * date_published: string | null;
   * lead_image_url: string | null;
   * dek: string | null;
   * next_page_url: string | null;
   * url: string | null;
   * domain: string | null;
   * excerpt: string | null;
   * word_count: number | null;
   * direction: 'ltr' | 'rtl' | null;
   * total_pages: number | null;
   * rendered_pages: number | null;}>}
   */
  async parse(url, { html, ...opts } = {}) {
    const {
      fetchAllPages = true,
      fallback = true,
      contentType = 'html',
      headers = {},
      extend,
      customExtractor,
    } = opts;

    // if no url was passed and this is the browser version,
    // set url to window.location.href and load the html
    // from the current page
    if (!url && cheerio.browser) {
      url = window.location.href; // eslint-disable-line no-undef
      html = html || cheerio.html();
    }

    const parsedUrl = URL.parse(url);

    if (!validateUrl(parsedUrl)) {
      return {
        error: true,
        message:
          'The url parameter passed does not look like a valid URL. Please check your URL and try again.',
      };
    }

    const $ = await Resource.create(url, html, parsedUrl, headers);

    // If we found an error creating the resource, return that error
    if ($.failed) {
      return $;
    }

    // Add custom extractor via cli.
    if (customExtractor) {
      addCustomExtractor(customExtractor);
    }

    const Extractor = getExtractor(url, parsedUrl, $);
    // console.log(`Using extractor for ${Extractor.domain}`);

    // if html still has not been set (i.e., url passed to Parser.parse),
    // set html from the response of Resource.create
    if (!html) {
      html = $.html();
    }

    // Cached value of every meta name in our document.
    // Used when extracting title/author/date_published/dek
    const metaCache = $('meta')
      .map((_, node) => $(node).attr('name'))
      .toArray();

    let extendedTypes = {};
    if (extend) {
      extendedTypes = selectExtendedTypes(extend, { $, url, html });
    }

    let result = RootExtractor.extract(Extractor, {
      url,
      html,
      $,
      metaCache,
      parsedUrl,
      fallback,
      contentType,
    });

    const { title, next_page_url } = result;

    // Fetch more pages if next_page_url found
    if (fetchAllPages && next_page_url) {
      result = await collectAllPages({
        Extractor,
        next_page_url,
        html,
        $,
        metaCache,
        result,
        title,
        url,
      });
    } else {
      result = {
        ...result,
        total_pages: 1,
        rendered_pages: 1,
      };
    }

    if (contentType === 'markdown') {
      const turndownService = new TurndownService();
      result.content = turndownService.turndown(result.content);
    } else if (contentType === 'text') {
      result.content = $.text($(result.content));
    }

    return { ...result, ...extendedTypes };
  },

  browser: !!cheerio.browser,

  // A convenience method for getting a resource
  // to work with, e.g., for custom extractor generator

  /**
   * @param {string} url
   */
  fetchResource(url) {
    return Resource.create(url);
  },

  /**
   * @param {{ domain: string; title: { selectors: string[]; }; author: { selectors: string[]; }; content: { selectors: string[]; }; extend: { testContent: { selectors: string[]; }; }; }} extractor
   */
  addExtractor(extractor) {
    return addCustomExtractor(extractor);
  },
};

export default Parser;
