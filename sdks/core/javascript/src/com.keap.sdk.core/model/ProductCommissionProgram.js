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
 * The ProductCommissionProgram model module.
 * @module com.keap.sdk.core/model/ProductCommissionProgram
 * @version 0.0.26
 */
class ProductCommissionProgram {
    /**
     * Constructs a new <code>ProductCommissionProgram</code>.
     * @alias module:com.keap.sdk.core/model/ProductCommissionProgram
     */
    constructor() { 
        
        ProductCommissionProgram.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductCommissionProgram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductCommissionProgram} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductCommissionProgram} The populated <code>ProductCommissionProgram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCommissionProgram();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductCommissionProgram</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductCommissionProgram</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ProductCommissionProgram.prototype['id'] = undefined;

/**
 * @member {String} message
 */
ProductCommissionProgram.prototype['message'] = undefined;






export default ProductCommissionProgram;
