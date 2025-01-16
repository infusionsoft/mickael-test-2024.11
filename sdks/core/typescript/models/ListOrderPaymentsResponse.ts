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

import { InvoiceOrderPayment } from '../models/InvoiceOrderPayment';
import { HttpFile } from '../http/http';

export class ListOrderPaymentsResponse {
    'invoiceOrderPayments'?: Array<InvoiceOrderPayment>;
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "invoiceOrderPayments",
            "baseName": "invoice_order_payments",
            "type": "Array<InvoiceOrderPayment>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListOrderPaymentsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
