/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeleteSubscriptionPlanCommissionRequest model module.
 * @module keap.core.v2/model/DeleteSubscriptionPlanCommissionRequest
 */
class DeleteSubscriptionPlanCommissionRequest {
    /**
     * Constructs a new <code>DeleteSubscriptionPlanCommissionRequest</code>.
     * @alias module:keap.core.v2/model/DeleteSubscriptionPlanCommissionRequest
     */
    constructor() { 
        
        DeleteSubscriptionPlanCommissionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteSubscriptionPlanCommissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/DeleteSubscriptionPlanCommissionRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/DeleteSubscriptionPlanCommissionRequest} The populated <code>DeleteSubscriptionPlanCommissionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteSubscriptionPlanCommissionRequest();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('subscription_plan_id')) {
                obj['subscription_plan_id'] = ApiClient.convertToType(data['subscription_plan_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteSubscriptionPlanCommissionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteSubscriptionPlanCommissionRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['subscription_plan_id'] && !(typeof data['subscription_plan_id'] === 'string' || data['subscription_plan_id'] instanceof String)) {
            throw new Error("Expected the field `subscription_plan_id` to be a primitive type in the JSON string but got " + data['subscription_plan_id']);
        }

        return true;
    }


}



/**
 * @member {String} product_id
 */
DeleteSubscriptionPlanCommissionRequest.prototype['product_id'] = undefined;

/**
 * @member {String} subscription_plan_id
 */
DeleteSubscriptionPlanCommissionRequest.prototype['subscription_plan_id'] = undefined;






export default DeleteSubscriptionPlanCommissionRequest;
