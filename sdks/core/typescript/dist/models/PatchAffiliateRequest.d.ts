export declare class PatchAffiliateRequest {
    'code': string;
    'contactId'?: string;
    'name'?: string;
    'status': PatchAffiliateRequestStatusEnum;
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
export declare enum PatchAffiliateRequestStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
