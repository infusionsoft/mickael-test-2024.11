/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CheckListItemDetails } from '../models/CheckListItemDetails';
import { HttpFile } from '../http/http';

export class StageDetails {
    'checkListItems'?: Array<CheckListItemDetails>;
    'probability'?: number;
    'stageOrder'?: number;
    'targetNumDays'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checkListItems",
            "baseName": "check_list_items",
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
