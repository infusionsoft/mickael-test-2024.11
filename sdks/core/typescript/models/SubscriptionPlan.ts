/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CurrencyValue } from '../models/CurrencyValue';
import { HttpFile } from '../http/http';

export class SubscriptionPlan {
    /**
    * If the subscription plan should be active/available for purchase
    */
    'active'?: boolean;
    /**
    * How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY
    */
    'billingCycle'?: string;
    /**
    * How many times per billing cycle to bill
    */
    'billingFrequency'?: number;
    /**
    * The subscription plan id
    */
    'id'?: string;
    /**
    * How many billing cycles to bill. Optional field i.e. can be no value or 0.
    */
    'numberOfCycles'?: number;
    /**
    * Determines the order in which the plan will be displayed
    */
    'orderIndex'?: number;
    'planPrice'?: CurrencyValue;
    /**
    * If the subscription plan should allow prorating
    */
    'prorate'?: boolean;

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
            "name": "billingCycle",
            "baseName": "billing_cycle",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingFrequency",
            "baseName": "billing_frequency",
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
            "name": "numberOfCycles",
            "baseName": "number_of_cycles",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "orderIndex",
            "baseName": "order_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "planPrice",
            "baseName": "plan_price",
            "type": "CurrencyValue",
            "format": ""
        },
        {
            "name": "prorate",
            "baseName": "prorate",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPlan.attributeTypeMap;
    }

    public constructor() {
    }
}
