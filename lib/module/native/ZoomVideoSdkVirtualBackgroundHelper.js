import { NativeModules } from 'react-native';
import { ZoomVideoSdkVirtualBackgroundItem } from "./ZoomVideoSdkVirtualBackgroundItem";
const {
  RNZoomVideoSdkVirtualBackgroundHelper
} = NativeModules;
export class ZoomVideoSdkVirtualBackgroundHelper {
  async isSupportVirtualBackground() {
    return await RNZoomVideoSdkVirtualBackgroundHelper.isSupportVirtualBackground();
  }
  async addVirtualBackgroundItem(filePath) {
    return await RNZoomVideoSdkVirtualBackgroundHelper.addVirtualBackgroundItem(filePath);
  }
  async removeVirtualBackgroundItem(imageName) {
    return await RNZoomVideoSdkVirtualBackgroundHelper.removeVirtualBackgroundItem(imageName);
  }
  async getVirtualBackgroundItemList() {
    const items = await RNZoomVideoSdkVirtualBackgroundHelper.getVirtualBackgroundItemList();
    return items.map(item => new ZoomVideoSdkVirtualBackgroundItem(item));
  }
  async setVirtualBackgroundItem(imageName) {
    return await RNZoomVideoSdkVirtualBackgroundHelper.setVirtualBackgroundItem(imageName);
  }
}
//# sourceMappingURL=ZoomVideoSdkVirtualBackgroundHelper.js.map