"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventType = void 0;
exports.useSdkEventListener = useSdkEventListener;
var _react = require("react");
var _reactNative = require("react-native");
let EventType = /*#__PURE__*/function (EventType) {
  EventType["onSessionJoin"] = "onSessionJoin";
  EventType["onSessionLeave"] = "onSessionLeave";
  EventType["onUserJoin"] = "onUserJoin";
  EventType["onUserLeave"] = "onUserLeave";
  EventType["onUserVideoStatusChanged"] = "onUserVideoStatusChanged";
  EventType["onUserAudioStatusChanged"] = "onUserAudioStatusChanged";
  EventType["onUserShareStatusChanged"] = "onUserShareStatusChanged";
  EventType["onLiveStreamStatusChanged"] = "onLiveStreamStatusChanged";
  EventType["onChatNewMessageNotify"] = "onChatNewMessageNotify";
  EventType["onUserNameChanged"] = "onUserNameChanged";
  EventType["onUserHostChanged"] = "onUserHostChanged";
  EventType["onUserManagerChanged"] = "onUserManagerChanged";
  EventType["onUserActiveAudioChanged"] = "onUserActiveAudioChanged";
  EventType["onSessionNeedPassword"] = "onSessionNeedPassword";
  EventType["onSessionPasswordWrong"] = "onSessionPasswordWrong";
  EventType["onError"] = "onError";
  EventType["onCommandReceived"] = "onCommandReceived";
  EventType["onCommandChannelConnectResult"] = "onCommandChannelConnectResult";
  EventType["onCloudRecordingStatus"] = "onCloudRecordingStatus";
  EventType["onHostAskUnmute"] = "onHostAskUnmute";
  EventType["onInviteByPhoneStatus"] = "onInviteByPhoneStatus";
  EventType["onChatDeleteMessageNotify"] = "onChatDeleteMessageNotify";
  EventType["onLiveTranscriptionStatus"] = "onLiveTranscriptionStatus";
  EventType["onLiveTranscriptionMsgReceived"] = "onLiveTranscriptionMsgReceived";
  EventType["onLiveTranscriptionMsgError"] = "onLiveTranscriptionMsgError";
  EventType["onLiveTranscriptionMsgInfoReceived"] = "onLiveTranscriptionMsgInfoReceived";
  EventType["onMultiCameraStreamStatusChanged"] = "onMultiCameraStreamStatusChanged";
  EventType["onRequireSystemPermission"] = "onRequireSystemPermission";
  EventType["onProxySettingNotification"] = "onProxySettingNotification";
  EventType["onSSLCertVerifiedFailNotification"] = "onSSLCertVerifiedFailNotification";
  EventType["onUserVideoNetworkStatusChanged"] = "onUserVideoNetworkStatusChanged";
  EventType["onCameraControlRequestResult"] = "onCameraControlRequestResult";
  EventType["onUserRecordingConsent"] = "onUserRecordingConsent";
  EventType["onCallCRCDeviceStatusChanged"] = "onCallCRCDeviceStatusChanged";
  return EventType;
}({});
exports.EventType = EventType;
const eventEmitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.RNZoomVideoSdk);
function useSdkEventListener() {
  const addListener = (0, _react.useCallback)((event, handler) => {
    return eventEmitter.addListener(event, handler);
  }, []);
  return {
    addListener
  };
}
//# sourceMappingURL=useSdkEventListener.js.map