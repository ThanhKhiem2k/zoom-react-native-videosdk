"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkRemoteCameraControlHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkRemoteCameraControlHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkRemoteCameraControlHelper {
  async requestControlRemoteCamera() {
    return await RNZoomVideoSdkRemoteCameraControlHelper.requestControlRemoteCamera();
  }
  async giveUpControlRemoteCamera() {
    return await RNZoomVideoSdkRemoteCameraControlHelper.giveUpControlRemoteCamera();
  }
  async turnLeft(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnLeft(range);
  }
  async turnRight(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnRight(range);
  }
  async turnDown(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnDown(range);
  }
  async turnUp(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnUp(range);
  }
  async zoomIn(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.zoomIn(range);
  }
  async zoomOut(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.zoomOut(range);
  }
}
exports.ZoomVideoSdkRemoteCameraControlHelper = ZoomVideoSdkRemoteCameraControlHelper;
//# sourceMappingURL=ZoomVideoSdkRemoteCameraControlHelper.js.map