/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EmailAddressRequest } from '../models/EmailAddressRequest';
import { HttpFile } from '../http/http';

export class CreateUserRequestV2 {
    'admin'?: boolean;
    'emailAddress': EmailAddressRequest;
    'givenName': string;
    'partner'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "emailAddress",
            "baseName": "email_address",
            "type": "EmailAddressRequest",
            "format": ""
        },
        {
            "name": "givenName",
            "baseName": "given_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "partner",
            "baseName": "partner",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUserRequestV2.attributeTypeMap;
    }

    public constructor() {
    }
}
