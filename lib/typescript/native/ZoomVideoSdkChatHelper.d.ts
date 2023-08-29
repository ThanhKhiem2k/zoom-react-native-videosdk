import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkChatHelperType = {
    sendChatToUser: (userId: string, message: string) => Promise<Errors>;
    sendChatToAll: (message: string) => Promise<Errors>;
    deleteChatMessage: (msgId: string) => Promise<Errors>;
    canChatMessageBeDeleted: (msgId: string) => Promise<boolean>;
};
export declare class ZoomVideoSdkChatHelper implements ZoomVideoSdkChatHelperType {
    isChatDisabled: any;
    isPrivateChatDisabled: any;
    sendChatToUser(userId: string, message: string): Promise<any>;
    sendChatToAll(message: string): Promise<any>;
    deleteChatMessage(msgId: string): Promise<any>;
    canChatMessageBeDeleted(msgId: string): Promise<any>;
}
