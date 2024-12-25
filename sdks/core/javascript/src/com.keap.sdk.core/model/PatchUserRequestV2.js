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
import EmailAddressRequest from './EmailAddressRequest';
import FaxNumber from './FaxNumber';
import PhoneNumber from './PhoneNumber';

/**
 * The PatchUserRequestV2 model module.
 * @module com.keap.sdk.core/model/PatchUserRequestV2
 * @version 0.0.67
 */
class PatchUserRequestV2 {
    /**
     * Constructs a new <code>PatchUserRequestV2</code>.
     * @alias module:com.keap.sdk.core/model/PatchUserRequestV2
     */
    constructor() { 
        
        PatchUserRequestV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchUserRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PatchUserRequestV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PatchUserRequestV2} The populated <code>PatchUserRequestV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchUserRequestV2();

            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('email_address')) {
                obj['email_address'] = EmailAddressRequest.constructFromObject(data['email_address']);
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
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = ApiClient.convertToType(data['phone_numbers'], [PhoneNumber]);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchUserRequestV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchUserRequestV2</code>.
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
        // validate the optional field `email_address`
        if (data['email_address']) { // data not null
          EmailAddressRequest.validateJSON(data['email_address']);
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
        if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
            throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
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
PatchUserRequestV2.prototype['address'] = undefined;

/**
 * @member {String} company_name
 */
PatchUserRequestV2.prototype['company_name'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddressRequest} email_address
 */
PatchUserRequestV2.prototype['email_address'] = undefined;

/**
 * @member {String} family_name
 */
PatchUserRequestV2.prototype['family_name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/FaxNumber>} fax_numbers
 */
PatchUserRequestV2.prototype['fax_numbers'] = undefined;

/**
 * @member {String} given_name
 */
PatchUserRequestV2.prototype['given_name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/PhoneNumber>} phone_numbers
 */
PatchUserRequestV2.prototype['phone_numbers'] = undefined;

/**
 * @member {String} time_zone
 */
PatchUserRequestV2.prototype['time_zone'] = undefined;

/**
 * @member {String} title
 */
PatchUserRequestV2.prototype['title'] = undefined;

/**
 * @member {String} website
 */
PatchUserRequestV2.prototype['website'] = undefined;






export default PatchUserRequestV2;
