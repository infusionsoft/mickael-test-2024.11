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
import RestPaymentGateway from './RestPaymentGateway';

/**
 * The PaymentPlan model module.
 * @module com.keap.sdk.core/model/PaymentPlan
 * @version 0.0.73
 */
class PaymentPlan {
    /**
     * Constructs a new <code>PaymentPlan</code>.
     * @alias module:com.keap.sdk.core/model/PaymentPlan
     * @param daysBetweenPayments {Number} 
     * @param numberOfPayments {Number} 
     * @param planStartDate {String} 
     */
    constructor(daysBetweenPayments, numberOfPayments, planStartDate) { 
        
        PaymentPlan.initialize(this, daysBetweenPayments, numberOfPayments, planStartDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, daysBetweenPayments, numberOfPayments, planStartDate) { 
        obj['days_between_payments'] = daysBetweenPayments;
        obj['number_of_payments'] = numberOfPayments;
        obj['plan_start_date'] = planStartDate;
    }

    /**
     * Constructs a <code>PaymentPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PaymentPlan} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PaymentPlan} The populated <code>PaymentPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentPlan();

            if (data.hasOwnProperty('auto_charge')) {
                obj['auto_charge'] = ApiClient.convertToType(data['auto_charge'], 'Boolean');
            }
            if (data.hasOwnProperty('credit_card_id')) {
                obj['credit_card_id'] = ApiClient.convertToType(data['credit_card_id'], 'String');
            }
            if (data.hasOwnProperty('days_between_payments')) {
                obj['days_between_payments'] = ApiClient.convertToType(data['days_between_payments'], 'Number');
            }
            if (data.hasOwnProperty('initial_payment_amount')) {
                obj['initial_payment_amount'] = ApiClient.convertToType(data['initial_payment_amount'], 'Number');
            }
            if (data.hasOwnProperty('initial_payment_date')) {
                obj['initial_payment_date'] = ApiClient.convertToType(data['initial_payment_date'], 'String');
            }
            if (data.hasOwnProperty('initial_payment_percent')) {
                obj['initial_payment_percent'] = ApiClient.convertToType(data['initial_payment_percent'], 'Number');
            }
            if (data.hasOwnProperty('number_of_payments')) {
                obj['number_of_payments'] = ApiClient.convertToType(data['number_of_payments'], 'Number');
            }
            if (data.hasOwnProperty('payment_gateway')) {
                obj['payment_gateway'] = RestPaymentGateway.constructFromObject(data['payment_gateway']);
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
            if (data.hasOwnProperty('plan_start_date')) {
                obj['plan_start_date'] = ApiClient.convertToType(data['plan_start_date'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentPlan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentPlan</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymentPlan.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['credit_card_id'] && !(typeof data['credit_card_id'] === 'string' || data['credit_card_id'] instanceof String)) {
            throw new Error("Expected the field `credit_card_id` to be a primitive type in the JSON string but got " + data['credit_card_id']);
        }
        // ensure the json data is a string
        if (data['initial_payment_date'] && !(typeof data['initial_payment_date'] === 'string' || data['initial_payment_date'] instanceof String)) {
            throw new Error("Expected the field `initial_payment_date` to be a primitive type in the JSON string but got " + data['initial_payment_date']);
        }
        // validate the optional field `payment_gateway`
        if (data['payment_gateway']) { // data not null
          RestPaymentGateway.validateJSON(data['payment_gateway']);
        }
        // ensure the json data is a string
        if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
            throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
        }
        // ensure the json data is a string
        if (data['plan_start_date'] && !(typeof data['plan_start_date'] === 'string' || data['plan_start_date'] instanceof String)) {
            throw new Error("Expected the field `plan_start_date` to be a primitive type in the JSON string but got " + data['plan_start_date']);
        }

        return true;
    }


}

PaymentPlan.RequiredProperties = ["days_between_payments", "number_of_payments", "plan_start_date"];

/**
 * @member {Boolean} auto_charge
 */
PaymentPlan.prototype['auto_charge'] = undefined;

/**
 * @member {String} credit_card_id
 */
PaymentPlan.prototype['credit_card_id'] = undefined;

/**
 * @member {Number} days_between_payments
 */
PaymentPlan.prototype['days_between_payments'] = undefined;

/**
 * @member {Number} initial_payment_amount
 */
PaymentPlan.prototype['initial_payment_amount'] = undefined;

/**
 * @member {String} initial_payment_date
 */
PaymentPlan.prototype['initial_payment_date'] = undefined;

/**
 * @member {Number} initial_payment_percent
 */
PaymentPlan.prototype['initial_payment_percent'] = undefined;

/**
 * @member {Number} number_of_payments
 */
PaymentPlan.prototype['number_of_payments'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestPaymentGateway} payment_gateway
 */
PaymentPlan.prototype['payment_gateway'] = undefined;

/**
 * @member {String} payment_method_id
 */
PaymentPlan.prototype['payment_method_id'] = undefined;

/**
 * @member {String} plan_start_date
 */
PaymentPlan.prototype['plan_start_date'] = undefined;






export default PaymentPlan;
