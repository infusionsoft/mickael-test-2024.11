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

/**
 * The CreateStageRequest model module.
 * @module com.keap.sdk.core/model/CreateStageRequest
 * @version 0.0.98
 */
class CreateStageRequest {
    /**
     * Constructs a new <code>CreateStageRequest</code>.
     * Request for creating a stage.
     * @alias module:com.keap.sdk.core/model/CreateStageRequest
     * @param name {String} The name of the stage.
     * @param pipelineId {String} The ID of the pipeline to which the stage belongs.
     */
    constructor(name, pipelineId) { 
        
        CreateStageRequest.initialize(this, name, pipelineId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, pipelineId) { 
        obj['name'] = name;
        obj['pipeline_id'] = pipelineId;
    }

    /**
     * Constructs a <code>CreateStageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateStageRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateStageRequest} The populated <code>CreateStageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateStageRequest();

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
     * Validates the JSON data with respect to <code>CreateStageRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateStageRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateStageRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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

CreateStageRequest.RequiredProperties = ["name", "pipeline_id"];

/**
 * The name of the stage.
 * @member {String} name
 */
CreateStageRequest.prototype['name'] = undefined;

/**
 * The ID of the pipeline to which the stage belongs.
 * @member {String} pipeline_id
 */
CreateStageRequest.prototype['pipeline_id'] = undefined;






export default CreateStageRequest;
