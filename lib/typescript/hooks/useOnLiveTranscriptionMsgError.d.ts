import type { ZoomVideoSdkLiveTranscriptionLanguage } from "../native/ZoomVideoSdkLiveTranscriptionLanguage";
export declare function useOnLiveTranscriptionMsgError(callback: (params: {
    spokenLanguage: ZoomVideoSdkLiveTranscriptionLanguage;
    transcriptLanguage: ZoomVideoSdkLiveTranscriptionLanguage;
}) => void): void;
