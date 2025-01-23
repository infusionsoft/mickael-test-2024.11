/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AssignProductsRequest model module.
 * @module com.keap.sdk.core/model/AssignProductsRequest
 * @version 0.0.104
 */
class AssignProductsRequest {
    /**
     * Constructs a new <code>AssignProductsRequest</code>.
     * @alias module:com.keap.sdk.core/model/AssignProductsRequest
     * @param productIds {Array.<String>} 
     */
    constructor(productIds) { 
        
        AssignProductsRequest.initialize(this, productIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productIds) { 
        obj['product_ids'] = productIds;
    }

    /**
     * Constructs a <code>AssignProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AssignProductsRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AssignProductsRequest} The populated <code>AssignProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssignProductsRequest();

            if (data.hasOwnProperty('product_ids')) {
                obj['product_ids'] = ApiClient.convertToType(data['product_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssignProductsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignProductsRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssignProductsRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product_ids'])) {
            throw new Error("Expected the field `product_ids` to be an array in the JSON data but got " + data['product_ids']);
        }

        return true;
    }


}

AssignProductsRequest.RequiredProperties = ["product_ids"];

/**
 * @member {Array.<String>} product_ids
 */
AssignProductsRequest.prototype['product_ids'] = undefined;






export default AssignProductsRequest;
