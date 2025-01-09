/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Pipeline } from '../models/Pipeline';
import { HttpFile } from '../http/http';

/**
* Response for a list of pipelines.
*/
export class PipelineListResponse {
    /**
    * Token for the next page of results.
    */
    'nextPageToken'?: string;
    /**
    * The list of pipelines.
    */
    'pipelines'?: Array<Pipeline>;

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
            "name": "pipelines",
            "baseName": "pipelines",
            "type": "Array<Pipeline>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PipelineListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
