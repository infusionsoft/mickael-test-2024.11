import { DefaultCommission } from '../models/DefaultCommission';
import { ProductCommission } from '../models/ProductCommission';
import { SubscriptionCommission } from '../models/SubscriptionCommission';
export declare class AffiliateProgramV2 {
    'affiliateId'?: string;
    'createTime'?: Date;
    'defaultCommission'?: DefaultCommission;
    'id'?: string;
    'name'?: string;
    'notes'?: string;
    'priority'?: string;
    'productCommissions'?: Array<ProductCommission>;
    'subscriptionCommissions'?: Array<SubscriptionCommission>;
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
