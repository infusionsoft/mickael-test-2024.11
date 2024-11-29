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

/**
 * The CreatePaymentRequest model module.
 * @module com.keap.sdk.core/model/CreatePaymentRequest
 * @version 0.0.23
 */
class CreatePaymentRequest {
    /**
     * Constructs a new <code>CreatePaymentRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreatePaymentRequest
     */
    constructor() { 
        
        CreatePaymentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreatePaymentRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreatePaymentRequest} The populated <code>CreatePaymentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePaymentRequest();

            if (data.hasOwnProperty('apply_to_commissions')) {
                obj['apply_to_commissions'] = ApiClient.convertToType(data['apply_to_commissions'], 'Boolean');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('payment_amount')) {
                obj['payment_amount'] = ApiClient.convertToType(data['payment_amount'], 'String');
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePaymentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePaymentRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['payment_amount'] && !(typeof data['payment_amount'] === 'string' || data['payment_amount'] instanceof String)) {
            throw new Error("Expected the field `payment_amount` to be a primitive type in the JSON string but got " + data['payment_amount']);
        }

        return true;
    }


}



/**
 * @member {Boolean} apply_to_commissions
 */
CreatePaymentRequest.prototype['apply_to_commissions'] = undefined;

/**
 * @member {Date} date
 */
CreatePaymentRequest.prototype['date'] = undefined;

/**
 * @member {String} notes
 */
CreatePaymentRequest.prototype['notes'] = undefined;

/**
 * @member {String} payment_amount
 */
CreatePaymentRequest.prototype['payment_amount'] = undefined;

/**
 * @member {Number} payment_method_id
 */
CreatePaymentRequest.prototype['payment_method_id'] = undefined;






export default CreatePaymentRequest;
