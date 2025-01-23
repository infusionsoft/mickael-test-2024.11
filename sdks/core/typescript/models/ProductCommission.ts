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

export class ProductCommission {
    'dollarAmount'?: number;
    'percentage'?: number;
    'productId'?: string;
    'productName'?: string;
    'productPrice'?: number;

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
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "double"
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "productPrice",
            "baseName": "product_price",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return ProductCommission.attributeTypeMap;
    }

    public constructor() {
    }
}
