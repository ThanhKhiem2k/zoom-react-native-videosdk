import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkTestAudioDeviceHelperType = {
    startMicTest: () => Promise<Errors>;
    stopMicTest: () => Promise<Errors>;
    playMicTest: () => Promise<Errors>;
    startSpeakerTest: () => Promise<Errors>;
    stopSpeakerTest: () => Promise<Errors>;
};
export declare class ZoomVideoSdkTestAudioDeviceHelper implements ZoomVideoSdkTestAudioDeviceHelperType {
    startMicTest(): Promise<any>;
    playMicTest(): Promise<any>;
    startSpeakerTest(): Promise<any>;
    stopMicTest(): Promise<any>;
    stopSpeakerTest(): Promise<any>;
}
