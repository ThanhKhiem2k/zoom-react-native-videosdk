"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkCRCProtocolType = exports.ZoomVideoSdk = exports.ZoomVideoSDKVirtualBackgroundDataType = exports.ZoomVideoSDKDialInNumberType = exports.VideoResolution = exports.VideoAspect = exports.SystemPermissionType = exports.ShareStatus = exports.RecordingStatus = exports.RawDataMemoryMode = exports.PhoneStatus = exports.PhoneFailedReason = exports.NetworkStatus = exports.MultiCameraStreamStatus = exports.LiveTranscriptionStatus = exports.LiveTranscriptionOperationType = exports.LiveStreamStatus = exports.Errors = exports.ConsentType = exports.ChatMessageDeleteType = exports.AudioType = void 0;
var _reactNative = require("react-native");
var _validation = require("../utils/validation");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const {
  RNZoomVideoSdk
} = _reactNative.NativeModules;
let RawDataMemoryMode = /*#__PURE__*/function (RawDataMemoryMode) {
  RawDataMemoryMode["Stack"] = "ZoomVideoSDKRawDataMemoryModeStack";
  RawDataMemoryMode["Heap"] = "ZoomVideoSDKRawDataMemoryModeHeap";
  return RawDataMemoryMode;
}({});
exports.RawDataMemoryMode = RawDataMemoryMode;
let ShareStatus = /*#__PURE__*/function (ShareStatus) {
  ShareStatus["None"] = "ZoomVideoSDKShareStatus_None";
  ShareStatus["Stop"] = "ZoomVideoSDKShareStatus_Stop";
  ShareStatus["Pause"] = "ZoomVideoSDKShareStatus_Pause";
  ShareStatus["Start"] = "ZoomVideoSDKShareStatus_Start";
  ShareStatus["Resume"] = "ZoomVideoSDKShareStatus_Resume";
  return ShareStatus;
}({});
exports.ShareStatus = ShareStatus;
let LiveStreamStatus = /*#__PURE__*/function (LiveStreamStatus) {
  LiveStreamStatus["None"] = "ZoomVideoSDKLiveStreamStatus_None";
  LiveStreamStatus["InProgress"] = "ZoomVideoSDKLiveStreamStatus_InProgress";
  LiveStreamStatus["Connecting"] = "ZoomVideoSDKLiveStreamStatus_Connecting";
  LiveStreamStatus["FailedTimeout"] = "ZoomVideoSDKLiveStreamStatus_FailedTimeout";
  LiveStreamStatus["StartFailed"] = "ZoomVideoSDKLiveStreamStatus_StartFailed";
  LiveStreamStatus["Ended"] = "ZoomVideoSDKLiveStreamStatus_Ended";
  return LiveStreamStatus;
}({});
exports.LiveStreamStatus = LiveStreamStatus;
let RecordingStatus = /*#__PURE__*/function (RecordingStatus) {
  RecordingStatus["None"] = "ZoomVideoSDKRecordingStatus_None";
  RecordingStatus["Start"] = "ZoomVideoSDKRecordingStatus_Start";
  RecordingStatus["Stop"] = "ZoomVideoSDKRecordingStatus_Stop";
  RecordingStatus["DiskFull"] = "ZoomVideoSDKRecordingStatus_DiskFull";
  RecordingStatus["Pause"] = "ZoomVideoSDKRecordingStatus_Pause";
  return RecordingStatus;
}({});
exports.RecordingStatus = RecordingStatus;
let NetworkStatus = /*#__PURE__*/function (NetworkStatus) {
  NetworkStatus["None"] = "ZoomVideoSDKNetwork_None";
  NetworkStatus["Good"] = "ZoomVideoSDKNetwork_Good";
  NetworkStatus["Normal"] = "ZoomVideoSDKNetwork_Normal";
  NetworkStatus["Bad"] = "ZoomVideoSDKNetwork_Bad";
  return NetworkStatus;
}({});
exports.NetworkStatus = NetworkStatus;
let AudioType = /*#__PURE__*/function (AudioType) {
  AudioType["None"] = "ZoomVideoSDKAudioType_None";
  AudioType["VOIP"] = "ZoomVideoSDKAudioType_VOIP";
  AudioType["Telephony"] = "ZoomVideoSDKAudioType_Telephony";
  AudioType["Unknown"] = "ZoomVideoSDKAudioType_Unknow";
  return AudioType;
}({});
exports.AudioType = AudioType;
let VideoAspect = /*#__PURE__*/function (VideoAspect) {
  VideoAspect["Original"] = "ZoomVideoSDKVideoAspect_Original";
  VideoAspect["FullFilled"] = "ZoomVideoSDKVideoAspect_Full_Filled";
  VideoAspect["LetterBox"] = "ZoomVideoSDKVideoAspect_LetterBox";
  VideoAspect["PanAndScan"] = "ZoomVideoSDKVideoAspect_PanAndScan";
  return VideoAspect;
}({});
exports.VideoAspect = VideoAspect;
let VideoResolution = /*#__PURE__*/function (VideoResolution) {
  VideoResolution["Resolution90"] = "ZoomVideoSDKVideoResolution_90";
  VideoResolution["Resolution180"] = "ZoomVideoSDKVideoResolution_180";
  VideoResolution["Resolution360"] = "ZoomVideoSDKVideoResolution_360";
  VideoResolution["Resolution720"] = "ZoomVideoSDKVideoResolution_720";
  VideoResolution["Resolution1080"] = "ZoomVideoSDKVideoResoluton_1080";
  return VideoResolution;
}({});
exports.VideoResolution = VideoResolution;
let PhoneStatus = /*#__PURE__*/function (PhoneStatus) {
  PhoneStatus["None"] = "ZoomVideoSDKPhoneStatus_None";
  PhoneStatus["Calling"] = "ZoomVideoSDKPhoneStatus_Calling";
  PhoneStatus["Ringing"] = "ZoomVideoSDKPhoneStatus_Ringing";
  PhoneStatus["Accepted"] = "ZoomVideoSDKPhoneStatus_Accepted";
  PhoneStatus["Success"] = "ZoomVideoSDKPhoneStatus_Success";
  PhoneStatus["Failed"] = "ZoomVideoSDKPhoneStatus_Failed";
  PhoneStatus["Canceling"] = "ZoomVideoSDKPhoneStatus_Canceling";
  PhoneStatus["Canceled"] = "ZoomVideoSDKPhoneStatus_Canceled";
  PhoneStatus["CancelFailed"] = "ZoomVideoSDKPhoneStatus_Cancel_Failed";
  PhoneStatus["Timeout"] = "ZoomVideoSDKPhoneStatus_Timeout";
  return PhoneStatus;
}({});
exports.PhoneStatus = PhoneStatus;
let PhoneFailedReason = /*#__PURE__*/function (PhoneFailedReason) {
  PhoneFailedReason["None"] = "ZoomVideoSDKPhoneFailedReason_None";
  PhoneFailedReason["Busy"] = "ZoomVideoSDKPhoneFailedReason_Busy";
  PhoneFailedReason["NotAvailable"] = "ZoomVideoSDKPhoneFailedReason_Not_Available";
  PhoneFailedReason["UserHangup"] = "ZoomVideoSDKPhoneFailedReason_User_Hangup";
  PhoneFailedReason["OtherFail"] = "ZoomVideoSDKPhoneFailedReason_Other_Fail";
  PhoneFailedReason["NoAnswer"] = "ZoomVideoSDKPhoneFailedReason_No_Answer";
  PhoneFailedReason["BlockNoHost"] = "ZoomVideoSDKPhoneFailedReason_Block_No_Host";
  PhoneFailedReason["BlockHighRate"] = "ZoomVideoSDKPhoneFailedReason_Block_High_Rate";
  PhoneFailedReason["BlockTooFrequent"] = "ZoomVideoSDKPhoneFailedReason_Block_Too_Frequent";
  return PhoneFailedReason;
}({});
exports.PhoneFailedReason = PhoneFailedReason;
let ChatMessageDeleteType = /*#__PURE__*/function (ChatMessageDeleteType) {
  ChatMessageDeleteType["None"] = "ZoomVideoSDKChatMsgDeleteBy_NONE";
  ChatMessageDeleteType["Self"] = "ZoomVideoSDKChatMsgDeleteBy_SELF";
  ChatMessageDeleteType["Host"] = "ZoomVideoSDKChatMsgDeleteBy_HOST";
  ChatMessageDeleteType["Dlp"] = "ZoomVideoSDKChatMsgDeleteBy_DLP";
  return ChatMessageDeleteType;
}({});
exports.ChatMessageDeleteType = ChatMessageDeleteType;
let MultiCameraStreamStatus = /*#__PURE__*/function (MultiCameraStreamStatus) {
  MultiCameraStreamStatus["Joined"] = "ZoomVideoSDKMultiCameraStreamStatus_Joined";
  MultiCameraStreamStatus["Left"] = "ZoomVideoSDKMultiCameraStreamStatus_Left";
  return MultiCameraStreamStatus;
}({});
exports.MultiCameraStreamStatus = MultiCameraStreamStatus;
let LiveTranscriptionStatus = /*#__PURE__*/function (LiveTranscriptionStatus) {
  LiveTranscriptionStatus["Stop"] = "ZoomVideoSDKLiveTranscription_Status_Stop";
  LiveTranscriptionStatus["Start"] = "ZoomVideoSDKLiveTranscription_Status_Start";
  return LiveTranscriptionStatus;
}({});
exports.LiveTranscriptionStatus = LiveTranscriptionStatus;
let SystemPermissionType = /*#__PURE__*/function (SystemPermissionType) {
  SystemPermissionType["Camera"] = "ZoomVideoSDKSystemPermissionType_Camera";
  SystemPermissionType["Microphone"] = "ZoomVideoSDKSystemPermissionType_Microphone";
  return SystemPermissionType;
}({});
exports.SystemPermissionType = SystemPermissionType;
let LiveTranscriptionOperationType = /*#__PURE__*/function (LiveTranscriptionOperationType) {
  LiveTranscriptionOperationType["None"] = "ZoomVideoSDKLiveTranscription_OperationType_None";
  LiveTranscriptionOperationType["Update"] = "ZoomVideoSDKLiveTranscription_OperationType_Update";
  LiveTranscriptionOperationType["Delete"] = "ZoomVideoSDKLiveTranscription_OperationType_Delete";
  LiveTranscriptionOperationType["Complete"] = "ZoomVideoSDKLiveTranscription_OperationType_Complete";
  LiveTranscriptionOperationType["Add"] = "ZoomVideoSDKLiveTranscription_OperationType_Add";
  LiveTranscriptionOperationType["NotSupport"] = "ZoomVideoSDKLiveTranscription_OperationType_NotSupported";
  LiveTranscriptionOperationType["NoTranslation"] = "ZoomVideoSDKLiveTranscriptionOperationType_NoTranslation";
  return LiveTranscriptionOperationType;
}({});
exports.LiveTranscriptionOperationType = LiveTranscriptionOperationType;
let ZoomVideoSDKVirtualBackgroundDataType = /*#__PURE__*/function (ZoomVideoSDKVirtualBackgroundDataType) {
  ZoomVideoSDKVirtualBackgroundDataType["None"] = "ZoomVideoSDKLiveTranscription_OperationType_None";
  ZoomVideoSDKVirtualBackgroundDataType["Blur"] = "ZoomVideoSDKLiveTranscription_OperationType_Update";
  ZoomVideoSDKVirtualBackgroundDataType["Image"] = "ZoomVideoSDKLiveTranscription_OperationType_Delete";
  return ZoomVideoSDKVirtualBackgroundDataType;
}({});
exports.ZoomVideoSDKVirtualBackgroundDataType = ZoomVideoSDKVirtualBackgroundDataType;
let ZoomVideoSDKDialInNumberType = /*#__PURE__*/function (ZoomVideoSDKDialInNumberType) {
  ZoomVideoSDKDialInNumberType["None"] = "ZoomVideoSDKDialInNumType_None";
  ZoomVideoSDKDialInNumberType["Toll"] = "ZoomVideoSDKDialInNumType_Toll";
  ZoomVideoSDKDialInNumberType["TollFree"] = "ZoomVideoSDKDialInNumType_TollFree";
  return ZoomVideoSDKDialInNumberType;
}({});
exports.ZoomVideoSDKDialInNumberType = ZoomVideoSDKDialInNumberType;
let Errors = /*#__PURE__*/function (Errors) {
  Errors["Success"] = "ZoomVideoSDKError_Success";
  Errors["WrongUsage"] = "ZoomVideoSDKError_Wrong_Usage";
  Errors["InternalError"] = "ZoomVideoSDKError_Internal_Error";
  Errors["Uninitialize"] = "ZoomVideoSDKError_Uninitialize";
  Errors["MemoryError"] = "ZoomVideoSDKError_Memory_Error";
  Errors["LoadModuleError"] = "ZoomVideoSDKError_Load_Module_Error";
  Errors["UnLoadModuleError"] = "ZoomVideoSDKError_UnLoad_Module_Error";
  Errors["InvalidParameter"] = "ZoomVideoSDKError_Invalid_Parameter";
  Errors["CallTooFrequntly"] = "ZoomVideoSDKError_Call_Too_Frequently";
  Errors["NoImpl"] = "ZoomVideoSDKError_No_Impl";
  Errors["DontSupportFeature"] = "ZoomVideoSDKError_Dont_Support_Feature";
  Errors["Unknown"] = "ZoomVideoSDKError_Unknown";
  Errors["AuthBase"] = "ZoomVideoSDKError_Auth_Base";
  Errors["AuthError"] = "ZoomVideoSDKError_Auth_Error";
  Errors["AuthEmptyKeyorSecret"] = "ZoomVideoSDKError_Auth_Empty_Key_or_Secret";
  Errors["AuthWrongKeyorSecret"] = "ZoomVideoSDKError_Auth_Wrong_Key_or_Secret";
  Errors["AuthDoesNotSupportSDK"] = "ZoomVideoSDKError_Auth_DoesNot_Support_SDK";
  Errors["AuthDisableSDK"] = "ZoomVideoSDKError_Auth_Disable_SDK";
  Errors["JoinSessionNoSessioName"] = "ZoomVideoSDKError_JoinSession_NoSessionName";
  Errors["JoinSessioNoSessionToken"] = "ZoomVideoSDKError_JoinSession_NoSessionToken";
  Errors["JoinSessionNoUserName"] = "ZoomVideoSDKError_JoinSession_NoUserName";
  Errors["JoinSessionInvalidSessionName"] = "ZoomVideoSDKError_JoinSession_Invalid_SessionName";
  Errors["JoinSessionInvalidPassword"] = "ZoomVideoSDKError_JoinSession_InvalidPassword";
  Errors["JoinSessionInvalidSessionToken"] = "ZoomVideoSDKError_JoinSession_Invalid_SessionToken";
  Errors["JoinSessionSessionNameTooLong"] = "ZoomVideoSDKError_JoinSession_SessionName_TooLong";
  Errors["JoinSessionTokenMismatchedSessionName"] = "ZoomVideoSDKError_JoinSession_Token_MismatchedSessionName";
  Errors["JoinSessionTokenNoSessionName"] = "ZoomVideoSDKError_JoinSession_Token_NoSessionName";
  Errors["JoinSessionTokenRoleTypeEmptyOrWrong"] = "ZoomVideoSDKError_JoinSession_Token_RoleType_EmptyOrWrong";
  Errors["JoinSessionTokenUserIdentityTooLong"] = "ZoomVideoSDKError_JoinSession_Token_UserIdentity_TooLong";
  Errors["SessionBase"] = "ZoomVideoSDKError_Session_Base";
  Errors["SessionModuleNotFound"] = "ZoomVideoSDKError_Session_Module_Not_Found";
  Errors["SessionServiceInvaild"] = "ZoomVideoSDKError_Session_Service_Invaild";
  Errors["SessionJoinFailed"] = "ZoomVideoSDKError_Session_Join_Failed";
  Errors["SessionNoRights"] = "ZoomVideoSDKError_Session_No_Rights";
  Errors["SessionAlreadyInProgress"] = "ZoomVideoSDKError_Session_Already_In_Progress";
  Errors["SessionDontSupportSessionType"] = "ZoomVideoSDKError_Session_Dont_Support_SessionType";
  Errors["SessionReconncting"] = "ZoomVideoSDKError_Session_Reconncting";
  Errors["SessionDisconncting"] = "ZoomVideoSDKError_Session_Disconncting";
  Errors["SessionNotStarted"] = "ZoomVideoSDKError_Session_Not_Started";
  Errors["SessionNeedPassword"] = "ZoomVideoSDKError_Session_Need_Password";
  Errors["SessionPasswordWrong"] = "ZoomVideoSDKError_Session_Password_Wrong";
  Errors["SessionRemoteDBError"] = "ZoomVideoSDKError_Session_Remote_DB_Error";
  Errors["SessionInvalidParam"] = "ZoomVideoSDKError_Session_Invalid_Param";
  Errors["SessionAudioError"] = "ZoomVideoSDKError_Session_Audio_Error";
  Errors["SessionAudioNoMicrophone"] = "ZoomVideoSDKError_Session_Audio_No_Microphone";
  Errors["SessionVideoError"] = "ZoomVideoSDKError_Session_Video_Error";
  Errors["SessionVideoDeviceError"] = "ZoomVideoSDKError_Session_Video_Device_Error";
  Errors["SessionLiveStreamError"] = "ZoomVideoSDKError_Session_Live_Stream_Error";
  Errors["SessionPhoneError"] = "ZoomVideoSDKError_Session_Phone_Error";
  Errors["DontSupportMultiStreamVideoUser"] = "ZoomVideoSDKError_Dont_Support_Multi_Stream_Video_User";
  Errors["FailAssignUserPrivilege"] = "ZoomVideoSDKError_Fail_Assign_User_Privilege";
  Errors["NoRecordingInProcess"] = "ZoomVideoSDKError_No_Recording_In_Process";
  Errors["MallocFailed"] = "ZoomVideoSDKError_Malloc_Failed";
  Errors["NotInSession"] = "ZoomVideoSDKError_Not_In_Session";
  Errors["NoLicense"] = "ZoomVideoSDKError_No_License";
  Errors["VideoModuleNotReady"] = "ZoomVideoSDKError_Video_Module_Not_Ready";
  Errors["VideoModuleError"] = "ZoomVideoSDKError_Video_Module_Error";
  Errors["VideoDeviceError"] = "ZoomVideoSDKError_Video_device_error";
  Errors["NoVideoData"] = "ZoomVideoSDKError_No_Video_Data";
  Errors["ShareModuleNotReady"] = "ZoomVideoSDKError_Share_Module_Not_Ready";
  Errors["ShareModuleError"] = "ZoomVideoSDKError_Share_Module_Error";
  Errors["NoShareData"] = "ZoomVideoSDKError_No_Share_Data";
  Errors["AudioModuleNotReady"] = "ZoomVideoSDKError_Audio_Module_Not_Ready";
  Errors["AudioModuleError"] = "ZoomVideoSDKError_Audio_Module_Error";
  Errors["NoAudioData"] = "ZoomVideoSDKError_No_Audio_Data";
  Errors["PreprocessRawdataError"] = "ZoomVideoSDKError_Preprocess_Rawdata_Error";
  Errors["RawdataNoDeviceRunning"] = "ZoomVideoSDKError_Rawdata_No_Device_Running";
  Errors["RawdataInitDevice"] = "ZoomVideoSDKError_Rawdata_Init_Device";
  Errors["RawdataVirtualDevice"] = "ZoomVideoSDKError_Rawdata_Virtual_Device";
  Errors["RawdataCannotChangeVirtualDeviceInPreview"] = "ZoomVideoSDKError_Rawdata_Cannot_Change_Virtual_Device_In_Preview";
  Errors["RawdataInternalError"] = "ZoomVideoSDKError_Rawdata_Internal_Error";
  Errors["RawdataSendTooMuchDataInSingleTime"] = "ZoomVideoSDKError_Rawdata_Send_Too_Much_Data_In_Single_Time";
  Errors["RawdataSendTooFrequently"] = "ZoomVideoSDKError_Rawdata_Send_Too_Frequently";
  Errors["RawdataVirtualMicIsTerminate"] = "ZoomVideoSDKError_Rawdata_Virtual_Mic_Is_Terminate";
  Errors["SessionShareError"] = "ZoomVideoSDKError_Session_Share_Error";
  Errors["SessionShareModuleNotReady"] = "ZoomVideoSDKError_Session_Share_Module_Not_Ready";
  Errors["SessionShareYouAreNotSharing"] = "ZoomVideoSDKError_Session_Share_You_Are_Not_Sharing";
  Errors["SessionShareTypeIsNotSupport"] = "ZoomVideoSDKError_Session_Share_Type_Is_Not_Support";
  Errors["SessionShareInternalError"] = "ZoomVideoSDKError_Session_Share_Internal_Error";
  Errors["Permission_RECORD_AUDIO"] = "ZoomVideoSDKError_Permission_RECORD_AUDIO";
  Errors["Permission_READ_PHONE_STATE"] = "ZoomVideoSDKError_Permission_READ_PHONE_STATE";
  Errors["BLUETOOTH_CONNECT"] = "ZoomVideoSDKError_Permission_BLUETOOTH_CONNECT";
  Errors["Session_Client_Incompatible"] = "ZoomVideoSDKError_Session_Client_Incompatible";
  return Errors;
}({});
exports.Errors = Errors;
let ConsentType = /*#__PURE__*/function (ConsentType) {
  ConsentType["ConsentType_Invalid"] = "ConsentType_Invalid";
  ConsentType["ConsentType_Traditional"] = "ConsentType_Traditional";
  ConsentType["ConsentType_Individual"] = "ConsentType_Individual";
  return ConsentType;
}({});
exports.ConsentType = ConsentType;
let ZoomVideoSdkCRCProtocolType = /*#__PURE__*/function (ZoomVideoSdkCRCProtocolType) {
  ZoomVideoSdkCRCProtocolType["ZoomVideoSDKCRCProtocol_H323"] = "ZoomVideoSDKCRCProtocol_H323";
  ZoomVideoSdkCRCProtocolType["ZoomVideoSDKCRCProtocol_SIP"] = "ZoomVideoSDKCRCProtocol_SIP";
  return ZoomVideoSdkCRCProtocolType;
}({});
exports.ZoomVideoSdkCRCProtocolType = ZoomVideoSdkCRCProtocolType;
class ZoomVideoSdk {
  constructor() {
    // We don't need to do anything right now so we just pass through the native call.
    _defineProperty(this, "leaveSession", RNZoomVideoSdk.leaveSession);
    _defineProperty(this, "getSdkVersion", RNZoomVideoSdk.getSdkVersion);
    _defineProperty(this, "isInSession", RNZoomVideoSdk.isInSession);
    _defineProperty(this, "cleanup", RNZoomVideoSdk.cleanup);
    _defineProperty(this, "acceptRecordingConsent", RNZoomVideoSdk.acceptRecordingConsent);
    _defineProperty(this, "declineRecordingConsent", RNZoomVideoSdk.declineRecordingConsent);
    _defineProperty(this, "getRecordingConsentType", RNZoomVideoSdk.getRecordingConsentType);
  }
  initSdk(config) {
    (0, _validation.validateNonEmptyStringProp)(config, 'initConfig', 'domain');
    (0, _validation.validateBooleanProp)(config, 'initConfig', 'enableLog');
    return RNZoomVideoSdk.initSdk(config);
  }
  joinSession(config) {
    (0, _validation.validateNonEmptyStringProp)(config, 'JoinSessionConfig', 'sessionName');
    (0, _validation.validateNonEmptyStringProp)(config, 'JoinSessionConfig', 'userName');
    (0, _validation.validateNonEmptyStringProp)(config, 'JoinSessionConfig', 'token');
    return RNZoomVideoSdk.joinSession(config);
  }
}
exports.ZoomVideoSdk = ZoomVideoSdk;
//# sourceMappingURL=ZoomVideoSdk.js.map