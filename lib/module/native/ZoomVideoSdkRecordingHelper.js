import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkRecordingHelper
} = NativeModules;
export class ZoomVideoSdkRecordingHelper {
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
//# sourceMappingURL=ZoomVideoSdkRecordingHelper.js.map