/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class FaxNumber {
    'field'?: FaxNumberFieldEnum;
    'number'?: string;
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "FaxNumberFieldEnum",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FaxNumber.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum FaxNumberFieldEnum {
    FaxNumberFieldUnspecified = 'FAX_NUMBER_FIELD_UNSPECIFIED',
    Fax1 = 'FAX1',
    Fax2 = 'FAX2'
}

