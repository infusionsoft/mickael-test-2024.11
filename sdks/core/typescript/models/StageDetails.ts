/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CheckListItemDetails } from '../models/CheckListItemDetails';
import { HttpFile } from '../http/http';

export class StageDetails {
    'checklistItems'?: Array<CheckListItemDetails>;
    'probability'?: number;
    'stageOrder'?: number;
    'targetNumDays'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checklistItems",
            "baseName": "checklist_items",
            "type": "Array<CheckListItemDetails>",
            "format": ""
        },
        {
            "name": "probability",
            "baseName": "probability",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "stageOrder",
            "baseName": "stage_order",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "targetNumDays",
            "baseName": "target_num_days",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return StageDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
