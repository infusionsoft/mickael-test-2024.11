export declare class FaxNumber {
    'field'?: FaxNumberFieldEnum;
    'number'?: string;
    'type'?: string;
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
export declare enum FaxNumberFieldEnum {
    FaxNumberFieldUnspecified = "FAX_NUMBER_FIELD_UNSPECIFIED",
    Fax1 = "FAX1",
    Fax2 = "FAX2"
}
