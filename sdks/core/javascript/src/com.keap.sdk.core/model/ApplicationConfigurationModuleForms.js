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
 * The ApplicationConfigurationModuleForms model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleForms
 * @version 0.0.38
 */
class ApplicationConfigurationModuleForms {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleForms</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleForms
     */
    constructor() { 
        
        ApplicationConfigurationModuleForms.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleForms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleForms} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleForms} The populated <code>ApplicationConfigurationModuleForms</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleForms();

            if (data.hasOwnProperty('spam_filters_enabled')) {
                obj['spam_filters_enabled'] = ApiClient.convertToType(data['spam_filters_enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleForms</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleForms</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} spam_filters_enabled
 */
ApplicationConfigurationModuleForms.prototype['spam_filters_enabled'] = undefined;






export default ApplicationConfigurationModuleForms;
