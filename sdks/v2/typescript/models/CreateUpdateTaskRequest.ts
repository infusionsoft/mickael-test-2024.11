/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class CreateUpdateTaskRequest {
    'assignedToUserId'?: string;
    'completed'?: boolean;
    'completionTime'?: string;
    'contactId'?: string;
    'description'?: string;
    'dueTime'?: string;
    'priority'?: CreateUpdateTaskRequestPriorityEnum;
    /**
    * Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880]
    */
    'remindTimeMins'?: number;
    'title'?: string;
    'type'?: CreateUpdateTaskRequestTypeEnum;

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
            "name": "priority",
            "baseName": "priority",
            "type": "CreateUpdateTaskRequestPriorityEnum",
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
            "type": "CreateUpdateTaskRequestTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateUpdateTaskRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CreateUpdateTaskRequestPriorityEnum {
    Critical = 'CRITICAL',
    Essential = 'ESSENTIAL',
    Nonessential = 'NONESSENTIAL'
}
export enum CreateUpdateTaskRequestTypeEnum {
    Email = 'EMAIL',
    Call = 'CALL',
    Appointment = 'APPOINTMENT',
    Fax = 'FAX',
    Letter = 'LETTER',
    Other = 'OTHER'
}

