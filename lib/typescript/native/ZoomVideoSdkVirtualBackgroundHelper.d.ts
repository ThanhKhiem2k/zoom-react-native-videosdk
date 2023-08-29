import type { Errors } from '../native/ZoomVideoSdk';
import { ZoomVideoSdkVirtualBackgroundItem } from "./ZoomVideoSdkVirtualBackgroundItem";
export declare type ZoomVideoSdkVirtualBackgroundHelperType = {
    isSupportVirtualBackground: () => Promise<boolean>;
    addVirtualBackgroundItem: (filePath: string) => Promise<ZoomVideoSdkVirtualBackgroundItem>;
    removeVirtualBackgroundItem: (imageName: string) => Promise<Errors>;
    getVirtualBackgroundItemList: () => Promise<ZoomVideoSdkVirtualBackgroundItem[]>;
    setVirtualBackgroundItem: (imageName: string) => Promise<Errors>;
};
export declare class ZoomVideoSdkVirtualBackgroundHelper implements ZoomVideoSdkVirtualBackgroundHelperType {
    isSupportVirtualBackground(): Promise<any>;
    addVirtualBackgroundItem(filePath: string): Promise<any>;
    removeVirtualBackgroundItem(imageName: string): Promise<any>;
    getVirtualBackgroundItemList(): Promise<any>;
    setVirtualBackgroundItem(imageName: string): Promise<any>;
}
