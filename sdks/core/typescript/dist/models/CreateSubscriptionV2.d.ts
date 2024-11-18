export declare class CreateSubscriptionV2 {
    'allowDuplicate'?: boolean;
    'allowTax'?: boolean;
    'autoCharge'?: boolean;
    'billingAmount'?: number;
    'contactId': string;
    'firstBillDate'?: string;
    'paymentMethodId'?: string;
    'quantity'?: number;
    'saleAffiliateId'?: string;
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
