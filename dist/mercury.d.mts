declare namespace Parser {
    function parse(url: string, { html, ...opts }?: {
        html?: string;
        fetchAllPages?: boolean;
        fallback?: boolean;
        contentType?: "html" | "markdown" | "text";
        headers?: Record<string, string>;
        extend?: (loader: any) => void;
        customExtractor?: (content: HTMLElement) => string;
    }): Promise<{
        title: string | null;
        content: string | null;
        author: string | null;
        date_published: string | null;
        lead_image_url: string | null;
        dek: string | null;
        next_page_url: string | null;
        url: string | null;
        domain: string | null;
        excerpt: string | null;
        word_count: number | null;
        direction: "ltr" | "rtl" | null;
        total_pages: number | null;
        rendered_pages: number | null;
    }>;
    let browser: boolean;
    function fetchResource(url: string): Promise<any>;
    function addExtractor(extractor: {
        domain: string;
        title: {
            selectors: string[];
        };
        author: {
            selectors: string[];
        };
        content: {
            selectors: string[];
        };
        extend: {
            testContent: {
                selectors: string[];
            };
        };
    }): {};
}

export { Parser as default };
