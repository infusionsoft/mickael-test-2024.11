/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateCommissionProgramRequest model module.
 * @module keap.core.v2/model/CreateCommissionProgramRequest
 */
class CreateCommissionProgramRequest {
    /**
     * Constructs a new <code>CreateCommissionProgramRequest</code>.
     * @alias module:keap.core.v2/model/CreateCommissionProgramRequest
     * @param name {String} The name of the Commission Program
     */
    constructor(name) { 
        
        CreateCommissionProgramRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateCommissionProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/CreateCommissionProgramRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/CreateCommissionProgramRequest} The populated <code>CreateCommissionProgramRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCommissionProgramRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCommissionProgramRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCommissionProgramRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCommissionProgramRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }

        return true;
    }


}

CreateCommissionProgramRequest.RequiredProperties = ["name"];

/**
 * The name of the Commission Program
 * @member {String} name
 */
CreateCommissionProgramRequest.prototype['name'] = undefined;

/**
 * The notes of the Commission Program
 * @member {String} notes
 */
CreateCommissionProgramRequest.prototype['notes'] = undefined;

/**
 * The priority of the Commission Program
 * @member {Number} priority
 */
CreateCommissionProgramRequest.prototype['priority'] = undefined;






export default CreateCommissionProgramRequest;
