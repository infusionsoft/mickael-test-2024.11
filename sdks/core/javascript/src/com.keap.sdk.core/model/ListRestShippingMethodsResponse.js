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
import ShippingMethod from './ShippingMethod';

/**
 * The ListRestShippingMethodsResponse model module.
 * @module com.keap.sdk.core/model/ListRestShippingMethodsResponse
 * @version 0.0.20
 */
class ListRestShippingMethodsResponse {
    /**
     * Constructs a new <code>ListRestShippingMethodsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListRestShippingMethodsResponse
     */
    constructor() { 
        
        ListRestShippingMethodsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListRestShippingMethodsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListRestShippingMethodsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListRestShippingMethodsResponse} The populated <code>ListRestShippingMethodsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListRestShippingMethodsResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], [ShippingMethod]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListRestShippingMethodsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListRestShippingMethodsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['shipping_methods']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipping_methods'])) {
                throw new Error("Expected the field `shipping_methods` to be an array in the JSON data but got " + data['shipping_methods']);
            }
            // validate the optional field `shipping_methods` (array)
            for (const item of data['shipping_methods']) {
                ShippingMethod.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListRestShippingMethodsResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/ShippingMethod>} shipping_methods
 */
ListRestShippingMethodsResponse.prototype['shipping_methods'] = undefined;






export default ListRestShippingMethodsResponse;
