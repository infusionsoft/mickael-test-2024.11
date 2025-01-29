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

export class RestSubscriptionPlan {
    'active'?: boolean;
    /**
    * The interval at which the customer is charged for the subscription.
    */
    'cycle'?: RestSubscriptionPlanCycleEnum;
    /**
    * Interval at which a customer receives a product or service as part of a subscription plan.
    */
    'frequency'?: number;
    'id'?: string;
    'numberOfCycles'?: number;
    'planPrice'?: number;
    /**
    * Subscription plan identifier.
    */
    'subscriptionPlanIndex'?: number;
    'subscriptionPlanName'?: string;

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
            "name": "cycle",
            "baseName": "cycle",
            "type": "RestSubscriptionPlanCycleEnum",
            "format": ""
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
            "name": "numberOfCycles",
            "baseName": "number_of_cycles",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "planPrice",
            "baseName": "plan_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "subscriptionPlanIndex",
            "baseName": "subscription_plan_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "subscriptionPlanName",
            "baseName": "subscription_plan_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestSubscriptionPlan.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum RestSubscriptionPlanCycleEnum {
    Daily = 'DAILY',
    Weekly = 'WEEKLY',
    Monthly = 'MONTHLY',
    Yearly = 'YEARLY'
}

