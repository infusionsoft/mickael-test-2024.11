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

export class PhoneNumber {
    'extension'?: string;
    'field'?: PhoneNumberFieldEnum;
    'number'?: string;
    'numberE164'?: string;
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "PhoneNumberFieldEnum",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberE164",
            "baseName": "number_e164",
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
        return PhoneNumber.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PhoneNumberFieldEnum {
    PhoneNumberFieldUnspecified = 'PHONE_NUMBER_FIELD_UNSPECIFIED',
    Phone1 = 'PHONE1',
    Phone2 = 'PHONE2',
    Phone3 = 'PHONE3',
    Phone4 = 'PHONE4',
    Phone5 = 'PHONE5'
}

