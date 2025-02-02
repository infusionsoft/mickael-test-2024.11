/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetUserInfoResponseBase model module.
 * @module keap.sdk.core/model/GetUserInfoResponseBase
 */
class GetUserInfoResponseBase {
    /**
     * Constructs a new <code>GetUserInfoResponseBase</code>.
     * @alias module:keap.sdk.core/model/GetUserInfoResponseBase
     */
    constructor() { 
        
        GetUserInfoResponseBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetUserInfoResponseBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/GetUserInfoResponseBase} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/GetUserInfoResponseBase} The populated <code>GetUserInfoResponseBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetUserInfoResponseBase();

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
                obj['id'] = ApiClient.convertToType(data['id'], Object);
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
     * Validates the JSON data with respect to <code>GetUserInfoResponseBase</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetUserInfoResponseBase</code>.
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
GetUserInfoResponseBase.prototype['email'] = undefined;

/**
 * @member {String} family_name
 */
GetUserInfoResponseBase.prototype['family_name'] = undefined;

/**
 * @member {String} given_name
 */
GetUserInfoResponseBase.prototype['given_name'] = undefined;

/**
 * @member {Object} id
 */
GetUserInfoResponseBase.prototype['id'] = undefined;

/**
 * @member {Boolean} is_admin
 */
GetUserInfoResponseBase.prototype['is_admin'] = undefined;

/**
 * @member {String} keap_id
 */
GetUserInfoResponseBase.prototype['keap_id'] = undefined;

/**
 * @member {String} middle_name
 */
GetUserInfoResponseBase.prototype['middle_name'] = undefined;

/**
 * @member {String} preferred_name
 */
GetUserInfoResponseBase.prototype['preferred_name'] = undefined;

/**
 * @member {String} sub
 */
GetUserInfoResponseBase.prototype['sub'] = undefined;






export default GetUserInfoResponseBase;
