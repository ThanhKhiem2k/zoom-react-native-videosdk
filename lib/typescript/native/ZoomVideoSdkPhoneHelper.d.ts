import type { ZoomVideoSdkPhoneSupportCountryInfo } from './ZoomVideoSdkPhoneSupportCountryInfo';
import type { PhoneStatus } from './ZoomVideoSdk';
import type { Errors } from '../native/ZoomVideoSdk';
import type { ZoomVideoSdkSessionDialInNumberInfo } from "./ZoomVideoSdkSessionDialInNumberInfo";
export declare type ZoomVideoSdkPhoneHelperType = {
    cancelInviteByPhone: () => Promise<Errors>;
    getInviteByPhoneStatus: () => Promise<PhoneStatus>;
    getSupportCountryInfo: () => Promise<ZoomVideoSdkPhoneSupportCountryInfo[]>;
    inviteByPhone: (countryCode: string, phoneNumber: string, name: string) => Promise<Errors>;
    isSupportPhoneFeature: () => Promise<boolean>;
    getSessionDialInNumbers: () => Promise<ZoomVideoSdkSessionDialInNumberInfo[]>;
};
export declare class ZoomVideoSdkPhoneHelper implements ZoomVideoSdkPhoneHelperType {
    inviteByPhone(countryCode: string, phoneNumber: string, name: string): any;
    cancelInviteByPhone(): Promise<any>;
    getInviteByPhoneStatus(): Promise<any>;
    getSupportCountryInfo(): Promise<any>;
    isSupportPhoneFeature(): Promise<any>;
    getSessionDialInNumbers(): Promise<any>;
}
