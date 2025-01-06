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

/**
 * The CreatePipelineRequest model module.
 * @module com.keap.sdk.core/model/CreatePipelineRequest
 * @version 0.0.79
 */
class CreatePipelineRequest {
    /**
     * Constructs a new <code>CreatePipelineRequest</code>.
     * Request for creating a pipeline.
     * @alias module:com.keap.sdk.core/model/CreatePipelineRequest
     * @param name {String} The name of the pipeline.
     * @param stages {Array.<String>} The stages of the pipeline.
     */
    constructor(name, stages) { 
        
        CreatePipelineRequest.initialize(this, name, stages);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, stages) { 
        obj['name'] = name;
        obj['stages'] = stages;
    }

    /**
     * Constructs a <code>CreatePipelineRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreatePipelineRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreatePipelineRequest} The populated <code>CreatePipelineRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePipelineRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('stages')) {
                obj['stages'] = ApiClient.convertToType(data['stages'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePipelineRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePipelineRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreatePipelineRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['stages'])) {
            throw new Error("Expected the field `stages` to be an array in the JSON data but got " + data['stages']);
        }

        return true;
    }


}

CreatePipelineRequest.RequiredProperties = ["name", "stages"];

/**
 * The name of the pipeline.
 * @member {String} name
 */
CreatePipelineRequest.prototype['name'] = undefined;

/**
 * The stages of the pipeline.
 * @member {Array.<String>} stages
 */
CreatePipelineRequest.prototype['stages'] = undefined;






export default CreatePipelineRequest;
