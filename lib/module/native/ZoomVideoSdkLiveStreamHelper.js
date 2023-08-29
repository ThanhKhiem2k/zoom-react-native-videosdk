import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkLiveStreamHelper
} = NativeModules;
export class ZoomVideoSdkLiveStreamHelper {
  async canStartLiveStream() {
    return await RNZoomVideoSdkLiveStreamHelper.canStartLiveStream();
  }
  async startLiveStream(streamUrl, streamKey, broadcastUrl) {
    return await RNZoomVideoSdkLiveStreamHelper.startLiveStream(streamUrl, streamKey, broadcastUrl);
  }
  async stopLiveStream() {
    return await RNZoomVideoSdkLiveStreamHelper.stopLiveStream();
  }
}
//# sourceMappingURL=ZoomVideoSdkLiveStreamHelper.js.map