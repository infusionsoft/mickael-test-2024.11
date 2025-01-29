/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PipelineSummary } from '../models/PipelineSummary';
import { HttpFile } from '../http/http';

/**
* Response for a list of pipeline summaries.
*/
export class PipelineSummariesListResponse {
    /**
    * Token for the next page of results.
    */
    'nextPageToken'?: string;
    /**
    * The list of pipeline summaries.
    */
    'pipelineSummaries'?: Array<PipelineSummary>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineSummaries",
            "baseName": "pipeline_summaries",
            "type": "Array<PipelineSummary>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PipelineSummariesListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
