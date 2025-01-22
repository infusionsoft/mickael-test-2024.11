/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
 * @version 0.0.99
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
            if (data.hasOwnProperty('allow_prorating')) {
                obj['allow_prorating'] = ApiClient.convertToType(data['allow_prorating'], 'Boolean');
            }
            if (data.hasOwnProperty('cycle_type')) {
                obj['cycle_type'] = ApiClient.convertToType(data['cycle_type'], 'String');
            }
            if (data.hasOwnProperty('display_order_index')) {
                obj['display_order_index'] = ApiClient.convertToType(data['display_order_index'], 'Number');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('plan_price')) {
                obj['plan_price'] = CurrencyValue.constructFromObject(data['plan_price']);
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('total_cycles')) {
                obj['total_cycles'] = ApiClient.convertToType(data['total_cycles'], 'Number');
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
        if (data['cycle_type'] && !(typeof data['cycle_type'] === 'string' || data['cycle_type'] instanceof String)) {
            throw new Error("Expected the field `cycle_type` to be a primitive type in the JSON string but got " + data['cycle_type']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `plan_price`
        if (data['plan_price']) { // data not null
          CurrencyValue.validateJSON(data['plan_price']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }

        return true;
    }


}



/**
 * If the subscription plan is active or not.
 * @member {Boolean} active
 */
SubscriptionPlan.prototype['active'] = undefined;

/**
 * Whether or not the plan will allow prorating.
 * @member {Boolean} allow_prorating
 */
SubscriptionPlan.prototype['allow_prorating'] = undefined;

/**
 * The cycle type of the subscription plan. Possible values: YEAR, MONTH, WEEK, DAY
 * @member {module:com.keap.sdk.core/model/SubscriptionPlan.CycleTypeEnum} cycle_type
 */
SubscriptionPlan.prototype['cycle_type'] = undefined;

/**
 * The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list.
 * @member {Number} display_order_index
 */
SubscriptionPlan.prototype['display_order_index'] = undefined;

/**
 * Total number of times of a cycle type which constitutes a plan cycle. Minimum value is 1.
 * @member {Number} frequency
 */
SubscriptionPlan.prototype['frequency'] = undefined;

/**
 * Id of the subscription plan.
 * @member {String} id
 */
SubscriptionPlan.prototype['id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CurrencyValue} plan_price
 */
SubscriptionPlan.prototype['plan_price'] = undefined;

/**
 * @member {String} product_id
 */
SubscriptionPlan.prototype['product_id'] = undefined;

/**
 * Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end.
 * @member {Number} total_cycles
 */
SubscriptionPlan.prototype['total_cycles'] = undefined;





/**
 * Allowed values for the <code>cycle_type</code> property.
 * @enum {String}
 * @readonly
 */
SubscriptionPlan['CycleTypeEnum'] = {

    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",

    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY",

    /**
     * value: "MONTHLY"
     * @const
     */
    "MONTHLY": "MONTHLY",

    /**
     * value: "YEARLY"
     * @const
     */
    "YEARLY": "YEARLY",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default SubscriptionPlan;
