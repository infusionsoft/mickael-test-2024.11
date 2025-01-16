/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class FunnelIntegrationTriggerResultDTO {
    'automationId'?: number;
    'goalId'?: number;
    'message'?: string;
    'schemaData'?: string;
    'success'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "automationId",
            "baseName": "automation_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "goalId",
            "baseName": "goal_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaData",
            "baseName": "schema_data",
            "type": "string",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FunnelIntegrationTriggerResultDTO.attributeTypeMap;
    }

    public constructor() {
    }
}
