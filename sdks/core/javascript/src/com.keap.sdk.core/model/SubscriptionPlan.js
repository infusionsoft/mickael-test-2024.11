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
import CurrencyValue from './CurrencyValue';

/**
 * The SubscriptionPlan model module.
 * @module com.keap.sdk.core/model/SubscriptionPlan
 * @version 0.0.77
 */
class SubscriptionPlan {
    /**
     * Constructs a new <code>SubscriptionPlan</code>.
     * @alias module:com.keap.sdk.core/model/SubscriptionPlan
     */
    constructor() { 
        
        SubscriptionPlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/SubscriptionPlan} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/SubscriptionPlan} The populated <code>SubscriptionPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionPlan();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('billing_cycle')) {
                obj['billing_cycle'] = ApiClient.convertToType(data['billing_cycle'], 'String');
            }
            if (data.hasOwnProperty('billing_frequency')) {
                obj['billing_frequency'] = ApiClient.convertToType(data['billing_frequency'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('number_of_cycles')) {
                obj['number_of_cycles'] = ApiClient.convertToType(data['number_of_cycles'], 'Number');
            }
            if (data.hasOwnProperty('order_index')) {
                obj['order_index'] = ApiClient.convertToType(data['order_index'], 'Number');
            }
            if (data.hasOwnProperty('plan_price')) {
                obj['plan_price'] = CurrencyValue.constructFromObject(data['plan_price']);
            }
            if (data.hasOwnProperty('prorate')) {
                obj['prorate'] = ApiClient.convertToType(data['prorate'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriptionPlan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriptionPlan</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['billing_cycle'] && !(typeof data['billing_cycle'] === 'string' || data['billing_cycle'] instanceof String)) {
            throw new Error("Expected the field `billing_cycle` to be a primitive type in the JSON string but got " + data['billing_cycle']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `plan_price`
        if (data['plan_price']) { // data not null
          CurrencyValue.validateJSON(data['plan_price']);
        }

        return true;
    }


}



/**
 * If the subscription plan should be active/available for purchase
 * @member {Boolean} active
 */
SubscriptionPlan.prototype['active'] = undefined;

/**
 * How frequent to bill. Can be: DAILY, WEEKLY, MONTHLY, or YEARLY
 * @member {String} billing_cycle
 */
SubscriptionPlan.prototype['billing_cycle'] = undefined;

/**
 * How many times per billing cycle to bill
 * @member {Number} billing_frequency
 */
SubscriptionPlan.prototype['billing_frequency'] = undefined;

/**
 * The subscription plan id
 * @member {String} id
 */
SubscriptionPlan.prototype['id'] = undefined;

/**
 * How many billing cycles to bill. Optional field i.e. can be no value or 0.
 * @member {Number} number_of_cycles
 */
SubscriptionPlan.prototype['number_of_cycles'] = undefined;

/**
 * Determines the order in which the plan will be displayed
 * @member {Number} order_index
 */
SubscriptionPlan.prototype['order_index'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CurrencyValue} plan_price
 */
SubscriptionPlan.prototype['plan_price'] = undefined;

/**
 * If the subscription plan should allow prorating
 * @member {Boolean} prorate
 */
SubscriptionPlan.prototype['prorate'] = undefined;






export default SubscriptionPlan;
