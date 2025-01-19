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
import Automation from './Automation';

/**
 * The ListAutomationResponse model module.
 * @module com.keap.sdk.core/model/ListAutomationResponse
 * @version 0.0.91
 */
class ListAutomationResponse {
    /**
     * Constructs a new <code>ListAutomationResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListAutomationResponse
     */
    constructor() { 
        
        ListAutomationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAutomationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListAutomationResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListAutomationResponse} The populated <code>ListAutomationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAutomationResponse();

            if (data.hasOwnProperty('automation_count')) {
                obj['automation_count'] = ApiClient.convertToType(data['automation_count'], 'Number');
            }
            if (data.hasOwnProperty('automations')) {
                obj['automations'] = ApiClient.convertToType(data['automations'], [Automation]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAutomationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAutomationResponse</code>.
     */
    static validateJSON(data) {
        if (data['automations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['automations'])) {
                throw new Error("Expected the field `automations` to be an array in the JSON data but got " + data['automations']);
            }
            // validate the optional field `automations` (array)
            for (const item of data['automations']) {
                Automation.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }

        return true;
    }


}



/**
 * @member {Number} automation_count
 */
ListAutomationResponse.prototype['automation_count'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Automation>} automations
 */
ListAutomationResponse.prototype['automations'] = undefined;

/**
 * @member {String} next_page_token
 */
ListAutomationResponse.prototype['next_page_token'] = undefined;






export default ListAutomationResponse;
