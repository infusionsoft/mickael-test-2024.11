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
 * The PaymentResult model module.
 * @module com.keap.sdk.core/model/PaymentResult
 * @version 0.0.50
 */
class PaymentResult {
    /**
     * Constructs a new <code>PaymentResult</code>.
     * @alias module:com.keap.sdk.core/model/PaymentResult
     */
    constructor() { 
        
        PaymentResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PaymentResult} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PaymentResult} The populated <code>PaymentResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentResult();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'String');
            }
            if (data.hasOwnProperty('payment_amount')) {
                obj['payment_amount'] = ApiClient.convertToType(data['payment_amount'], 'Number');
            }
            if (data.hasOwnProperty('payment_status_message')) {
                obj['payment_status_message'] = ApiClient.convertToType(data['payment_status_message'], 'String');
            }
            if (data.hasOwnProperty('transaction_id')) {
                obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['invoice_id'] && !(typeof data['invoice_id'] === 'string' || data['invoice_id'] instanceof String)) {
            throw new Error("Expected the field `invoice_id` to be a primitive type in the JSON string but got " + data['invoice_id']);
        }
        // ensure the json data is a string
        if (data['payment_status_message'] && !(typeof data['payment_status_message'] === 'string' || data['payment_status_message'] instanceof String)) {
            throw new Error("Expected the field `payment_status_message` to be a primitive type in the JSON string but got " + data['payment_status_message']);
        }
        // ensure the json data is a string
        if (data['transaction_id'] && !(typeof data['transaction_id'] === 'string' || data['transaction_id'] instanceof String)) {
            throw new Error("Expected the field `transaction_id` to be a primitive type in the JSON string but got " + data['transaction_id']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
PaymentResult.prototype['id'] = undefined;

/**
 * @member {String} invoice_id
 */
PaymentResult.prototype['invoice_id'] = undefined;

/**
 * @member {Number} payment_amount
 */
PaymentResult.prototype['payment_amount'] = undefined;

/**
 * @member {String} payment_status_message
 */
PaymentResult.prototype['payment_status_message'] = undefined;

/**
 * @member {String} transaction_id
 */
PaymentResult.prototype['transaction_id'] = undefined;






export default PaymentResult;
