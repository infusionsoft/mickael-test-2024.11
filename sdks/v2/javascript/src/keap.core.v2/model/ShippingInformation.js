/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
import PhoneNumber from './PhoneNumber';

/**
 * The ShippingInformation model module.
 * @module keap.core.v2/model/ShippingInformation
 */
class ShippingInformation {
    /**
     * Constructs a new <code>ShippingInformation</code>.
     * @alias module:keap.core.v2/model/ShippingInformation
     */
    constructor() { 
        
        ShippingInformation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShippingInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/ShippingInformation} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/ShippingInformation} The populated <code>ShippingInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingInformation();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address]);
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = BasicCompany.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('family_name')) {
                obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
            }
            if (data.hasOwnProperty('given_name')) {
                obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('invoice_to_company')) {
                obj['invoice_to_company'] = ApiClient.convertToType(data['invoice_to_company'], 'Boolean');
            }
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = ApiClient.convertToType(data['phone_numbers'], [PhoneNumber]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShippingInformation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShippingInformation</code>.
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
        // validate the optional field `company`
        if (data['company']) { // data not null
          BasicCompany.validateJSON(data['company']);
        }
        // ensure the json data is a string
        if (data['family_name'] && !(typeof data['family_name'] === 'string' || data['family_name'] instanceof String)) {
            throw new Error("Expected the field `family_name` to be a primitive type in the JSON string but got " + data['family_name']);
        }
        // ensure the json data is a string
        if (data['given_name'] && !(typeof data['given_name'] === 'string' || data['given_name'] instanceof String)) {
            throw new Error("Expected the field `given_name` to be a primitive type in the JSON string but got " + data['given_name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
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

        return true;
    }


}



/**
 * @member {Array.<module:keap.core.v2/model/Address>} addresses
 */
ShippingInformation.prototype['addresses'] = undefined;

/**
 * @member {module:keap.core.v2/model/BasicCompany} company
 */
ShippingInformation.prototype['company'] = undefined;

/**
 * @member {String} family_name
 */
ShippingInformation.prototype['family_name'] = undefined;

/**
 * @member {String} given_name
 */
ShippingInformation.prototype['given_name'] = undefined;

/**
 * @member {String} id
 */
ShippingInformation.prototype['id'] = undefined;

/**
 * @member {Boolean} invoice_to_company
 */
ShippingInformation.prototype['invoice_to_company'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/PhoneNumber>} phone_numbers
 */
ShippingInformation.prototype['phone_numbers'] = undefined;






export default ShippingInformation;
