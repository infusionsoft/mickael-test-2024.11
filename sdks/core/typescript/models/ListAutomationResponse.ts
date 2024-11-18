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

import { Automation } from '../models/Automation';
import { HttpFile } from '../http/http';

export class ListAutomationResponse {
    'automationCount'?: number;
    'automations'?: Array<Automation>;
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "automationCount",
            "baseName": "automation_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "automations",
            "baseName": "automations",
            "type": "Array<Automation>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListAutomationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
