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
 * The ApplicationConfigurationModuleTemplate model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleTemplate
 * @version 0.0.24
 */
class ApplicationConfigurationModuleTemplate {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleTemplate</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleTemplate
     */
    constructor() { 
        
        ApplicationConfigurationModuleTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleTemplate} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleTemplate} The populated <code>ApplicationConfigurationModuleTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleTemplate();

            if (data.hasOwnProperty('default_country_code')) {
                obj['default_country_code'] = ApiClient.convertToType(data['default_country_code'], 'Number');
            }
            if (data.hasOwnProperty('default_user_id')) {
                obj['default_user_id'] = ApiClient.convertToType(data['default_user_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleTemplate</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} default_country_code
 */
ApplicationConfigurationModuleTemplate.prototype['default_country_code'] = undefined;

/**
 * @member {Number} default_user_id
 */
ApplicationConfigurationModuleTemplate.prototype['default_user_id'] = undefined;






export default ApplicationConfigurationModuleTemplate;
