/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Represents a stage in a pipeline.
*/
export class Stage {
    /**
    * Unique identifier for the model.
    */
    'id'?: string;
    /**
    * The name of the stage.
    */
    'name'?: string;
    /**
    * The ID of the pipeline.
    */
    'pipelineId'?: string;

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
            "name": "name",
            "baseName": "name",
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
        return Stage.attributeTypeMap;
    }

    public constructor() {
    }
}
