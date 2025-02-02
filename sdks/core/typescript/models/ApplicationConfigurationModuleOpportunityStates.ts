/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationConfigurationModuleOpportunityStatesActive } from '../models/ApplicationConfigurationModuleOpportunityStatesActive';
import { ApplicationConfigurationModuleOpportunityStatesLoss } from '../models/ApplicationConfigurationModuleOpportunityStatesLoss';
import { ApplicationConfigurationModuleOpportunityStatesWin } from '../models/ApplicationConfigurationModuleOpportunityStatesWin';
import { HttpFile } from '../http/http';

export class ApplicationConfigurationModuleOpportunityStates {
    'active'?: ApplicationConfigurationModuleOpportunityStatesActive;
    'loss'?: ApplicationConfigurationModuleOpportunityStatesLoss;
    'win'?: ApplicationConfigurationModuleOpportunityStatesWin;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "ApplicationConfigurationModuleOpportunityStatesActive",
            "format": ""
        },
        {
            "name": "loss",
            "baseName": "loss",
            "type": "ApplicationConfigurationModuleOpportunityStatesLoss",
            "format": ""
        },
        {
            "name": "win",
            "baseName": "win",
            "type": "ApplicationConfigurationModuleOpportunityStatesWin",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleOpportunityStates.attributeTypeMap;
    }

    public constructor() {
    }
}
