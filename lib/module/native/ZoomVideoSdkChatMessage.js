function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { ZoomVideoSdkUser } from './ZoomVideoSdkUser';
export class ZoomVideoSdkChatMessage {
  constructor(chatMessage) {
    _defineProperty(this, "content", void 0);
    _defineProperty(this, "receiverUser", void 0);
    _defineProperty(this, "senderUser", void 0);
    _defineProperty(this, "timestamp", void 0);
    _defineProperty(this, "isSelfSend", void 0);
    _defineProperty(this, "isChatToAll", void 0);
    _defineProperty(this, "messageID", void 0);
    this.content = chatMessage.content;
    this.receiverUser = chatMessage.receiverUser ? new ZoomVideoSdkUser(chatMessage.receiverUser) : undefined;
    this.senderUser = new ZoomVideoSdkUser(chatMessage.senderUser);
    this.timestamp = chatMessage.timestamp;
    this.isSelfSend = chatMessage.isSelfSend;
    this.isChatToAll = chatMessage.isChatToAll;
    this.messageID = chatMessage.messageID;
  }
}
//# sourceMappingURL=ZoomVideoSdkChatMessage.js.map