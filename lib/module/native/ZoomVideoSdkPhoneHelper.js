import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkPhoneHelper
} = NativeModules;
export class ZoomVideoSdkPhoneHelper {
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
//# sourceMappingURL=ZoomVideoSdkPhoneHelper.js.map