/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListAutomationIdsResponse model module.
 * @module com.keap.sdk.core/model/ListAutomationIdsResponse
 * @version 0.0.47
 */
class ListAutomationIdsResponse {
    /**
     * Constructs a new <code>ListAutomationIdsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListAutomationIdsResponse
     */
    constructor() { 
        
        ListAutomationIdsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAutomationIdsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListAutomationIdsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListAutomationIdsResponse} The populated <code>ListAutomationIdsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAutomationIdsResponse();

            if (data.hasOwnProperty('automation_ids')) {
                obj['automation_ids'] = ApiClient.convertToType(data['automation_ids'], ['String']);
            }
            if (data.hasOwnProperty('locked_automation_ids')) {
                obj['locked_automation_ids'] = ApiClient.convertToType(data['locked_automation_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAutomationIdsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAutomationIdsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['automation_ids'])) {
            throw new Error("Expected the field `automation_ids` to be an array in the JSON data but got " + data['automation_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['locked_automation_ids'])) {
            throw new Error("Expected the field `locked_automation_ids` to be an array in the JSON data but got " + data['locked_automation_ids']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} automation_ids
 */
ListAutomationIdsResponse.prototype['automation_ids'] = undefined;

/**
 * @member {Array.<String>} locked_automation_ids
 */
ListAutomationIdsResponse.prototype['locked_automation_ids'] = undefined;






export default ListAutomationIdsResponse;
