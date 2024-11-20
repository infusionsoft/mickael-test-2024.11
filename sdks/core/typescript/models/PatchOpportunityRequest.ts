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

import { CustomField } from '../models/CustomField';
import { HttpFile } from '../http/http';

export class PatchOpportunityRequest {
    'affiliateId'?: string;
    'contactId'?: string;
    'customFields'?: Array<CustomField>;
    'estimatedCloseTime'?: string;
    'includeInForecast'?: boolean;
    'nextActionNotes'?: string;
    'nextActionTime'?: string;
    'opportunityNotes'?: string;
    'opportunityTitle'?: string;
    'projectedRevenueHigh'?: number;
    'projectedRevenueLow'?: number;
    'stageId'?: string;
    'userId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<CustomField>",
            "format": ""
        },
        {
            "name": "estimatedCloseTime",
            "baseName": "estimated_close_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeInForecast",
            "baseName": "include_in_forecast",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "nextActionNotes",
            "baseName": "next_action_notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextActionTime",
            "baseName": "next_action_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "opportunityNotes",
            "baseName": "opportunity_notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "opportunityTitle",
            "baseName": "opportunity_title",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectedRevenueHigh",
            "baseName": "projected_revenue_high",
            "type": "number",
            "format": "double"
        },
        {
            "name": "projectedRevenueLow",
            "baseName": "projected_revenue_low",
            "type": "number",
            "format": "double"
        },
        {
            "name": "stageId",
            "baseName": "stage_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PatchOpportunityRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
