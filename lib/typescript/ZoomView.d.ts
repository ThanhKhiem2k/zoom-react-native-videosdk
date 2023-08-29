import { ViewProps } from 'react-native';
import type { VideoAspect } from './native/ZoomVideoSdk';
declare type ZoomViewProps = {
    userId: string | null;
    sharing?: boolean;
    preview?: boolean;
    fullScreen?: boolean;
    videoAspect?: VideoAspect;
    hasMultiCamera?: boolean;
    multiCameraIndex?: string | null;
} & ViewProps;
export declare const ZoomView: (props: ZoomViewProps) => JSX.Element | null;
export {};
