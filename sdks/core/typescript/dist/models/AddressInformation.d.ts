export declare class AddressInformation {
    'company'?: string;
    'countryCode'?: string;
    'firstName'?: string;
    'isInvoiceToCompany'?: boolean;
    'lastName'?: string;
    'line1'?: string;
    'line2'?: string;
    'locality'?: string;
    'middleName'?: string;
    'phone'?: string;
    'region'?: string;
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
