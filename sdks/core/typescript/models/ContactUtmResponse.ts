/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ContactUtmResponse {
    'dateCreated'?: Date;
    'firstTouch'?: boolean;
    'id'?: number;
    'keapSourceId'?: string;
    'lastTouch'?: boolean;
    'utmCampaign'?: string;
    'utmContent'?: string;
    'utmMedium'?: string;
    'utmSource'?: string;
    'utmTerm'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dateCreated",
            "baseName": "dateCreated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "firstTouch",
            "baseName": "firstTouch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "keapSourceId",
            "baseName": "keapSourceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastTouch",
            "baseName": "lastTouch",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "utmCampaign",
            "baseName": "utmCampaign",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmContent",
            "baseName": "utmContent",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmMedium",
            "baseName": "utmMedium",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmSource",
            "baseName": "utmSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "utmTerm",
            "baseName": "utmTerm",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContactUtmResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
