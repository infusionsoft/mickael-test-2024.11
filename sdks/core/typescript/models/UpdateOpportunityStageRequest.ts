/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UpdateOpportunityStageChecklistItem } from '../models/UpdateOpportunityStageChecklistItem';
import { HttpFile } from '../http/http';

export class UpdateOpportunityStageRequest {
    'checklistItems'?: Array<UpdateOpportunityStageChecklistItem>;
    'name'?: string;
    'order'?: number;
    /**
    * must be an integer between 0 and 100.
    */
    'probability'?: number;
    /**
    * Value should be >=0.
    */
    'targetNumberDays'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checklistItems",
            "baseName": "checklist_items",
            "type": "Array<UpdateOpportunityStageChecklistItem>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "probability",
            "baseName": "probability",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "targetNumberDays",
            "baseName": "target_number_days",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return UpdateOpportunityStageRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
