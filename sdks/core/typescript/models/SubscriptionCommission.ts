/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SubscriptionCommission {
    'dollarAmount'?: number;
    'name'?: string;
    'percentage'?: number;
    'planPrice'?: number;
    'subscriptionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dollarAmount",
            "baseName": "dollar_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "double"
        },
        {
            "name": "planPrice",
            "baseName": "plan_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionCommission.attributeTypeMap;
    }

    public constructor() {
    }
}
