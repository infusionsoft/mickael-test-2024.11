/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReportEntryValue } from '../models/ReportEntryValue';
import { HttpFile } from '../http/http';

export class ReportEntryRecord {
    'columns'?: Array<ReportEntryValue>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<ReportEntryValue>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReportEntryRecord.attributeTypeMap;
    }

    public constructor() {
    }
}
