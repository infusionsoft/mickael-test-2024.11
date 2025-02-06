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

import { Stage } from '../models/Stage';
import { HttpFile } from '../http/http';

/**
* Response for a list of stages.
*/
export class StageListResponse {
    /**
    * Token for the next page of results.
    */
    'nextPageToken'?: string;
    /**
    * The list of stages.
    */
    'stages'?: Array<Stage>;

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
            "name": "stages",
            "baseName": "stages",
            "type": "Array<Stage>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StageListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
