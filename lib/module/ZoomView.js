import React from 'react';
import { requireNativeComponent } from 'react-native';
const NativeZoomView = requireNativeComponent('RNZoomView');
export const ZoomView = props => {
  if (!props.userId) return null;
  return /*#__PURE__*/React.createElement(NativeZoomView, props);
};
//# sourceMappingURL=ZoomView.js.map