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
import Address from './Address';
import EmailAddress from './EmailAddress';
import FaxNumber from './FaxNumber';
import PhoneNumber from './PhoneNumber';
import SocialAccount from './SocialAccount';

/**
 * The User model module.
 * @module com.keap.sdk.core/model/User
 * @version 0.0.38
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:com.keap.sdk.core/model/User
     */
    constructor() { 
        
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/User} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('admin')) {
                obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean');
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('create_time')) {
                obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'Number');
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
            if (data.hasOwnProperty('global_user_id')) {
                obj['global_user_id'] = ApiClient.convertToType(data['global_user_id'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('keap_id')) {
                obj['keap_id'] = ApiClient.convertToType(data['keap_id'], 'String');
            }
            if (data.hasOwnProperty('partner')) {
                obj['partner'] = ApiClient.convertToType(data['partner'], 'Boolean');
            }
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = ApiClient.convertToType(data['phone_numbers'], [PhoneNumber]);
            }
            if (data.hasOwnProperty('social_accounts')) {
                obj['social_accounts'] = ApiClient.convertToType(data['social_accounts'], [SocialAccount]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');
            }
            if (data.hasOwnProperty('updated_by')) {
                obj['updated_by'] = ApiClient.convertToType(data['updated_by'], 'Number');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
     */
    static validateJSON(data) {
        // validate the optional field `address`
        if (data['address']) { // data not null
          Address.validateJSON(data['address']);
        }
        // ensure the json data is a string
        if (data['company_name'] && !(typeof data['company_name'] === 'string' || data['company_name'] instanceof String)) {
            throw new Error("Expected the field `company_name` to be a primitive type in the JSON string but got " + data['company_name']);
        }
        // ensure the json data is a string
        if (data['create_time'] && !(typeof data['create_time'] === 'string' || data['create_time'] instanceof String)) {
            throw new Error("Expected the field `create_time` to be a primitive type in the JSON string but got " + data['create_time']);
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
        if (data['keap_id'] && !(typeof data['keap_id'] === 'string' || data['keap_id'] instanceof String)) {
            throw new Error("Expected the field `keap_id` to be a primitive type in the JSON string but got " + data['keap_id']);
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
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
            throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['update_time'] && !(typeof data['update_time'] === 'string' || data['update_time'] instanceof String)) {
            throw new Error("Expected the field `update_time` to be a primitive type in the JSON string but got " + data['update_time']);
        }
        // ensure the json data is a string
        if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
            throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/Address} address
 */
User.prototype['address'] = undefined;

/**
 * @member {Boolean} admin
 */
User.prototype['admin'] = undefined;

/**
 * @member {String} company_name
 */
User.prototype['company_name'] = undefined;

/**
 * @member {String} create_time
 */
User.prototype['create_time'] = undefined;

/**
 * @member {Number} created_by
 */
User.prototype['created_by'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/EmailAddress>} email_addresses
 */
User.prototype['email_addresses'] = undefined;

/**
 * @member {String} family_name
 */
User.prototype['family_name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/FaxNumber>} fax_numbers
 */
User.prototype['fax_numbers'] = undefined;

/**
 * @member {String} given_name
 */
User.prototype['given_name'] = undefined;

/**
 * @member {Number} global_user_id
 */
User.prototype['global_user_id'] = undefined;

/**
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * @member {String} keap_id
 */
User.prototype['keap_id'] = undefined;

/**
 * @member {Boolean} partner
 */
User.prototype['partner'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/PhoneNumber>} phone_numbers
 */
User.prototype['phone_numbers'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/SocialAccount>} social_accounts
 */
User.prototype['social_accounts'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/User.StatusEnum} status
 */
User.prototype['status'] = undefined;

/**
 * @member {String} time_zone
 */
User.prototype['time_zone'] = undefined;

/**
 * @member {String} title
 */
User.prototype['title'] = undefined;

/**
 * @member {String} update_time
 */
User.prototype['update_time'] = undefined;

/**
 * @member {Number} updated_by
 */
User.prototype['updated_by'] = undefined;

/**
 * @member {String} website
 */
User.prototype['website'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
User['StatusEnum'] = {

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Invited"
     * @const
     */
    "Invited": "Invited",

    /**
     * value: "Inactive"
     * @const
     */
    "Inactive": "Inactive",

    /**
     * value: "NotAUser"
     * @const
     */
    "NotAUser": "NotAUser",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default User;
