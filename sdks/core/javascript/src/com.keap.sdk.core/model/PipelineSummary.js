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
import BaseModel from './BaseModel';

/**
 * The PipelineSummary model module.
 * @module com.keap.sdk.core/model/PipelineSummary
 * @version 0.0.96
 */
class PipelineSummary {
    /**
     * Constructs a new <code>PipelineSummary</code>.
     * Represents a summary of a pipeline.
     * @alias module:com.keap.sdk.core/model/PipelineSummary
     * @implements module:com.keap.sdk.core/model/BaseModel
     * @param pipelineName {String} The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters.
     */
    constructor(pipelineName) { 
        BaseModel.initialize(this);
        PipelineSummary.initialize(this, pipelineName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pipelineName) { 
        obj['pipeline_name'] = pipelineName;
    }

    /**
     * Constructs a <code>PipelineSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PipelineSummary} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PipelineSummary} The populated <code>PipelineSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineSummary();
            BaseModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'String');
            }
            if (data.hasOwnProperty('pipeline_name')) {
                obj['pipeline_name'] = ApiClient.convertToType(data['pipeline_name'], 'String');
            }
            if (data.hasOwnProperty('stat_total_deal_count')) {
                obj['stat_total_deal_count'] = ApiClient.convertToType(data['stat_total_deal_count'], 'Number');
            }
            if (data.hasOwnProperty('stat_new_deal_count')) {
                obj['stat_new_deal_count'] = ApiClient.convertToType(data['stat_new_deal_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineSummary</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PipelineSummary.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['pipeline_id'] && !(typeof data['pipeline_id'] === 'string' || data['pipeline_id'] instanceof String)) {
            throw new Error("Expected the field `pipeline_id` to be a primitive type in the JSON string but got " + data['pipeline_id']);
        }
        // ensure the json data is a string
        if (data['pipeline_name'] && !(typeof data['pipeline_name'] === 'string' || data['pipeline_name'] instanceof String)) {
            throw new Error("Expected the field `pipeline_name` to be a primitive type in the JSON string but got " + data['pipeline_name']);
        }

        return true;
    }


}

PipelineSummary.RequiredProperties = ["pipeline_name"];

/**
 * Unique identifier for the model.
 * @member {String} id
 */
PipelineSummary.prototype['id'] = undefined;

/**
 * The ID of the pipeline. Can be null and must be a string of digits if present.
 * @member {String} pipeline_id
 */
PipelineSummary.prototype['pipeline_id'] = undefined;

/**
 * The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters.
 * @member {String} pipeline_name
 */
PipelineSummary.prototype['pipeline_name'] = undefined;

/**
 * The total count of deals in the pipeline. Can be null.
 * @member {Number} stat_total_deal_count
 */
PipelineSummary.prototype['stat_total_deal_count'] = undefined;

/**
 * The count of new deals in the pipeline. Can be null.
 * @member {Number} stat_new_deal_count
 */
PipelineSummary.prototype['stat_new_deal_count'] = undefined;


// Implement BaseModel interface:
/**
 * Unique identifier for the model.
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;




export default PipelineSummary;
