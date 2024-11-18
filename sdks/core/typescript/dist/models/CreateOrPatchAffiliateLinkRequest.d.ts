export declare class CreateOrPatchAffiliateLinkRequest {
    'affiliateId'?: string;
    'code'?: string;
    'name'?: string;
    'programIds'?: Array<string>;
    'websiteAddress'?: string;
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
