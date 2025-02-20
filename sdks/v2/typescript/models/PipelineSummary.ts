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

/**
* Represents a summary of a pipeline.
*/
export class PipelineSummary {
    /**
    * Unique identifier for the model.
    */
    'id'?: string;
    /**
    * The ID of the pipeline. Can be null and must be a string of digits if present.
    */
    'pipelineId'?: string | null;
    /**
    * The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters.
    */
    'pipelineName': string;
    /**
    * The total count of deals in the pipeline. Can be null.
    */
    'statTotalDealCount'?: number | null;
    /**
    * The count of new deals in the pipeline. Can be null.
    */
    'statNewDealCount'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineId",
            "baseName": "pipeline_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineName",
            "baseName": "pipeline_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "statTotalDealCount",
            "baseName": "stat_total_deal_count",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "statNewDealCount",
            "baseName": "stat_new_deal_count",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PipelineSummary.attributeTypeMap;
    }

    public constructor() {
    }
}
