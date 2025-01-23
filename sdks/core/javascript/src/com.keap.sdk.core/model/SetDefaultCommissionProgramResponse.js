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

/**
 * The SetDefaultCommissionProgramResponse model module.
 * @module com.keap.sdk.core/model/SetDefaultCommissionProgramResponse
 * @version 0.0.103
 */
class SetDefaultCommissionProgramResponse {
    /**
     * Constructs a new <code>SetDefaultCommissionProgramResponse</code>.
     * @alias module:com.keap.sdk.core/model/SetDefaultCommissionProgramResponse
     */
    constructor() { 
        
        SetDefaultCommissionProgramResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetDefaultCommissionProgramResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/SetDefaultCommissionProgramResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/SetDefaultCommissionProgramResponse} The populated <code>SetDefaultCommissionProgramResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetDefaultCommissionProgramResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetDefaultCommissionProgramResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetDefaultCommissionProgramResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
SetDefaultCommissionProgramResponse.prototype['id'] = undefined;

/**
 * @member {String} message
 */
SetDefaultCommissionProgramResponse.prototype['message'] = undefined;






export default SetDefaultCommissionProgramResponse;
