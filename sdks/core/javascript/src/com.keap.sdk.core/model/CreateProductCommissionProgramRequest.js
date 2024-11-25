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
 * The CreateProductCommissionProgramRequest model module.
 * @module com.keap.sdk.core/model/CreateProductCommissionProgramRequest
 * @version 0.0.18
 */
class CreateProductCommissionProgramRequest {
    /**
     * Constructs a new <code>CreateProductCommissionProgramRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest
     */
    constructor() { 
        
        CreateProductCommissionProgramRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateProductCommissionProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest} The populated <code>CreateProductCommissionProgramRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductCommissionProgramRequest();

            if (data.hasOwnProperty('dollar_amount')) {
                obj['dollar_amount'] = ApiClient.convertToType(data['dollar_amount'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProductCommissionProgramRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProductCommissionProgramRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dollar_amount'] && !(typeof data['dollar_amount'] === 'string' || data['dollar_amount'] instanceof String)) {
            throw new Error("Expected the field `dollar_amount` to be a primitive type in the JSON string but got " + data['dollar_amount']);
        }
        // ensure the json data is a string
        if (data['percentage'] && !(typeof data['percentage'] === 'string' || data['percentage'] instanceof String)) {
            throw new Error("Expected the field `percentage` to be a primitive type in the JSON string but got " + data['percentage']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }

        return true;
    }


}



/**
 * @member {String} dollar_amount
 */
CreateProductCommissionProgramRequest.prototype['dollar_amount'] = undefined;

/**
 * @member {String} percentage
 */
CreateProductCommissionProgramRequest.prototype['percentage'] = undefined;

/**
 * @member {String} product_id
 */
CreateProductCommissionProgramRequest.prototype['product_id'] = undefined;






export default CreateProductCommissionProgramRequest;
