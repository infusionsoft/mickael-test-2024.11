/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
 * The ShippingDiscount model module.
 * @module keap.sdk.core/model/ShippingDiscount
 */
class ShippingDiscount {
    /**
     * Constructs a new <code>ShippingDiscount</code>.
     * @alias module:keap.sdk.core/model/ShippingDiscount
     */
    constructor() { 
        
        ShippingDiscount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShippingDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/ShippingDiscount} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/ShippingDiscount} The populated <code>ShippingDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingDiscount();

            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], [DiscountCriteria]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount_id')) {
                obj['discount_id'] = ApiClient.convertToType(data['discount_id'], 'String');
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
     * Validates the JSON data with respect to <code>ShippingDiscount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShippingDiscount</code>.
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
        if (data['discount_id'] && !(typeof data['discount_id'] === 'string' || data['discount_id'] instanceof String)) {
            throw new Error("Expected the field `discount_id` to be a primitive type in the JSON string but got " + data['discount_id']);
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
 * @member {Array.<module:keap.sdk.core/model/DiscountCriteria>} criteria
 */
ShippingDiscount.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
ShippingDiscount.prototype['description'] = undefined;

/**
 * @member {String} discount_id
 */
ShippingDiscount.prototype['discount_id'] = undefined;

/**
 * @member {module:keap.sdk.core/model/ShippingDiscount.DiscountTypeEnum} discount_type
 */
ShippingDiscount.prototype['discount_type'] = undefined;

/**
 * @member {Number} discount_value
 */
ShippingDiscount.prototype['discount_value'] = undefined;

/**
 * @member {String} name
 */
ShippingDiscount.prototype['name'] = undefined;





/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
ShippingDiscount['DiscountTypeEnum'] = {

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


export default ShippingDiscount;
