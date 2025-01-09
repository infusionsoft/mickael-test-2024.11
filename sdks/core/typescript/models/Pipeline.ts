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

import { Stage } from '../models/Stage';
import { HttpFile } from '../http/http';

/**
* A pipeline
*/
export class Pipeline {
    /**
    * Unique identifier for the model.
    */
    'id'?: string;
    /**
    * The name of the pipeline.
    */
    'name'?: string;
    /**
    * The list of stages in the pipeline.
    */
    'stages'?: Array<Stage>;

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
            "name": "stages",
            "baseName": "stages",
            "type": "Array<Stage>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Pipeline.attributeTypeMap;
    }

    public constructor() {
    }
}
