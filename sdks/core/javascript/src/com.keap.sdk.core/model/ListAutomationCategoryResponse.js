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
import AutomationCategory from './AutomationCategory';

/**
 * The ListAutomationCategoryResponse model module.
 * @module com.keap.sdk.core/model/ListAutomationCategoryResponse
 * @version 0.0.25
 */
class ListAutomationCategoryResponse {
    /**
     * Constructs a new <code>ListAutomationCategoryResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListAutomationCategoryResponse
     */
    constructor() { 
        
        ListAutomationCategoryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAutomationCategoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListAutomationCategoryResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListAutomationCategoryResponse} The populated <code>ListAutomationCategoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAutomationCategoryResponse();

            if (data.hasOwnProperty('automation_categories')) {
                obj['automation_categories'] = ApiClient.convertToType(data['automation_categories'], [AutomationCategory]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAutomationCategoryResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAutomationCategoryResponse</code>.
     */
    static validateJSON(data) {
        if (data['automation_categories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['automation_categories'])) {
                throw new Error("Expected the field `automation_categories` to be an array in the JSON data but got " + data['automation_categories']);
            }
            // validate the optional field `automation_categories` (array)
            for (const item of data['automation_categories']) {
                AutomationCategory.validateJSON(item);
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
 * @member {Array.<module:com.keap.sdk.core/model/AutomationCategory>} automation_categories
 */
ListAutomationCategoryResponse.prototype['automation_categories'] = undefined;

/**
 * @member {String} next_page_token
 */
ListAutomationCategoryResponse.prototype['next_page_token'] = undefined;






export default ListAutomationCategoryResponse;
