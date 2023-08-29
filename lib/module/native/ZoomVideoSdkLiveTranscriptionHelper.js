import { NativeModules } from 'react-native';
import { ZoomVideoSdkLiveTranscriptionLanguage } from './ZoomVideoSdkLiveTranscriptionLanguage';
import { ZoomVideoSdkLiveTranscriptionMessageInfo } from "./ZoomVideoSdkLiveTranscriptionMessageInfo";
const {
  RNZoomVideoSdkLiveTranscriptionHelper
} = NativeModules;
export class ZoomVideoSdkLiveTranscriptionHelper {
  async canStartLiveTranscription() {
    return await RNZoomVideoSdkLiveTranscriptionHelper.canStartLiveTranscription();
  }
  async getLiveTranscriptionStatus() {
    return await RNZoomVideoSdkLiveTranscriptionHelper.getLiveTranscriptionStatus();
  }
  async startLiveTranscription() {
    return await RNZoomVideoSdkLiveTranscriptionHelper.startLiveTranscription();
  }
  async stopLiveTranscription() {
    return await RNZoomVideoSdkLiveTranscriptionHelper.stopLiveTranscription();
  }
  async getAvailableSpokenLanguages() {
    const languages = await RNZoomVideoSdkLiveTranscriptionHelper.getAvailableSpokenLanguages();
    return languages.map(language => new ZoomVideoSdkLiveTranscriptionLanguage(language));
  }
  async setSpokenLanguage(languageId) {
    return await RNZoomVideoSdkLiveTranscriptionHelper.setSpokenLanguage(languageId);
  }
  async getSpokenLanguage() {
    const language = await RNZoomVideoSdkLiveTranscriptionHelper.getSpokenLanguage();
    return new ZoomVideoSdkLiveTranscriptionLanguage(language);
  }
  async getAvailableTranslationLanguages() {
    const languages = await RNZoomVideoSdkLiveTranscriptionHelper.getAvailableTranslationLanguages();
    return languages.map(language => new ZoomVideoSdkLiveTranscriptionLanguage(language));
  }
  async setTranslationLanguage(languageId) {
    return await RNZoomVideoSdkLiveTranscriptionHelper.setTranslationLanguage(languageId);
  }
  async getTranslationLanguage() {
    const language = await RNZoomVideoSdkLiveTranscriptionHelper.getTranslationLanguage();
    return new ZoomVideoSdkLiveTranscriptionLanguage(language);
  }
  async isAllowViewHistoryTranslationMessageEnabled() {
    return await RNZoomVideoSdkLiveTranscriptionHelper.isAllowViewHistoryTranslationMessageEnabled();
  }
  async getHistoryTranslationMessageList() {
    const messages = await RNZoomVideoSdkLiveTranscriptionHelper.getHistoryTranslationMessageList();
    return messages.map(message => new ZoomVideoSdkLiveTranscriptionMessageInfo(message));
  }
  async isReceiveSpokenLanguageContentEnabled() {
    return await RNZoomVideoSdkLiveTranscriptionHelper.isReceiveSpokenLanguageContentEnabled();
  }
  async enableReceiveSpokenLanguageContent(enable) {
    return await RNZoomVideoSdkLiveTranscriptionHelper.enableReceiveSpokenLanguageContent(enable);
  }
}
//# sourceMappingURL=ZoomVideoSdkLiveTranscriptionHelper.js.map