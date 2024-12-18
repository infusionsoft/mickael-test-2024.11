/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.752995
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BasicUser } from '../models/BasicUser';
import { HttpFile } from '../http/http';

export class GetNoteResponse {
    'assignedToUser'?: BasicUser;
    'contactId'?: string;
    'createTime'?: string;
    'createdByUserId'?: string;
    'id'?: string;
    'lastUpdatedByUserId'?: string;
    'text'?: string;
    'title'?: string;
    'type'?: string;
    'updateTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assignedToUser",
            "baseName": "assigned_to_user",
            "type": "BasicUser",
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
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdatedByUserId",
            "baseName": "last_updated_by_user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
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
            "type": "string",
            "format": ""
        },
        {
            "name": "updateTime",
            "baseName": "update_time",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetNoteResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
