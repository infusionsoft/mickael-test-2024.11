/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CreateSubscriptionV2 {
    /**
    * If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false.
    */
    'allowDuplicate'?: boolean;
    /**
    * Only works if the product the product subscription is for is taxable. Default is false.
    */
    'allowTax'?: boolean;
    /**
    * Defaults to true.
    */
    'autoCharge'?: boolean;
    /**
    * Must be 0 or greater. Default is the price in the product subscription.
    */
    'billingAmount'?: number;
    'contactId': string;
    /**
    * The first day the subscription will bill, in EST. Must not be in the past. Default is today.
    */
    'firstBillDate'?: string;
    /**
    * Default is the contact\'s most recently used card, if auto charge is true. Default is 0 otherwise.
    */
    'paymentMethodId'?: string;
    /**
    * Must be greater than 0. Default is 1.
    */
    'quantity'?: number;
    'saleAffiliateId'?: string;
    /**
    * Id of the product subscription.
    */
    'subscriptionPlanId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowDuplicate",
            "baseName": "allow_duplicate",
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
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstBillDate",
            "baseName": "first_bill_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
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
            "name": "subscriptionPlanId",
            "baseName": "subscription_plan_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateSubscriptionV2.attributeTypeMap;
    }

    public constructor() {
    }
}
