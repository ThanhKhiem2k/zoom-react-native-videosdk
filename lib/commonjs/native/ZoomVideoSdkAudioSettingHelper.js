"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkAudioSettingHelper = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkAudioSettingHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkAudioSettingHelper {
  async isMicOriginalInputEnable() {
    return await RNZoomVideoSdkAudioSettingHelper.isMicOriginalInputEnable();
  }
  async enableMicOriginalInput(enable) {
    return await RNZoomVideoSdkAudioSettingHelper.enableMicOriginalInput(enable);
  }
}
exports.ZoomVideoSdkAudioSettingHelper = ZoomVideoSdkAudioSettingHelper;
//# sourceMappingURL=ZoomVideoSdkAudioSettingHelper.js.map