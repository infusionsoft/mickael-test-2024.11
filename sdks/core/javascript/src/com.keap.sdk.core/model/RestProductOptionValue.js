/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RestProductOptionValue model module.
 * @module com.keap.sdk.core/model/RestProductOptionValue
 * @version 0.0.22
 */
class RestProductOptionValue {
    /**
     * Constructs a new <code>RestProductOptionValue</code>.
     * @alias module:com.keap.sdk.core/model/RestProductOptionValue
     */
    constructor() { 
        
        RestProductOptionValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestProductOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestProductOptionValue} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestProductOptionValue} The populated <code>RestProductOptionValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestProductOptionValue();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('price_adjustment')) {
                obj['price_adjustment'] = ApiClient.convertToType(data['price_adjustment'], 'Number');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestProductOptionValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestProductOptionValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
RestProductOptionValue.prototype['id'] = undefined;

/**
 * @member {Number} index
 */
RestProductOptionValue.prototype['index'] = undefined;

/**
 * @member {Boolean} is_default
 */
RestProductOptionValue.prototype['is_default'] = undefined;

/**
 * @member {String} label
 */
RestProductOptionValue.prototype['label'] = undefined;

/**
 * @member {Number} price_adjustment
 */
RestProductOptionValue.prototype['price_adjustment'] = undefined;

/**
 * @member {String} sku
 */
RestProductOptionValue.prototype['sku'] = undefined;






export default RestProductOptionValue;
