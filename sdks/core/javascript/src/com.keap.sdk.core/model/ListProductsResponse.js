/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RestV2Product from './RestV2Product';

/**
 * The ListProductsResponse model module.
 * @module com.keap.sdk.core/model/ListProductsResponse
 * @version 0.0.76
 */
class ListProductsResponse {
    /**
     * Constructs a new <code>ListProductsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListProductsResponse
     */
    constructor() { 
        
        ListProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListProductsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListProductsResponse} The populated <code>ListProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListProductsResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [RestV2Product]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListProductsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListProductsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                RestV2Product.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListProductsResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/RestV2Product>} products
 */
ListProductsResponse.prototype['products'] = undefined;






export default ListProductsResponse;
