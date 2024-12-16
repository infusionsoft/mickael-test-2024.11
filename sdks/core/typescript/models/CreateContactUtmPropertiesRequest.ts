/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CreateContactUtmPropertiesRequest {
    /**
    * The formId
    */
    'keapSourceId': string;
    /**
    * UTM campaign information
    */
    'utmCampaign'?: string;
    /**
    * UTM content information
    */
    'utmContent'?: string;
    /**
    * UTM medium information
    */
    'utmMedium'?: string;
    /**
    * UTM source information
    */
    'utmSource'?: string;
    /**
    * UTM term information
    */
    'utmTerm'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "keapSourceId",
            "baseName": "keap_source_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmCampaign",
            "baseName": "utm_campaign",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmContent",
            "baseName": "utm_content",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmMedium",
            "baseName": "utm_medium",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmSource",
            "baseName": "utm_source",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmTerm",
            "baseName": "utm_term",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateContactUtmPropertiesRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
