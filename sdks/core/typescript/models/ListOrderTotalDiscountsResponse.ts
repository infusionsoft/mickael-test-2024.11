/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OrderTotalDiscount } from '../models/OrderTotalDiscount';
import { HttpFile } from '../http/http';

export class ListOrderTotalDiscountsResponse {
    'nextPageToken'?: string;
    'orderTotalDiscounts'?: Array<OrderTotalDiscount>;

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
            "name": "orderTotalDiscounts",
            "baseName": "order_total_discounts",
            "type": "Array<OrderTotalDiscount>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListOrderTotalDiscountsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
