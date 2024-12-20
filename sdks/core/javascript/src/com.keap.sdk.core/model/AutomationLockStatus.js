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
 * The AutomationLockStatus model module.
 * @module com.keap.sdk.core/model/AutomationLockStatus
 * @version 0.0.62
 */
class AutomationLockStatus {
    /**
     * Constructs a new <code>AutomationLockStatus</code>.
     * @alias module:com.keap.sdk.core/model/AutomationLockStatus
     */
    constructor() { 
        
        AutomationLockStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationLockStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AutomationLockStatus} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AutomationLockStatus} The populated <code>AutomationLockStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationLockStatus();

            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('user_firstname')) {
                obj['user_firstname'] = ApiClient.convertToType(data['user_firstname'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('user_name')) {
                obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AutomationLockStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutomationLockStatus</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['user_firstname'] && !(typeof data['user_firstname'] === 'string' || data['user_firstname'] instanceof String)) {
            throw new Error("Expected the field `user_firstname` to be a primitive type in the JSON string but got " + data['user_firstname']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }
        // ensure the json data is a string
        if (data['user_name'] && !(typeof data['user_name'] === 'string' || data['user_name'] instanceof String)) {
            throw new Error("Expected the field `user_name` to be a primitive type in the JSON string but got " + data['user_name']);
        }

        return true;
    }


}



/**
 * @member {Boolean} locked
 */
AutomationLockStatus.prototype['locked'] = undefined;

/**
 * @member {String} user_firstname
 */
AutomationLockStatus.prototype['user_firstname'] = undefined;

/**
 * @member {String} user_id
 */
AutomationLockStatus.prototype['user_id'] = undefined;

/**
 * @member {String} user_name
 */
AutomationLockStatus.prototype['user_name'] = undefined;






export default AutomationLockStatus;
