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
 * The ProductFixedOption model module.
 * @module com.keap.sdk.core/model/ProductFixedOption
 * @version 0.0.97
 */
class ProductFixedOption {
    /**
     * Constructs a new <code>ProductFixedOption</code>.
     * @alias module:com.keap.sdk.core/model/ProductFixedOption
     */
    constructor() { 
        
        ProductFixedOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductFixedOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductFixedOption} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductFixedOption} The populated <code>ProductFixedOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductFixedOption();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('price_adjustment')) {
                obj['price_adjustment'] = ApiClient.convertToType(data['price_adjustment'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductFixedOption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductFixedOption</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * An internal code to reference the option value
 * @member {String} code
 */
ProductFixedOption.prototype['code'] = undefined;

/**
 * Positive value indicates additional amount added to the original price. Negative value indicates subtraction from the original price.
 * @member {Number} price_adjustment
 */
ProductFixedOption.prototype['price_adjustment'] = undefined;

/**
 * The displayable label given to the option
 * @member {String} value
 */
ProductFixedOption.prototype['value'] = undefined;






export default ProductFixedOption;
