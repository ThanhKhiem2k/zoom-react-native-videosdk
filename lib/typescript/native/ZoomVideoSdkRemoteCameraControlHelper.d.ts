import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkRemoteCameraControlHelperType = {
    requestControlRemoteCamera: () => Promise<Errors>;
    giveUpControlRemoteCamera: () => Promise<Errors>;
    turnLeft: (range: number) => Promise<Errors>;
    turnRight: (range: number) => Promise<Errors>;
    turnDown: (range: number) => Promise<Errors>;
    turnUp: (range: number) => Promise<Errors>;
    zoomIn: (range: number) => Promise<Errors>;
    zoomOut: (range: number) => Promise<Errors>;
};
export declare class ZoomVideoSdkRemoteCameraControlHelper implements ZoomVideoSdkRemoteCameraControlHelperType {
    requestControlRemoteCamera(): Promise<any>;
    giveUpControlRemoteCamera(): Promise<any>;
    turnLeft(range: number): Promise<any>;
    turnRight(range: number): Promise<any>;
    turnDown(range: number): Promise<any>;
    turnUp(range: number): Promise<any>;
    zoomIn(range: number): Promise<any>;
    zoomOut(range: number): Promise<any>;
}
