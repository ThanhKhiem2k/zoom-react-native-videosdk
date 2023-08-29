import type { LiveTranscriptionOperationType } from '../native/ZoomVideoSdk';
import type { ZoomVideoSdkUser } from "../native/ZoomVideoSdkUser";
export declare function useOnLiveTranscriptionMsgReceived(callback: (params: {
    ltMsg: string;
    pUser: ZoomVideoSdkUser;
    type: LiveTranscriptionOperationType;
}) => void): void;
