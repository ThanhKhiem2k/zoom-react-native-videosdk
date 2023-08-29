import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkCmdChannel
} = NativeModules;
export class ZoomVideoSdkCmdChannel {
  async sendCommand(receiverId, strCmd) {
    return await RNZoomVideoSdkCmdChannel.sendCommand(receiverId, strCmd);
  }
}
//# sourceMappingURL=ZoomVideoSdkCmdChannel.js.map