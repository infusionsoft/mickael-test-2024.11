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

import { User } from '../models/User';
import { HttpFile } from '../http/http';

export class ListUserResponse {
    'users'?: Array<User>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<User>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListUserResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
