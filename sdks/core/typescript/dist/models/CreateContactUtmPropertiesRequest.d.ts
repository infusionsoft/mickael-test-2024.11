export declare class CreateContactUtmPropertiesRequest {
    'keapSourceId': string;
    'utmCampaign'?: string;
    'utmContent'?: string;
    'utmMedium'?: string;
    'utmSource'?: string;
    'utmTerm'?: string;
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
