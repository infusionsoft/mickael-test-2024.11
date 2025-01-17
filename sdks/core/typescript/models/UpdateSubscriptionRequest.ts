/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Address } from '../models/Address';
import { HttpFile } from '../http/http';

export class UpdateSubscriptionRequest {
    'active'?: boolean;
    'allowTax'?: boolean;
    'autoCharge'?: boolean;
    'billingAmount'?: number;
    'billingCycle'?: UpdateSubscriptionRequestBillingCycleEnum;
    'billingFrequency'?: number;
    'contactId'?: string;
    'daysBetweenRetries'?: number;
    'endBillDate'?: string;
    'leadAffiliateId'?: string;
    'maxChargeAttempts'?: number;
    'nextBillDate'?: string;
    'paymentMethodId'?: string;
    'previousBillDate'?: string;
    'productId'?: string;
    'quantity'?: number;
    'saleAffiliateId'?: string;
    'shippingAddress'?: Address;
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
            "type": "UpdateSubscriptionRequestBillingCycleEnum",
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
            "name": "daysBetweenRetries",
            "baseName": "days_between_retries",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "endBillDate",
            "baseName": "end_bill_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "leadAffiliateId",
            "baseName": "lead_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "maxChargeAttempts",
            "baseName": "max_charge_attempts",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "nextBillDate",
            "baseName": "next_bill_date",
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
            "name": "previousBillDate",
            "baseName": "previous_bill_date",
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
            "format": "int32"
        },
        {
            "name": "saleAffiliateId",
            "baseName": "sale_affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "Address",
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
        return UpdateSubscriptionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateSubscriptionRequestBillingCycleEnum {
    Year = 'YEAR',
    Month = 'MONTH',
    Week = 'WEEK',
    Day = 'DAY'
}

