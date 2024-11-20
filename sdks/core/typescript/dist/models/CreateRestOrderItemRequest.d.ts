export declare class CreateRestOrderItemRequest {
    'description'?: string;
    'price'?: number;
    'productId': string;
    'productType'?: CreateRestOrderItemRequestProductTypeEnum;
    'quantity': number;
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
export declare enum CreateRestOrderItemRequestProductTypeEnum {
    Product = "PRODUCT",
    Digital = "DIGITAL"
}
