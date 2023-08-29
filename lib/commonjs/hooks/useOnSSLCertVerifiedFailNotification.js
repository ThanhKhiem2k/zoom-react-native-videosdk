"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnSSLCertVerifiedFailNotification = useOnSSLCertVerifiedFailNotification;
var _useSdkEventListener = require("./useSdkEventListener");
var _useZoom = require("./useZoom");
var _react = require("react");
function useOnSSLCertVerifiedFailNotification(callback) {
  const zoom = (0, _useZoom.useZoom)();
  (0, _react.useEffect)(() => {
    const listener = zoom.addListener(_useSdkEventListener.EventType.onSSLCertVerifiedFailNotification, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnSSLCertVerifiedFailNotification.js.map