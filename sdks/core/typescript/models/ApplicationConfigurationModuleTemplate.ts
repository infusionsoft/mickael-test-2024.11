/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ApplicationConfigurationModuleTemplate {
    'defaultCountryCode'?: number;
    'defaultUserId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultCountryCode",
            "baseName": "default_country_code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "defaultUserId",
            "baseName": "default_user_id",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleTemplate.attributeTypeMap;
    }

    public constructor() {
    }
}
