import { NativeModules } from 'react-native';
import { ZoomVideoSdkUser } from './ZoomVideoSdkUser';
import { ZoomVideoSdkSessionStatisticsInfo } from './ZoomVideoSdkSessionStatisticsInfo';
const {
  RNZoomVideoSdkSession
} = NativeModules;
export class ZoomVideoSdkSession {
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
    return new ZoomVideoSdkUser(user);
  }
  async getRemoteUsers() {
    const users = await RNZoomVideoSdkSession.getRemoteUsers();
    return users.map(user => new ZoomVideoSdkUser(user));
  }
  async getMySelf() {
    const user = await RNZoomVideoSdkSession.getMySelf();
    return new ZoomVideoSdkUser(user);
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
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioStatisticsInfo();
  }
  async getAudioRecvFrequency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvFrequency();
  }
  async getAudioRecvJitter() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvJitter();
  }
  async getAudioRecvLatency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvLatency();
  }
  async getAudioRecvPacketLossAvg() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvPacketLossAvg();
  }
  async getAudioRecvPacketLossMax() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioRecvPacketLossMax();
  }
  async getAudioSendFrequency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendFrequency();
  }
  async getAudioSendJitter() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendJitter();
  }
  async getAudioSendLatency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendLatency();
  }
  async getAudioSendPacketLossAvg() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendPacketLossAvg();
  }
  async getAudioSendPacketLossMax() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.audioSendPacketLossMax();
  }
  async getVideoStatisticsInfo() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoStatisticsInfo();
  }
  async getVideoRecvFps() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvFps();
  }
  async getVideoRecvFrameHeight() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvFrameHeight();
  }
  async getVideoRecvFrameWidth() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvFrameWidth();
  }
  async getVideoRecvJitter() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvJitter();
  }
  async getVideoRecvLatency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvLatency();
  }
  async getVideoRecvPacketLossAvg() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvPacketLossAvg();
  }
  async getVideoRecvPacketLossMax() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoRecvPacketLossMax();
  }
  async getVideoSendFps() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendFps();
  }
  async getVideoSendFrameHeight() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendFrameHeight();
  }
  async getVideoSendFrameWidth() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendFrameWidth();
  }
  async getVideoSendJitter() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendJitter();
  }
  async getVideoSendLatency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendLatency();
  }
  async getVideoSendPacketLossAvg() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendPacketLossAvg();
  }
  async getVideoSendPacketLossMax() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.videoSendPacketLossMax();
  }
  async getShareStatisticsInfo() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareStatisticsInfo();
  }
  async getShareRecvFps() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvFps();
  }
  async getShareRecvFrameHeight() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvFrameHeight();
  }
  async getShareRecvFrameWidth() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvFrameWidth();
  }
  async getShareRecvJitter() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvJitter();
  }
  async getShareRecvLatency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvLatency();
  }
  async getShareRecvPacketLossAvg() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvPacketLossAvg();
  }
  async getShareRecvPacketLossMax() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareRecvPacketLossMax();
  }
  async getShareSendFps() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendFps();
  }
  async getShareSendFrameHeight() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendFrameHeight();
  }
  async getShareSendFrameWidth() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendFrameWidth();
  }
  async getShareSendJitter() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendJitter();
  }
  async getShareSendLatency() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendLatency();
  }
  async getShareSendPacketLossAvg() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendPacketLossAvg();
  }
  async getShareSendPacketLossMax() {
    const info = new ZoomVideoSdkSessionStatisticsInfo();
    return info.shareSendPacketLossMax();
  }
}
//# sourceMappingURL=ZoomVideoSdkSession.js.map