/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class UpdateSubscriptionPlanRequest {
    /**
    * Whether the subscription plan is active.
    */
    'active'?: boolean;
    /**
    * Allow prorating of the subscription plan.
    */
    'allowProrating'?: boolean;
    /**
    * The cycle type of the subscription plan.
    */
    'cycleType': UpdateSubscriptionPlanRequestCycleTypeEnum;
    /**
    * The order that this plan will be displayed to the user.
    */
    'displayOrderIndex'?: number;
    /**
    * The frequency of the subscription plan.
    */
    'frequency'?: number;
    /**
    * The price of the subscription plan in the smallest currency unit.
    */
    'planPrice': number;
    /**
    * How many cycles the subscription plan will have.  0 means infinite.
    */
    'totalCycles'?: number;

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
            "name": "allowProrating",
            "baseName": "allow_prorating",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cycleType",
            "baseName": "cycle_type",
            "type": "UpdateSubscriptionPlanRequestCycleTypeEnum",
            "format": ""
        },
        {
            "name": "displayOrderIndex",
            "baseName": "display_order_index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
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
            "name": "totalCycles",
            "baseName": "total_cycles",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return UpdateSubscriptionPlanRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateSubscriptionPlanRequestCycleTypeEnum {
    Daily = 'DAILY',
    Weekly = 'WEEKLY',
    Monthly = 'MONTHLY',
    Yearly = 'YEARLY'
}

