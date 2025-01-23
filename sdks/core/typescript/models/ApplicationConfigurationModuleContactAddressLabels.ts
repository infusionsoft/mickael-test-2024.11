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

export class ApplicationConfigurationModuleContactAddressLabels {
    'line1'?: string;
    'line2'?: string;
    'line3'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "line1",
            "baseName": "line_1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line_2",
            "type": "string",
            "format": ""
        },
        {
            "name": "line3",
            "baseName": "line_3",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleContactAddressLabels.attributeTypeMap;
    }

    public constructor() {
    }
}
