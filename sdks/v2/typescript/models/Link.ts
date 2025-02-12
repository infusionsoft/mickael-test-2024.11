/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Link {
    'id'?: string;
    'linkTypeId'?: string;
    'linkTypeName'?: string;
    'linkedContactId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkTypeId",
            "baseName": "link_type_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkTypeName",
            "baseName": "link_type_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "linkedContactId",
            "baseName": "linked_contact_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    public constructor() {
    }
}
