/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
 * The CategoryDiscount model module.
 * @module com.keap.sdk.core/model/CategoryDiscount
 * @version 0.0.82
 */
class CategoryDiscount {
    /**
     * Constructs a new <code>CategoryDiscount</code>.
     * @alias module:com.keap.sdk.core/model/CategoryDiscount
     */
    constructor() { 
        
        CategoryDiscount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CategoryDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CategoryDiscount} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CategoryDiscount} The populated <code>CategoryDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryDiscount();

            if (data.hasOwnProperty('apply_to_commissions')) {
                obj['apply_to_commissions'] = ApiClient.convertToType(data['apply_to_commissions'], 'Boolean');
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], [DiscountCriteria]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product_categories')) {
                obj['product_categories'] = ApiClient.convertToType(data['product_categories'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CategoryDiscount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CategoryDiscount</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['category_id'] && !(typeof data['category_id'] === 'string' || data['category_id'] instanceof String)) {
            throw new Error("Expected the field `category_id` to be a primitive type in the JSON string but got " + data['category_id']);
        }
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product_categories'])) {
            throw new Error("Expected the field `product_categories` to be an array in the JSON data but got " + data['product_categories']);
        }

        return true;
    }


}



/**
 * @member {Boolean} apply_to_commissions
 */
CategoryDiscount.prototype['apply_to_commissions'] = undefined;

/**
 * @member {String} category_id
 */
CategoryDiscount.prototype['category_id'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/DiscountCriteria>} criteria
 */
CategoryDiscount.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
CategoryDiscount.prototype['description'] = undefined;

/**
 * @member {Number} discount_percent
 */
CategoryDiscount.prototype['discount_percent'] = undefined;

/**
 * @member {String} name
 */
CategoryDiscount.prototype['name'] = undefined;

/**
 * @member {Array.<String>} product_categories
 */
CategoryDiscount.prototype['product_categories'] = undefined;






export default CategoryDiscount;
