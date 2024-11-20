export declare class RestEmailAddress {
    'email': string;
    'optedIn': boolean;
    'status': RestEmailAddressStatusEnum;
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
export declare enum RestEmailAddressStatusEnum {
    UnengagedMarketable = "Unengaged Marketable",
    Unconfirmed = "Unconfirmed",
    ConfirmedLegacy = "Confirmed (Legacy)",
    Confirmed = "Confirmed",
    UnengagedNonMarketable = "Unengaged NonMarketable",
    NonMarketable = "Non-marketable",
    Lockdown = "Lockdown",
    SoftBounce = "Soft Bounce",
    HardBounce = "Hard Bounce",
    OptOut = "Opt-Out",
    OptOutAdmin = "Opt-Out: Admin",
    OptOutSystem = "Opt-Out: System",
    ListUnsubscribe = "List Unsubscribe",
    ProvidedFeedback = "Provided Feedback",
    ReportedSpam = "Reported Spam",
    InvalidEmail = "Invalid Email",
    DeactivatedDelinquentMailbox = "Deactivated/Delinquent Mailbox"
}
