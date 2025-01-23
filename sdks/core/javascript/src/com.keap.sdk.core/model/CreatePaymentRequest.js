/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
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
 * @version 0.0.101
 */
class CreatePaymentRequest {
    /**
     * Constructs a new <code>CreatePaymentRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreatePaymentRequest
     * @param applyToCommissions {Boolean} 
     * @param paymentAmount {Number} 
     */
    constructor(applyToCommissions, paymentAmount) { 
        
        CreatePaymentRequest.initialize(this, applyToCommissions, paymentAmount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applyToCommissions, paymentAmount) { 
        obj['apply_to_commissions'] = applyToCommissions;
        obj['payment_amount'] = paymentAmount;
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
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('payment_amount')) {
                obj['payment_amount'] = ApiClient.convertToType(data['payment_amount'], 'Number');
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
            if (data.hasOwnProperty('payment_method_type')) {
                obj['payment_method_type'] = ApiClient.convertToType(data['payment_method_type'], 'String');
            }
            if (data.hasOwnProperty('payment_time')) {
                obj['payment_time'] = ApiClient.convertToType(data['payment_time'], 'String');
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
        // check to make sure all required properties are present in the JSON string
        for (const property of CreatePaymentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
            throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
        }
        // ensure the json data is a string
        if (data['payment_method_type'] && !(typeof data['payment_method_type'] === 'string' || data['payment_method_type'] instanceof String)) {
            throw new Error("Expected the field `payment_method_type` to be a primitive type in the JSON string but got " + data['payment_method_type']);
        }
        // ensure the json data is a string
        if (data['payment_time'] && !(typeof data['payment_time'] === 'string' || data['payment_time'] instanceof String)) {
            throw new Error("Expected the field `payment_time` to be a primitive type in the JSON string but got " + data['payment_time']);
        }

        return true;
    }


}

CreatePaymentRequest.RequiredProperties = ["apply_to_commissions", "payment_amount"];

/**
 * @member {Boolean} apply_to_commissions
 */
CreatePaymentRequest.prototype['apply_to_commissions'] = undefined;

/**
 * @member {String} notes
 */
CreatePaymentRequest.prototype['notes'] = undefined;

/**
 * @member {Number} payment_amount
 */
CreatePaymentRequest.prototype['payment_amount'] = undefined;

/**
 * @member {String} payment_method_id
 */
CreatePaymentRequest.prototype['payment_method_id'] = undefined;

/**
 * @member {String} payment_method_type
 */
CreatePaymentRequest.prototype['payment_method_type'] = undefined;

/**
 * @member {String} payment_time
 */
CreatePaymentRequest.prototype['payment_time'] = undefined;






export default CreatePaymentRequest;
