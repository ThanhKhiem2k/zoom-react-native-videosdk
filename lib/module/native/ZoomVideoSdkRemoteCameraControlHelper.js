import { NativeModules } from 'react-native';
const {
  RNZoomVideoSdkRemoteCameraControlHelper
} = NativeModules;
export class ZoomVideoSdkRemoteCameraControlHelper {
  async requestControlRemoteCamera() {
    return await RNZoomVideoSdkRemoteCameraControlHelper.requestControlRemoteCamera();
  }
  async giveUpControlRemoteCamera() {
    return await RNZoomVideoSdkRemoteCameraControlHelper.giveUpControlRemoteCamera();
  }
  async turnLeft(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnLeft(range);
  }
  async turnRight(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnRight(range);
  }
  async turnDown(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnDown(range);
  }
  async turnUp(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.turnUp(range);
  }
  async zoomIn(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.zoomIn(range);
  }
  async zoomOut(range) {
    return await RNZoomVideoSdkRemoteCameraControlHelper.zoomOut(range);
  }
}
//# sourceMappingURL=ZoomVideoSdkRemoteCameraControlHelper.js.map