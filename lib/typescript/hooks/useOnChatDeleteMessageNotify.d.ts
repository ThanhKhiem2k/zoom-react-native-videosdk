import type { ChatMessageDeleteType } from '../native/ZoomVideoSdk';
export declare function useOnChatNewMessageNotify(callback: (params: {
    messageID: string;
    deleteBy: ChatMessageDeleteType;
}) => void): void;
