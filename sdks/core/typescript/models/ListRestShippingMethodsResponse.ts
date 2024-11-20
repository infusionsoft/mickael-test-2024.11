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

import { ShippingMethod } from '../models/ShippingMethod';
import { HttpFile } from '../http/http';

export class ListRestShippingMethodsResponse {
    'nextPageToken'?: string;
    'shippingMethods'?: Array<ShippingMethod>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingMethods",
            "baseName": "shipping_methods",
            "type": "Array<ShippingMethod>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListRestShippingMethodsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
