import type { Errors } from '../native/ZoomVideoSdk';
export declare type ZoomVideoSdkCmdChannelType = {
    sendCommand: (receiverId: string, strCmd: string) => Promise<Errors>;
};
export declare class ZoomVideoSdkCmdChannel {
    sendCommand(receiverId: string, strCmd: string): Promise<any>;
}
