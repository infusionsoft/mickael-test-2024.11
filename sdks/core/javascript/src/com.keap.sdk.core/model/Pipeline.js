/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseModel from './BaseModel';
import Stage from './Stage';

/**
 * The Pipeline model module.
 * @module com.keap.sdk.core/model/Pipeline
 * @version 0.0.68
 */
class Pipeline {
    /**
     * Constructs a new <code>Pipeline</code>.
     * A pipeline
     * @alias module:com.keap.sdk.core/model/Pipeline
     * @implements module:com.keap.sdk.core/model/BaseModel
     */
    constructor() { 
        BaseModel.initialize(this);
        Pipeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Pipeline} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Pipeline} The populated <code>Pipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pipeline();
            BaseModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('stages')) {
                obj['stages'] = ApiClient.convertToType(data['stages'], [Stage]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Pipeline</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Pipeline</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
 * Unique identifier for the model.
 * @member {String} id
 */
Pipeline.prototype['id'] = undefined;

/**
 * The name of the pipeline.
 * @member {String} name
 */
Pipeline.prototype['name'] = undefined;

/**
 * The list of stages in the pipeline.
 * @member {Array.<module:com.keap.sdk.core/model/Stage>} stages
 */
Pipeline.prototype['stages'] = undefined;


// Implement BaseModel interface:
/**
 * Unique identifier for the model.
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;




export default Pipeline;
