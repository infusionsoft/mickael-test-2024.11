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
import DiscountCriteria from './DiscountCriteria';

/**
 * The UpdateOrderTotalDiscountRequest model module.
 * @module com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest
 * @version 0.0.76
 */
class UpdateOrderTotalDiscountRequest {
    /**
     * Constructs a new <code>UpdateOrderTotalDiscountRequest</code>.
     * @alias module:com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest
     */
    constructor() { 
        
        UpdateOrderTotalDiscountRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateOrderTotalDiscountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest} The populated <code>UpdateOrderTotalDiscountRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOrderTotalDiscountRequest();

            if (data.hasOwnProperty('apply_to_commissions')) {
                obj['apply_to_commissions'] = ApiClient.convertToType(data['apply_to_commissions'], 'Boolean');
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], [DiscountCriteria]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount_strategy')) {
                obj['discount_strategy'] = ApiClient.convertToType(data['discount_strategy'], 'String');
            }
            if (data.hasOwnProperty('discount_type')) {
                obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
            }
            if (data.hasOwnProperty('discount_value')) {
                obj['discount_value'] = ApiClient.convertToType(data['discount_value'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateOrderTotalDiscountRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateOrderTotalDiscountRequest</code>.
     */
    static validateJSON(data) {
        if (data['criteria']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['criteria'])) {
                throw new Error("Expected the field `criteria` to be an array in the JSON data but got " + data['criteria']);
            }
            // validate the optional field `criteria` (array)
            for (const item of data['criteria']) {
                DiscountCriteria.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['discount_strategy'] && !(typeof data['discount_strategy'] === 'string' || data['discount_strategy'] instanceof String)) {
            throw new Error("Expected the field `discount_strategy` to be a primitive type in the JSON string but got " + data['discount_strategy']);
        }
        // ensure the json data is a string
        if (data['discount_type'] && !(typeof data['discount_type'] === 'string' || data['discount_type'] instanceof String)) {
            throw new Error("Expected the field `discount_type` to be a primitive type in the JSON string but got " + data['discount_type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Boolean} apply_to_commissions
 */
UpdateOrderTotalDiscountRequest.prototype['apply_to_commissions'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/DiscountCriteria>} criteria
 */
UpdateOrderTotalDiscountRequest.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
UpdateOrderTotalDiscountRequest.prototype['description'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest.DiscountStrategyEnum} discount_strategy
 */
UpdateOrderTotalDiscountRequest.prototype['discount_strategy'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest.DiscountTypeEnum} discount_type
 */
UpdateOrderTotalDiscountRequest.prototype['discount_type'] = undefined;

/**
 * @member {Number} discount_value
 */
UpdateOrderTotalDiscountRequest.prototype['discount_value'] = undefined;

/**
 * @member {String} name
 */
UpdateOrderTotalDiscountRequest.prototype['name'] = undefined;





/**
 * Allowed values for the <code>discount_strategy</code> property.
 * @enum {String}
 * @readonly
 */
UpdateOrderTotalDiscountRequest['DiscountStrategyEnum'] = {

    /**
     * value: "GROSS"
     * @const
     */
    "GROSS": "GROSS",

    /**
     * value: "NET"
     * @const
     */
    "NET": "NET",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateOrderTotalDiscountRequest['DiscountTypeEnum'] = {

    /**
     * value: "AMOUNT"
     * @const
     */
    "AMOUNT": "AMOUNT",

    /**
     * value: "PERCENT"
     * @const
     */
    "PERCENT": "PERCENT",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default UpdateOrderTotalDiscountRequest;
