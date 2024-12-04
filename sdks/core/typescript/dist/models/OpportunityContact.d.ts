export declare class OpportunityContact {
    'companyName'?: string;
    'email'?: string;
    'firstName'?: string;
    'id': string;
    'jobTitle'?: string;
    'lastName'?: string;
    'phoneNumber'?: string;
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
