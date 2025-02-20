/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BusinessProfileAddressResponse } from '../models/BusinessProfileAddressResponse';
import { HttpFile } from '../http/http';

/**
* Profile information about the business that owns/uses this account
*/
export class GetBusinessProfileResponse {
    'address'?: BusinessProfileAddressResponse;
    /**
    * The goals of this business, ie. Grow Business, Convert more leads
    */
    'businessGoals'?: Array<string>;
    'businessPrimaryColor'?: string;
    'businessSecondaryColor'?: string;
    /**
    * The type of business
    */
    'businessType'?: string;
    /**
    * ISO 4217 Currency Code
    */
    'currencyCode'?: string;
    'email'?: string;
    'languageTag'?: string;
    'logoUrl'?: string;
    'name'?: string;
    'phone'?: string;
    'timeZone'?: string;
    'website'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "BusinessProfileAddressResponse",
            "format": ""
        },
        {
            "name": "businessGoals",
            "baseName": "business_goals",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "businessPrimaryColor",
            "baseName": "business_primary_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessSecondaryColor",
            "baseName": "business_secondary_color",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyCode",
            "baseName": "currency_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "languageTag",
            "baseName": "language_tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "logoUrl",
            "baseName": "logo_url",
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
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetBusinessProfileResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
