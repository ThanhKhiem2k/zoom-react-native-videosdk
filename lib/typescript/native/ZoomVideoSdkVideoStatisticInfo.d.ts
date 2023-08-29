export declare type ZoomVideoSdkVideoStatisticInfoType = {
    getBpf: () => Promise<boolean>;
    getFps: () => Promise<boolean>;
    getHeight: () => Promise<boolean>;
    getWidth: () => Promise<boolean>;
};
export declare class ZoomVideoSdkVideoStatisticInfo implements ZoomVideoSdkVideoStatisticInfoType {
    userId: string;
    constructor(userId: string);
    getBpf(): Promise<any>;
    getFps(): Promise<any>;
    getHeight(): Promise<any>;
    getWidth(): Promise<any>;
}
