export declare class Address {
    'country'?: string;
    'countryCode'?: string;
    'field'?: AddressFieldEnum;
    'line1'?: string;
    'line2'?: string;
    'locality'?: string;
    'postalCode'?: string;
    'region'?: string;
    'regionCode'?: string;
    'zipCode'?: string;
    'zipFour'?: string;
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
export declare enum AddressFieldEnum {
    AddressFieldUnspecified = "ADDRESS_FIELD_UNSPECIFIED",
    Billing = "BILLING",
    Shipping = "SHIPPING",
    Other = "OTHER"
}
