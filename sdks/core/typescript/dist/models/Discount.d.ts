export declare class Discount {
    'amount': number;
    'discountMethod': DiscountDiscountMethodEnum;
    'lineItemId'?: string;
    'specialItemId': string;
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
export declare enum DiscountDiscountMethodEnum {
    Amount = "AMOUNT",
    Percent = "PERCENT"
}
