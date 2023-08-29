import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkLiveStreamHelperType = {
    canStartLiveStream: () => Promise<Errors>;
    startLiveStream: (streamUrl: string, streamKey: string, broadcastUrl: string) => Promise<Errors>;
    stopLiveStream: () => Promise<Errors>;
};
export declare class ZoomVideoSdkLiveStreamHelper implements ZoomVideoSdkLiveStreamHelperType {
    canStartLiveStream(): Promise<any>;
    startLiveStream(streamUrl: string, streamKey: string, broadcastUrl: string): Promise<any>;
    stopLiveStream(): Promise<any>;
}
