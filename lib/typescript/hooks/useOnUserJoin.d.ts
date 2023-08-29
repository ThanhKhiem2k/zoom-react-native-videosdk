import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnUserJoin(callback: (params: {
    remoteUsers: ZoomVideoSdkUserType[];
}) => void): void;
