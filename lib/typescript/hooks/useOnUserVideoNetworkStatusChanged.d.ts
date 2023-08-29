import type { NetworkStatus } from '../native/ZoomVideoSdk';
import type { ZoomVideoSdkUser } from "../native/ZoomVideoSdkUser";
export declare function useOnUserVideoNetworkStatusChanged(callback: (params: {
    user: ZoomVideoSdkUser;
    status: NetworkStatus;
}) => void): void;
