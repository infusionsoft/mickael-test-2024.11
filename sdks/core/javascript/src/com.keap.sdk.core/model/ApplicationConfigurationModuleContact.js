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
import ApplicationConfigurationModuleContactAddressLabels from './ApplicationConfigurationModuleContactAddressLabels';

/**
 * The ApplicationConfigurationModuleContact model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleContact
 * @version 0.0.52
 */
class ApplicationConfigurationModuleContact {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleContact</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact
     */
    constructor() { 
        
        ApplicationConfigurationModuleContact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContact} The populated <code>ApplicationConfigurationModuleContact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleContact();

            if (data.hasOwnProperty('address_labels')) {
                obj['address_labels'] = ApplicationConfigurationModuleContactAddressLabels.constructFromObject(data['address_labels']);
            }
            if (data.hasOwnProperty('contact_types')) {
                obj['contact_types'] = ApiClient.convertToType(data['contact_types'], 'String');
            }
            if (data.hasOwnProperty('default_new_contact_form')) {
                obj['default_new_contact_form'] = ApiClient.convertToType(data['default_new_contact_form'], 'String');
            }
            if (data.hasOwnProperty('disable_contact_edit_in_client_login')) {
                obj['disable_contact_edit_in_client_login'] = ApiClient.convertToType(data['disable_contact_edit_in_client_login'], 'Boolean');
            }
            if (data.hasOwnProperty('fax_types')) {
                obj['fax_types'] = ApiClient.convertToType(data['fax_types'], 'String');
            }
            if (data.hasOwnProperty('phone_types')) {
                obj['phone_types'] = ApiClient.convertToType(data['phone_types'], 'String');
            }
            if (data.hasOwnProperty('suffix_types')) {
                obj['suffix_types'] = ApiClient.convertToType(data['suffix_types'], 'String');
            }
            if (data.hasOwnProperty('title_types')) {
                obj['title_types'] = ApiClient.convertToType(data['title_types'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleContact</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleContact</code>.
     */
    static validateJSON(data) {
        // validate the optional field `address_labels`
        if (data['address_labels']) { // data not null
          ApplicationConfigurationModuleContactAddressLabels.validateJSON(data['address_labels']);
        }
        // ensure the json data is a string
        if (data['contact_types'] && !(typeof data['contact_types'] === 'string' || data['contact_types'] instanceof String)) {
            throw new Error("Expected the field `contact_types` to be a primitive type in the JSON string but got " + data['contact_types']);
        }
        // ensure the json data is a string
        if (data['default_new_contact_form'] && !(typeof data['default_new_contact_form'] === 'string' || data['default_new_contact_form'] instanceof String)) {
            throw new Error("Expected the field `default_new_contact_form` to be a primitive type in the JSON string but got " + data['default_new_contact_form']);
        }
        // ensure the json data is a string
        if (data['fax_types'] && !(typeof data['fax_types'] === 'string' || data['fax_types'] instanceof String)) {
            throw new Error("Expected the field `fax_types` to be a primitive type in the JSON string but got " + data['fax_types']);
        }
        // ensure the json data is a string
        if (data['phone_types'] && !(typeof data['phone_types'] === 'string' || data['phone_types'] instanceof String)) {
            throw new Error("Expected the field `phone_types` to be a primitive type in the JSON string but got " + data['phone_types']);
        }
        // ensure the json data is a string
        if (data['suffix_types'] && !(typeof data['suffix_types'] === 'string' || data['suffix_types'] instanceof String)) {
            throw new Error("Expected the field `suffix_types` to be a primitive type in the JSON string but got " + data['suffix_types']);
        }
        // ensure the json data is a string
        if (data['title_types'] && !(typeof data['title_types'] === 'string' || data['title_types'] instanceof String)) {
            throw new Error("Expected the field `title_types` to be a primitive type in the JSON string but got " + data['title_types']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContactAddressLabels} address_labels
 */
ApplicationConfigurationModuleContact.prototype['address_labels'] = undefined;

/**
 * @member {String} contact_types
 */
ApplicationConfigurationModuleContact.prototype['contact_types'] = undefined;

/**
 * @member {String} default_new_contact_form
 */
ApplicationConfigurationModuleContact.prototype['default_new_contact_form'] = undefined;

/**
 * @member {Boolean} disable_contact_edit_in_client_login
 */
ApplicationConfigurationModuleContact.prototype['disable_contact_edit_in_client_login'] = undefined;

/**
 * @member {String} fax_types
 */
ApplicationConfigurationModuleContact.prototype['fax_types'] = undefined;

/**
 * @member {String} phone_types
 */
ApplicationConfigurationModuleContact.prototype['phone_types'] = undefined;

/**
 * @member {String} suffix_types
 */
ApplicationConfigurationModuleContact.prototype['suffix_types'] = undefined;

/**
 * @member {String} title_types
 */
ApplicationConfigurationModuleContact.prototype['title_types'] = undefined;






export default ApplicationConfigurationModuleContact;
