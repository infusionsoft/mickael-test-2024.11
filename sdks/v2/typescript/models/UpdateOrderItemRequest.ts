/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class UpdateOrderItemRequest {
    /**
    * Determine if the order item has an impact on inventory.
    */
    'chargeInventory'?: boolean;
    'costPerUnit'?: number;
    'description'?: string;
    'name'?: string;
    'note'?: string;
    'pricePerUnit'?: number;
    'quantity'?: number;
    'type'?: UpdateOrderItemRequestTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chargeInventory",
            "baseName": "charge_inventory",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "costPerUnit",
            "baseName": "cost_per_unit",
            "type": "number",
            "format": "double"
        },
        {
            "name": "description",
            "baseName": "description",
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
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "pricePerUnit",
            "baseName": "price_per_unit",
            "type": "number",
            "format": "double"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UpdateOrderItemRequestTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateOrderItemRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum UpdateOrderItemRequestTypeEnum {
    Unknown = 'UNKNOWN',
    Shipping = 'SHIPPING',
    Tax = 'TAX',
    Service = 'SERVICE',
    Product = 'PRODUCT',
    Upsell = 'UPSELL',
    FinanceCharge = 'FINANCE_CHARGE',
    Special = 'SPECIAL',
    Program = 'PROGRAM',
    Subscription = 'SUBSCRIPTION',
    SpecialFreeTrialDays = 'SPECIAL_FREE_TRIAL_DAYS',
    SpecialOrderTotal = 'SPECIAL_ORDER_TOTAL',
    SpecialProduct = 'SPECIAL_PRODUCT',
    SpecialCategory = 'SPECIAL_CATEGORY',
    SpecialShipping = 'SPECIAL_SHIPPING',
    Tip = 'TIP',
    Other = 'OTHER'
}

