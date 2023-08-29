import type { MultiCameraStreamStatus } from '../native/ZoomVideoSdk';
import type { ZoomVideoSdkUserType } from '../native/ZoomVideoSdkUser';
export declare function useOnMultiCameraStreamStatusChanged(callback: (params: {
    status: MultiCameraStreamStatus;
    user: ZoomVideoSdkUserType;
}) => void): void;
