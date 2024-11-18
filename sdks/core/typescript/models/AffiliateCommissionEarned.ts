/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.736468-hf-202411121210
 * 
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
