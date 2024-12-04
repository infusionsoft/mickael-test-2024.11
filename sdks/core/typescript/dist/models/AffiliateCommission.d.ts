export declare class AffiliateCommission {
    'affOwedId'?: number;
    'amountEarned'?: number;
    'contactFirstName'?: string;
    'contactId'?: number;
    'contactLastName'?: string;
    'dateEarned'?: Date;
    'description'?: string;
    'invoiceId'?: number;
    'productName'?: string;
    'salesAffiliateId'?: number;
    'soldByFirstName'?: string;
    'soldByLastName'?: string;
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
