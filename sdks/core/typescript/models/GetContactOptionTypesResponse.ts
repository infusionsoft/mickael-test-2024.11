/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GetContactOptionTypesResponse {
    'optionTypes'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "optionTypes",
            "baseName": "option_types",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetContactOptionTypesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
