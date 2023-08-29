import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkAudioHelperType = {
    startAudio: () => Promise<Errors>;
    stopAudio: () => Promise<Errors>;
    muteAudio: (userId: string) => Promise<Errors>;
    unmuteAudio: (userId: string) => Promise<Errors>;
    subscribe: () => Promise<Errors>;
    unsubscribe: () => Promise<Errors>;
    setSpeaker: (isOn: boolean) => Promise<number>;
    getSpeakerStatus: () => Promise<boolean>;
    canSwitchSpeaker: () => Promise<boolean>;
    resetAudioSession: () => Promise<boolean>;
    cleanAudioSession: () => void;
};
export declare class ZoomVideoSdkAudioHelper implements ZoomVideoSdkAudioHelperType {
    startAudio(): Promise<any>;
    stopAudio(): Promise<any>;
    muteAudio(userId: string): Promise<any>;
    unmuteAudio(userId: string): Promise<any>;
    subscribe(): Promise<any>;
    unsubscribe(): Promise<any>;
    setSpeaker(isOn: boolean): Promise<any>;
    getSpeakerStatus(): Promise<any>;
    canSwitchSpeaker(): Promise<any>;
    resetAudioSession(): Promise<any>;
    cleanAudioSession(): Promise<any>;
}
