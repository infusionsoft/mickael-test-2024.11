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
import CustomFieldValue from './CustomFieldValue';
import EmailAddress from './EmailAddress';
import FaxNumber from './FaxNumber';
import PhoneNumber from './PhoneNumber';

/**
 * The CreateCompanyRequest model module.
 * @module com.keap.sdk.core/model/CreateCompanyRequest
 * @version 0.0.74
 */
class CreateCompanyRequest {
    /**
     * Constructs a new <code>CreateCompanyRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateCompanyRequest
     * @param companyName {String} 
     */
    constructor(companyName) { 
        
        CreateCompanyRequest.initialize(this, companyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, companyName) { 
        obj['company_name'] = companyName;
    }

    /**
     * Constructs a <code>CreateCompanyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateCompanyRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateCompanyRequest} The populated <code>CreateCompanyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCompanyRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('company_name')) {
                obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomFieldValue]);
            }
            if (data.hasOwnProperty('email_address')) {
                obj['email_address'] = EmailAddress.constructFromObject(data['email_address']);
            }
            if (data.hasOwnProperty('fax_number')) {
                obj['fax_number'] = FaxNumber.constructFromObject(data['fax_number']);
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = PhoneNumber.constructFromObject(data['phone_number']);
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCompanyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCompanyRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCompanyRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `address`
        if (data['address']) { // data not null
          Address.validateJSON(data['address']);
        }
        // ensure the json data is a string
        if (data['company_name'] && !(typeof data['company_name'] === 'string' || data['company_name'] instanceof String)) {
            throw new Error("Expected the field `company_name` to be a primitive type in the JSON string but got " + data['company_name']);
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
        // validate the optional field `email_address`
        if (data['email_address']) { // data not null
          EmailAddress.validateJSON(data['email_address']);
        }
        // validate the optional field `fax_number`
        if (data['fax_number']) { // data not null
          FaxNumber.validateJSON(data['fax_number']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // validate the optional field `phone_number`
        if (data['phone_number']) { // data not null
          PhoneNumber.validateJSON(data['phone_number']);
        }
        // ensure the json data is a string
        if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
            throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
        }

        return true;
    }


}

CreateCompanyRequest.RequiredProperties = ["company_name"];

/**
 * @member {module:com.keap.sdk.core/model/Address} address
 */
CreateCompanyRequest.prototype['address'] = undefined;

/**
 * @member {String} company_name
 */
CreateCompanyRequest.prototype['company_name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/CustomFieldValue>} custom_fields
 */
CreateCompanyRequest.prototype['custom_fields'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailAddress} email_address
 */
CreateCompanyRequest.prototype['email_address'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/FaxNumber} fax_number
 */
CreateCompanyRequest.prototype['fax_number'] = undefined;

/**
 * @member {String} notes
 */
CreateCompanyRequest.prototype['notes'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/PhoneNumber} phone_number
 */
CreateCompanyRequest.prototype['phone_number'] = undefined;

/**
 * @member {String} website
 */
CreateCompanyRequest.prototype['website'] = undefined;






export default CreateCompanyRequest;
