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
import ProductFixedOption from './ProductFixedOption';
import ProductVariableSetting from './ProductVariableSetting';

/**
 * The ProductOptions model module.
 * @module com.keap.sdk.core/model/ProductOptions
 * @version 0.0.94
 */
class ProductOptions {
    /**
     * Constructs a new <code>ProductOptions</code>.
     * @alias module:com.keap.sdk.core/model/ProductOptions
     */
    constructor() { 
        
        ProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductOptions} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductOptions} The populated <code>ProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductOptions();

            if (data.hasOwnProperty('fixed_options')) {
                obj['fixed_options'] = ApiClient.convertToType(data['fixed_options'], [ProductFixedOption]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('variable_setting')) {
                obj['variable_setting'] = ProductVariableSetting.constructFromObject(data['variable_setting']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductOptions</code>.
     */
    static validateJSON(data) {
        if (data['fixed_options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fixed_options'])) {
                throw new Error("Expected the field `fixed_options` to be an array in the JSON data but got " + data['fixed_options']);
            }
            // validate the optional field `fixed_options` (array)
            for (const item of data['fixed_options']) {
                ProductFixedOption.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `variable_setting`
        if (data['variable_setting']) { // data not null
          ProductVariableSetting.validateJSON(data['variable_setting']);
        }

        return true;
    }


}



/**
 * List of option values for the fixed option
 * @member {Array.<module:com.keap.sdk.core/model/ProductFixedOption>} fixed_options
 */
ProductOptions.prototype['fixed_options'] = undefined;

/**
 * The option name
 * @member {String} name
 */
ProductOptions.prototype['name'] = undefined;

/**
 * If the user is required to select/fill in an option for the product
 * @member {Boolean} required
 */
ProductOptions.prototype['required'] = undefined;

/**
 * Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned.
 * @member {module:com.keap.sdk.core/model/ProductOptions.TypeEnum} type
 */
ProductOptions.prototype['type'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ProductVariableSetting} variable_setting
 */
ProductOptions.prototype['variable_setting'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ProductOptions['TypeEnum'] = {

    /**
     * value: "FIXED"
     * @const
     */
    "FIXED": "FIXED",

    /**
     * value: "VARIABLE"
     * @const
     */
    "VARIABLE": "VARIABLE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default ProductOptions;
