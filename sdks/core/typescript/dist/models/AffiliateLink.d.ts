export declare class AffiliateLink {
    'affiliateId'?: string;
    'dateCreated'?: string;
    'id'?: string;
    'localUrlCode'?: string;
    'name'?: string;
    'programIds'?: Array<string>;
    'redirectUrl'?: string;
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
