import type { ZoomVideoSDKCRCCallStatus } from '../native/ZoomVideoSdkCRCHelper';
export declare function useOnCallCRCDeviceStatusChanged(callback: (params: {
    status: ZoomVideoSDKCRCCallStatus;
}) => void): void;
