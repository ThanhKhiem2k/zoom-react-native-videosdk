import type { PhoneStatus, PhoneFailedReason } from '../native/ZoomVideoSdk';
export declare function useOnInviteByPhoneStatus(callback: (params: {
    status: PhoneStatus;
    reason: PhoneFailedReason;
}) => void): void;
