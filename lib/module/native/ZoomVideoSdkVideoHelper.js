import { NativeModules, Platform } from 'react-native';
import { validateNonEmptyStringProp } from '../utils/validation';
const {
  RNZoomVideoSdkVideoHelper
} = NativeModules;
export let VideoPreferenceMode = /*#__PURE__*/function (VideoPreferenceMode) {
  VideoPreferenceMode["Balance"] = "ZoomVideoSDKVideoPreferenceMode_Balance";
  VideoPreferenceMode["Sharpness"] = "ZoomVideoSDKVideoPreferenceMode_Sharpness";
  VideoPreferenceMode["Smoothness"] = "ZoomVideoSDKVideoPreferenceMode_Smoothness";
  VideoPreferenceMode["Custom"] = "ZoomVideoSDKVideoPreferenceMode_Custom";
  return VideoPreferenceMode;
}({});
export class ZoomVideoSdkVideoHelper {
  async startVideo() {
    return await RNZoomVideoSdkVideoHelper.startVideo();
  }
  async stopVideo() {
    return await RNZoomVideoSdkVideoHelper.stopVideo();
  }
  async switchCamera(deviceId) {
    if (Platform.OS === 'ios') {
      return await RNZoomVideoSdkVideoHelper.switchCamera();
    }
    return await RNZoomVideoSdkVideoHelper.switchCamera(deviceId);
  }
  async rotateMyVideo(rotation) {
    return await RNZoomVideoSdkVideoHelper.rotateMyVideo(rotation);
  }
  async getCameraList() {
    if (Platform.OS === 'ios') {
      return [];
    }
    return await RNZoomVideoSdkVideoHelper.getCameraList();
  }
  async getNumberOfCameras() {
    if (Platform.OS === 'ios') {
      return;
    }
    return await RNZoomVideoSdkVideoHelper.getNumberOfCameras();
  }
  async setVideoQualityPreference(setting) {
    console.log(setting); // DEBUG
    validateNonEmptyStringProp(setting, 'VideoPreferenceSetting', 'videoPreferenceMode');
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
//# sourceMappingURL=ZoomVideoSdkVideoHelper.js.map