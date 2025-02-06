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

import { RestPaymentMethod } from '../models/RestPaymentMethod';
import { HttpFile } from '../http/http';

export class PaymentMethodList {
    'nextPageToken'?: string;
    'records'?: Array<RestPaymentMethod>;

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
            "name": "records",
            "baseName": "records",
            "type": "Array<RestPaymentMethod>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodList.attributeTypeMap;
    }

    public constructor() {
    }
}
