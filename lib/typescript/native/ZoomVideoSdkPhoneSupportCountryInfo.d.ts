export declare type ZoomVideoSdkPhoneSupportCountryInfoType = {
    getCountryCode: () => Promise<string>;
    getCountryID: () => Promise<string>;
    getCountryName: () => Promise<string>;
};
export declare class ZoomVideoSdkPhoneSupportCountryInfo implements ZoomVideoSdkPhoneSupportCountryInfoType {
    private static instance;
    constructor();
    static getInstance(): ZoomVideoSdkPhoneSupportCountryInfo;
    getCountryCode(): Promise<any>;
    getCountryID(): Promise<any>;
    getCountryName(): Promise<any>;
}
