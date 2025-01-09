/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StageDetails } from '../models/StageDetails';
import { HttpFile } from '../http/http';

export class OpportunityStage {
    'details'?: StageDetails;
    'id': string;
    'name'?: string;
    'reasons'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "details",
            "baseName": "details",
            "type": "StageDetails",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "reasons",
            "baseName": "reasons",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OpportunityStage.attributeTypeMap;
    }

    public constructor() {
    }
}
