/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class RestSubscriptionV2 {
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
    'paymentMethodId'?: string;
    'productId'?: string;
    'quantity'?: number;
    'saleAffiliateId'?: string;
    'startDate'?: string;
    'subscriptionPlanId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowTax",
            "baseName": "allow_tax",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "autoCharge",
            "baseName": "auto_charge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "billingAmount",
            "baseName": "billing_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "billingCycle",
            "baseName": "billing_cycle",
            "type": "RestSubscriptionV2BillingCycleEnum",
            "format": ""
        },
        {
            "name": "billingFrequency",
            "baseName": "billing_frequency",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextBillDate",
            "baseName": "next_bill_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentGatewayId",
            "baseName": "payment_gateway_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "saleAffiliateId",
            "baseName": "sale_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionPlanId",
            "baseName": "subscription_plan_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestSubscriptionV2.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RestSubscriptionV2BillingCycleEnum {
    Year = 'YEAR',
    Month = 'MONTH',
    Week = 'WEEK',
    Day = 'DAY'
}

