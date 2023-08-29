"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSdkHandler = useSdkHandler;
var _react = require("react");
var _ZoomVideoSdk = require("../native/ZoomVideoSdk");
var _ZoomVideoSdkSession = require("../native/ZoomVideoSdkSession");
var _ZoomVideoSdkUserHelper = require("../native/ZoomVideoSdkUserHelper");
var _ZoomVideoSdkChatHelper = require("../native/ZoomVideoSdkChatHelper");
var _ZoomVideoSdkShareHelper = require("../native/ZoomVideoSdkShareHelper");
var _ZoomVideoSdkLiveStreamHelper = require("../native/ZoomVideoSdkLiveStreamHelper");
var _ZoomVideoSdkAudioHelper = require("../native/ZoomVideoSdkAudioHelper");
var _ZoomVideoSdkVideoHelper = require("../native/ZoomVideoSdkVideoHelper");
var _useSdkEventListener = require("./useSdkEventListener");
var _ZoomVideoSdkCmdChannel = require("../native/ZoomVideoSdkCmdChannel");
var _ZoomVideoSdkRecordingHelper = require("../native/ZoomVideoSdkRecordingHelper");
var _ZoomVideoSdkPhoneHelper = require("../native/ZoomVideoSdkPhoneHelper");
var _ZoomVideoSdkAudioSettingHelper = require("../native/ZoomVideoSdkAudioSettingHelper");
var _ZoomVideoSdkTestAudioDeviceHelper = require("../native/ZoomVideoSdkTestAudioDeviceHelper");
var _ZoomVideoSdkLiveTranscriptionHelper = require("../native/ZoomVideoSdkLiveTranscriptionHelper");
var _ZoomVideoSdkRemoteCameraControlHelper = require("../native/ZoomVideoSdkRemoteCameraControlHelper");
var _ZoomVideoSdkVirtualBackgroundHelper = require("../native/ZoomVideoSdkVirtualBackgroundHelper");
var _ZoomVideoSdkCRCHelper = require("../native/ZoomVideoSdkCRCHelper");
const DEFAULT_CONFIG = {
  domain: 'zoom.us',
  enableLog: true
};
function useSdkHandler() {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const sdkHandler = (0, _react.useRef)(new _ZoomVideoSdk.ZoomVideoSdk());
  const sdkSessionHandler = (0, _react.useRef)(new _ZoomVideoSdkSession.ZoomVideoSdkSession());
  const sdkUserHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkUserHelper.ZoomVideoSdkUserHelper());
  const sdkChatHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkChatHelper.ZoomVideoSdkChatHelper());
  const sdkShareHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkShareHelper.ZoomVideoSdkShareHelper());
  const sdkLiveStreamHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkLiveStreamHelper.ZoomVideoSdkLiveStreamHelper());
  const sdkAudioHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkAudioHelper.ZoomVideoSdkAudioHelper());
  const sdkAudioSettingHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkAudioSettingHelper.ZoomVideoSdkAudioSettingHelper());
  const sdkVideoHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkVideoHelper.ZoomVideoSdkVideoHelper());
  const sdkCmdChannelHandler = (0, _react.useRef)(new _ZoomVideoSdkCmdChannel.ZoomVideoSdkCmdChannel());
  const sdkRecordingHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkRecordingHelper.ZoomVideoSdkRecordingHelper());
  const sdkPhoneHelperHandler = (0, _react.useRef)(new _ZoomVideoSdkPhoneHelper.ZoomVideoSdkPhoneHelper());
  const sdkTestAudioDeviceHelper = (0, _react.useRef)(new _ZoomVideoSdkTestAudioDeviceHelper.ZoomVideoSdkTestAudioDeviceHelper());
  const sdkLiveTranscriptionHelper = (0, _react.useRef)(new _ZoomVideoSdkLiveTranscriptionHelper.ZoomVideoSdkLiveTranscriptionHelper());
  const sdkRemoteCameraControlHelper = (0, _react.useRef)(new _ZoomVideoSdkRemoteCameraControlHelper.ZoomVideoSdkRemoteCameraControlHelper());
  const sdkVirtualBackgroundHelper = (0, _react.useRef)(new _ZoomVideoSdkVirtualBackgroundHelper.ZoomVideoSdkVirtualBackgroundHelper());
  const sdkCRCHelper = (0, _react.useRef)(new _ZoomVideoSdkCRCHelper.ZoomVideoSdkCRCHelper());
  const [isInited, setIsInited] = (0, _react.useState)(false);
  const {
    addListener
  } = (0, _useSdkEventListener.useSdkEventListener)();
  (0, _react.useEffect)(() => {
    if (!isInited) {
      sdkHandler.current.initSdk({
        ...DEFAULT_CONFIG,
        ...config
      });
      setIsInited(true);
    }
  }, [config, isInited]);
  const joinSession = (0, _react.useCallback)(joinConfig => {
    return sdkHandler.current.joinSession(joinConfig);
  }, []);
  const leaveSession = (0, _react.useCallback)(function () {
    let endSession = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    sdkHandler.current.leaveSession(endSession);
  }, []);
  const getSdkVersion = (0, _react.useCallback)(() => {
    return sdkHandler.current.getSdkVersion();
  }, []);
  const isInSession = (0, _react.useCallback)(() => {
    return sdkHandler.current.isInSession();
  }, []);
  const cleanup = (0, _react.useCallback)(() => {
    return sdkHandler.current.cleanup();
  }, []);
  const acceptRecordingConsent = (0, _react.useCallback)(() => {
    return sdkHandler.current.acceptRecordingConsent();
  }, []);
  const declineRecordingConsent = (0, _react.useCallback)(() => {
    return sdkHandler.current.declineRecordingConsent();
  }, []);
  const getRecordingConsentType = (0, _react.useCallback)(() => {
    return sdkHandler.current.getRecordingConsentType();
  }, []);
  return {
    session: sdkSessionHandler.current,
    userHelper: sdkUserHelperHandler.current,
    chatHelper: sdkChatHelperHandler.current,
    shareHelper: sdkShareHelperHandler.current,
    liveStreamHelper: sdkLiveStreamHelperHandler.current,
    audioHelper: sdkAudioHelperHandler.current,
    audioSettingHelper: sdkAudioSettingHelperHandler.current,
    videoHelper: sdkVideoHelperHandler.current,
    cmdChannel: sdkCmdChannelHandler.current,
    recordingHelper: sdkRecordingHelperHandler.current,
    phoneHelper: sdkPhoneHelperHandler.current,
    testAudioDeviceHelper: sdkTestAudioDeviceHelper.current,
    liveTranscriptionHelper: sdkLiveTranscriptionHelper.current,
    remoteCameraControlHelper: sdkRemoteCameraControlHelper.current,
    virtualBackgroundHelper: sdkVirtualBackgroundHelper.current,
    CRCHelper: sdkCRCHelper.current,
    addListener,
    joinSession,
    leaveSession,
    getSdkVersion,
    isInSession,
    cleanup,
    acceptRecordingConsent,
    declineRecordingConsent,
    getRecordingConsentType
  };
}
//# sourceMappingURL=useSdkHandler.js.map