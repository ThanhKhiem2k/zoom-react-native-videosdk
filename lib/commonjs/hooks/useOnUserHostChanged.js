"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOnUserHostChanged = useOnUserHostChanged;
var _react = require("react");
var _useZoom = require("./useZoom");
var _useSdkEventListener = require("./useSdkEventListener");
function useOnUserHostChanged(callback) {
  const zoom = (0, _useZoom.useZoom)();
  (0, _react.useEffect)(() => {
    const listener = zoom.addListener(_useSdkEventListener.EventType.onUserHostChanged, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnUserHostChanged.js.map