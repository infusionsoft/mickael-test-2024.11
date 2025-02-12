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

export class CreatePaymentRequest {
    'applyToCommissions': boolean;
    'notes'?: string;
    'paymentAmount': number;
    'paymentMethodId'?: string;
    'paymentMethodType'?: string;
    'paymentTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "applyToCommissions",
            "baseName": "apply_to_commissions",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentAmount",
            "baseName": "payment_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "paymentMethodId",
            "baseName": "payment_method_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethodType",
            "baseName": "payment_method_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentTime",
            "baseName": "payment_time",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreatePaymentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
