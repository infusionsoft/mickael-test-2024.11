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
 * The BasicUser model module.
 * @module com.keap.sdk.core/model/BasicUser
 * @version 0.0.101
 */
class BasicUser {
    /**
     * Constructs a new <code>BasicUser</code>.
     * @alias module:com.keap.sdk.core/model/BasicUser
     */
    constructor() { 
        
        BasicUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/BasicUser} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/BasicUser} The populated <code>BasicUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicUser();

            if (data.hasOwnProperty('email_address')) {
                obj['email_address'] = ApiClient.convertToType(data['email_address'], 'String');
            }
            if (data.hasOwnProperty('family_name')) {
                obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
            }
            if (data.hasOwnProperty('given_name')) {
                obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BasicUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasicUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email_address'] && !(typeof data['email_address'] === 'string' || data['email_address'] instanceof String)) {
            throw new Error("Expected the field `email_address` to be a primitive type in the JSON string but got " + data['email_address']);
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
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * @member {String} email_address
 */
BasicUser.prototype['email_address'] = undefined;

/**
 * @member {String} family_name
 */
BasicUser.prototype['family_name'] = undefined;

/**
 * @member {String} given_name
 */
BasicUser.prototype['given_name'] = undefined;

/**
 * @member {String} id
 */
BasicUser.prototype['id'] = undefined;






export default BasicUser;
