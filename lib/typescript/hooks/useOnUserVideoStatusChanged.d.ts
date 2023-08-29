import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnUserVideoStatusChanged(callback: (params: {
    changedUsers: ZoomVideoSdkUserType[];
}) => void): void;
