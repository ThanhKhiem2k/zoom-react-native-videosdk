import React from 'react';
import type { InitConfig } from './native/ZoomVideoSdk';
interface Props {
    config?: InitConfig;
    children?: React.ReactNode;
}
export declare const ZoomVideoSdkProvider: React.FC<Props>;
export {};
