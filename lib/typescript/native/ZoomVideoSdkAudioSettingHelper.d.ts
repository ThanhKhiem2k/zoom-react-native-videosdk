import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkAudioSettingHelperType = {
    isMicOriginalInputEnable: () => Promise<boolean>;
    enableMicOriginalInput: (enable: boolean) => Promise<Errors>;
};
export declare class ZoomVideoSdkAudioSettingHelper implements ZoomVideoSdkAudioSettingHelperType {
    isMicOriginalInputEnable(): Promise<any>;
    enableMicOriginalInput(enable: boolean): Promise<any>;
}
