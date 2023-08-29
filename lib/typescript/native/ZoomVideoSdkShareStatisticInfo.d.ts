export declare type ZoomVideoSdkShareStatisticInfoType = {
    getBpf: () => Promise<boolean>;
    getFps: () => Promise<boolean>;
    getHeight: () => Promise<boolean>;
    getWidth: () => Promise<boolean>;
};
export declare class ZoomVideoSdkShareStatisticInfo implements ZoomVideoSdkShareStatisticInfoType {
    userId: string;
    constructor(userId: string);
    getBpf(): Promise<any>;
    getFps(): Promise<any>;
    getHeight(): Promise<any>;
    getWidth(): Promise<any>;
}
