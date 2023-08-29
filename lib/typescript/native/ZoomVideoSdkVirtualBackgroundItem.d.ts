import type { ZoomVideoSDKVirtualBackgroundDataType } from "react-native-zoom-video-sdk";
export declare type ZoomVideoSdkVirtualBackgroundItemType = {
    filePath: string;
    imageName: string;
    type: ZoomVideoSDKVirtualBackgroundDataType;
    canBeDeleted: boolean;
};
export declare class ZoomVideoSdkVirtualBackgroundItem implements ZoomVideoSdkVirtualBackgroundItemType {
    filePath: string;
    imageName: string;
    type: ZoomVideoSDKVirtualBackgroundDataType;
    canBeDeleted: boolean;
    constructor(item: ZoomVideoSdkVirtualBackgroundItemType);
}
