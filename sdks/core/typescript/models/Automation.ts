/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AutomationLockStatus } from '../models/AutomationLockStatus';
import { HttpFile } from '../http/http';

export class Automation {
    'activeContacts'?: number;
    'categories'?: Array<string>;
    'currentEditLockStatus'?: AutomationLockStatus;
    'errorMessage'?: string;
    'id'?: string;
    'locked'?: boolean;
    'publishedBy'?: string;
    'publishedDate'?: Date;
    'publishedTimezone'?: string;
    'status'?: string;
    'title'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "activeContacts",
            "baseName": "active_contacts",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "currentEditLockStatus",
            "baseName": "current_edit_lock_status",
            "type": "AutomationLockStatus",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
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
            "name": "locked",
            "baseName": "locked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publishedBy",
            "baseName": "published_by",
            "type": "string",
            "format": ""
        },
        {
            "name": "publishedDate",
            "baseName": "published_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "publishedTimezone",
            "baseName": "published_timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Automation.attributeTypeMap;
    }

    public constructor() {
    }
}
