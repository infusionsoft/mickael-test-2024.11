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

import { BusinessProfileAddressRequest } from '../models/BusinessProfileAddressRequest';
import { HttpFile } from '../http/http';

/**
* Update profile information about the business that owns/uses this account
*/
export class UpdateBusinessProfileRequest {
    'address'?: BusinessProfileAddressRequest;
    /**
    * The goals of this business, ie. Grow Business, Convert more leads
    */
    'businessGoals'?: Array<string>;
    'businessPrimaryColor'?: string;
    'businessSecondaryColor'?: string;
    /**
    * ISO 4217 Currency Code
    */
    'currencyCode'?: string;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
    'website'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "BusinessProfileAddressRequest",
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
            "name": "website",
            "baseName": "website",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateBusinessProfileRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
