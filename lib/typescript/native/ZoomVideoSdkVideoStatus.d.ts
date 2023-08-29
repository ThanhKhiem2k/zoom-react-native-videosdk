export declare type ZoomVideoSdkVideoStatusType = {
    hasVideoDevice: () => Promise<boolean>;
    isOn: () => Promise<boolean>;
};
export declare class ZoomVideoSdkVideoStatus implements ZoomVideoSdkVideoStatusType {
    userId: string;
    constructor(userId: string);
    isOn(): Promise<any>;
    hasVideoDevice(): Promise<any>;
}
