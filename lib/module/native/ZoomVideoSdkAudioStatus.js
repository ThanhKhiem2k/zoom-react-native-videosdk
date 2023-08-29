function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkAudioStatus
} = NativeModules;
export class ZoomVideoSdkAudioStatus {
  constructor(userId) {
    _defineProperty(this, "userId", void 0);
    this.userId = userId;
  }
  async isMuted() {
    return await RNZoomVideoSdkAudioStatus.isMuted(this.userId);
  }
  async isTalking() {
    return await RNZoomVideoSdkAudioStatus.isTalking(this.userId);
  }
  async getAudioType() {
    return await RNZoomVideoSdkAudioStatus.getAudioType(this.userId);
  }
}
//# sourceMappingURL=ZoomVideoSdkAudioStatus.js.map