import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnCameraControlRequestResult(callback: (params: {
    user: ZoomVideoSdkUserType;
    approved: boolean;
}) => void): void;
