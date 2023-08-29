"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkAudioHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkAudioHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkAudioHelper {
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
exports.ZoomVideoSdkAudioHelper = ZoomVideoSdkAudioHelper;
//# sourceMappingURL=ZoomVideoSdkAudioHelper.js.map