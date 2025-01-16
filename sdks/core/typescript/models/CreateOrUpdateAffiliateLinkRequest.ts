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

import { HttpFile } from '../http/http';

export class CreateOrUpdateAffiliateLinkRequest {
    /**
    * The AffiliateId
    */
    'affiliateId'?: string;
    /**
    * Code
    */
    'code'?: string;
    /**
    * The Affiliate Link Name
    */
    'name'?: string;
    'programIds'?: Array<string>;
    /**
    * Website Address
    */
    'websiteAddress'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "programIds",
            "baseName": "program_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "websiteAddress",
            "baseName": "website_address",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateOrUpdateAffiliateLinkRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
