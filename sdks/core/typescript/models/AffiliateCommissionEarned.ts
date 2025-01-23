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

export class AffiliateCommissionEarned {
    'affiliateCommissionTotal'?: number;
    'viewLedgerUrl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affiliateCommissionTotal",
            "baseName": "affiliate_commission_total",
            "type": "number",
            "format": "double"
        },
        {
            "name": "viewLedgerUrl",
            "baseName": "view_ledger_url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCommissionEarned.attributeTypeMap;
    }

    public constructor() {
    }
}
