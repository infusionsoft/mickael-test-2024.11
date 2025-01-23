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

import { HttpFile } from '../http/http';

export class CreateLeadSourceRequest {
    'description'?: string;
    'endTime'?: string;
    'leadSourceCategoryId'?: string;
    'medium'?: string;
    'message'?: string;
    'name'?: string;
    'startTime'?: string;
    'status'?: CreateLeadSourceRequestStatusEnum;
    'vendor'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "leadSourceCategoryId",
            "baseName": "lead_source_category_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "medium",
            "baseName": "medium",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
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
            "name": "startTime",
            "baseName": "start_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateLeadSourceRequestStatusEnum",
            "format": ""
        },
        {
            "name": "vendor",
            "baseName": "vendor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateLeadSourceRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateLeadSourceRequestStatusEnum {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE'
}

