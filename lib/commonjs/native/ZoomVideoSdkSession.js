"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkSession = void 0;
var _reactNative = require("react-native");
var _ZoomVideoSdkUser = require("./ZoomVideoSdkUser");
var _ZoomVideoSdkSessionStatisticsInfo = require("./ZoomVideoSdkSessionStatisticsInfo");
const {
  RNZoomVideoSdkSession
} = _reactNative.NativeModules;
class ZoomVideoSdkSession {
  async getSessionName() {
    const sessionName = await RNZoomVideoSdkSession.getSessionName();
    return sessionName;
  }
  async getSessionPassword() {
    const sessionPassword = await RNZoomVideoSdkSession.getSessionPassword();
    return sessionPassword;
  }
  async getSessionHostName() {
    const sessionHostName = await RNZoomVideoSdkSession.getSessionHostName();
    return sessionHostName;
  }
  async getSessionID() {
    const sessionID = await RNZoomVideoSdkSession.getSessionID();
    return sessionID;
  }
  async getSessionHost() {
    const user = await RNZoomVideoSdkSession.getSessionHost();
    return new _ZoomVideoSdkUser.ZoomVideoSdkUser(user);
  }
  async getRemoteUsers() {
    const users = await RNZoomVideoSdkSession.getRemoteUsers();
    return users.map(user => new _ZoomVideoSdkUser.ZoomVideoSdkUser(user));
  }
  async getMySelf() {
    const user = await RNZoomVideoSdkSession.getMySelf();
    return new _ZoomVideoSdkUser.ZoomVideoSdkUser(user);
  }
  async getSessionNumber() {
    const sessionNumber = await RNZoomVideoSdkSession.getSessionNumber();
    return sessionNumber;
  }
  async getSessionPhonePasscode() {
    const sessionPhonePasscode = await RNZoomVideoSdkSession.getSessionPhonePasscode();
    return sessionPhonePasscode;
  }
  async getAudioStatisticsInfo() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioStatisticsInfo();
  }
  async getAudioRecvFrequency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvFrequency();
  }
  async getAudioRecvJitter() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvJitter();
  }
  async getAudioRecvLatency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvLatency();
  }
  async getAudioRecvPacketLossAvg() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvPacketLossAvg();
  }
  async getAudioRecvPacketLossMax() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvPacketLossMax();
  }
  async getAudioSendFrequency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendFrequency();
  }
  async getAudioSendJitter() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendJitter();
  }
  async getAudioSendLatency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendLatency();
  }
  async getAudioSendPacketLossAvg() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendPacketLossAvg();
  }
  async getAudioSendPacketLossMax() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendPacketLossMax();
  }
  async getVideoStatisticsInfo() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoStatisticsInfo();
  }
  async getVideoRecvFps() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvFps();
  }
  async getVideoRecvFrameHeight() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvFrameHeight();
  }
  async getVideoRecvFrameWidth() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvFrameWidth();
  }
  async getVideoRecvJitter() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvJitter();
  }
  async getVideoRecvLatency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvLatency();
  }
  async getVideoRecvPacketLossAvg() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvPacketLossAvg();
  }
  async getVideoRecvPacketLossMax() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvPacketLossMax();
  }
  async getVideoSendFps() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendFps();
  }
  async getVideoSendFrameHeight() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendFrameHeight();
  }
  async getVideoSendFrameWidth() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendFrameWidth();
  }
  async getVideoSendJitter() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendJitter();
  }
  async getVideoSendLatency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendLatency();
  }
  async getVideoSendPacketLossAvg() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendPacketLossAvg();
  }
  async getVideoSendPacketLossMax() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendPacketLossMax();
  }
  async getShareStatisticsInfo() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareStatisticsInfo();
  }
  async getShareRecvFps() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvFps();
  }
  async getShareRecvFrameHeight() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvFrameHeight();
  }
  async getShareRecvFrameWidth() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvFrameWidth();
  }
  async getShareRecvJitter() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvJitter();
  }
  async getShareRecvLatency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvLatency();
  }
  async getShareRecvPacketLossAvg() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvPacketLossAvg();
  }
  async getShareRecvPacketLossMax() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvPacketLossMax();
  }
  async getShareSendFps() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendFps();
  }
  async getShareSendFrameHeight() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendFrameHeight();
  }
  async getShareSendFrameWidth() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendFrameWidth();
  }
  async getShareSendJitter() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendJitter();
  }
  async getShareSendLatency() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendLatency();
  }
  async getShareSendPacketLossAvg() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendPacketLossAvg();
  }
  async getShareSendPacketLossMax() {
    const info = new _ZoomVideoSdkSessionStatisticsInfo.ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendPacketLossMax();
  }
}
exports.ZoomVideoSdkSession = ZoomVideoSdkSession;
//# sourceMappingURL=ZoomVideoSdkSession.js.map