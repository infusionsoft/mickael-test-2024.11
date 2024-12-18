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

import { FunnelIntegrationSchemaField } from '../models/FunnelIntegrationSchemaField';
import { HttpFile } from '../http/http';

export class FunnelIntegrationAction {
    /**
    * The base URL of the trigger, that will be used to call the integration related REST endpoints.
    */
    'baseUrl'?: string;
    /**
    * The context of the trigger, that will be used internally to identify the integration.
    */
    'context'?: string;
    /**
    * The flag to enable or disable the integration trigger.
    */
    'enabled'?: boolean;
    /**
    * The icon URL of the trigger, that will be used to display the icon of this specific integration trigger.
    */
    'iconUrl'?: string;
    /**
    * The name of the trigger, that will be used internally to identify and initiate the trigger.
    */
    'name'?: string;
    /**
    * The schema for this trigger that can be used in the builder context, and populated when a trigger is initiated.
    */
    'schemaFields'?: Array<FunnelIntegrationSchemaField>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "baseUrl",
            "baseName": "base_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "string",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "schemaFields",
            "baseName": "schema_fields",
            "type": "Array<FunnelIntegrationSchemaField>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FunnelIntegrationAction.attributeTypeMap;
    }

    public constructor() {
    }
}
