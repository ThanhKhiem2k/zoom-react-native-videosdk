import type { ZoomVideoSDKDialInNumberType } from './ZoomVideoSdk';
export declare type ZoomVideoSdkSessionDialInNumberInfoType = {
    countryId: string;
    countryCode: string;
    countryName: string;
    number: string;
    displayNumber: string;
    type: ZoomVideoSDKDialInNumberType;
};
export declare class ZoomVideoSdkSessionDialInNumberInfo implements ZoomVideoSdkSessionDialInNumberInfoType {
    countryId: string;
    countryCode: string;
    countryName: string;
    number: string;
    displayNumber: string;
    type: ZoomVideoSDKDialInNumberType;
    constructor(sessionDialInNumberInfo: ZoomVideoSdkSessionDialInNumberInfoType);
}
