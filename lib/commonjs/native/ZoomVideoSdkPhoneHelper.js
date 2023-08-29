"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkPhoneHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkPhoneHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkPhoneHelper {
  inviteByPhone(countryCode, phoneNumber, name) {
    return RNZoomVideoSdkPhoneHelper.inviteByPhone(countryCode, phoneNumber, name);
  }
  async cancelInviteByPhone() {
    return await RNZoomVideoSdkPhoneHelper.cancelInviteByPhone();
  }
  async getInviteByPhoneStatus() {
    return await RNZoomVideoSdkPhoneHelper.getInviteByPhoneStatus();
  }
  async getSupportCountryInfo() {
    return await RNZoomVideoSdkPhoneHelper.getSupportCountryInfo();
  }
  async isSupportPhoneFeature() {
    return await RNZoomVideoSdkPhoneHelper.isSupportPhoneFeature();
  }
  async getSessionDialInNumbers() {
    return await RNZoomVideoSdkPhoneHelper.getSessionDialInNumbers();
  }
}
exports.ZoomVideoSdkPhoneHelper = ZoomVideoSdkPhoneHelper;
//# sourceMappingURL=ZoomVideoSdkPhoneHelper.js.map