/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PaymentResult {
    'id'?: string;
    'invoiceId'?: string;
    'paymentAmount'?: number;
    'paymentStatusMessage'?: string;
    'transactionId'?: string;

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
            "name": "invoiceId",
            "baseName": "invoice_id",
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
            "name": "paymentStatusMessage",
            "baseName": "payment_status_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionId",
            "baseName": "transaction_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentResult.attributeTypeMap;
    }

    public constructor() {
    }
}
