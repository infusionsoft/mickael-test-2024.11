/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Request for updating a stage.
*/
export class UpdateStageRequest {
    /**
    * The name of the stage.
    */
    'name': string | null;
    /**
    * The ID of the previous stage.
    */
    'previousStageId': string | null;
    /**
    * The ID of the next stage.
    */
    'nextStageId': string | null;
    /**
    * The ID of the pipeline.
    */
    'pipelineId': string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "previousStageId",
            "baseName": "previous_stage_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextStageId",
            "baseName": "next_stage_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineId",
            "baseName": "pipeline_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateStageRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
