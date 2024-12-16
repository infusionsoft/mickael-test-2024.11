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

export class GetUserInfoResponse {
    'email'?: string;
    'familyName'?: string;
    'givenName'?: string;
    'id'?: number;
    'isAdmin'?: boolean;
    'keapId'?: string;
    'middleName'?: string;
    'preferredName'?: string;
    'sub'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "familyName",
            "baseName": "family_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "isAdmin",
            "baseName": "is_admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "keapId",
            "baseName": "keap_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middle_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredName",
            "baseName": "preferred_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sub",
            "baseName": "sub",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetUserInfoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
