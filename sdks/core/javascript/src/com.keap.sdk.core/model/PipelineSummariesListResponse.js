/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseListResponsePipelineSummary from './BaseListResponsePipelineSummary';
import PipelineSummary from './PipelineSummary';

/**
 * The PipelineSummariesListResponse model module.
 * @module com.keap.sdk.core/model/PipelineSummariesListResponse
 * @version 0.0.104
 */
class PipelineSummariesListResponse {
    /**
     * Constructs a new <code>PipelineSummariesListResponse</code>.
     * Response for a list of pipeline summaries.
     * @alias module:com.keap.sdk.core/model/PipelineSummariesListResponse
     * @implements module:com.keap.sdk.core/model/BaseListResponsePipelineSummary
     */
    constructor() { 
        BaseListResponsePipelineSummary.initialize(this);
        PipelineSummariesListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineSummariesListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PipelineSummariesListResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PipelineSummariesListResponse} The populated <code>PipelineSummariesListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineSummariesListResponse();
            BaseListResponsePipelineSummary.constructFromObject(data, obj);

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('pipeline_summaries')) {
                obj['pipeline_summaries'] = ApiClient.convertToType(data['pipeline_summaries'], [PipelineSummary]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineSummariesListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineSummariesListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['pipeline_summaries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['pipeline_summaries'])) {
                throw new Error("Expected the field `pipeline_summaries` to be an array in the JSON data but got " + data['pipeline_summaries']);
            }
            // validate the optional field `pipeline_summaries` (array)
            for (const item of data['pipeline_summaries']) {
                PipelineSummary.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
PipelineSummariesListResponse.prototype['next_page_token'] = undefined;

/**
 * The list of pipeline summaries.
 * @member {Array.<module:com.keap.sdk.core/model/PipelineSummary>} pipeline_summaries
 */
PipelineSummariesListResponse.prototype['pipeline_summaries'] = undefined;


// Implement BaseListResponsePipelineSummary interface:
/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
BaseListResponsePipelineSummary.prototype['next_page_token'] = undefined;




export default PipelineSummariesListResponse;
