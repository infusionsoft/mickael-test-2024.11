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

/**
 * The Stage model module.
 * @module com.keap.sdk.core/model/Stage
 * @version 0.0.62
 */
class Stage {
    /**
     * Constructs a new <code>Stage</code>.
     * Represents a stage in a pipeline.
     * @alias module:com.keap.sdk.core/model/Stage
     * @implements module:com.keap.sdk.core/model/BaseModel
     */
    constructor() { 
        BaseModel.initialize(this);
        Stage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Stage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Stage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Stage} The populated <code>Stage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stage();
            BaseModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Stage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Stage</code>.
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
        // ensure the json data is a string
        if (data['pipeline_id'] && !(typeof data['pipeline_id'] === 'string' || data['pipeline_id'] instanceof String)) {
            throw new Error("Expected the field `pipeline_id` to be a primitive type in the JSON string but got " + data['pipeline_id']);
        }

        return true;
    }


}



/**
 * Unique identifier for the model.
 * @member {String} id
 */
Stage.prototype['id'] = undefined;

/**
 * The name of the stage.
 * @member {String} name
 */
Stage.prototype['name'] = undefined;

/**
 * The ID of the pipeline.
 * @member {String} pipeline_id
 */
Stage.prototype['pipeline_id'] = undefined;


// Implement BaseModel interface:
/**
 * Unique identifier for the model.
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;




export default Stage;
