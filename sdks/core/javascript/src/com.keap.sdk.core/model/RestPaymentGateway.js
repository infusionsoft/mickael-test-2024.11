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
 * The RestPaymentGateway model module.
 * @module com.keap.sdk.core/model/RestPaymentGateway
 * @version 0.0.69
 */
class RestPaymentGateway {
    /**
     * Constructs a new <code>RestPaymentGateway</code>.
     * @alias module:com.keap.sdk.core/model/RestPaymentGateway
     */
    constructor() { 
        
        RestPaymentGateway.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestPaymentGateway</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestPaymentGateway} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestPaymentGateway} The populated <code>RestPaymentGateway</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestPaymentGateway();

            if (data.hasOwnProperty('merchant_account_id')) {
                obj['merchant_account_id'] = ApiClient.convertToType(data['merchant_account_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_account_name')) {
                obj['merchant_account_name'] = ApiClient.convertToType(data['merchant_account_name'], 'String');
            }
            if (data.hasOwnProperty('use_default')) {
                obj['use_default'] = ApiClient.convertToType(data['use_default'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestPaymentGateway</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestPaymentGateway</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['merchant_account_id'] && !(typeof data['merchant_account_id'] === 'string' || data['merchant_account_id'] instanceof String)) {
            throw new Error("Expected the field `merchant_account_id` to be a primitive type in the JSON string but got " + data['merchant_account_id']);
        }
        // ensure the json data is a string
        if (data['merchant_account_name'] && !(typeof data['merchant_account_name'] === 'string' || data['merchant_account_name'] instanceof String)) {
            throw new Error("Expected the field `merchant_account_name` to be a primitive type in the JSON string but got " + data['merchant_account_name']);
        }

        return true;
    }


}



/**
 * @member {String} merchant_account_id
 */
RestPaymentGateway.prototype['merchant_account_id'] = undefined;

/**
 * @member {String} merchant_account_name
 */
RestPaymentGateway.prototype['merchant_account_name'] = undefined;

/**
 * @member {Boolean} use_default
 */
RestPaymentGateway.prototype['use_default'] = undefined;






export default RestPaymentGateway;
