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
 * The RestV2Subscription model module.
 * @module com.keap.sdk.core/model/RestV2Subscription
 * @version 0.0.107
 */
class RestV2Subscription {
    /**
     * Constructs a new <code>RestV2Subscription</code>.
     * @alias module:com.keap.sdk.core/model/RestV2Subscription
     */
    constructor() { 
        
        RestV2Subscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestV2Subscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2Subscription} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2Subscription} The populated <code>RestV2Subscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestV2Subscription();

            if (data.hasOwnProperty('subscription_active')) {
                obj['subscription_active'] = ApiClient.convertToType(data['subscription_active'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription_cycles_completed')) {
                obj['subscription_cycles_completed'] = ApiClient.convertToType(data['subscription_cycles_completed'], 'Number');
            }
            if (data.hasOwnProperty('subscription_end_date')) {
                obj['subscription_end_date'] = ApiClient.convertToType(data['subscription_end_date'], 'String');
            }
            if (data.hasOwnProperty('subscription_id')) {
                obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
            }
            if (data.hasOwnProperty('subscription_next_bill_date')) {
                obj['subscription_next_bill_date'] = ApiClient.convertToType(data['subscription_next_bill_date'], 'String');
            }
            if (data.hasOwnProperty('subscription_start_date')) {
                obj['subscription_start_date'] = ApiClient.convertToType(data['subscription_start_date'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2Subscription</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2Subscription</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['subscription_end_date'] && !(typeof data['subscription_end_date'] === 'string' || data['subscription_end_date'] instanceof String)) {
            throw new Error("Expected the field `subscription_end_date` to be a primitive type in the JSON string but got " + data['subscription_end_date']);
        }
        // ensure the json data is a string
        if (data['subscription_id'] && !(typeof data['subscription_id'] === 'string' || data['subscription_id'] instanceof String)) {
            throw new Error("Expected the field `subscription_id` to be a primitive type in the JSON string but got " + data['subscription_id']);
        }
        // ensure the json data is a string
        if (data['subscription_next_bill_date'] && !(typeof data['subscription_next_bill_date'] === 'string' || data['subscription_next_bill_date'] instanceof String)) {
            throw new Error("Expected the field `subscription_next_bill_date` to be a primitive type in the JSON string but got " + data['subscription_next_bill_date']);
        }
        // ensure the json data is a string
        if (data['subscription_start_date'] && !(typeof data['subscription_start_date'] === 'string' || data['subscription_start_date'] instanceof String)) {
            throw new Error("Expected the field `subscription_start_date` to be a primitive type in the JSON string but got " + data['subscription_start_date']);
        }

        return true;
    }


}



/**
 * @member {Boolean} subscription_active
 */
RestV2Subscription.prototype['subscription_active'] = undefined;

/**
 * @member {Number} subscription_cycles_completed
 */
RestV2Subscription.prototype['subscription_cycles_completed'] = undefined;

/**
 * @member {String} subscription_end_date
 */
RestV2Subscription.prototype['subscription_end_date'] = undefined;

/**
 * @member {String} subscription_id
 */
RestV2Subscription.prototype['subscription_id'] = undefined;

/**
 * @member {String} subscription_next_bill_date
 */
RestV2Subscription.prototype['subscription_next_bill_date'] = undefined;

/**
 * @member {String} subscription_start_date
 */
RestV2Subscription.prototype['subscription_start_date'] = undefined;






export default RestV2Subscription;
