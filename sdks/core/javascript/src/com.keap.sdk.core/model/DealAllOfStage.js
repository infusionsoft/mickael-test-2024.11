/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Stage from './Stage';

/**
 * The DealAllOfStage model module.
 * @module com.keap.sdk.core/model/DealAllOfStage
 * @version 0.0.84
 */
class DealAllOfStage {
    /**
     * Constructs a new <code>DealAllOfStage</code>.
     * The stage of the deal. This field is required and must be valid.
     * @alias module:com.keap.sdk.core/model/DealAllOfStage
     * @implements module:com.keap.sdk.core/model/Stage
     */
    constructor() { 
        Stage.initialize(this);
        DealAllOfStage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealAllOfStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DealAllOfStage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DealAllOfStage} The populated <code>DealAllOfStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealAllOfStage();
            Stage.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>DealAllOfStage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealAllOfStage</code>.
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
DealAllOfStage.prototype['id'] = undefined;

/**
 * The name of the stage.
 * @member {String} name
 */
DealAllOfStage.prototype['name'] = undefined;

/**
 * The ID of the pipeline.
 * @member {String} pipeline_id
 */
DealAllOfStage.prototype['pipeline_id'] = undefined;


// Implement Stage interface:
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




export default DealAllOfStage;
