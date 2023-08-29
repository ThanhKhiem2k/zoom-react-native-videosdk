import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkAudioHelper
} = NativeModules;
export class ZoomVideoSdkAudioHelper {
  async startAudio() {
    return await RNZoomVideoSdkAudioHelper.startAudio();
  }
  async stopAudio() {
    return await RNZoomVideoSdkAudioHelper.stopAudio();
  }
  async muteAudio(userId) {
    return await RNZoomVideoSdkAudioHelper.muteAudio(userId);
  }
  async unmuteAudio(userId) {
    return await RNZoomVideoSdkAudioHelper.unmuteAudio(userId);
  }
  async subscribe() {
    return await RNZoomVideoSdkAudioHelper.subscribe();
  }
  async unsubscribe() {
    return await RNZoomVideoSdkAudioHelper.unsubscribe();
  }
  async setSpeaker(isOn) {
    return await RNZoomVideoSdkAudioHelper.setSpeaker(isOn);
  }
  async getSpeakerStatus() {
    return await RNZoomVideoSdkAudioHelper.getSpeakerStatus();
  }
  async canSwitchSpeaker() {
    return await RNZoomVideoSdkAudioHelper.canSwitchSpeaker();
  }
  async resetAudioSession() {
    return await RNZoomVideoSdkAudioHelper.resetAudioSession();
  }
  async cleanAudioSession() {
    return await RNZoomVideoSdkAudioHelper.cleanAudioSession();
  }
}
//# sourceMappingURL=ZoomVideoSdkAudioHelper.js.map