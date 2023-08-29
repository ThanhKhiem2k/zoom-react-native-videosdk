import type { RecordingStatus } from './ZoomVideoSdk';
import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkRecordingHelperType = {
    canStartRecording: () => Promise<Errors>;
    startCloudRecording: () => Promise<Errors>;
    stopCloudRecording: () => Promise<Errors>;
    pauseCloudRecording: () => Promise<Errors>;
    resumeCloudRecording: () => Promise<Errors>;
    getCloudRecordingStatus: () => Promise<RecordingStatus>;
};
export declare class ZoomVideoSdkRecordingHelper implements ZoomVideoSdkRecordingHelperType {
    canStartRecording(): Promise<any>;
    startCloudRecording(): Promise<any>;
    stopCloudRecording(): Promise<any>;
    pauseCloudRecording(): Promise<any>;
    resumeCloudRecording(): Promise<any>;
    getCloudRecordingStatus(): Promise<any>;
}
