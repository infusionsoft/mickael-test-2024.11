/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CurrencyValue } from '../models/CurrencyValue';
import { HttpFile } from '../http/http';

export class SubscriptionPlanInterest {
    /**
    * The percent to discount the product. Percent represented in a whole number, for example 10 is 10%
    */
    'discountPercent'?: number;
    /**
    * The product ID
    */
    'id'?: string;
    'price'?: CurrencyValue;
    /**
    * The quantity of product.
    */
    'quantity'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "discountPercent",
            "baseName": "discount_percent",
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
            "name": "price",
            "baseName": "price",
            "type": "CurrencyValue",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPlanInterest.attributeTypeMap;
    }

    public constructor() {
    }
}
