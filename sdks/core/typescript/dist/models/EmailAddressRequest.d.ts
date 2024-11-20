export declare class EmailAddressRequest {
    'email'?: string;
    'field'?: EmailAddressRequestFieldEnum;
    'optInReason'?: string;
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
export declare enum EmailAddressRequestFieldEnum {
    EmailFieldUnspecified = "EMAIL_FIELD_UNSPECIFIED",
    Email1 = "EMAIL1",
    Email2 = "EMAIL2",
    Email3 = "EMAIL3"
}
