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
import DiscountCriteria from './DiscountCriteria';

/**
 * The ProductDiscount model module.
 * @module com.keap.sdk.core/model/ProductDiscount
 * @version 0.0.98
 */
class ProductDiscount {
    /**
     * Constructs a new <code>ProductDiscount</code>.
     * @alias module:com.keap.sdk.core/model/ProductDiscount
     */
    constructor() { 
        
        ProductDiscount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductDiscount} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductDiscount} The populated <code>ProductDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductDiscount();

            if (data.hasOwnProperty('apply_to_commissions')) {
                obj['apply_to_commissions'] = ApiClient.convertToType(data['apply_to_commissions'], 'Boolean');
            }
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
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductDiscount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductDiscount</code>.
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
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }

        return true;
    }


}



/**
 * @member {Boolean} apply_to_commissions
 */
ProductDiscount.prototype['apply_to_commissions'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/DiscountCriteria>} criteria
 */
ProductDiscount.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
ProductDiscount.prototype['description'] = undefined;

/**
 * @member {String} discount_id
 */
ProductDiscount.prototype['discount_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ProductDiscount.DiscountTypeEnum} discount_type
 */
ProductDiscount.prototype['discount_type'] = undefined;

/**
 * @member {Number} discount_value
 */
ProductDiscount.prototype['discount_value'] = undefined;

/**
 * @member {String} name
 */
ProductDiscount.prototype['name'] = undefined;

/**
 * @member {String} product_id
 */
ProductDiscount.prototype['product_id'] = undefined;





/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
ProductDiscount['DiscountTypeEnum'] = {

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


export default ProductDiscount;
