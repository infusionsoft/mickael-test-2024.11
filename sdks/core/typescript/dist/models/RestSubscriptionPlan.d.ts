export declare class RestSubscriptionPlan {
    'active'?: boolean;
    'cycle'?: string;
    'frequency'?: number;
    'id'?: string;
    'productId'?: string;
    'subscriptionPlanIndex'?: number;
    'subscriptionPlanName'?: string;
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
