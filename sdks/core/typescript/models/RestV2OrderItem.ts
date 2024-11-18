/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Discount } from '../models/Discount';
import { OrderItemTax } from '../models/OrderItemTax';
import { RestProduct } from '../models/RestProduct';
import { RestSubscriptionPlan } from '../models/RestSubscriptionPlan';
import { RestV2Subscription } from '../models/RestV2Subscription';
import { HttpFile } from '../http/http';

export class RestV2OrderItem {
    'billingCycle'?: number;
    'cost'?: number;
    /**
    * The interval at which the customer is charged for the subscription.
    */
    'cycle'?: RestV2OrderItemCycleEnum;
    'description'?: string;
    'discount'?: number;
    /**
    * Interval at which a customer receives a product or service as part of a subscription plan.
    */
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

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "billingCycle",
            "baseName": "billing_cycle",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": "double"
        },
        {
            "name": "cycle",
            "baseName": "cycle",
            "type": "RestV2OrderItemCycleEnum",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberOfPayments",
            "baseName": "number_of_payments",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "orderItemTaxes",
            "baseName": "order_item_taxes",
            "type": "Array<OrderItemTax>",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "RestProduct",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "special",
            "baseName": "special",
            "type": "Discount",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "RestV2Subscription",
            "format": ""
        },
        {
            "name": "subscriptionBased",
            "baseName": "subscription_based",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionPlan",
            "baseName": "subscription_plan",
            "type": "RestSubscriptionPlan",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RestV2OrderItemTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestV2OrderItem.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RestV2OrderItemCycleEnum {
    Year = 'YEAR',
    Month = 'MONTH',
    Week = 'WEEK',
    DayOfYear = 'DAY_OF_YEAR'
}
export enum RestV2OrderItemTypeEnum {
    Unknown = 'UNKNOWN',
    Shipping = 'SHIPPING',
    Tax = 'TAX',
    Service = 'SERVICE',
    Product = 'PRODUCT',
    Upsell = 'UPSELL',
    Financecharge = 'FINANCECHARGE',
    Special = 'SPECIAL',
    Program = 'PROGRAM',
    Subscription = 'SUBSCRIPTION',
    SpecialFreeTrailDays = 'SPECIAL_FREE_TRAIL_DAYS',
    SpecialOrderTotal = 'SPECIAL_ORDER_TOTAL',
    SpecialProduct = 'SPECIAL_PRODUCT',
    SpecialCategory = 'SPECIAL_CATEGORY',
    SpecialShipping = 'SPECIAL_SHIPPING',
    Tip = 'TIP',
    Other = 'OTHER'
}

