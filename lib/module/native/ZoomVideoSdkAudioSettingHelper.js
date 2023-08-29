import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkAudioSettingHelper
} = NativeModules;
export class ZoomVideoSdkAudioSettingHelper {
  async isMicOriginalInputEnable() {
    return await RNZoomVideoSdkAudioSettingHelper.isMicOriginalInputEnable();
  }
  async enableMicOriginalInput(enable) {
    return await RNZoomVideoSdkAudioSettingHelper.enableMicOriginalInput(enable);
  }
}
//# sourceMappingURL=ZoomVideoSdkAudioSettingHelper.js.map