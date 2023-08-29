export declare type ZoomVideoSdkUserHelperType = {
    changeName: (name: string, userId: string) => Promise<boolean>;
    makeHost: (userId: string) => Promise<boolean>;
    makeManager: (userId: string) => Promise<boolean>;
    revokeManager: (userId: string) => Promise<boolean>;
    removeUser: (userId: string) => Promise<boolean>;
};
export declare class ZoomVideoSdkUserHelper implements ZoomVideoSdkUserHelperType {
    changeName(name: string, userId: string): Promise<any>;
    makeHost(userId: string): Promise<any>;
    makeManager(userId: string): Promise<any>;
    revokeManager(userId: string): Promise<any>;
    removeUser(userId: string): Promise<any>;
}
