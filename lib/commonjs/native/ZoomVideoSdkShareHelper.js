"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkShareHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkShareHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkShareHelper {
  async shareScreen() {
    return await RNZoomVideoSdkShareHelper.shareScreen();
  }
  async stopShare() {
    return await RNZoomVideoSdkShareHelper.stopShare();
  }
  async lockShare(lock) {
    return await RNZoomVideoSdkShareHelper.lockShare(lock);
  }
  async isOtherSharing() {
    return await RNZoomVideoSdkShareHelper.isOtherSharing();
  }
  async isScreenSharingOut() {
    return await RNZoomVideoSdkShareHelper.isScreenSharingOut();
  }
  async isShareLocked() {
    return await RNZoomVideoSdkShareHelper.isShareLocked();
  }
  async isSharingOut() {
    return await RNZoomVideoSdkShareHelper.isSharingOut();
  }
}
exports.ZoomVideoSdkShareHelper = ZoomVideoSdkShareHelper;
//# sourceMappingURL=ZoomVideoSdkShareHelper.js.map