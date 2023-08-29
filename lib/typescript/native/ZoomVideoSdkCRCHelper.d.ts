import type { Errors, ZoomVideoSdkCRCProtocolType } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkCRCHelperType = {
    isCRCEnabled: () => Promise<boolean>;
    callCRCDevice: (address: string, protocol: string) => Promise<Errors>;
    cancelCallCRCDevice: () => Promise<Errors>;
};
export declare class ZoomVideoSdkCRCHelper {
    isCRCEnabled(): Promise<any>;
    callCRCDevice(address: string, protocol: ZoomVideoSdkCRCProtocolType): Promise<any>;
    cancelCallCRCDevice(): Promise<any>;
}
export declare enum ZoomVideoSDKCRCCallStatus {
    ZoomVideoSDKCRCCallOutStatus_Success = "ZoomVideoSDKCRCCallOutStatus_Success",
    ZoomVideoSDKCRCCallOutStatus_Ring = "ZoomVideoSDKCRCCallOutStatus_Ring",
    ZoomVideoSDKCRCCallOutStatus_Timeout = "ZoomVideoSDKCRCCallOutStatus_Timeout",
    ZoomVideoSDKCRCCallOutStatus_Busy = "ZoomVideoSDKCRCCallOutStatus_Busy",
    ZoomVideoSDKCRCCallOutStatus_Decline = "ZoomVideoSDKCRCCallOutStatus_Decline",
    ZoomVideoSDKCRCCallOutStatus_Failed = "ZoomVideoSDKCRCCallOutStatus_Failed"
}
