import { ZoomVideoSdkUser, ZoomVideoSdkUserType } from './ZoomVideoSdkUser';
export declare type ZoomVideoSdkChatMessageType = {
    content: string;
    receiverUser?: ZoomVideoSdkUserType;
    senderUser: ZoomVideoSdkUserType;
    timestamp: number;
    isSelfSend: boolean;
    isChatToAll: boolean;
    messageID: string;
};
export declare class ZoomVideoSdkChatMessage implements ZoomVideoSdkChatMessageType {
    content: string;
    receiverUser: ZoomVideoSdkUser | undefined;
    senderUser: ZoomVideoSdkUser;
    timestamp: number;
    isSelfSend: boolean;
    isChatToAll: boolean;
    messageID: string;
    constructor(chatMessage: ZoomVideoSdkChatMessageType);
}
