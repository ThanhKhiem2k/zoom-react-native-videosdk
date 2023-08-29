"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkLiveStreamHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkLiveStreamHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkLiveStreamHelper {
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
exports.ZoomVideoSdkLiveStreamHelper = ZoomVideoSdkLiveStreamHelper;
//# sourceMappingURL=ZoomVideoSdkLiveStreamHelper.js.map