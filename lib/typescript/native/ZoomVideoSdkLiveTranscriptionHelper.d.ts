import type { LiveTranscriptionStatus } from './ZoomVideoSdk';
import { ZoomVideoSdkLiveTranscriptionLanguage } from './ZoomVideoSdkLiveTranscriptionLanguage';
import type { Errors } from '../native/ZoomVideoSdk';
import { ZoomVideoSdkLiveTranscriptionMessageInfo } from "./ZoomVideoSdkLiveTranscriptionMessageInfo";
export declare type ZoomVideoSdkLiveTranscriptionHelperType = {
    canStartLiveTranscription: () => Promise<boolean>;
    getLiveTranscriptionStatus: () => Promise<LiveTranscriptionStatus>;
    startLiveTranscription: () => Promise<Errors>;
    stopLiveTranscription: () => Promise<Errors>;
    getAvailableSpokenLanguages: () => Promise<ZoomVideoSdkLiveTranscriptionLanguage[]>;
    setSpokenLanguage: (languageId: number) => void;
    getSpokenLanguage: () => Promise<ZoomVideoSdkLiveTranscriptionLanguage>;
    getAvailableTranslationLanguages: () => Promise<ZoomVideoSdkLiveTranscriptionLanguage[]>;
    setTranslationLanguage: (languageId: number) => void;
    getTranslationLanguage: () => Promise<ZoomVideoSdkLiveTranscriptionLanguage>;
    isAllowViewHistoryTranslationMessageEnabled: () => Promise<boolean>;
    getHistoryTranslationMessageList: () => Promise<ZoomVideoSdkLiveTranscriptionMessageInfo[]>;
    isReceiveSpokenLanguageContentEnabled: () => Promise<boolean>;
    enableReceiveSpokenLanguageContent: (enable: boolean) => Promise<Errors>;
};
export declare class ZoomVideoSdkLiveTranscriptionHelper implements ZoomVideoSdkLiveTranscriptionHelperType {
    canStartLiveTranscription(): Promise<any>;
    getLiveTranscriptionStatus(): Promise<any>;
    startLiveTranscription(): Promise<any>;
    stopLiveTranscription(): Promise<any>;
    getAvailableSpokenLanguages(): Promise<any>;
    setSpokenLanguage(languageId: number): Promise<any>;
    getSpokenLanguage(): Promise<ZoomVideoSdkLiveTranscriptionLanguage>;
    getAvailableTranslationLanguages(): Promise<any>;
    setTranslationLanguage(languageId: number): Promise<any>;
    getTranslationLanguage(): Promise<ZoomVideoSdkLiveTranscriptionLanguage>;
    isAllowViewHistoryTranslationMessageEnabled(): Promise<any>;
    getHistoryTranslationMessageList(): Promise<any>;
    isReceiveSpokenLanguageContentEnabled(): Promise<any>;
    enableReceiveSpokenLanguageContent(enable: boolean): Promise<any>;
}
