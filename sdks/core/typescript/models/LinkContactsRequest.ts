/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LinkContactsRequest {
    'contact1Id'?: string;
    'contact2Id'?: string;
    'linkTypeId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contact1Id",
            "baseName": "contact1_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contact2Id",
            "baseName": "contact2_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkTypeId",
            "baseName": "link_type_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LinkContactsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
