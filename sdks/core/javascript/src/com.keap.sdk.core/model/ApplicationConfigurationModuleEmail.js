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
 * The ApplicationConfigurationModuleEmail model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleEmail
 * @version 0.0.73
 */
class ApplicationConfigurationModuleEmail {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleEmail</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail
     */
    constructor() { 
        
        ApplicationConfigurationModuleEmail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEmail} The populated <code>ApplicationConfigurationModuleEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleEmail();

            if (data.hasOwnProperty('append_contact_key_to_links')) {
                obj['append_contact_key_to_links'] = ApiClient.convertToType(data['append_contact_key_to_links'], 'Boolean');
            }
            if (data.hasOwnProperty('default_opt_in_link')) {
                obj['default_opt_in_link'] = ApiClient.convertToType(data['default_opt_in_link'], 'String');
            }
            if (data.hasOwnProperty('default_opt_out_link')) {
                obj['default_opt_out_link'] = ApiClient.convertToType(data['default_opt_out_link'], 'String');
            }
            if (data.hasOwnProperty('hide_emails_to_and_from_domains')) {
                obj['hide_emails_to_and_from_domains'] = ApiClient.convertToType(data['hide_emails_to_and_from_domains'], 'String');
            }
            if (data.hasOwnProperty('whitelisted_domains')) {
                obj['whitelisted_domains'] = ApiClient.convertToType(data['whitelisted_domains'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleEmail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleEmail</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['default_opt_in_link'] && !(typeof data['default_opt_in_link'] === 'string' || data['default_opt_in_link'] instanceof String)) {
            throw new Error("Expected the field `default_opt_in_link` to be a primitive type in the JSON string but got " + data['default_opt_in_link']);
        }
        // ensure the json data is a string
        if (data['default_opt_out_link'] && !(typeof data['default_opt_out_link'] === 'string' || data['default_opt_out_link'] instanceof String)) {
            throw new Error("Expected the field `default_opt_out_link` to be a primitive type in the JSON string but got " + data['default_opt_out_link']);
        }
        // ensure the json data is a string
        if (data['hide_emails_to_and_from_domains'] && !(typeof data['hide_emails_to_and_from_domains'] === 'string' || data['hide_emails_to_and_from_domains'] instanceof String)) {
            throw new Error("Expected the field `hide_emails_to_and_from_domains` to be a primitive type in the JSON string but got " + data['hide_emails_to_and_from_domains']);
        }
        // ensure the json data is a string
        if (data['whitelisted_domains'] && !(typeof data['whitelisted_domains'] === 'string' || data['whitelisted_domains'] instanceof String)) {
            throw new Error("Expected the field `whitelisted_domains` to be a primitive type in the JSON string but got " + data['whitelisted_domains']);
        }

        return true;
    }


}



/**
 * @member {Boolean} append_contact_key_to_links
 */
ApplicationConfigurationModuleEmail.prototype['append_contact_key_to_links'] = undefined;

/**
 * @member {String} default_opt_in_link
 */
ApplicationConfigurationModuleEmail.prototype['default_opt_in_link'] = undefined;

/**
 * @member {String} default_opt_out_link
 */
ApplicationConfigurationModuleEmail.prototype['default_opt_out_link'] = undefined;

/**
 * @member {String} hide_emails_to_and_from_domains
 */
ApplicationConfigurationModuleEmail.prototype['hide_emails_to_and_from_domains'] = undefined;

/**
 * @member {String} whitelisted_domains
 */
ApplicationConfigurationModuleEmail.prototype['whitelisted_domains'] = undefined;






export default ApplicationConfigurationModuleEmail;
