/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFieldMetaData from './CustomFieldMetaData';

/**
 * The CreateCustomFieldResponse model module.
 * @module keap.sdk.core/model/CreateCustomFieldResponse
 */
class CreateCustomFieldResponse {
    /**
     * Constructs a new <code>CreateCustomFieldResponse</code>.
     * @alias module:keap.sdk.core/model/CreateCustomFieldResponse
     */
    constructor() { 
        
        CreateCustomFieldResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCustomFieldResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/CreateCustomFieldResponse} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/CreateCustomFieldResponse} The populated <code>CreateCustomFieldResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCustomFieldResponse();

            if (data.hasOwnProperty('custom_field')) {
                obj['custom_field'] = CustomFieldMetaData.constructFromObject(data['custom_field']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCustomFieldResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCustomFieldResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `custom_field`
        if (data['custom_field']) { // data not null
          CustomFieldMetaData.validateJSON(data['custom_field']);
        }

        return true;
    }


}



/**
 * @member {module:keap.sdk.core/model/CustomFieldMetaData} custom_field
 */
CreateCustomFieldResponse.prototype['custom_field'] = undefined;






export default CreateCustomFieldResponse;
