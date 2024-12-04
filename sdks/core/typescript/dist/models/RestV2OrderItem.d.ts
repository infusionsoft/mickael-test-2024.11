import { Discount } from '../models/Discount';
import { OrderItemTax } from '../models/OrderItemTax';
import { RestProduct } from '../models/RestProduct';
import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
import { RestV2Subscription } from '../models/RestV2Subscription';
export declare class RestV2OrderItem {
    'billingCycle'?: number;
    'cost'?: number;
    'cycle'?: RestV2OrderItemCycleEnum;
    'description'?: string;
    'discount'?: number;
    'frequency'?: number;
    'id'?: string;
    'name'?: string;
    'notes'?: string;
    'numberOfPayments'?: number;
    'orderItemTaxes'?: Array<OrderItemTax>;
    'price'?: number;
    'product'?: RestProduct;
    'quantity'?: number;
    'special'?: Discount;
    'subscription'?: RestV2Subscription;
    'subscriptionBased'?: boolean;
    'subscriptionId'?: string;
    'subscriptionPlan'?: RestSubscriptionPlan;
    'type'?: RestV2OrderItemTypeEnum;
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
export declare enum RestV2OrderItemCycleEnum {
    Year = "YEAR",
    Month = "MONTH",
    Week = "WEEK",
    DayOfYear = "DAY_OF_YEAR"
}
export declare enum RestV2OrderItemTypeEnum {
    Unknown = "UNKNOWN",
    Shipping = "SHIPPING",
    Tax = "TAX",
    Service = "SERVICE",
    Product = "PRODUCT",
    Upsell = "UPSELL",
    Financecharge = "FINANCECHARGE",
    Special = "SPECIAL",
    Program = "PROGRAM",
    Subscription = "SUBSCRIPTION",
    SpecialFreeTrailDays = "SPECIAL_FREE_TRAIL_DAYS",
    SpecialOrderTotal = "SPECIAL_ORDER_TOTAL",
    SpecialProduct = "SPECIAL_PRODUCT",
    SpecialCategory = "SPECIAL_CATEGORY",
    SpecialShipping = "SPECIAL_SHIPPING",
    Tip = "TIP",
    Other = "OTHER"
}
