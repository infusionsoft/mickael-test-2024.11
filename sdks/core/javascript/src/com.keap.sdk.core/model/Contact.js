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
import Address from './Address';
import BasicCompany from './BasicCompany';
import ContactUtmResponse from './ContactUtmResponse';
import CustomFieldValue from './CustomFieldValue';
import EmailAddress from './EmailAddress';
import FaxNumber from './FaxNumber';
import Link from './Link';
import Origin from './Origin';
import PhoneNumber from './PhoneNumber';
import SocialAccount from './SocialAccount';

/**
 * The Contact model module.
 * @module com.keap.sdk.core/model/Contact
 * @version 0.0.66
 */
class Contact {
    /**
     * Constructs a new <code>Contact</code>.
     * @alias module:com.keap.sdk.core/model/Contact
     */
    constructor() { 
        
        Contact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Contact} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Contact} The populated <code>Contact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address]);
            }
            if (data.hasOwnProperty('anniversary_date')) {
                obj['anniversary_date'] = ApiClient.convertToType(data['anniversary_date'], 'String');
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = BasicCompany.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('contact_type')) {
                obj['contact_type'] = ApiClient.convertToType(data['contact_type'], 'String');
            }
            if (data.hasOwnProperty('create_time')) {
                obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomFieldValue]);
            }
            if (data.hasOwnProperty('email_addresses')) {
                obj['email_addresses'] = ApiClient.convertToType(data['email_addresses'], [EmailAddress]);
            }
            if (data.hasOwnProperty('family_name')) {
                obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
            }
            if (data.hasOwnProperty('fax_numbers')) {
                obj['fax_numbers'] = ApiClient.convertToType(data['fax_numbers'], [FaxNumber]);
            }
            if (data.hasOwnProperty('given_name')) {
                obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('job_title')) {
                obj['job_title'] = ApiClient.convertToType(data['job_title'], 'String');
            }
            if (data.hasOwnProperty('leadsource_id')) {
                obj['leadsource_id'] = ApiClient.convertToType(data['leadsource_id'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [Link]);
            }
            if (data.hasOwnProperty('middle_name')) {
                obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = Origin.constructFromObject(data['origin']);
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
            }
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = ApiClient.convertToType(data['phone_numbers'], [PhoneNumber]);
            }
            if (data.hasOwnProperty('preferred_locale')) {
                obj['preferred_locale'] = ApiClient.convertToType(data['preferred_locale'], 'String');
            }
            if (data.hasOwnProperty('preferred_name')) {
                obj['preferred_name'] = ApiClient.convertToType(data['preferred_name'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('referral_code')) {
                obj['referral_code'] = ApiClient.convertToType(data['referral_code'], 'String');
            }
            if (data.hasOwnProperty('score_value')) {
                obj['score_value'] = ApiClient.convertToType(data['score_value'], 'String');
            }
            if (data.hasOwnProperty('social_accounts')) {
                obj['social_accounts'] = ApiClient.convertToType(data['social_accounts'], [SocialAccount]);
            }
            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('spouse_name')) {
                obj['spouse_name'] = ApiClient.convertToType(data['spouse_name'], 'String');
            }
            if (data.hasOwnProperty('suffix')) {
                obj['suffix'] = ApiClient.convertToType(data['suffix'], 'String');
            }
            if (data.hasOwnProperty('tag_ids')) {
                obj['tag_ids'] = ApiClient.convertToType(data['tag_ids'], ['String']);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');
            }
            if (data.hasOwnProperty('utm_parameters')) {
                obj['utm_parameters'] = ApiClient.convertToType(data['utm_parameters'], [ContactUtmResponse]);
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Contact</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contact</code>.
     */
    static validateJSON(data) {
        if (data['addresses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['addresses'])) {
                throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
            }
            // validate the optional field `addresses` (array)
            for (const item of data['addresses']) {
                Address.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['anniversary_date'] && !(typeof data['anniversary_date'] === 'string' || data['anniversary_date'] instanceof String)) {
            throw new Error("Expected the field `anniversary_date` to be a primitive type in the JSON string but got " + data['anniversary_date']);
        }
        // ensure the json data is a string
        if (data['birth_date'] && !(typeof data['birth_date'] === 'string' || data['birth_date'] instanceof String)) {
            throw new Error("Expected the field `birth_date` to be a primitive type in the JSON string but got " + data['birth_date']);
        }
        // validate the optional field `company`
        if (data['company']) { // data not null
          BasicCompany.validateJSON(data['company']);
        }
        // ensure the json data is a string
        if (data['contact_type'] && !(typeof data['contact_type'] === 'string' || data['contact_type'] instanceof String)) {
            throw new Error("Expected the field `contact_type` to be a primitive type in the JSON string but got " + data['contact_type']);
        }
        // ensure the json data is a string
        if (data['create_time'] && !(typeof data['create_time'] === 'string' || data['create_time'] instanceof String)) {
            throw new Error("Expected the field `create_time` to be a primitive type in the JSON string but got " + data['create_time']);
        }
        if (data['custom_fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom_fields'])) {
                throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
            }
            // validate the optional field `custom_fields` (array)
            for (const item of data['custom_fields']) {
                CustomFieldValue.validateJSON(item);
            };
        }
        if (data['email_addresses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['email_addresses'])) {
                throw new Error("Expected the field `email_addresses` to be an array in the JSON data but got " + data['email_addresses']);
            }
            // validate the optional field `email_addresses` (array)
            for (const item of data['email_addresses']) {
                EmailAddress.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['family_name'] && !(typeof data['family_name'] === 'string' || data['family_name'] instanceof String)) {
            throw new Error("Expected the field `family_name` to be a primitive type in the JSON string but got " + data['family_name']);
        }
        if (data['fax_numbers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fax_numbers'])) {
                throw new Error("Expected the field `fax_numbers` to be an array in the JSON data but got " + data['fax_numbers']);
            }
            // validate the optional field `fax_numbers` (array)
            for (const item of data['fax_numbers']) {
                FaxNumber.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
            throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['job_title'] && !(typeof data['job_title'] === 'string' || data['job_title'] instanceof String)) {
            throw new Error("Expected the field `job_title` to be a primitive type in the JSON string but got " + data['job_title']);
        }
        // ensure the json data is a string
        if (data['leadsource_id'] && !(typeof data['leadsource_id'] === 'string' || data['leadsource_id'] instanceof String)) {
            throw new Error("Expected the field `leadsource_id` to be a primitive type in the JSON string but got " + data['leadsource_id']);
        }
        if (data['links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['links'])) {
                throw new Error("Expected the field `links` to be an array in the JSON data but got " + data['links']);
            }
            // validate the optional field `links` (array)
            for (const item of data['links']) {
                Link.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['middle_name'] && !(typeof data['middle_name'] === 'string' || data['middle_name'] instanceof String)) {
            throw new Error("Expected the field `middle_name` to be a primitive type in the JSON string but got " + data['middle_name']);
        }
        // validate the optional field `origin`
        if (data['origin']) { // data not null
          Origin.validateJSON(data['origin']);
        }
        // ensure the json data is a string
        if (data['owner_id'] && !(typeof data['owner_id'] === 'string' || data['owner_id'] instanceof String)) {
            throw new Error("Expected the field `owner_id` to be a primitive type in the JSON string but got " + data['owner_id']);
        }
        if (data['phone_numbers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['phone_numbers'])) {
                throw new Error("Expected the field `phone_numbers` to be an array in the JSON data but got " + data['phone_numbers']);
            }
            // validate the optional field `phone_numbers` (array)
            for (const item of data['phone_numbers']) {
                PhoneNumber.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['preferred_locale'] && !(typeof data['preferred_locale'] === 'string' || data['preferred_locale'] instanceof String)) {
            throw new Error("Expected the field `preferred_locale` to be a primitive type in the JSON string but got " + data['preferred_locale']);
        }
        // ensure the json data is a string
        if (data['preferred_name'] && !(typeof data['preferred_name'] === 'string' || data['preferred_name'] instanceof String)) {
            throw new Error("Expected the field `preferred_name` to be a primitive type in the JSON string but got " + data['preferred_name']);
        }
        // ensure the json data is a string
        if (data['prefix'] && !(typeof data['prefix'] === 'string' || data['prefix'] instanceof String)) {
            throw new Error("Expected the field `prefix` to be a primitive type in the JSON string but got " + data['prefix']);
        }
        // ensure the json data is a string
        if (data['referral_code'] && !(typeof data['referral_code'] === 'string' || data['referral_code'] instanceof String)) {
            throw new Error("Expected the field `referral_code` to be a primitive type in the JSON string but got " + data['referral_code']);
        }
        // ensure the json data is a string
        if (data['score_value'] && !(typeof data['score_value'] === 'string' || data['score_value'] instanceof String)) {
            throw new Error("Expected the field `score_value` to be a primitive type in the JSON string but got " + data['score_value']);
        }
        if (data['social_accounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['social_accounts'])) {
                throw new Error("Expected the field `social_accounts` to be an array in the JSON data but got " + data['social_accounts']);
            }
            // validate the optional field `social_accounts` (array)
            for (const item of data['social_accounts']) {
                SocialAccount.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['source_type'] && !(typeof data['source_type'] === 'string' || data['source_type'] instanceof String)) {
            throw new Error("Expected the field `source_type` to be a primitive type in the JSON string but got " + data['source_type']);
        }
        // ensure the json data is a string
        if (data['spouse_name'] && !(typeof data['spouse_name'] === 'string' || data['spouse_name'] instanceof String)) {
            throw new Error("Expected the field `spouse_name` to be a primitive type in the JSON string but got " + data['spouse_name']);
        }
        // ensure the json data is a string
        if (data['suffix'] && !(typeof data['suffix'] === 'string' || data['suffix'] instanceof String)) {
            throw new Error("Expected the field `suffix` to be a primitive type in the JSON string but got " + data['suffix']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tag_ids'])) {
            throw new Error("Expected the field `tag_ids` to be an array in the JSON data but got " + data['tag_ids']);
        }
        // ensure the json data is a string
        if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
            throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
        }
        // ensure the json data is a string
        if (data['update_time'] && !(typeof data['update_time'] === 'string' || data['update_time'] instanceof String)) {
            throw new Error("Expected the field `update_time` to be a primitive type in the JSON string but got " + data['update_time']);
        }
        if (data['utm_parameters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['utm_parameters'])) {
                throw new Error("Expected the field `utm_parameters` to be an array in the JSON data but got " + data['utm_parameters']);
            }
            // validate the optional field `utm_parameters` (array)
            for (const item of data['utm_parameters']) {
                ContactUtmResponse.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
            throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/Address>} addresses
 */
Contact.prototype['addresses'] = undefined;

/**
 * @member {String} anniversary_date
 */
Contact.prototype['anniversary_date'] = undefined;

/**
 * @member {String} birth_date
 */
Contact.prototype['birth_date'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/BasicCompany} company
 */
Contact.prototype['company'] = undefined;

/**
 * @member {String} contact_type
 */
Contact.prototype['contact_type'] = undefined;

/**
 * @member {String} create_time
 */
Contact.prototype['create_time'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldValue>} custom_fields
 */
Contact.prototype['custom_fields'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/EmailAddress>} email_addresses
 */
Contact.prototype['email_addresses'] = undefined;

/**
 * @member {String} family_name
 */
Contact.prototype['family_name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/FaxNumber>} fax_numbers
 */
Contact.prototype['fax_numbers'] = undefined;

/**
 * @member {String} given_name
 */
Contact.prototype['given_name'] = undefined;

/**
 * @member {String} id
 */
Contact.prototype['id'] = undefined;

/**
 * @member {String} job_title
 */
Contact.prototype['job_title'] = undefined;

/**
 * @member {String} leadsource_id
 */
Contact.prototype['leadsource_id'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Link>} links
 */
Contact.prototype['links'] = undefined;

/**
 * @member {String} middle_name
 */
Contact.prototype['middle_name'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Origin} origin
 */
Contact.prototype['origin'] = undefined;

/**
 * @member {String} owner_id
 */
Contact.prototype['owner_id'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/PhoneNumber>} phone_numbers
 */
Contact.prototype['phone_numbers'] = undefined;

/**
 * @member {String} preferred_locale
 */
Contact.prototype['preferred_locale'] = undefined;

/**
 * @member {String} preferred_name
 */
Contact.prototype['preferred_name'] = undefined;

/**
 * @member {String} prefix
 */
Contact.prototype['prefix'] = undefined;

/**
 * @member {String} referral_code
 */
Contact.prototype['referral_code'] = undefined;

/**
 * @member {String} score_value
 */
Contact.prototype['score_value'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/SocialAccount>} social_accounts
 */
Contact.prototype['social_accounts'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Contact.SourceTypeEnum} source_type
 */
Contact.prototype['source_type'] = undefined;

/**
 * @member {String} spouse_name
 */
Contact.prototype['spouse_name'] = undefined;

/**
 * @member {String} suffix
 */
Contact.prototype['suffix'] = undefined;

/**
 * @member {Array.<String>} tag_ids
 */
Contact.prototype['tag_ids'] = undefined;

/**
 * @member {String} time_zone
 */
Contact.prototype['time_zone'] = undefined;

/**
 * @member {String} update_time
 */
Contact.prototype['update_time'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/ContactUtmResponse>} utm_parameters
 */
Contact.prototype['utm_parameters'] = undefined;

/**
 * @member {String} website
 */
Contact.prototype['website'] = undefined;





/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
Contact['SourceTypeEnum'] = {

    /**
     * value: "SOURCE_TYPE_UNSPECIFIED"
     * @const
     */
    "SOURCE_TYPE_UNSPECIFIED": "SOURCE_TYPE_UNSPECIFIED",

    /**
     * value: "API"
     * @const
     */
    "API": "API",

    /**
     * value: "APPOINTMENT"
     * @const
     */
    "APPOINTMENT": "APPOINTMENT",

    /**
     * value: "FORM_API_HOSTED"
     * @const
     */
    "FORM_API_HOSTED": "FORM_API_HOSTED",

    /**
     * value: "FORM_API_INTERNAL"
     * @const
     */
    "FORM_API_INTERNAL": "FORM_API_INTERNAL",

    /**
     * value: "IMPORT"
     * @const
     */
    "IMPORT": "IMPORT",

    /**
     * value: "INTERNAL_FORM"
     * @const
     */
    "INTERNAL_FORM": "INTERNAL_FORM",

    /**
     * value: "LANDING_PAGE"
     * @const
     */
    "LANDING_PAGE": "LANDING_PAGE",

    /**
     * value: "MANUAL"
     * @const
     */
    "MANUAL": "MANUAL",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",

    /**
     * value: "WEBFORM"
     * @const
     */
    "WEBFORM": "WEBFORM",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default Contact;
