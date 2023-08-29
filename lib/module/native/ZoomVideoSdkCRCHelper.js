import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkCRCHelper
} = NativeModules;
export class ZoomVideoSdkCRCHelper {
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
export let ZoomVideoSDKCRCCallStatus = /*#__PURE__*/function (ZoomVideoSDKCRCCallStatus) {
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Success"] = "ZoomVideoSDKCRCCallOutStatus_Success";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Ring"] = "ZoomVideoSDKCRCCallOutStatus_Ring";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Timeout"] = "ZoomVideoSDKCRCCallOutStatus_Timeout";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Busy"] = "ZoomVideoSDKCRCCallOutStatus_Busy";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Decline"] = "ZoomVideoSDKCRCCallOutStatus_Decline";
  ZoomVideoSDKCRCCallStatus["ZoomVideoSDKCRCCallOutStatus_Failed"] = "ZoomVideoSDKCRCCallOutStatus_Failed";
  return ZoomVideoSDKCRCCallStatus;
}({});
//# sourceMappingURL=ZoomVideoSdkCRCHelper.js.map