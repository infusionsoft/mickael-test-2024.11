import { Criteria } from '../models/Criteria';
export declare class CategoryDiscount {
    'applyToCommissions'?: number;
    'categoryId'?: string;
    'criteria'?: Array<Criteria>;
    'description'?: string;
    'discountPercent'?: number;
    'name'?: string;
    'productCategories'?: Array<string>;
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
