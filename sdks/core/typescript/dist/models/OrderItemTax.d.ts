export declare class OrderItemTax {
    'amount'?: number;
    'id'?: number;
    'name'?: string;
    'orderItemId'?: number;
    'rate'?: number;
    'taxTemplateId'?: number;
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
