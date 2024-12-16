/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DeleteFunnelIntegrationRequest {
    /**
    * The name of the actions, that will be looked for and uninstalled.
    */
    'actionNames'?: Array<string>;
    /**
    * The name of the integrations, that will be looked for and uninstalled. This will uninstall all triggers and actions related to this automation.
    */
    'integrationNames'?: Array<string>;
    /**
    * The name of the triggers, that will be looked for and uninstalled.
    */
    'triggerNames'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "actionNames",
            "baseName": "action_names",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "integrationNames",
            "baseName": "integration_names",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "triggerNames",
            "baseName": "trigger_names",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DeleteFunnelIntegrationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
