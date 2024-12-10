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
import ApplicationCompany from './ApplicationCompany';
import ApplicationFeaturesEnabled from './ApplicationFeaturesEnabled';

/**
 * The ApplicationConfigurationModuleApplication model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleApplication
 * @version 0.0.39
 */
class ApplicationConfigurationModuleApplication {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleApplication</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleApplication
     */
    constructor() { 
        
        ApplicationConfigurationModuleApplication.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleApplication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleApplication} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleApplication} The populated <code>ApplicationConfigurationModuleApplication</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleApplication();

            if (data.hasOwnProperty('company')) {
                obj['company'] = ApplicationCompany.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('default_view_locale')) {
                obj['default_view_locale'] = ApiClient.convertToType(data['default_view_locale'], 'String');
            }
            if (data.hasOwnProperty('features_enabled')) {
                obj['features_enabled'] = ApplicationFeaturesEnabled.constructFromObject(data['features_enabled']);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleApplication</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleApplication</code>.
     */
    static validateJSON(data) {
        // validate the optional field `company`
        if (data['company']) { // data not null
          ApplicationCompany.validateJSON(data['company']);
        }
        // ensure the json data is a string
        if (data['default_view_locale'] && !(typeof data['default_view_locale'] === 'string' || data['default_view_locale'] instanceof String)) {
            throw new Error("Expected the field `default_view_locale` to be a primitive type in the JSON string but got " + data['default_view_locale']);
        }
        // validate the optional field `features_enabled`
        if (data['features_enabled']) { // data not null
          ApplicationFeaturesEnabled.validateJSON(data['features_enabled']);
        }
        // ensure the json data is a string
        if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
            throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/ApplicationCompany} company
 */
ApplicationConfigurationModuleApplication.prototype['company'] = undefined;

/**
 * @member {String} default_view_locale
 */
ApplicationConfigurationModuleApplication.prototype['default_view_locale'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ApplicationFeaturesEnabled} features_enabled
 */
ApplicationConfigurationModuleApplication.prototype['features_enabled'] = undefined;

/**
 * @member {String} time_zone
 */
ApplicationConfigurationModuleApplication.prototype['time_zone'] = undefined;






export default ApplicationConfigurationModuleApplication;
