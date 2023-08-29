function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkVideoStatisticInfo
} = NativeModules;
export class ZoomVideoSdkVideoStatisticInfo {
  constructor(userId) {
    _defineProperty(this, "userId", void 0);
    this.userId = userId;
  }
  async getBpf() {
    return await RNZoomVideoSdkVideoStatisticInfo.getBpf(this.userId);
  }
  async getFps() {
    return await RNZoomVideoSdkVideoStatisticInfo.getFps(this.userId);
  }
  async getHeight() {
    return await RNZoomVideoSdkVideoStatisticInfo.getHeight(this.userId);
  }
  async getWidth() {
    return await RNZoomVideoSdkVideoStatisticInfo.getWidth(this.userId);
  }
}
//# sourceMappingURL=ZoomVideoSdkVideoStatisticInfo.js.map