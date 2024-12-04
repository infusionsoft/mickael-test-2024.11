export declare class Criteria {
    'code'?: string;
    'criteriaId'?: string;
    'endRangeDate'?: string;
    'startRangeDate'?: string;
    'type'?: CriteriaTypeEnum;
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
export declare enum CriteriaTypeEnum {
    DateRange = "date range",
    PromoCode = "promo code"
}
