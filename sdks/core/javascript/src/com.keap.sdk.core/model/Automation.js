/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AutomationLockStatus from './AutomationLockStatus';

/**
 * The Automation model module.
 * @module com.keap.sdk.core/model/Automation
 * @version 0.0.18
 */
class Automation {
    /**
     * Constructs a new <code>Automation</code>.
     * @alias module:com.keap.sdk.core/model/Automation
     */
    constructor() { 
        
        Automation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Automation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Automation} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Automation} The populated <code>Automation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Automation();

            if (data.hasOwnProperty('active_contacts')) {
                obj['active_contacts'] = ApiClient.convertToType(data['active_contacts'], 'Number');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('current_edit_lock_status')) {
                obj['current_edit_lock_status'] = AutomationLockStatus.constructFromObject(data['current_edit_lock_status']);
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('published_by')) {
                obj['published_by'] = ApiClient.convertToType(data['published_by'], 'String');
            }
            if (data.hasOwnProperty('published_date')) {
                obj['published_date'] = ApiClient.convertToType(data['published_date'], 'Date');
            }
            if (data.hasOwnProperty('published_timezone')) {
                obj['published_timezone'] = ApiClient.convertToType(data['published_timezone'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Automation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Automation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['categories'])) {
            throw new Error("Expected the field `categories` to be an array in the JSON data but got " + data['categories']);
        }
        // validate the optional field `current_edit_lock_status`
        if (data['current_edit_lock_status']) { // data not null
          AutomationLockStatus.validateJSON(data['current_edit_lock_status']);
        }
        // ensure the json data is a string
        if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
            throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['published_by'] && !(typeof data['published_by'] === 'string' || data['published_by'] instanceof String)) {
            throw new Error("Expected the field `published_by` to be a primitive type in the JSON string but got " + data['published_by']);
        }
        // ensure the json data is a string
        if (data['published_timezone'] && !(typeof data['published_timezone'] === 'string' || data['published_timezone'] instanceof String)) {
            throw new Error("Expected the field `published_timezone` to be a primitive type in the JSON string but got " + data['published_timezone']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {Number} active_contacts
 */
Automation.prototype['active_contacts'] = undefined;

/**
 * @member {Array.<String>} categories
 */
Automation.prototype['categories'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/AutomationLockStatus} current_edit_lock_status
 */
Automation.prototype['current_edit_lock_status'] = undefined;

/**
 * @member {String} error_message
 */
Automation.prototype['error_message'] = undefined;

/**
 * @member {String} id
 */
Automation.prototype['id'] = undefined;

/**
 * @member {Boolean} locked
 */
Automation.prototype['locked'] = undefined;

/**
 * @member {String} published_by
 */
Automation.prototype['published_by'] = undefined;

/**
 * @member {Date} published_date
 */
Automation.prototype['published_date'] = undefined;

/**
 * @member {String} published_timezone
 */
Automation.prototype['published_timezone'] = undefined;

/**
 * @member {String} status
 */
Automation.prototype['status'] = undefined;

/**
 * @member {String} title
 */
Automation.prototype['title'] = undefined;






export default Automation;
