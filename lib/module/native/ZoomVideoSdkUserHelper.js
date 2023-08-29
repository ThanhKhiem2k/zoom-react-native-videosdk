import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkUserHelper
} = NativeModules;
export class ZoomVideoSdkUserHelper {
  async changeName(name, userId) {
    return await RNZoomVideoSdkUserHelper.changeName(name, userId);
  }
  async makeHost(userId) {
    return await RNZoomVideoSdkUserHelper.makeHost(userId);
  }
  async makeManager(userId) {
    return await RNZoomVideoSdkUserHelper.makeManager(userId);
  }
  async revokeManager(userId) {
    return await RNZoomVideoSdkUserHelper.revokeManager(userId);
  }
  async removeUser(userId) {
    return await RNZoomVideoSdkUserHelper.removeUser(userId);
  }
}
//# sourceMappingURL=ZoomVideoSdkUserHelper.js.map