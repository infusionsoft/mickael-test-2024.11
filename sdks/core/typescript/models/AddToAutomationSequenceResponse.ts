/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.752995
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class AddToAutomationSequenceResponse {
    'addToAutomationSequenceResults'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addToAutomationSequenceResults",
            "baseName": "add_to_automation_sequence_results",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddToAutomationSequenceResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
