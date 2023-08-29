import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnUserLeave(callback: (params: {
    remoteUsers: ZoomVideoSdkUserType[];
    leftUsers: ZoomVideoSdkUserType[];
}) => void): void;
