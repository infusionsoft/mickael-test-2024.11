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
