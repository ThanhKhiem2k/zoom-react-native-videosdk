import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkShareHelperType = {
    shareScreen: () => void;
    stopShare: () => Promise<Errors>;
    lockShare: (lock: boolean) => Promise<Errors>;
    isOtherSharing: () => Promise<boolean>;
    isScreenSharingOut: () => Promise<boolean>;
    isShareLocked: () => Promise<boolean>;
    isSharingOut: () => Promise<boolean>;
};
export declare class ZoomVideoSdkShareHelper implements ZoomVideoSdkShareHelperType {
    shareScreen(): Promise<any>;
    stopShare(): Promise<any>;
    lockShare(lock: boolean): Promise<any>;
    isOtherSharing(): Promise<any>;
    isScreenSharingOut(): Promise<any>;
    isShareLocked(): Promise<any>;
    isSharingOut(): Promise<any>;
}
