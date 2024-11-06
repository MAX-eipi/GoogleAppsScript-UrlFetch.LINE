declare namespace UrlFetch_LINE {
    interface MessagePushRequest extends Request {
        to: string;
        messages: MessageObjects.MessageObject[];
        notificationDisabled?: boolean;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface MessagePushResponse extends Response { }
}
