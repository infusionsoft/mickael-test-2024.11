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
import BaseListResponseStage from './BaseListResponseStage';
import Stage from './Stage';

/**
 * The PipelineStageListResponse model module.
 * @module com.keap.sdk.core/model/PipelineStageListResponse
 * @version 0.0.107
 */
class PipelineStageListResponse {
    /**
     * Constructs a new <code>PipelineStageListResponse</code>.
     * Response for a list of stages.
     * @alias module:com.keap.sdk.core/model/PipelineStageListResponse
     * @implements module:com.keap.sdk.core/model/BaseListResponseStage
     */
    constructor() { 
        BaseListResponseStage.initialize(this);
        PipelineStageListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PipelineStageListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PipelineStageListResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PipelineStageListResponse} The populated <code>PipelineStageListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineStageListResponse();
            BaseListResponseStage.constructFromObject(data, obj);

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('stages')) {
                obj['stages'] = ApiClient.convertToType(data['stages'], [Stage]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineStageListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineStageListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['stages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stages'])) {
                throw new Error("Expected the field `stages` to be an array in the JSON data but got " + data['stages']);
            }
            // validate the optional field `stages` (array)
            for (const item of data['stages']) {
                Stage.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
PipelineStageListResponse.prototype['next_page_token'] = undefined;

/**
 * The list of stages.
 * @member {Array.<module:com.keap.sdk.core/model/Stage>} stages
 */
PipelineStageListResponse.prototype['stages'] = undefined;


// Implement BaseListResponseStage interface:
/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
BaseListResponseStage.prototype['next_page_token'] = undefined;




export default PipelineStageListResponse;
