"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkCmdChannel = void 0;
var _reactNative = require("react-native");
const {
  RNZoomVideoSdkCmdChannel
} = _reactNative.NativeModules;
class ZoomVideoSdkCmdChannel {
  async sendCommand(receiverId, strCmd) {
    return await RNZoomVideoSdkCmdChannel.sendCommand(receiverId, strCmd);
  }
}
exports.ZoomVideoSdkCmdChannel = ZoomVideoSdkCmdChannel;
//# sourceMappingURL=ZoomVideoSdkCmdChannel.js.map