import { MessageObject } from "../../MessageObjects";
import { LINERequest, LINEResponse } from "../../LINEPayload";

export interface Request extends LINERequest {
    to: string;
    messages: MessageObject[];
    notificationDisabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Response extends LINEResponse {
}

export type LINEMessagePushRequest = Request;
export type LINEMessagePushResponse = Response;
