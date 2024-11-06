class LINEMessagePushStream implements UrlFetch.ConcreteStream<UrlFetch_LINE.MessagePushRequest, UrlFetch_LINE.MessagePushResponse> {
    private readonly url = 'https://api.line.me/v2/bot/message/push';
    private readonly method = 'post';

    constructor(readonly request: UrlFetch_LINE.MessagePushRequest) { }

    private _error = '';
    public get error(): string {
        return this._error;
    }

    public get hasError(): boolean {
        return this._error ? true : false;
    }

    // eslint-disable-next-line @typescript-eslint/camelcase
    private getHeader(request: UrlFetch_LINE.MessagePushRequest): GoogleAppsScript.URL_Fetch.HttpHeaders {
        return {
            'content-Type': 'application/json; charset=utf-8',
            'authorization': 'Bearer ' + request.channelAccessToken,
        };
    }

    // eslint-disable-next-line @typescript-eslint/camelcase
    getRawRequest(): GoogleAppsScript.URL_Fetch.URLFetchRequest {
        return {
            url: this.url,
            headers: this.getHeader(this.request),
            method: this.method,
            payload: JSON.stringify(this.request),
            muteHttpExceptions: true,
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    setRawResponse(response: GoogleAppsScript.URL_Fetch.HTTPResponse): void {
        this._response = JSON.parse(response.getContentText());
        if (this._response.message) {
            this._error = this._response.message;
        }
    }

    private _response: UrlFetch_LINE.MessagePushResponse = null;
    public get response(): UrlFetch_LINE.MessagePushResponse {
        return this._response;
    }
}
