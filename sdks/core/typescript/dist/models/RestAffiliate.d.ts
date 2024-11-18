export declare class RestAffiliate {
    'code'?: string;
    'contactId'?: string;
    'id'?: string;
    'name'?: string;
    'status'?: string;
    'uniqueSiteId'?: string;
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
