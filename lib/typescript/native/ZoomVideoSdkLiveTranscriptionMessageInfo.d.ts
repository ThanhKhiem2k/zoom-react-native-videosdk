import type { LiveTranscriptionOperationType } from "react-native-zoom-video-sdk";
export declare type ZoomVideoSdkLiveTranscriptionMessageInfoType = {
    messageID: string;
    messageContent: string;
    messageType: LiveTranscriptionOperationType;
    speakerName: string;
    speakerID: string;
    timeStamp: string;
};
export declare class ZoomVideoSdkLiveTranscriptionMessageInfo implements ZoomVideoSdkLiveTranscriptionMessageInfoType {
    messageID: string;
    messageContent: string;
    messageType: LiveTranscriptionOperationType;
    speakerName: string;
    speakerID: string;
    timeStamp: string;
    constructor(messageInfo: ZoomVideoSdkLiveTranscriptionMessageInfoType);
}
