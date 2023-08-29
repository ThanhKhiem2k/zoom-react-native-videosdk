import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnUserAudioStatusChanged(callback: (params: {
    changedUsers: ZoomVideoSdkUserType[];
}) => void): void;
