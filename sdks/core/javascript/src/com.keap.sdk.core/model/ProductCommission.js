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
 * The ProductCommission model module.
 * @module com.keap.sdk.core/model/ProductCommission
 * @version 0.0.95
 */
class ProductCommission {
    /**
     * Constructs a new <code>ProductCommission</code>.
     * @alias module:com.keap.sdk.core/model/ProductCommission
     */
    constructor() { 
        
        ProductCommission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductCommission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductCommission} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductCommission} The populated <code>ProductCommission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCommission();

            if (data.hasOwnProperty('dollar_amount')) {
                obj['dollar_amount'] = ApiClient.convertToType(data['dollar_amount'], 'Number');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('product_price')) {
                obj['product_price'] = ApiClient.convertToType(data['product_price'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductCommission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductCommission</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['product_name'] && !(typeof data['product_name'] === 'string' || data['product_name'] instanceof String)) {
            throw new Error("Expected the field `product_name` to be a primitive type in the JSON string but got " + data['product_name']);
        }

        return true;
    }


}



/**
 * @member {Number} dollar_amount
 */
ProductCommission.prototype['dollar_amount'] = undefined;

/**
 * @member {Number} percentage
 */
ProductCommission.prototype['percentage'] = undefined;

/**
 * @member {String} product_id
 */
ProductCommission.prototype['product_id'] = undefined;

/**
 * @member {String} product_name
 */
ProductCommission.prototype['product_name'] = undefined;

/**
 * @member {Number} product_price
 */
ProductCommission.prototype['product_price'] = undefined;






export default ProductCommission;
