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

export class URI {
    'absolute'?: boolean;
    'authority'?: string;
    'fragment'?: string;
    'host'?: string;
    'opaque'?: boolean;
    'path'?: string;
    'port'?: number;
    'query'?: string;
    'rawAuthority'?: string;
    'rawFragment'?: string;
    'rawPath'?: string;
    'rawQuery'?: string;
    'rawSchemeSpecificPart'?: string;
    'rawUserInfo'?: string;
    'scheme'?: string;
    'schemeSpecificPart'?: string;
    'userInfo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "absolute",
            "baseName": "absolute",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "authority",
            "baseName": "authority",
            "type": "string",
            "format": ""
        },
        {
            "name": "fragment",
            "baseName": "fragment",
            "type": "string",
            "format": ""
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "opaque",
            "baseName": "opaque",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawAuthority",
            "baseName": "rawAuthority",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawFragment",
            "baseName": "rawFragment",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawPath",
            "baseName": "rawPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawQuery",
            "baseName": "rawQuery",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawSchemeSpecificPart",
            "baseName": "rawSchemeSpecificPart",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawUserInfo",
            "baseName": "rawUserInfo",
            "type": "string",
            "format": ""
        },
        {
            "name": "scheme",
            "baseName": "scheme",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemeSpecificPart",
            "baseName": "schemeSpecificPart",
            "type": "string",
            "format": ""
        },
        {
            "name": "userInfo",
            "baseName": "userInfo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return URI.attributeTypeMap;
    }

    public constructor() {
    }
}
