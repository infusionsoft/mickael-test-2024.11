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

import { ReportEntryRecord } from '../models/ReportEntryRecord';
import { HttpFile } from '../http/http';

export class ReportExecutionResult {
    'pageToken'?: string;
    'results'?: Array<ReportEntryRecord>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageToken",
            "baseName": "page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ReportEntryRecord>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReportExecutionResult.attributeTypeMap;
    }

    public constructor() {
    }
}
