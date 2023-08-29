"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkUserHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkUserHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkUserHelper {
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
exports.ZoomVideoSdkUserHelper = ZoomVideoSdkUserHelper;
//# sourceMappingURL=ZoomVideoSdkUserHelper.js.map