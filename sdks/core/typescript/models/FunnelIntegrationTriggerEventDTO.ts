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

export class FunnelIntegrationTriggerEventDTO {
    'contactId'?: number;
    'oracleId'?: string;
    'schemaData'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "oracleId",
            "baseName": "oracle_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaData",
            "baseName": "schema_data",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FunnelIntegrationTriggerEventDTO.attributeTypeMap;
    }

    public constructor() {
    }
}
