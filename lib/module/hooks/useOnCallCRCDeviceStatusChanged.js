import { useEffect } from 'react';
import { useZoom } from './useZoom';
import { EventType } from './useSdkEventListener';
export function useOnCallCRCDeviceStatusChanged(callback) {
  const zoom = useZoom();
  useEffect(() => {
    const listener = zoom.addListener(EventType.onCallCRCDeviceStatusChanged, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnCallCRCDeviceStatusChanged.js.map