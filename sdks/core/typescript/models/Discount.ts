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

import { HttpFile } from '../http/http';

export class Discount {
    'amount': number;
    'discountMethod': DiscountDiscountMethodEnum;
    'lineItemId'?: string;
    'specialItemId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "discountMethod",
            "baseName": "discount_method",
            "type": "DiscountDiscountMethodEnum",
            "format": ""
        },
        {
            "name": "lineItemId",
            "baseName": "line_item_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "specialItemId",
            "baseName": "special_item_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Discount.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum DiscountDiscountMethodEnum {
    Amount = 'AMOUNT',
    Percent = 'PERCENT'
}

