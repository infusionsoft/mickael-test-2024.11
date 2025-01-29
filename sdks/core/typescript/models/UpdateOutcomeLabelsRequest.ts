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

import { PipelineOutcomeLabel } from '../models/PipelineOutcomeLabel';
import { HttpFile } from '../http/http';

/**
* Represents a request to update outcome labels for a pipeline.
*/
export class UpdateOutcomeLabelsRequest {
    /**
    * List of outcome labels to be updated.
    */
    'outcomeLabels': Array<PipelineOutcomeLabel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "outcomeLabels",
            "baseName": "outcome_labels",
            "type": "Array<PipelineOutcomeLabel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateOutcomeLabelsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
