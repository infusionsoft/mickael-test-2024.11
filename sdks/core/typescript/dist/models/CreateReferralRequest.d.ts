export declare class CreateReferralRequest {
    'contactId'?: string;
    'description'?: string;
    'expirationTime'?: string;
    'ipAddress'?: string;
    'referralPartnerId'?: string;
    'referralTime'?: string;
    'referralType'?: CreateReferralRequestReferralTypeEnum;
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
export declare enum CreateReferralRequestReferralTypeEnum {
    Cookie = "COOKIE",
    Permanent = "PERMANENT",
    Manual = "MANUAL"
}
