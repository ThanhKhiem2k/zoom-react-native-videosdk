"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkCRCHelper = exports.ZoomVideoSDKCRCCallStatus = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkCRCHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkCRCHelper {
  async isCRCEnabled() {
    return await RNZoomVideoSdkCRCHelper.isCRCEnabled();
  }
  async callCRCDevice(address, protocol) {
    return await RNZoomVideoSdkCRCHelper.callCRCDevice(address, protocol.toString());
  }
  async cancelCallCRCDevice() {
    return await RNZoomVideoSdkCRCHelper.cancelCallCRCDevice();
  }
}
exports.ZoomVideoSdkCRCHelper = ZoomVideoSdkCRCHelper;
let ZoomVideoSDKCRCCallStatus = /*#__PURE__*/function (ZoomVideoSDKCRCCallStatus) {
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Success"] = "ZoomVideoSDKCRCCallOutStatus_Success";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Ring"] = "ZoomVideoSDKCRCCallOutStatus_Ring";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Timeout"] = "ZoomVideoSDKCRCCallOutStatus_Timeout";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Busy"] = "ZoomVideoSDKCRCCallOutStatus_Busy";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Decline"] = "ZoomVideoSDKCRCCallOutStatus_Decline";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Failed"] = "ZoomVideoSDKCRCCallOutStatus_Failed";
  return ZoomVideoSDKCRCCallStatus;
}({});
exports.ZoomVideoSDKCRCCallStatus = ZoomVideoSDKCRCCallStatus;
//# sourceMappingURL=ZoomVideoSdkCRCHelper.js.map