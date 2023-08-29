import { useEffect } from 'react';
import { useZoom } from './useZoom';
import { EventType } from './useSdkEventListener';
export function useOnLiveStreamStatusChanged(callback) {
  const zoom = useZoom();
  useEffect(() => {
    const listener = zoom.addListener(EventType.onLiveStreamStatusChanged, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnLiveStreamStatusChanged.js.map