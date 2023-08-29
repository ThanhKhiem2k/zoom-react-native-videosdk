"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomVideoSdkProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _useSdkHandler = require("./hooks/useSdkHandler");
var _Context = require("./Context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ZoomVideoSdkProvider = _ref => {
  let {
    config,
    children
  } = _ref;
  const zoom = (0, _useSdkHandler.useSdkHandler)(config);
  return /*#__PURE__*/_react.default.createElement(_Context.Context.Provider, {
    value: zoom
  }, children);
};
exports.ZoomVideoSdkProvider = ZoomVideoSdkProvider;
//# sourceMappingURL=ZoomVideoSdkProvider.js.map