import { LINERequest, LINEResponse } from "../../LINEPayload";
import { MessageObject } from "../../MessageObjects";

export interface Request extends LINERequest {
    replyToken: string;
    messages: MessageObject[];
    notificationDisabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Response extends LINEResponse {
}

export type LINEMessageReplyRequest = Request;
export type LINEMessageReplyResponse = Response;
