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

import { CustomField } from '../models/CustomField';
import { OpportunityContact } from '../models/OpportunityContact';
import { OpportunityStage } from '../models/OpportunityStage';
import { RestV2User } from '../models/RestV2User';
import { HttpFile } from '../http/http';

export class RestV2Opportunity {
    'affiliateId'?: string;
    'contact': OpportunityContact;
    'createdTime'?: string;
    'customFields'?: Array<CustomField>;
    'estimatedCloseTime'?: string;
    'id'?: string;
    'includeInForecast'?: boolean;
    'lastUpdatedTime'?: string;
    'nextActionNotes'?: string;
    'nextActionTime'?: string;
    'opportunityNotes'?: string;
    'opportunityTitle': string;
    'projectedRevenueHigh'?: number;
    'projectedRevenueLow'?: number;
    'stage': OpportunityStage;
    'user'?: RestV2User;

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
            "name": "contact",
            "baseName": "contact",
            "type": "OpportunityContact",
            "format": ""
        },
        {
            "name": "createdTime",
            "baseName": "created_time",
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
            "name": "id",
            "baseName": "id",
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
            "name": "lastUpdatedTime",
            "baseName": "last_updated_time",
            "type": "string",
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
            "name": "stage",
            "baseName": "stage",
            "type": "OpportunityStage",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "RestV2User",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RestV2Opportunity.attributeTypeMap;
    }

    public constructor() {
    }
}
