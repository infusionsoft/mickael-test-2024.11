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

import { FunnelIntegrationAction } from '../models/FunnelIntegrationAction';
import { HttpFile } from '../http/http';

export class CreateFunnelIntegrationRequest {
    /**
    * The base URL of the integration, that will be used to call the integration related REST endpoints.
    */
    'baseUrl'?: string;
    /**
    * The context of the integration, that will be used internally to identify the integration.
    */
    'context'?: string;
    /**
    * The flag to enable or disable the integration.
    */
    'enabled'?: boolean;
    /**
    * The list of actions that will be installed with the integration.
    */
    'funnelIntegrationActions'?: Array<FunnelIntegrationAction>;
    /**
    * The list of triggers that will be installed with the integration.
    */
    'funnelIntegrationTriggers'?: Array<FunnelIntegrationAction>;
    /**
    * The name of the integration, that will be used internally to identify the integration.
    */
    'name'?: string;

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
            "name": "funnelIntegrationActions",
            "baseName": "funnel_integration_actions",
            "type": "Array<FunnelIntegrationAction>",
            "format": ""
        },
        {
            "name": "funnelIntegrationTriggers",
            "baseName": "funnel_integration_triggers",
            "type": "Array<FunnelIntegrationAction>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateFunnelIntegrationRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
