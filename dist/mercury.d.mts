declare namespace Parser {
    function parse(url: any, { html, ...opts }?: {
        html: any;
    }): Promise<any>;
    let browser: boolean;
    function fetchResource(url: any): Promise<any>;
    function addExtractor(extractor: any): {};
}

export { Parser as default };
