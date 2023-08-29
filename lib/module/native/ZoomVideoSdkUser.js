function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { NativeModules } from 'react-native';
import { ZoomVideoSdkVideoStatus } from './ZoomVideoSdkVideoStatus';
import { ZoomVideoSdkAudioStatus } from './ZoomVideoSdkAudioStatus';
import { ZoomVideoSdkVideoStatisticInfo } from './ZoomVideoSdkVideoStatisticInfo';
import { ZoomVideoSdkShareStatisticInfo } from './ZoomVideoSdkShareStatisticInfo';
const {
  RNZoomVideoSdkUser
} = NativeModules;

/*
 * - Objective data types are for ease of use. In general, the user-related data is
 *   obtained when the target user is retrieved:
 *
 *    const mySelf: ZoomVideoSdkUserType  = await zoom.session.getMySelf();
 *    if (mySelf.isHost) {
 *      ...
 *    }
 *
 * - Some of the info that changes frequently needs to be retrieved by async calls
 *   and it needs to be made through the native methods:
 *
 *    const mySelf: ZoomVideoSdkUserType  = await zoom.session.getMySelf();
 *    const mySelfInstance: ZoomVideoSdkUser = new ZoommVideoSdkUser(mySelf);
 *    const fps = await mySelfInstance.videoStatisticInfo.getFps();
 *
 * - Async functions like getIsHost(), getIsManager(), getUserName return the current
 *   values whereas the corresponding object data isHost, isManager, userName contains
 *   the initial value when it's retrieved and never gets updated.
 *
 *    const mySelf: ZoomVideoSdkUser = new ZoommVideoSdkUser(await zoom.session.getMySelf());
 *    const isManager = await mySelf.getIsManager();
 *
 */

export class ZoomVideoSdkUser {
  constructor(user) {
    _defineProperty(this, "userId", void 0);
    _defineProperty(this, "customUserId", void 0);
    _defineProperty(this, "userName", void 0);
    _defineProperty(this, "isHost", void 0);
    _defineProperty(this, "isManager", void 0);
    _defineProperty(this, "hasMultiCamera", void 0);
    _defineProperty(this, "multiCameraIndex", void 0);
    _defineProperty(this, "videoStatus", void 0);
    _defineProperty(this, "audioStatus", void 0);
    _defineProperty(this, "videoStatisticInfo", void 0);
    _defineProperty(this, "shareStatisticInfo", void 0);
    this.userId = user.userId;
    this.customUserId = user.customUserId;
    this.userName = user.userName;
    this.isHost = user.isHost;
    this.isManager = user.isManager;
    this.hasMultiCamera = false;
    this.multiCameraIndex = '0';
    this.videoStatus = new ZoomVideoSdkVideoStatus(user.userId);
    this.audioStatus = new ZoomVideoSdkAudioStatus(user.userId);
    this.videoStatisticInfo = new ZoomVideoSdkVideoStatisticInfo(user.userId);
    this.shareStatisticInfo = new ZoomVideoSdkShareStatisticInfo(user.userId);
  }
  async getUserName() {
    return await RNZoomVideoSdkUser.getUserName(this.userId);
  }
  async getShareStatus() {
    return await RNZoomVideoSdkUser.getShareStatus(this.userId);
  }
  async getIsHost() {
    return await RNZoomVideoSdkUser.isHost(this.userId);
  }
  async getIsManager() {
    return await RNZoomVideoSdkUser.isManager(this.userId);
  }
  async getUserVolume(userId, isSharing) {
    return await RNZoomVideoSdkUser.getUserVolume(userId, isSharing);
  }
  async setUserVolume(userId, isSharing, volume) {
    return await RNZoomVideoSdkUser.setUserVolume(userId, volume, isSharing);
  }
  async canSetUserVolume(userId, isSharing) {
    return await RNZoomVideoSdkUser.canSetUserVolume(userId, isSharing);
  }
  async hasIndividualRecordingConsent(userId) {
    return await RNZoomVideoSdkUser.hasIndividualRecordingConsent(userId);
  }
}
//# sourceMappingURL=ZoomVideoSdkUser.js.map