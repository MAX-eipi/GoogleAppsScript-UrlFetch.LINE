declare namespace UrlFetch_LINE {
    interface MessageReplyRequest extends Request {
        replyToken: string;
        messages: MessageObjects.MessageObject[];
        notificationDisabled?: boolean;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface MessageReplyResponse extends Response { }
}
