"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;
var _react = require("react");
var _ZoomVideoSdkSession = require("./native/ZoomVideoSdkSession");
var _ZoomVideoSdkUserHelper = require("./native/ZoomVideoSdkUserHelper");
var _ZoomVideoSdkChatHelper = require("./native/ZoomVideoSdkChatHelper");
var _ZoomVideoSdkShareHelper = require("./native/ZoomVideoSdkShareHelper");
var _ZoomVideoSdkLiveStreamHelper = require("./native/ZoomVideoSdkLiveStreamHelper");
var _ZoomVideoSdkAudioHelper = require("./native/ZoomVideoSdkAudioHelper");
var _ZoomVideoSdkVideoHelper = require("./native/ZoomVideoSdkVideoHelper");
var _ZoomVideoSdkCmdChannel = require("./native/ZoomVideoSdkCmdChannel");
var _ZoomVideoSdkRecordingHelper = require("./native/ZoomVideoSdkRecordingHelper");
var _ZoomVideoSdkAudioSettingHelper = require("./native/ZoomVideoSdkAudioSettingHelper");
var _ZoomVideoSdkPhoneHelper = require("./native/ZoomVideoSdkPhoneHelper");
var _ZoomVideoSdkTestAudioDeviceHelper = require("./native/ZoomVideoSdkTestAudioDeviceHelper");
var _ZoomVideoSdkLiveTranscriptionHelper = require("./native/ZoomVideoSdkLiveTranscriptionHelper");
var _ZoomVideoSdkRemoteCameraControlHelper = require("./native/ZoomVideoSdkRemoteCameraControlHelper");
var _ZoomVideoSdkVirtualBackgroundHelper = require("./native/ZoomVideoSdkVirtualBackgroundHelper");
var _ZoomVideoSdkCRCHelper = require("./native/ZoomVideoSdkCRCHelper");
function throwProviderError() {
  throw new Error('Cannot access the Zoom Video SDK without a ZoomVideoSdkProvider component wrapping your entire application.');
}
const Context = /*#__PURE__*/(0, _react.createContext)({
  addListener: throwProviderError,
  joinSession: throwProviderError,
  leaveSession: throwProviderError,
  getSdkVersion: throwProviderError,
  isInSession: throwProviderError,
  cleanup: throwProviderError,
  acceptRecordingConsent: throwProviderError,
  declineRecordingConsent: throwProviderError,
  getRecordingConsentType: throwProviderError,
  session: new _ZoomVideoSdkSession.ZoomVideoSdkSession(),
  userHelper: new _ZoomVideoSdkUserHelper.ZoomVideoSdkUserHelper(),
  chatHelper: new _ZoomVideoSdkChatHelper.ZoomVideoSdkChatHelper(),
  shareHelper: new _ZoomVideoSdkShareHelper.ZoomVideoSdkShareHelper(),
  liveStreamHelper: new _ZoomVideoSdkLiveStreamHelper.ZoomVideoSdkLiveStreamHelper(),
  audioHelper: new _ZoomVideoSdkAudioHelper.ZoomVideoSdkAudioHelper(),
  audioSettingHelper: new _ZoomVideoSdkAudioSettingHelper.ZoomVideoSdkAudioSettingHelper(),
  videoHelper: new _ZoomVideoSdkVideoHelper.ZoomVideoSdkVideoHelper(),
  cmdChannel: new _ZoomVideoSdkCmdChannel.ZoomVideoSdkCmdChannel(),
  recordingHelper: new _ZoomVideoSdkRecordingHelper.ZoomVideoSdkRecordingHelper(),
  phoneHelper: new _ZoomVideoSdkPhoneHelper.ZoomVideoSdkPhoneHelper(),
  testAudioDeviceHelper: new _ZoomVideoSdkTestAudioDeviceHelper.ZoomVideoSdkTestAudioDeviceHelper(),
  liveTranscriptionHelper: new _ZoomVideoSdkLiveTranscriptionHelper.ZoomVideoSdkLiveTranscriptionHelper(),
  remoteCameraControlHelper: new _ZoomVideoSdkRemoteCameraControlHelper.ZoomVideoSdkRemoteCameraControlHelper(),
  virtualBackgroundHelper: new _ZoomVideoSdkVirtualBackgroundHelper.ZoomVideoSdkVirtualBackgroundHelper(),
  CRCHelper: new _ZoomVideoSdkCRCHelper.ZoomVideoSdkCRCHelper()
});
exports.Context = Context;
//# sourceMappingURL=Context.js.map