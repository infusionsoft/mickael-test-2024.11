export declare class Referral {
    'contactId'?: string;
    'description'?: string;
    'expirationTime'?: string;
    'id'?: string;
    'ipAddress'?: string;
    'referralPartnerId'?: string;
    'referralTime'?: string;
    'referralType'?: ReferralReferralTypeEnum;
    'source'?: string;
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
export declare enum ReferralReferralTypeEnum {
    Cookie = "COOKIE",
    Permanent = "PERMANENT",
    Manual = "MANUAL"
}
