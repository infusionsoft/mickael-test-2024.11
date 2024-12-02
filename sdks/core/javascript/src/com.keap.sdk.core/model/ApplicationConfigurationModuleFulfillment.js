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

/**
 * The ApplicationConfigurationModuleFulfillment model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleFulfillment
 * @version 0.0.26
 */
class ApplicationConfigurationModuleFulfillment {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleFulfillment</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleFulfillment
     */
    constructor() { 
        
        ApplicationConfigurationModuleFulfillment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleFulfillment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleFulfillment} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleFulfillment} The populated <code>ApplicationConfigurationModuleFulfillment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleFulfillment();

            if (data.hasOwnProperty('default_message_fields')) {
                obj['default_message_fields'] = ApiClient.convertToType(data['default_message_fields'], 'String');
            }
            if (data.hasOwnProperty('default_message_to')) {
                obj['default_message_to'] = ApiClient.convertToType(data['default_message_to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleFulfillment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleFulfillment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['default_message_fields'] && !(typeof data['default_message_fields'] === 'string' || data['default_message_fields'] instanceof String)) {
            throw new Error("Expected the field `default_message_fields` to be a primitive type in the JSON string but got " + data['default_message_fields']);
        }
        // ensure the json data is a string
        if (data['default_message_to'] && !(typeof data['default_message_to'] === 'string' || data['default_message_to'] instanceof String)) {
            throw new Error("Expected the field `default_message_to` to be a primitive type in the JSON string but got " + data['default_message_to']);
        }

        return true;
    }


}



/**
 * @member {String} default_message_fields
 */
ApplicationConfigurationModuleFulfillment.prototype['default_message_fields'] = undefined;

/**
 * @member {String} default_message_to
 */
ApplicationConfigurationModuleFulfillment.prototype['default_message_to'] = undefined;






export default ApplicationConfigurationModuleFulfillment;
