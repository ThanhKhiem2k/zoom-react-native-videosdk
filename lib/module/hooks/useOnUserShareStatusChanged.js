import { useEffect } from 'react';
import { useZoom } from './useZoom';
import { EventType } from './useSdkEventListener';
export function useOnUserShareStatusChanged(callback) {
  const zoom = useZoom();
  useEffect(() => {
    const listener = zoom.addListener(EventType.onUserShareStatusChanged, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnUserShareStatusChanged.js.map