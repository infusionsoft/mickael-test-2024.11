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

import { RestV2Opportunity } from '../models/RestV2Opportunity';
import { HttpFile } from '../http/http';

export class ListOpportunitiesResponse {
    'nextPageToken'?: string;
    'opportunities'?: Array<RestV2Opportunity>;

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
            "name": "opportunities",
            "baseName": "opportunities",
            "type": "Array<RestV2Opportunity>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListOpportunitiesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
