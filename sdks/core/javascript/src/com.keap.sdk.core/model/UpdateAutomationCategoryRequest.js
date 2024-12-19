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
 * The UpdateAutomationCategoryRequest model module.
 * @module com.keap.sdk.core/model/UpdateAutomationCategoryRequest
 * @version 0.0.58
 */
class UpdateAutomationCategoryRequest {
    /**
     * Constructs a new <code>UpdateAutomationCategoryRequest</code>.
     * @alias module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest
     */
    constructor() { 
        
        UpdateAutomationCategoryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateAutomationCategoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} The populated <code>UpdateAutomationCategoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAutomationCategoryRequest();

            if (data.hasOwnProperty('apply_category')) {
                obj['apply_category'] = ApiClient.convertToType(data['apply_category'], 'Boolean');
            }
            if (data.hasOwnProperty('automation_ids')) {
                obj['automation_ids'] = ApiClient.convertToType(data['automation_ids'], ['Number']);
            }
            if (data.hasOwnProperty('category_ids')) {
                obj['category_ids'] = ApiClient.convertToType(data['category_ids'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateAutomationCategoryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAutomationCategoryRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['automation_ids'])) {
            throw new Error("Expected the field `automation_ids` to be an array in the JSON data but got " + data['automation_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['category_ids'])) {
            throw new Error("Expected the field `category_ids` to be an array in the JSON data but got " + data['category_ids']);
        }

        return true;
    }


}



/**
 * @member {Boolean} apply_category
 */
UpdateAutomationCategoryRequest.prototype['apply_category'] = undefined;

/**
 * @member {Array.<Number>} automation_ids
 */
UpdateAutomationCategoryRequest.prototype['automation_ids'] = undefined;

/**
 * @member {Array.<Number>} category_ids
 */
UpdateAutomationCategoryRequest.prototype['category_ids'] = undefined;






export default UpdateAutomationCategoryRequest;
