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

export class EmailAddressRequest {
    'email'?: string;
    'field'?: EmailAddressRequestFieldEnum;
    'optInReason'?: string;

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
            "name": "field",
            "baseName": "field",
            "type": "EmailAddressRequestFieldEnum",
            "format": ""
        },
        {
            "name": "optInReason",
            "baseName": "opt_in_reason",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailAddressRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum EmailAddressRequestFieldEnum {
    EmailFieldUnspecified = 'EMAIL_FIELD_UNSPECIFIED',
    Email1 = 'EMAIL1',
    Email2 = 'EMAIL2',
    Email3 = 'EMAIL3'
}

