import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnUserActiveAudioChanged(callback: (params: {
    changedUsers: ZoomVideoSdkUserType[];
}) => void): void;
