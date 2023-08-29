"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnProxySettingNotification = useOnProxySettingNotification;
var _useSdkEventListener = require("./useSdkEventListener");
var _useZoom = require("./useZoom");
var _react = require("react");
function useOnProxySettingNotification(callback) {
  const zoom = (0, _useZoom.useZoom)();
  (0, _react.useEffect)(() => {
    const listener = zoom.addListener(_useSdkEventListener.EventType.onProxySettingNotification, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnProxySettingNotification.js.map