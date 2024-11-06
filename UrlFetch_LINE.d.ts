declare namespace UrlFetch_LINE {
    interface Request extends UrlFetch.Request {
        channelAccessToken: string;
    }
    interface Response extends UrlFetch.Response {
        statusCode: number;
        message?: string;
        details?: { message: string; property: string; }[];
    }
}
