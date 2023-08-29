import type { Errors } from '../native/ZoomVideoSdk';
export declare enum VideoPreferenceMode {
    Balance = "ZoomVideoSDKVideoPreferenceMode_Balance",
    Sharpness = "ZoomVideoSDKVideoPreferenceMode_Sharpness",
    Smoothness = "ZoomVideoSDKVideoPreferenceMode_Smoothness",
    Custom = "ZoomVideoSDKVideoPreferenceMode_Custom"
}
export declare type VideoPreferenceSetting = {
    mode?: VideoPreferenceMode;
    maximumFrameRate?: number;
    minimumFrameRate?: number;
};
export declare type ZoomVideoSdkCameraDeviceType = {
    deviceId: string;
    deviceName: string;
};
export declare type ZoomVideoSdkVideoHelperType = {
    startVideo: () => Promise<Errors>;
    stopVideo: () => Promise<Errors>;
    switchCamera: (deviceId?: string) => Promise<boolean>;
    rotateMyVideo: (rotation: number) => Promise<boolean>;
    getCameraList: () => Promise<ZoomVideoSdkCameraDeviceType[]>;
    getNumberOfCameras: () => Promise<number>;
    setVideoQualityPreference: (setting: VideoPreferenceSetting) => Promise<Errors>;
    isOriginalAspectRatioEnabled: () => Promise<boolean>;
    enableOriginalAspectRatio: (enable: boolean) => Promise<boolean>;
    isMirrorMyVideoEnabled: () => Promise<boolean>;
    mirrorMyVideo: (enable: boolean) => Promise<Errors>;
};
export declare class ZoomVideoSdkVideoHelper implements ZoomVideoSdkVideoHelperType {
    startVideo(): Promise<any>;
    stopVideo(): Promise<any>;
    switchCamera(deviceId?: string): Promise<any>;
    rotateMyVideo(rotation: number): Promise<any>;
    getCameraList(): Promise<ZoomVideoSdkCameraDeviceType[]>;
    getNumberOfCameras(): Promise<any>;
    setVideoQualityPreference(setting: VideoPreferenceSetting): Promise<any>;
    isOriginalAspectRatioEnabled(): Promise<any>;
    enableOriginalAspectRatio(enable: boolean): Promise<any>;
    isMirrorMyVideoEnabled(): Promise<any>;
    mirrorMyVideo(enable: boolean): Promise<any>;
}
