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

export class RestProductOptionValue {
    'id'?: string;
    'index'?: number;
    'isDefault'?: boolean;
    'label'?: string;
    'priceAdjustment'?: number;
    'sku'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "priceAdjustment",
            "baseName": "price_adjustment",
            "type": "number",
            "format": "double"
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestProductOptionValue.attributeTypeMap;
    }

    public constructor() {
    }
}
