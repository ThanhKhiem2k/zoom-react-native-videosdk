import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkTestAudioDeviceHelper
} = NativeModules;
export class ZoomVideoSdkTestAudioDeviceHelper {
  async startMicTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.startMicTest();
  }
  async playMicTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.playMicTest();
  }
  async startSpeakerTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.startSpeakerTest();
  }
  async stopMicTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.stopMicTest();
  }
  async stopSpeakerTest() {
    return await RNZoomVideoSdkTestAudioDeviceHelper.stopSpeakerTest();
  }
}
//# sourceMappingURL=ZoomVideoSdkTestAudioDeviceHelper.js.map