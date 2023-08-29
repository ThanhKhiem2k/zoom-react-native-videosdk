"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomView = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NativeZoomView = (0, _reactNative.requireNativeComponent)('RNZoomView');
const ZoomView = props => {
  if (!props.userId) return null;
  return /*#__PURE__*/_react.default.createElement(NativeZoomView, props);
};
exports.ZoomView = ZoomView;
//# sourceMappingURL=ZoomView.js.map