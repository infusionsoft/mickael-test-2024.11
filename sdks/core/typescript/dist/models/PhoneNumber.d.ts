export declare class PhoneNumber {
    'extension'?: string;
    'field'?: PhoneNumberFieldEnum;
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
export declare enum PhoneNumberFieldEnum {
    PhoneNumberFieldUnspecified = "PHONE_NUMBER_FIELD_UNSPECIFIED",
    Phone1 = "PHONE1",
    Phone2 = "PHONE2",
    Phone3 = "PHONE3",
    Phone4 = "PHONE4",
    Phone5 = "PHONE5"
}
