/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.752995
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ContactLinkType } from '../models/ContactLinkType';
import { HttpFile } from '../http/http';

export class ListContactLinkTypesResponse {
    'contactLinkTypes'?: Array<ContactLinkType>;
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contactLinkTypes",
            "baseName": "contact_link_types",
            "type": "Array<ContactLinkType>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListContactLinkTypesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
