/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.70.0.739356-hf-202411181744
 * 
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
