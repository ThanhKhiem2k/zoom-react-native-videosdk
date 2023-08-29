import type { AudioType } from './ZoomVideoSdk';
export declare type ZoomVideoSdkAudioStatusType = {
    isMuted: () => Promise<boolean>;
    isTalking: () => Promise<boolean>;
    getAudioType: () => Promise<AudioType>;
};
export declare class ZoomVideoSdkAudioStatus implements ZoomVideoSdkAudioStatusType {
    userId: string;
    constructor(userId: string);
    isMuted(): Promise<any>;
    isTalking(): Promise<any>;
    getAudioType(): Promise<any>;
}
