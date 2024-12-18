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

import { HistoricalCounts } from '../models/HistoricalCounts';
import { SequencePath } from '../models/SequencePath';
import { HttpFile } from '../http/http';

export class Sequence {
    'activeContactCount'?: number;
    'activeContactCountCompleted'?: number;
    'historicalContactCount'?: HistoricalCounts;
    'id'?: string;
    'name'?: string;
    'paths'?: Array<SequencePath>;

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
            "name": "activeContactCountCompleted",
            "baseName": "active_contact_count_completed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "historicalContactCount",
            "baseName": "historical_contact_count",
            "type": "HistoricalCounts",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "paths",
            "baseName": "paths",
            "type": "Array<SequencePath>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Sequence.attributeTypeMap;
    }

    public constructor() {
    }
}
