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

/**
 * The ProductCategory model module.
 * @module com.keap.sdk.core/model/ProductCategory
 * @version 0.0.96
 */
class ProductCategory {
    /**
     * Constructs a new <code>ProductCategory</code>.
     * @alias module:com.keap.sdk.core/model/ProductCategory
     */
    constructor() { 
        
        ProductCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductCategory} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductCategory} The populated <code>ProductCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCategory();

            if (data.hasOwnProperty('display_order_index')) {
                obj['display_order_index'] = ApiClient.convertToType(data['display_order_index'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parent_category_id')) {
                obj['parent_category_id'] = ApiClient.convertToType(data['parent_category_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductCategory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductCategory</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['parent_category_id'] && !(typeof data['parent_category_id'] === 'string' || data['parent_category_id'] instanceof String)) {
            throw new Error("Expected the field `parent_category_id` to be a primitive type in the JSON string but got " + data['parent_category_id']);
        }

        return true;
    }


}



/**
 * @member {Number} display_order_index
 */
ProductCategory.prototype['display_order_index'] = undefined;

/**
 * @member {String} id
 */
ProductCategory.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProductCategory.prototype['name'] = undefined;

/**
 * @member {String} parent_category_id
 */
ProductCategory.prototype['parent_category_id'] = undefined;






export default ProductCategory;
