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
import CustomFieldMetaData from './CustomFieldMetaData';

/**
 * The ObjectModel model module.
 * @module com.keap.sdk.core/model/ObjectModel
 * @version 0.0.41
 */
class ObjectModel {
    /**
     * Constructs a new <code>ObjectModel</code>.
     * @alias module:com.keap.sdk.core/model/ObjectModel
     */
    constructor() { 
        
        ObjectModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ObjectModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ObjectModel} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ObjectModel} The populated <code>ObjectModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectModel();

            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomFieldMetaData]);
            }
            if (data.hasOwnProperty('optional_properties')) {
                obj['optional_properties'] = ApiClient.convertToType(data['optional_properties'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ObjectModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ObjectModel</code>.
     */
    static validateJSON(data) {
        if (data['custom_fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom_fields'])) {
                throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
            }
            // validate the optional field `custom_fields` (array)
            for (const item of data['custom_fields']) {
                CustomFieldMetaData.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['optional_properties'])) {
            throw new Error("Expected the field `optional_properties` to be an array in the JSON data but got " + data['optional_properties']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldMetaData>} custom_fields
 */
ObjectModel.prototype['custom_fields'] = undefined;

/**
 * These fields are not transmitted by default on this model, but can be requested by specifying them in a comma-separated list in the optional_properties query parameter.
 * @member {Array.<String>} optional_properties
 */
ObjectModel.prototype['optional_properties'] = undefined;






export default ObjectModel;
