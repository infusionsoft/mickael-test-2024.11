/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FunnelIntegrationTriggerEventDTO } from '../models/FunnelIntegrationTriggerEventDTO';
import { HttpFile } from '../http/http';

export class CreateFunnelIntegrationTriggerEvents {
    /**
    * A list of trigger events to be created.
    */
    'funnelIntegrationTriggerEvents'?: Array<FunnelIntegrationTriggerEventDTO>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "funnelIntegrationTriggerEvents",
            "baseName": "funnel_integration_trigger_events",
            "type": "Array<FunnelIntegrationTriggerEventDTO>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateFunnelIntegrationTriggerEvents.attributeTypeMap;
    }

    public constructor() {
    }
}
