export declare class ApplicationCompany {
    'callerIdNumber'?: string;
    'city'?: string;
    'country'?: string;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
    'phoneExt'?: string;
    'state'?: string;
    'streetAddress1'?: string;
    'streetAddress2'?: string;
    'webLogoUrl'?: string;
    'website'?: string;
    'zip'?: string;
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
