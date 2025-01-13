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

/**
 * The ProductVariableSetting model module.
 * @module com.keap.sdk.core/model/ProductVariableSetting
 * @version 0.0.86
 */
class ProductVariableSetting {
    /**
     * Constructs a new <code>ProductVariableSetting</code>.
     * @alias module:com.keap.sdk.core/model/ProductVariableSetting
     */
    constructor() { 
        
        ProductVariableSetting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductVariableSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductVariableSetting} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductVariableSetting} The populated <code>ProductVariableSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariableSetting();

            if (data.hasOwnProperty('contain_spaces')) {
                obj['contain_spaces'] = ApiClient.convertToType(data['contain_spaces'], 'Boolean');
            }
            if (data.hasOwnProperty('contains')) {
                obj['contains'] = ApiClient.convertToType(data['contains'], 'String');
            }
            if (data.hasOwnProperty('end_with')) {
                obj['end_with'] = ApiClient.convertToType(data['end_with'], 'String');
            }
            if (data.hasOwnProperty('max_chars')) {
                obj['max_chars'] = ApiClient.convertToType(data['max_chars'], 'Number');
            }
            if (data.hasOwnProperty('min_chars')) {
                obj['min_chars'] = ApiClient.convertToType(data['min_chars'], 'Number');
            }
            if (data.hasOwnProperty('start_with')) {
                obj['start_with'] = ApiClient.convertToType(data['start_with'], 'String');
            }
            if (data.hasOwnProperty('validation_msg')) {
                obj['validation_msg'] = ApiClient.convertToType(data['validation_msg'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductVariableSetting</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductVariableSetting</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contains'] && !(typeof data['contains'] === 'string' || data['contains'] instanceof String)) {
            throw new Error("Expected the field `contains` to be a primitive type in the JSON string but got " + data['contains']);
        }
        // ensure the json data is a string
        if (data['end_with'] && !(typeof data['end_with'] === 'string' || data['end_with'] instanceof String)) {
            throw new Error("Expected the field `end_with` to be a primitive type in the JSON string but got " + data['end_with']);
        }
        // ensure the json data is a string
        if (data['start_with'] && !(typeof data['start_with'] === 'string' || data['start_with'] instanceof String)) {
            throw new Error("Expected the field `start_with` to be a primitive type in the JSON string but got " + data['start_with']);
        }
        // ensure the json data is a string
        if (data['validation_msg'] && !(typeof data['validation_msg'] === 'string' || data['validation_msg'] instanceof String)) {
            throw new Error("Expected the field `validation_msg` to be a primitive type in the JSON string but got " + data['validation_msg']);
        }

        return true;
    }


}



/**
 * If spaces are allowed for the option
 * @member {Boolean} contain_spaces
 */
ProductVariableSetting.prototype['contain_spaces'] = undefined;

/**
 * Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH.
 * @member {String} contains
 */
ProductVariableSetting.prototype['contains'] = undefined;

/**
 * Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH.
 * @member {String} end_with
 */
ProductVariableSetting.prototype['end_with'] = undefined;

/**
 * Max allowable chars. Its value must be greater than min_chars
 * @member {Number} max_chars
 */
ProductVariableSetting.prototype['max_chars'] = undefined;

/**
 * Minimum allowable characters
 * @member {Number} min_chars
 */
ProductVariableSetting.prototype['min_chars'] = undefined;

/**
 * Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH.
 * @member {String} start_with
 */
ProductVariableSetting.prototype['start_with'] = undefined;

/**
 * Customized validation message to display when option criteria aren’t met
 * @member {String} validation_msg
 */
ProductVariableSetting.prototype['validation_msg'] = undefined;






export default ProductVariableSetting;
