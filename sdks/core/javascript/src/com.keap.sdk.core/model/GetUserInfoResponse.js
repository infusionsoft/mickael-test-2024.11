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
 * The GetUserInfoResponse model module.
 * @module com.keap.sdk.core/model/GetUserInfoResponse
 * @version 0.0.100
 */
class GetUserInfoResponse {
    /**
     * Constructs a new <code>GetUserInfoResponse</code>.
     * @alias module:com.keap.sdk.core/model/GetUserInfoResponse
     */
    constructor() { 
        
        GetUserInfoResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUserInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/GetUserInfoResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/GetUserInfoResponse} The populated <code>GetUserInfoResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUserInfoResponse();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('family_name')) {
                obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
            }
            if (data.hasOwnProperty('given_name')) {
                obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
            if (data.hasOwnProperty('keap_id')) {
                obj['keap_id'] = ApiClient.convertToType(data['keap_id'], 'String');
            }
            if (data.hasOwnProperty('middle_name')) {
                obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
            }
            if (data.hasOwnProperty('preferred_name')) {
                obj['preferred_name'] = ApiClient.convertToType(data['preferred_name'], 'String');
            }
            if (data.hasOwnProperty('sub')) {
                obj['sub'] = ApiClient.convertToType(data['sub'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetUserInfoResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetUserInfoResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['family_name'] && !(typeof data['family_name'] === 'string' || data['family_name'] instanceof String)) {
            throw new Error("Expected the field `family_name` to be a primitive type in the JSON string but got " + data['family_name']);
        }
        // ensure the json data is a string
        if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
            throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
        }
        // ensure the json data is a string
        if (data['keap_id'] && !(typeof data['keap_id'] === 'string' || data['keap_id'] instanceof String)) {
            throw new Error("Expected the field `keap_id` to be a primitive type in the JSON string but got " + data['keap_id']);
        }
        // ensure the json data is a string
        if (data['middle_name'] && !(typeof data['middle_name'] === 'string' || data['middle_name'] instanceof String)) {
            throw new Error("Expected the field `middle_name` to be a primitive type in the JSON string but got " + data['middle_name']);
        }
        // ensure the json data is a string
        if (data['preferred_name'] && !(typeof data['preferred_name'] === 'string' || data['preferred_name'] instanceof String)) {
            throw new Error("Expected the field `preferred_name` to be a primitive type in the JSON string but got " + data['preferred_name']);
        }
        // ensure the json data is a string
        if (data['sub'] && !(typeof data['sub'] === 'string' || data['sub'] instanceof String)) {
            throw new Error("Expected the field `sub` to be a primitive type in the JSON string but got " + data['sub']);
        }

        return true;
    }


}



/**
 * @member {String} email
 */
GetUserInfoResponse.prototype['email'] = undefined;

/**
 * @member {String} family_name
 */
GetUserInfoResponse.prototype['family_name'] = undefined;

/**
 * @member {String} given_name
 */
GetUserInfoResponse.prototype['given_name'] = undefined;

/**
 * @member {Number} id
 */
GetUserInfoResponse.prototype['id'] = undefined;

/**
 * @member {Boolean} is_admin
 */
GetUserInfoResponse.prototype['is_admin'] = undefined;

/**
 * @member {String} keap_id
 */
GetUserInfoResponse.prototype['keap_id'] = undefined;

/**
 * @member {String} middle_name
 */
GetUserInfoResponse.prototype['middle_name'] = undefined;

/**
 * @member {String} preferred_name
 */
GetUserInfoResponse.prototype['preferred_name'] = undefined;

/**
 * @member {String} sub
 */
GetUserInfoResponse.prototype['sub'] = undefined;






export default GetUserInfoResponse;
