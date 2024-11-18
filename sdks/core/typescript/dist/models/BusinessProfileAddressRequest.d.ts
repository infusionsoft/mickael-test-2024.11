export declare class BusinessProfileAddressRequest {
    'countryCode': string;
    'line1': string;
    'line2': string;
    'locality': string;
    'postalCode': string;
    'region': string;
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
