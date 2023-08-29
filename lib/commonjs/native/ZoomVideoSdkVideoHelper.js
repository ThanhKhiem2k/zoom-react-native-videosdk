"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkVideoHelper = exports.VideoPreferenceMode = void 0;
var _reactNative = require("react-native");
var _validation = require("../utils/validation");
const {
  RNZoomVideoSdkVideoHelper
} = _reactNative.NativeModules;
let VideoPreferenceMode = /*#__PURE__*/function (VideoPreferenceMode) {
  VideoPreferenceMode["Balance"] = "ZoomVideoSDKVideoPreferenceMode_Balance";
  VideoPreferenceMode["Sharpness"] = "ZoomVideoSDKVideoPreferenceMode_Sharpness";
  VideoPreferenceMode["Smoothness"] = "ZoomVideoSDKVideoPreferenceMode_Smoothness";
  VideoPreferenceMode["Custom"] = "ZoomVideoSDKVideoPreferenceMode_Custom";
  return VideoPreferenceMode;
}({});
exports.VideoPreferenceMode = VideoPreferenceMode;
class ZoomVideoSdkVideoHelper {
  async startVideo() {
    return await RNZoomVideoSdkVideoHelper.startVideo();
  }
  async stopVideo() {
    return await RNZoomVideoSdkVideoHelper.stopVideo();
  }
  async switchCamera(deviceId) {
    if (_reactNative.Platform.OS === 'ios') {
      return await RNZoomVideoSdkVideoHelper.switchCamera();
    }
    return await RNZoomVideoSdkVideoHelper.switchCamera(deviceId);
  }
  async rotateMyVideo(rotation) {
    return await RNZoomVideoSdkVideoHelper.rotateMyVideo(rotation);
  }
  async getCameraList() {
    if (_reactNative.Platform.OS === 'ios') {
      return [];
    }
    return await RNZoomVideoSdkVideoHelper.getCameraList();
  }
  async getNumberOfCameras() {
    if (_reactNative.Platform.OS === 'ios') {
      return;
    }
    return await RNZoomVideoSdkVideoHelper.getNumberOfCameras();
  }
  async setVideoQualityPreference(setting) {
    console.log(setting); // DEBUG
    (0, _validation.validateNonEmptyStringProp)(setting, 'VideoPreferenceSetting', 'videoPreferenceMode');
    return await RNZoomVideoSdkVideoHelper.setVideoQualityPreference(setting);
  }
  async isOriginalAspectRatioEnabled() {
    return await RNZoomVideoSdkVideoHelper.isOriginalAspectRatioEnabled();
  }
  async enableOriginalAspectRatio(enable) {
    return await RNZoomVideoSdkVideoHelper.enableOriginalAspectRatio(enable);
  }
  async isMirrorMyVideoEnabled() {
    return await RNZoomVideoSdkVideoHelper.isMirrorMyVideoEnabled();
  }
  async mirrorMyVideo(enable) {
    return await RNZoomVideoSdkVideoHelper.mirrorMyVideo(enable);
  }
}
exports.ZoomVideoSdkVideoHelper = ZoomVideoSdkVideoHelper;
//# sourceMappingURL=ZoomVideoSdkVideoHelper.js.map