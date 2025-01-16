/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Deal } from '../models/Deal';
import { HttpFile } from '../http/http';

/**
* Response for a list of deals in a stage.
*/
export class StageDealListResponse {
    /**
    * Token for the next page of results.
    */
    'nextPageToken'?: string;
    /**
    * The list of deals in a stage.
    */
    'deals'?: Array<Deal>;

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
            "name": "deals",
            "baseName": "deals",
            "type": "Array<Deal>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StageDealListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
