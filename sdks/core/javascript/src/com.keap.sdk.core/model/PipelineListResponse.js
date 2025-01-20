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
import BaseListResponsePipeline from './BaseListResponsePipeline';
import Pipeline from './Pipeline';

/**
 * The PipelineListResponse model module.
 * @module com.keap.sdk.core/model/PipelineListResponse
 * @version 0.0.92
 */
class PipelineListResponse {
    /**
     * Constructs a new <code>PipelineListResponse</code>.
     * Response for a list of pipelines.
     * @alias module:com.keap.sdk.core/model/PipelineListResponse
     * @implements module:com.keap.sdk.core/model/BaseListResponsePipeline
     */
    constructor() { 
        BaseListResponsePipeline.initialize(this);
        PipelineListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PipelineListResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PipelineListResponse} The populated <code>PipelineListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineListResponse();
            BaseListResponsePipeline.constructFromObject(data, obj);

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('pipelines')) {
                obj['pipelines'] = ApiClient.convertToType(data['pipelines'], [Pipeline]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['pipelines']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['pipelines'])) {
                throw new Error("Expected the field `pipelines` to be an array in the JSON data but got " + data['pipelines']);
            }
            // validate the optional field `pipelines` (array)
            for (const item of data['pipelines']) {
                Pipeline.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
PipelineListResponse.prototype['next_page_token'] = undefined;

/**
 * The list of pipelines.
 * @member {Array.<module:com.keap.sdk.core/model/Pipeline>} pipelines
 */
PipelineListResponse.prototype['pipelines'] = undefined;


// Implement BaseListResponsePipeline interface:
/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
BaseListResponsePipeline.prototype['next_page_token'] = undefined;




export default PipelineListResponse;
