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

import { CreateOpportunityStageCheckListItem } from '../models/CreateOpportunityStageCheckListItem';
import { HttpFile } from '../http/http';

export class CreateOpportunityStageRequest {
    'checkListItems'?: Array<CreateOpportunityStageCheckListItem>;
    'name': string;
    'order': number;
    'probability': number;
    'targetNumberDays': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checkListItems",
            "baseName": "check_list_items",
            "type": "Array<CreateOpportunityStageCheckListItem>",
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
        return CreateOpportunityStageRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
