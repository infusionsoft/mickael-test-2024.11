export declare class EmailAddress {
    'email'?: string;
    'emailOptStatus'?: EmailAddressEmailOptStatusEnum;
    'field'?: EmailAddressFieldEnum;
    'isOptIn'?: boolean;
    'optInReason'?: string;
    static readonly discriminator: string | undefined;
    static readonly mapping: {
        [index: string]: string;
    } | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare enum EmailAddressEmailOptStatusEnum {
    UnengagedMarketable = "UNENGAGED_MARKETABLE",
    SingleOptIn = "SINGLE_OPT_IN",
    DoubleOptIn = "DOUBLE_OPT_IN",
    Confirmed = "CONFIRMED",
    UnengagedNonMarketable = "UNENGAGED_NON_MARKETABLE",
    NonMarketable = "NON_MARKETABLE",
    Lockdown = "LOCKDOWN",
    Bounce = "BOUNCE",
    HardBounce = "HARD_BOUNCE",
    Manual = "MANUAL",
    Admin = "ADMIN",
    System = "SYSTEM",
    ListUnsubscribe = "LIST_UNSUBSCRIBE",
    Feedback = "FEEDBACK",
    Spam = "SPAM",
    Invalid = "INVALID",
    Deactivated = "DEACTIVATED"
}
export declare enum EmailAddressFieldEnum {
    EmailFieldUnspecified = "EMAIL_FIELD_UNSPECIFIED",
    Email1 = "EMAIL1",
    Email2 = "EMAIL2",
    Email3 = "EMAIL3"
}
