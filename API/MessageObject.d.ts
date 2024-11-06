declare namespace UrlFetch_LINE {
    namespace MessageObjects {
        interface Sender {
            name?: string;
            iconUrl: string;
        }

        interface MessageObject {
            sender?: Sender;
        }

        interface AudioMessage extends MessageObject {
            type: string;
            originalContentUrl: string;
            duration: number;
        }

        interface ImageMessage extends MessageObject {
            type: string;
            originalContentUrl: string;
            previewImageUrl: string;
        }

        interface LocationManager extends MessageObject {
            type: string;
            title: string;
            address: string;
            latitude: number;
            longitude: number;
        }

        interface StampMessage extends MessageObject {
            type: string;
            packageId: string;
            stickerId: string;
        }

        interface TextMessage extends MessageObject {
            type: string;
            text: string;
            emojis?: { index: number; productId: string; emojiId: string; }[];
        }

        interface VideoMessage extends MessageObject {
            type: string;
            originalContentUrl: string;
            previewImageUrl: string;
            trackingId?: string;
        }
    }
}
