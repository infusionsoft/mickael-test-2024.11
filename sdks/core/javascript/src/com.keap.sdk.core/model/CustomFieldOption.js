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
 * The CustomFieldOption model module.
 * @module com.keap.sdk.core/model/CustomFieldOption
 * @version 0.0.70
 */
class CustomFieldOption {
    /**
     * Constructs a new <code>CustomFieldOption</code>.
     * @alias module:com.keap.sdk.core/model/CustomFieldOption
     */
    constructor() { 
        
        CustomFieldOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomFieldOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CustomFieldOption} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CustomFieldOption} The populated <code>CustomFieldOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFieldOption();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [CustomFieldOption]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomFieldOption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomFieldOption</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                CustomFieldOption.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
CustomFieldOption.prototype['id'] = undefined;

/**
 * @member {String} label
 */
CustomFieldOption.prototype['label'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldOption>} options
 */
CustomFieldOption.prototype['options'] = undefined;






export default CustomFieldOption;
