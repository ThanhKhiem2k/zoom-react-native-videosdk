import React from 'react';
import { useSdkHandler } from './hooks/useSdkHandler';
import { Context } from './Context';
export const ZoomVideoSdkProvider = _ref => {
  let {
    config,
    children
  } = _ref;
  const zoom = useSdkHandler(config);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: zoom
  }, children);
};
//# sourceMappingURL=ZoomVideoSdkProvider.js.map