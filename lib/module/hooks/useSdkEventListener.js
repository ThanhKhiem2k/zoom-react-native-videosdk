import { useCallback } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';
export let EventType = /*#__PURE__*/function (EventType) {
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
const eventEmitter = new NativeEventEmitter(NativeModules.RNZoomVideoSdk);
export function useSdkEventListener() {
  const addListener = useCallback((event, handler) => {
    return eventEmitter.addListener(event, handler);
  }, []);
  return {
    addListener
  };
}
//# sourceMappingURL=useSdkEventListener.js.map