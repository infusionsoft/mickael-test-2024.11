export declare class RestSubscriptionV2 {
    'active'?: boolean;
    'allowTax'?: boolean;
    'autoCharge'?: boolean;
    'billingAmount'?: number;
    'billingCycle'?: RestSubscriptionV2BillingCycleEnum;
    'billingFrequency'?: number;
    'contactId'?: string;
    'endDate'?: string;
    'id'?: string;
    'nextBillDate'?: string;
    'paymentGatewayId'?: string;
    'paymentMethodId'?: number;
    'productId'?: string;
    'quantity'?: number;
    'saleAffiliateId'?: string;
    'startDate'?: string;
    'subscriptionPlanId'?: string;
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
export declare enum RestSubscriptionV2BillingCycleEnum {
    Year = "YEAR",
    Month = "MONTH",
    Week = "WEEK",
    Day = "DAY"
}
