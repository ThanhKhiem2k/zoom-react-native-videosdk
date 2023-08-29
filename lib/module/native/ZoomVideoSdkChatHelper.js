function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkChatHelper
} = NativeModules;
export class ZoomVideoSdkChatHelper {
  constructor() {
    _defineProperty(this, "isChatDisabled", RNZoomVideoSdkChatHelper.isChatDisabled);
    _defineProperty(this, "isPrivateChatDisabled", RNZoomVideoSdkChatHelper.isPrivateChatDisabled);
  }
  async sendChatToUser(userId, message) {
    return await RNZoomVideoSdkChatHelper.sendChatToUser(userId, message);
  }
  async sendChatToAll(message) {
    return await RNZoomVideoSdkChatHelper.sendChatToAll(message);
  }
  async deleteChatMessage(msgId) {
    if (msgId == null) {
      return;
    }
    return await RNZoomVideoSdkChatHelper.deleteChatMessage(msgId);
  }
  async canChatMessageBeDeleted(msgId) {
    if (msgId == null) {
      return;
    }
    return await RNZoomVideoSdkChatHelper.canChatMessageBeDeleted(msgId);
  }
}
//# sourceMappingURL=ZoomVideoSdkChatHelper.js.map