import { useEffect } from 'react';
import { useZoom } from './useZoom';
import { EventType } from './useSdkEventListener';
export function useOnInviteByPhoneStatus(callback) {
  const zoom = useZoom();
  useEffect(() => {
    const listener = zoom.addListener(EventType.onInviteByPhoneStatus, callback);
    return () => listener.remove();
  }, [zoom, callback]);
}
//# sourceMappingURL=useOnInviteByPhoneStatus.js.map