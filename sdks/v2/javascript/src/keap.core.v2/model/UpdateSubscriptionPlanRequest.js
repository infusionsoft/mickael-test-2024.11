/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateSubscriptionPlanRequest model module.
 * @module keap.core.v2/model/UpdateSubscriptionPlanRequest
 */
class UpdateSubscriptionPlanRequest {
    /**
     * Constructs a new <code>UpdateSubscriptionPlanRequest</code>.
     * @alias module:keap.core.v2/model/UpdateSubscriptionPlanRequest
     * @param cycleType {module:keap.core.v2/model/UpdateSubscriptionPlanRequest.CycleTypeEnum} The cycle type of the subscription plan.
     * @param planPrice {Number} The price of the subscription plan in the smallest currency unit.
     */
    constructor(cycleType, planPrice) { 
        
        UpdateSubscriptionPlanRequest.initialize(this, cycleType, planPrice);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cycleType, planPrice) { 
        obj['cycle_type'] = cycleType;
        obj['plan_price'] = planPrice;
    }

    /**
     * Constructs a <code>UpdateSubscriptionPlanRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/UpdateSubscriptionPlanRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/UpdateSubscriptionPlanRequest} The populated <code>UpdateSubscriptionPlanRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSubscriptionPlanRequest();

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
            if (data.hasOwnProperty('plan_price')) {
                obj['plan_price'] = ApiClient.convertToType(data['plan_price'], 'Number');
            }
            if (data.hasOwnProperty('total_cycles')) {
                obj['total_cycles'] = ApiClient.convertToType(data['total_cycles'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateSubscriptionPlanRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateSubscriptionPlanRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateSubscriptionPlanRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cycle_type'] && !(typeof data['cycle_type'] === 'string' || data['cycle_type'] instanceof String)) {
            throw new Error("Expected the field `cycle_type` to be a primitive type in the JSON string but got " + data['cycle_type']);
        }

        return true;
    }


}

UpdateSubscriptionPlanRequest.RequiredProperties = ["cycle_type", "plan_price"];

/**
 * Whether the subscription plan is active.
 * @member {Boolean} active
 */
UpdateSubscriptionPlanRequest.prototype['active'] = undefined;

/**
 * Allow prorating of the subscription plan.
 * @member {Boolean} allow_prorating
 */
UpdateSubscriptionPlanRequest.prototype['allow_prorating'] = undefined;

/**
 * The cycle type of the subscription plan.
 * @member {module:keap.core.v2/model/UpdateSubscriptionPlanRequest.CycleTypeEnum} cycle_type
 */
UpdateSubscriptionPlanRequest.prototype['cycle_type'] = undefined;

/**
 * The order that this plan will be displayed to the user.
 * @member {Number} display_order_index
 */
UpdateSubscriptionPlanRequest.prototype['display_order_index'] = undefined;

/**
 * The frequency of the subscription plan.
 * @member {Number} frequency
 */
UpdateSubscriptionPlanRequest.prototype['frequency'] = undefined;

/**
 * The price of the subscription plan in the smallest currency unit.
 * @member {Number} plan_price
 */
UpdateSubscriptionPlanRequest.prototype['plan_price'] = undefined;

/**
 * How many cycles the subscription plan will have.  0 means infinite.
 * @member {Number} total_cycles
 */
UpdateSubscriptionPlanRequest.prototype['total_cycles'] = undefined;





/**
 * Allowed values for the <code>cycle_type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateSubscriptionPlanRequest['CycleTypeEnum'] = {

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


export default UpdateSubscriptionPlanRequest;
