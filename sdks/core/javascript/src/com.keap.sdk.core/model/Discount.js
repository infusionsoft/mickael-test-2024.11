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
 * The Discount model module.
 * @module com.keap.sdk.core/model/Discount
 * @version 0.0.104
 */
class Discount {
    /**
     * Constructs a new <code>Discount</code>.
     * @alias module:com.keap.sdk.core/model/Discount
     * @param amount {Number} 
     * @param discountMethod {module:com.keap.sdk.core/model/Discount.DiscountMethodEnum} 
     * @param specialItemId {String} 
     */
    constructor(amount, discountMethod, specialItemId) { 
        
        Discount.initialize(this, amount, discountMethod, specialItemId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, discountMethod, specialItemId) { 
        obj['amount'] = amount;
        obj['discount_method'] = discountMethod;
        obj['special_item_id'] = specialItemId;
    }

    /**
     * Constructs a <code>Discount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Discount} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Discount} The populated <code>Discount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Discount();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('discount_method')) {
                obj['discount_method'] = ApiClient.convertToType(data['discount_method'], 'String');
            }
            if (data.hasOwnProperty('line_item_id')) {
                obj['line_item_id'] = ApiClient.convertToType(data['line_item_id'], 'String');
            }
            if (data.hasOwnProperty('special_item_id')) {
                obj['special_item_id'] = ApiClient.convertToType(data['special_item_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Discount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Discount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Discount.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['discount_method'] && !(typeof data['discount_method'] === 'string' || data['discount_method'] instanceof String)) {
            throw new Error("Expected the field `discount_method` to be a primitive type in the JSON string but got " + data['discount_method']);
        }
        // ensure the json data is a string
        if (data['line_item_id'] && !(typeof data['line_item_id'] === 'string' || data['line_item_id'] instanceof String)) {
            throw new Error("Expected the field `line_item_id` to be a primitive type in the JSON string but got " + data['line_item_id']);
        }
        // ensure the json data is a string
        if (data['special_item_id'] && !(typeof data['special_item_id'] === 'string' || data['special_item_id'] instanceof String)) {
            throw new Error("Expected the field `special_item_id` to be a primitive type in the JSON string but got " + data['special_item_id']);
        }

        return true;
    }


}

Discount.RequiredProperties = ["amount", "discount_method", "special_item_id"];

/**
 * @member {Number} amount
 */
Discount.prototype['amount'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Discount.DiscountMethodEnum} discount_method
 */
Discount.prototype['discount_method'] = undefined;

/**
 * @member {String} line_item_id
 */
Discount.prototype['line_item_id'] = undefined;

/**
 * @member {String} special_item_id
 */
Discount.prototype['special_item_id'] = undefined;





/**
 * Allowed values for the <code>discount_method</code> property.
 * @enum {String}
 * @readonly
 */
Discount['DiscountMethodEnum'] = {

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


export default Discount;
