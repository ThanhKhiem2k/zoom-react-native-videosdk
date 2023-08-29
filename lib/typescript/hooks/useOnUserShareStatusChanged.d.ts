import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnUserShareStatusChanged(callback: (params: {
    changedUsers: ZoomVideoSdkUserType[];
}) => void): void;
