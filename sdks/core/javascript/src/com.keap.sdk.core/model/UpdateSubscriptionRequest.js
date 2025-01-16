/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Address from './Address';

/**
 * The UpdateSubscriptionRequest model module.
 * @module com.keap.sdk.core/model/UpdateSubscriptionRequest
 * @version 0.0.88
 */
class UpdateSubscriptionRequest {
    /**
     * Constructs a new <code>UpdateSubscriptionRequest</code>.
     * @alias module:com.keap.sdk.core/model/UpdateSubscriptionRequest
     */
    constructor() { 
        
        UpdateSubscriptionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateSubscriptionRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateSubscriptionRequest} The populated <code>UpdateSubscriptionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSubscriptionRequest();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_tax')) {
                obj['allow_tax'] = ApiClient.convertToType(data['allow_tax'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_charge')) {
                obj['auto_charge'] = ApiClient.convertToType(data['auto_charge'], 'Boolean');
            }
            if (data.hasOwnProperty('billing_amount')) {
                obj['billing_amount'] = ApiClient.convertToType(data['billing_amount'], 'Number');
            }
            if (data.hasOwnProperty('billing_cycle')) {
                obj['billing_cycle'] = ApiClient.convertToType(data['billing_cycle'], 'String');
            }
            if (data.hasOwnProperty('billing_frequency')) {
                obj['billing_frequency'] = ApiClient.convertToType(data['billing_frequency'], 'Number');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('days_between_retries')) {
                obj['days_between_retries'] = ApiClient.convertToType(data['days_between_retries'], 'Number');
            }
            if (data.hasOwnProperty('end_bill_date')) {
                obj['end_bill_date'] = ApiClient.convertToType(data['end_bill_date'], 'String');
            }
            if (data.hasOwnProperty('lead_affiliate_id')) {
                obj['lead_affiliate_id'] = ApiClient.convertToType(data['lead_affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('max_charge_attempts')) {
                obj['max_charge_attempts'] = ApiClient.convertToType(data['max_charge_attempts'], 'Number');
            }
            if (data.hasOwnProperty('next_bill_date')) {
                obj['next_bill_date'] = ApiClient.convertToType(data['next_bill_date'], 'String');
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
            if (data.hasOwnProperty('previous_bill_date')) {
                obj['previous_bill_date'] = ApiClient.convertToType(data['previous_bill_date'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('sale_affiliate_id')) {
                obj['sale_affiliate_id'] = ApiClient.convertToType(data['sale_affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('shipping_address')) {
                obj['shipping_address'] = Address.constructFromObject(data['shipping_address']);
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
            }
            if (data.hasOwnProperty('subscription_plan_id')) {
                obj['subscription_plan_id'] = ApiClient.convertToType(data['subscription_plan_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateSubscriptionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateSubscriptionRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['billing_cycle'] && !(typeof data['billing_cycle'] === 'string' || data['billing_cycle'] instanceof String)) {
            throw new Error("Expected the field `billing_cycle` to be a primitive type in the JSON string but got " + data['billing_cycle']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['end_bill_date'] && !(typeof data['end_bill_date'] === 'string' || data['end_bill_date'] instanceof String)) {
            throw new Error("Expected the field `end_bill_date` to be a primitive type in the JSON string but got " + data['end_bill_date']);
        }
        // ensure the json data is a string
        if (data['lead_affiliate_id'] && !(typeof data['lead_affiliate_id'] === 'string' || data['lead_affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `lead_affiliate_id` to be a primitive type in the JSON string but got " + data['lead_affiliate_id']);
        }
        // ensure the json data is a string
        if (data['next_bill_date'] && !(typeof data['next_bill_date'] === 'string' || data['next_bill_date'] instanceof String)) {
            throw new Error("Expected the field `next_bill_date` to be a primitive type in the JSON string but got " + data['next_bill_date']);
        }
        // ensure the json data is a string
        if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
            throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
        }
        // ensure the json data is a string
        if (data['previous_bill_date'] && !(typeof data['previous_bill_date'] === 'string' || data['previous_bill_date'] instanceof String)) {
            throw new Error("Expected the field `previous_bill_date` to be a primitive type in the JSON string but got " + data['previous_bill_date']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['sale_affiliate_id'] && !(typeof data['sale_affiliate_id'] === 'string' || data['sale_affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `sale_affiliate_id` to be a primitive type in the JSON string but got " + data['sale_affiliate_id']);
        }
        // validate the optional field `shipping_address`
        if (data['shipping_address']) { // data not null
          Address.validateJSON(data['shipping_address']);
        }
        // ensure the json data is a string
        if (data['start_date'] && !(typeof data['start_date'] === 'string' || data['start_date'] instanceof String)) {
            throw new Error("Expected the field `start_date` to be a primitive type in the JSON string but got " + data['start_date']);
        }
        // ensure the json data is a string
        if (data['subscription_plan_id'] && !(typeof data['subscription_plan_id'] === 'string' || data['subscription_plan_id'] instanceof String)) {
            throw new Error("Expected the field `subscription_plan_id` to be a primitive type in the JSON string but got " + data['subscription_plan_id']);
        }

        return true;
    }


}



/**
 * @member {Boolean} active
 */
UpdateSubscriptionRequest.prototype['active'] = undefined;

/**
 * @member {Boolean} allow_tax
 */
UpdateSubscriptionRequest.prototype['allow_tax'] = undefined;

/**
 * @member {Boolean} auto_charge
 */
UpdateSubscriptionRequest.prototype['auto_charge'] = undefined;

/**
 * @member {Number} billing_amount
 */
UpdateSubscriptionRequest.prototype['billing_amount'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/UpdateSubscriptionRequest.BillingCycleEnum} billing_cycle
 */
UpdateSubscriptionRequest.prototype['billing_cycle'] = undefined;

/**
 * @member {Number} billing_frequency
 */
UpdateSubscriptionRequest.prototype['billing_frequency'] = undefined;

/**
 * @member {String} contact_id
 */
UpdateSubscriptionRequest.prototype['contact_id'] = undefined;

/**
 * @member {Number} days_between_retries
 */
UpdateSubscriptionRequest.prototype['days_between_retries'] = undefined;

/**
 * @member {String} end_bill_date
 */
UpdateSubscriptionRequest.prototype['end_bill_date'] = undefined;

/**
 * @member {String} lead_affiliate_id
 */
UpdateSubscriptionRequest.prototype['lead_affiliate_id'] = undefined;

/**
 * @member {Number} max_charge_attempts
 */
UpdateSubscriptionRequest.prototype['max_charge_attempts'] = undefined;

/**
 * @member {String} next_bill_date
 */
UpdateSubscriptionRequest.prototype['next_bill_date'] = undefined;

/**
 * @member {String} payment_method_id
 */
UpdateSubscriptionRequest.prototype['payment_method_id'] = undefined;

/**
 * @member {String} previous_bill_date
 */
UpdateSubscriptionRequest.prototype['previous_bill_date'] = undefined;

/**
 * @member {String} product_id
 */
UpdateSubscriptionRequest.prototype['product_id'] = undefined;

/**
 * @member {Number} quantity
 */
UpdateSubscriptionRequest.prototype['quantity'] = undefined;

/**
 * @member {String} sale_affiliate_id
 */
UpdateSubscriptionRequest.prototype['sale_affiliate_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Address} shipping_address
 */
UpdateSubscriptionRequest.prototype['shipping_address'] = undefined;

/**
 * @member {String} start_date
 */
UpdateSubscriptionRequest.prototype['start_date'] = undefined;

/**
 * @member {String} subscription_plan_id
 */
UpdateSubscriptionRequest.prototype['subscription_plan_id'] = undefined;





/**
 * Allowed values for the <code>billing_cycle</code> property.
 * @enum {String}
 * @readonly
 */
UpdateSubscriptionRequest['BillingCycleEnum'] = {

    /**
     * value: "YEAR"
     * @const
     */
    "YEAR": "YEAR",

    /**
     * value: "MONTH"
     * @const
     */
    "MONTH": "MONTH",

    /**
     * value: "WEEK"
     * @const
     */
    "WEEK": "WEEK",

    /**
     * value: "DAY"
     * @const
     */
    "DAY": "DAY",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default UpdateSubscriptionRequest;
