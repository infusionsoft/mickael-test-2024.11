export declare class RestProductOptionValue {
    'id'?: string;
    'index'?: number;
    'isDefault'?: boolean;
    'label'?: string;
    'priceAdjustment'?: number;
    'sku'?: string;
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
