"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkRecordingHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkRecordingHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkRecordingHelper {
  async canStartRecording() {
    return await RNZoomVideoSdkRecordingHelper.canStartRecording();
  }
  async startCloudRecording() {
    return await RNZoomVideoSdkRecordingHelper.startCloudRecording();
  }
  async stopCloudRecording() {
    return await RNZoomVideoSdkRecordingHelper.stopCloudRecording();
  }
  async pauseCloudRecording() {
    return await RNZoomVideoSdkRecordingHelper.pauseCloudRecording();
  }
  async resumeCloudRecording() {
    return await RNZoomVideoSdkRecordingHelper.resumeCloudRecording();
  }
  async getCloudRecordingStatus() {
    return await RNZoomVideoSdkRecordingHelper.getCloudRecordingStatus();
  }
}
exports.ZoomVideoSdkRecordingHelper = ZoomVideoSdkRecordingHelper;
//# sourceMappingURL=ZoomVideoSdkRecordingHelper.js.map