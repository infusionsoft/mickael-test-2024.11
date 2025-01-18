/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PipelineOutcomeLabel from './PipelineOutcomeLabel';

/**
 * The PipelineOutcomeLabelListResponse model module.
 * @module com.keap.sdk.core/model/PipelineOutcomeLabelListResponse
 * @version 0.0.90
 */
class PipelineOutcomeLabelListResponse {
    /**
     * Constructs a new <code>PipelineOutcomeLabelListResponse</code>.
     * Represents a response containing a list of pipeline outcome labels.
     * @alias module:com.keap.sdk.core/model/PipelineOutcomeLabelListResponse
     */
    constructor() { 
        
        PipelineOutcomeLabelListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineOutcomeLabelListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PipelineOutcomeLabelListResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PipelineOutcomeLabelListResponse} The populated <code>PipelineOutcomeLabelListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineOutcomeLabelListResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('outcome_labels')) {
                obj['outcome_labels'] = ApiClient.convertToType(data['outcome_labels'], [PipelineOutcomeLabel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineOutcomeLabelListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineOutcomeLabelListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['outcome_labels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['outcome_labels'])) {
                throw new Error("Expected the field `outcome_labels` to be an array in the JSON data but got " + data['outcome_labels']);
            }
            // validate the optional field `outcome_labels` (array)
            for (const item of data['outcome_labels']) {
                PipelineOutcomeLabel.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
PipelineOutcomeLabelListResponse.prototype['next_page_token'] = undefined;

/**
 * The list of outcome labels.
 * @member {Array.<module:com.keap.sdk.core/model/PipelineOutcomeLabel>} outcome_labels
 */
PipelineOutcomeLabelListResponse.prototype['outcome_labels'] = undefined;






export default PipelineOutcomeLabelListResponse;
