/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Task {
    'assignedToUserId'?: string;
    'completed'?: boolean;
    'completionTime'?: string;
    'contactId'?: string;
    /**
    * On initial object the returned value for this property may not accurately represent the exact stored value.
    */
    'createTime'?: string;
    'createdByUserId'?: string;
    'description'?: string;
    'dueTime'?: string;
    'id'?: string;
    'modificationTime'?: string;
    'priority'?: TaskPriorityEnum;
    'remindTimeMins'?: number;
    'title'?: string;
    'type'?: TaskTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assignedToUserId",
            "baseName": "assigned_to_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "completed",
            "baseName": "completed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "completionTime",
            "baseName": "completion_time",
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
            "name": "createTime",
            "baseName": "create_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdByUserId",
            "baseName": "created_by_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "dueTime",
            "baseName": "due_time",
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
            "name": "modificationTime",
            "baseName": "modification_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "TaskPriorityEnum",
            "format": ""
        },
        {
            "name": "remindTimeMins",
            "baseName": "remind_time_mins",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TaskTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Task.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum TaskPriorityEnum {
    Critical = 'CRITICAL',
    Essential = 'ESSENTIAL',
    Nonessential = 'NONESSENTIAL'
}
export enum TaskTypeEnum {
    Email = 'EMAIL',
    Call = 'CALL',
    Appointment = 'APPOINTMENT',
    Fax = 'FAX',
    Letter = 'LETTER',
    Other = 'OTHER'
}

