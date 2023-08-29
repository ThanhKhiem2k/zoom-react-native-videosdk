"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkVirtualBackgroundHelper = void 0;
var _reactNative = require("react-native");
var _ZoomVideoSdkVirtualBackgroundItem = require("./ZoomVideoSdkVirtualBackgroundItem");
const {
  RNZoomVideoSdkVirtualBackgroundHelper
} = _reactNative.NativeModules;
class ZoomVideoSdkVirtualBackgroundHelper {
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
    return items.map(item => new _ZoomVideoSdkVirtualBackgroundItem.ZoomVideoSdkVirtualBackgroundItem(item));
  }
  async setVirtualBackgroundItem(imageName) {
    return await RNZoomVideoSdkVirtualBackgroundHelper.setVirtualBackgroundItem(imageName);
  }
}
exports.ZoomVideoSdkVirtualBackgroundHelper = ZoomVideoSdkVirtualBackgroundHelper;
//# sourceMappingURL=ZoomVideoSdkVirtualBackgroundHelper.js.map