var _class;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkSessionStatisticsInfo
} = NativeModules;
export class ZoomVideoSdkSessionStatisticsInfo {
  constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
  async audioStatisticsInfo() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioStatisticsInfo();
  }
  async audioRecvFrequency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioRecvFrequency();
  }
  async audioRecvJitter() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioRecvJitter();
  }
  async audioRecvLatency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioRecvLatency();
  }
  async audioRecvPacketLossAvg() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioRecvPacketLossAvg();
  }
  async audioRecvPacketLossMax() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioRecvPacketLossMax();
  }
  async audioSendFrequency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioSendFrequency();
  }
  async audioSendJitter() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioSendJitter();
  }
  async audioSendLatency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioSendLatency();
  }
  async audioSendPacketLossAvg() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioSendPacketLossAvg();
  }
  async audioSendPacketLossMax() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getAudioSendPacketLossMax();
  }
  async videoStatisticsInfo() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoStatisticsInfo();
  }
  async videoRecvFps() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoRecvFps();
  }
  async videoRecvFrameHeight() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoRecvFrameHeight();
  }
  async videoRecvFrameWidth() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoRecvFrameWidth();
  }
  async videoRecvJitter() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoRecvJitter();
  }
  async videoRecvLatency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoRecvLatency();
  }
  async videoRecvPacketLossAvg() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoRecvPacketLossAvg();
  }
  async videoRecvPacketLossMax() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoRecvPacketLossMax();
  }
  async videoSendFps() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoSendFps();
  }
  async videoSendFrameHeight() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoSendFrameHeight();
  }
  async videoSendFrameWidth() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoSendFrameWidth();
  }
  async videoSendJitter() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoSendJitter();
  }
  async videoSendLatency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoSendLatency();
  }
  async videoSendPacketLossAvg() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoSendPacketLossAvg();
  }
  async videoSendPacketLossMax() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getVideoSendPacketLossMax();
  }
  async shareStatisticsInfo() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareStatisticsInfo();
  }
  async shareRecvFps() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareRecvFps();
  }
  async shareRecvFrameHeight() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareRecvFrameHeight();
  }
  async shareRecvFrameWidth() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareRecvFrameWidth();
  }
  async shareRecvJitter() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareRecvJitter();
  }
  async shareRecvLatency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareRecvLatency();
  }
  async shareRecvPacketLossAvg() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareRecvPacketLossAvg();
  }
  async shareRecvPacketLossMax() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareRecvPacketLossMax();
  }
  async shareSendFps() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareSendFps();
  }
  async shareSendFrameHeight() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareSendFrameHeight();
  }
  async shareSendFrameWidth() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareSendFrameWidth();
  }
  async shareSendJitter() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareSendJitter();
  }
  async shareSendLatency() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareSendLatency();
  }
  async shareSendPacketLossAvg() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareSendPacketLossAvg();
  }
  async shareSendPacketLossMax() {
    return await RNZoomVideoSdkSessionStatisticsInfo.getShareSendPacketLossMax();
  }
}
_class = ZoomVideoSdkSessionStatisticsInfo;
_defineProperty(ZoomVideoSdkSessionStatisticsInfo, "instance", void 0);
//# sourceMappingURL=ZoomVideoSdkSessionStatisticsInfo.js.map