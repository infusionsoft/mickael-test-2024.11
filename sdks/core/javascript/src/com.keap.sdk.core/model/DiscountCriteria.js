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
 * The DiscountCriteria model module.
 * @module com.keap.sdk.core/model/DiscountCriteria
 * @version 0.0.107
 */
class DiscountCriteria {
    /**
     * Constructs a new <code>DiscountCriteria</code>.
     * @alias module:com.keap.sdk.core/model/DiscountCriteria
     */
    constructor() { 
        
        DiscountCriteria.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DiscountCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DiscountCriteria} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DiscountCriteria} The populated <code>DiscountCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscountCriteria();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('criteria_id')) {
                obj['criteria_id'] = ApiClient.convertToType(data['criteria_id'], 'String');
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('plan_id')) {
                obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('product_quantity_max')) {
                obj['product_quantity_max'] = ApiClient.convertToType(data['product_quantity_max'], 'Number');
            }
            if (data.hasOwnProperty('product_quantity_min')) {
                obj['product_quantity_min'] = ApiClient.convertToType(data['product_quantity_min'], 'Number');
            }
            if (data.hasOwnProperty('range_end_time')) {
                obj['range_end_time'] = ApiClient.convertToType(data['range_end_time'], 'String');
            }
            if (data.hasOwnProperty('range_start_time')) {
                obj['range_start_time'] = ApiClient.convertToType(data['range_start_time'], 'String');
            }
            if (data.hasOwnProperty('subscription_quantity')) {
                obj['subscription_quantity'] = ApiClient.convertToType(data['subscription_quantity'], 'Number');
            }
            if (data.hasOwnProperty('total_amount')) {
                obj['total_amount'] = ApiClient.convertToType(data['total_amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscountCriteria</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscountCriteria</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['criteria_id'] && !(typeof data['criteria_id'] === 'string' || data['criteria_id'] instanceof String)) {
            throw new Error("Expected the field `criteria_id` to be a primitive type in the JSON string but got " + data['criteria_id']);
        }
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }
        // ensure the json data is a string
        if (data['plan_id'] && !(typeof data['plan_id'] === 'string' || data['plan_id'] instanceof String)) {
            throw new Error("Expected the field `plan_id` to be a primitive type in the JSON string but got " + data['plan_id']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['range_end_time'] && !(typeof data['range_end_time'] === 'string' || data['range_end_time'] instanceof String)) {
            throw new Error("Expected the field `range_end_time` to be a primitive type in the JSON string but got " + data['range_end_time']);
        }
        // ensure the json data is a string
        if (data['range_start_time'] && !(typeof data['range_start_time'] === 'string' || data['range_start_time'] instanceof String)) {
            throw new Error("Expected the field `range_start_time` to be a primitive type in the JSON string but got " + data['range_start_time']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} code
 */
DiscountCriteria.prototype['code'] = undefined;

/**
 * @member {String} criteria_id
 */
DiscountCriteria.prototype['criteria_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/DiscountCriteria.OperatorEnum} operator
 */
DiscountCriteria.prototype['operator'] = undefined;

/**
 * @member {String} plan_id
 */
DiscountCriteria.prototype['plan_id'] = undefined;

/**
 * @member {String} product_id
 */
DiscountCriteria.prototype['product_id'] = undefined;

/**
 * @member {Number} product_quantity_max
 */
DiscountCriteria.prototype['product_quantity_max'] = undefined;

/**
 * @member {Number} product_quantity_min
 */
DiscountCriteria.prototype['product_quantity_min'] = undefined;

/**
 * @member {String} range_end_time
 */
DiscountCriteria.prototype['range_end_time'] = undefined;

/**
 * @member {String} range_start_time
 */
DiscountCriteria.prototype['range_start_time'] = undefined;

/**
 * @member {Number} subscription_quantity
 */
DiscountCriteria.prototype['subscription_quantity'] = undefined;

/**
 * @member {Number} total_amount
 */
DiscountCriteria.prototype['total_amount'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/DiscountCriteria.TypeEnum} type
 */
DiscountCriteria.prototype['type'] = undefined;





/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */
DiscountCriteria['OperatorEnum'] = {

    /**
     * value: "LESS_THAN"
     * @const
     */
    "LESS_THAN": "LESS_THAN",

    /**
     * value: "GREATER_THAN"
     * @const
     */
    "GREATER_THAN": "GREATER_THAN",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DiscountCriteria['TypeEnum'] = {

    /**
     * value: "DATE_RANGE"
     * @const
     */
    "DATE_RANGE": "DATE_RANGE",

    /**
     * value: "PROMO_CODE"
     * @const
     */
    "PROMO_CODE": "PROMO_CODE",

    /**
     * value: "PRODUCT"
     * @const
     */
    "PRODUCT": "PRODUCT",

    /**
     * value: "SUBSCRIPTION_PLAN"
     * @const
     */
    "SUBSCRIPTION_PLAN": "SUBSCRIPTION_PLAN",

    /**
     * value: "ORDER_TOTAL"
     * @const
     */
    "ORDER_TOTAL": "ORDER_TOTAL",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default DiscountCriteria;
