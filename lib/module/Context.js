import { createContext } from 'react';
import { ZoomVideoSdkSession } from './native/ZoomVideoSdkSession';
import { ZoomVideoSdkUserHelper } from './native/ZoomVideoSdkUserHelper';
import { ZoomVideoSdkChatHelper } from './native/ZoomVideoSdkChatHelper';
import { ZoomVideoSdkShareHelper } from './native/ZoomVideoSdkShareHelper';
import { ZoomVideoSdkLiveStreamHelper } from './native/ZoomVideoSdkLiveStreamHelper';
import { ZoomVideoSdkAudioHelper } from './native/ZoomVideoSdkAudioHelper';
import { ZoomVideoSdkVideoHelper } from './native/ZoomVideoSdkVideoHelper';
import { ZoomVideoSdkCmdChannel } from './native/ZoomVideoSdkCmdChannel';
import { ZoomVideoSdkRecordingHelper } from './native/ZoomVideoSdkRecordingHelper';
import { ZoomVideoSdkAudioSettingHelper } from './native/ZoomVideoSdkAudioSettingHelper';
import { ZoomVideoSdkPhoneHelper } from './native/ZoomVideoSdkPhoneHelper';
import { ZoomVideoSdkTestAudioDeviceHelper } from './native/ZoomVideoSdkTestAudioDeviceHelper';
import { ZoomVideoSdkLiveTranscriptionHelper } from './native/ZoomVideoSdkLiveTranscriptionHelper';
import { ZoomVideoSdkRemoteCameraControlHelper } from "./native/ZoomVideoSdkRemoteCameraControlHelper";
import { ZoomVideoSdkVirtualBackgroundHelper } from "./native/ZoomVideoSdkVirtualBackgroundHelper";
import { ZoomVideoSdkCRCHelper } from "./native/ZoomVideoSdkCRCHelper";
function throwProviderError() {
  throw new Error('Cannot access the Zoom Video SDK without a ZoomVideoSdkProvider component wrapping your entire application.');
}
export const Context = /*#__PURE__*/createContext({
  addListener: throwProviderError,
  joinSession: throwProviderError,
  leaveSession: throwProviderError,
  getSdkVersion: throwProviderError,
  isInSession: throwProviderError,
  cleanup: throwProviderError,
  acceptRecordingConsent: throwProviderError,
  declineRecordingConsent: throwProviderError,
  getRecordingConsentType: throwProviderError,
  session: new ZoomVideoSdkSession(),
  userHelper: new ZoomVideoSdkUserHelper(),
  chatHelper: new ZoomVideoSdkChatHelper(),
  shareHelper: new ZoomVideoSdkShareHelper(),
  liveStreamHelper: new ZoomVideoSdkLiveStreamHelper(),
  audioHelper: new ZoomVideoSdkAudioHelper(),
  audioSettingHelper: new ZoomVideoSdkAudioSettingHelper(),
  videoHelper: new ZoomVideoSdkVideoHelper(),
  cmdChannel: new ZoomVideoSdkCmdChannel(),
  recordingHelper: new ZoomVideoSdkRecordingHelper(),
  phoneHelper: new ZoomVideoSdkPhoneHelper(),
  testAudioDeviceHelper: new ZoomVideoSdkTestAudioDeviceHelper(),
  liveTranscriptionHelper: new ZoomVideoSdkLiveTranscriptionHelper(),
  remoteCameraControlHelper: new ZoomVideoSdkRemoteCameraControlHelper(),
  virtualBackgroundHelper: new ZoomVideoSdkVirtualBackgroundHelper(),
  CRCHelper: new ZoomVideoSdkCRCHelper()
});
//# sourceMappingURL=Context.js.map