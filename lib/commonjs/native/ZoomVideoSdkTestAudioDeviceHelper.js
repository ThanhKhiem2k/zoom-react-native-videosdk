"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkTestAudioDeviceHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkTestAudioDeviceHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkTestAudioDeviceHelper {
  async startMicTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.startMicTest();
  }
  async playMicTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.playMicTest();
  }
  async startSpeakerTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.startSpeakerTest();
  }
  async stopMicTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.stopMicTest();
  }
  async stopSpeakerTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.stopSpeakerTest();
  }
}
exports.ZoomVideoSdkTestAudioDeviceHelper = ZoomVideoSdkTestAudioDeviceHelper;
//# sourceMappingURL=ZoomVideoSdkTestAudioDeviceHelper.js.map