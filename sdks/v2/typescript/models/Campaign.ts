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

import { Goal } from '../models/Goal';
import { Sequence } from '../models/Sequence';
import { HttpFile } from '../http/http';

export class Campaign {
    'activeContactCount'?: number;
    'completedContactCount'?: number;
    'createdByGlobalId'?: string;
    'dateCreated'?: string;
    'errorMessage'?: string;
    'goals'?: Array<Goal>;
    'id'?: string;
    'locked'?: boolean;
    'name'?: string;
    'publishedDate'?: Date;
    'publishedStatus'?: boolean;
    'publishedTimeZone'?: string;
    'sequences'?: Array<Sequence>;
    'timeZone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "activeContactCount",
            "baseName": "active_contact_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "completedContactCount",
            "baseName": "completed_contact_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "createdByGlobalId",
            "baseName": "created_by_global_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "goals",
            "baseName": "goals",
            "type": "Array<Goal>",
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
            "name": "name",
            "baseName": "name",
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
            "name": "publishedStatus",
            "baseName": "published_status",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publishedTimeZone",
            "baseName": "published_time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "sequences",
            "baseName": "sequences",
            "type": "Array<Sequence>",
            "format": ""
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Campaign.attributeTypeMap;
    }

    public constructor() {
    }
}
