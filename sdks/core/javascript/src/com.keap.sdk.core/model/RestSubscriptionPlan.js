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
 * The RestSubscriptionPlan model module.
 * @module com.keap.sdk.core/model/RestSubscriptionPlan
 * @version 0.0.36
 */
class RestSubscriptionPlan {
    /**
     * Constructs a new <code>RestSubscriptionPlan</code>.
     * @alias module:com.keap.sdk.core/model/RestSubscriptionPlan
     */
    constructor() { 
        
        RestSubscriptionPlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestSubscriptionPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestSubscriptionPlan} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestSubscriptionPlan} The populated <code>RestSubscriptionPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSubscriptionPlan();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('cycle')) {
                obj['cycle'] = ApiClient.convertToType(data['cycle'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('subscription_plan_index')) {
                obj['subscription_plan_index'] = ApiClient.convertToType(data['subscription_plan_index'], 'Number');
            }
            if (data.hasOwnProperty('subscription_plan_name')) {
                obj['subscription_plan_name'] = ApiClient.convertToType(data['subscription_plan_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestSubscriptionPlan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestSubscriptionPlan</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cycle'] && !(typeof data['cycle'] === 'string' || data['cycle'] instanceof String)) {
            throw new Error("Expected the field `cycle` to be a primitive type in the JSON string but got " + data['cycle']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['subscription_plan_name'] && !(typeof data['subscription_plan_name'] === 'string' || data['subscription_plan_name'] instanceof String)) {
            throw new Error("Expected the field `subscription_plan_name` to be a primitive type in the JSON string but got " + data['subscription_plan_name']);
        }

        return true;
    }


}



/**
 * @member {Boolean} active
 */
RestSubscriptionPlan.prototype['active'] = undefined;

/**
 * @member {String} cycle
 */
RestSubscriptionPlan.prototype['cycle'] = undefined;

/**
 * @member {Number} frequency
 */
RestSubscriptionPlan.prototype['frequency'] = undefined;

/**
 * @member {String} id
 */
RestSubscriptionPlan.prototype['id'] = undefined;

/**
 * @member {String} product_id
 */
RestSubscriptionPlan.prototype['product_id'] = undefined;

/**
 * @member {Number} subscription_plan_index
 */
RestSubscriptionPlan.prototype['subscription_plan_index'] = undefined;

/**
 * @member {String} subscription_plan_name
 */
RestSubscriptionPlan.prototype['subscription_plan_name'] = undefined;






export default RestSubscriptionPlan;
