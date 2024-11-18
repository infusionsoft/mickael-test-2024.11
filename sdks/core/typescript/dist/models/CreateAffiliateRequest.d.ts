export declare class CreateAffiliateRequest {
    'code': string;
    'contactId': string;
    'name'?: string;
    'status': CreateAffiliateRequestStatusEnum;
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
export declare enum CreateAffiliateRequestStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
