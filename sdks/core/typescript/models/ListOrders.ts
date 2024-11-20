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

import { RestV2Order } from '../models/RestV2Order';
import { HttpFile } from '../http/http';

export class ListOrders {
    'nextPageToken'?: string;
    'orders'?: Array<RestV2Order>;

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
            "name": "orders",
            "baseName": "orders",
            "type": "Array<RestV2Order>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListOrders.attributeTypeMap;
    }

    public constructor() {
    }
}
