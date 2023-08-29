"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnUserRecordingConsent = useOnUserRecordingConsent;
var _react = require("react");
var _useZoom = require("./useZoom");
var _useSdkEventListener = require("./useSdkEventListener");
function useOnUserRecordingConsent(callback) {
  const zoom = (0, _useZoom.useZoom)();
  (0, _react.useEffect)(() => {
    const listener = zoom.addListener(_useSdkEventListener.EventType.onUserRecordingConsent, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnUserRecordingConsent.js.map