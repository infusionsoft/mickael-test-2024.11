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
import ShippingDiscount from './ShippingDiscount';

/**
 * The ListShippingDiscountsResponse model module.
 * @module com.keap.sdk.core/model/ListShippingDiscountsResponse
 * @version 0.0.103
 */
class ListShippingDiscountsResponse {
    /**
     * Constructs a new <code>ListShippingDiscountsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListShippingDiscountsResponse
     */
    constructor() { 
        
        ListShippingDiscountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListShippingDiscountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListShippingDiscountsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListShippingDiscountsResponse} The populated <code>ListShippingDiscountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListShippingDiscountsResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('shipping_discounts')) {
                obj['shipping_discounts'] = ApiClient.convertToType(data['shipping_discounts'], [ShippingDiscount]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListShippingDiscountsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListShippingDiscountsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['shipping_discounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipping_discounts'])) {
                throw new Error("Expected the field `shipping_discounts` to be an array in the JSON data but got " + data['shipping_discounts']);
            }
            // validate the optional field `shipping_discounts` (array)
            for (const item of data['shipping_discounts']) {
                ShippingDiscount.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListShippingDiscountsResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/ShippingDiscount>} shipping_discounts
 */
ListShippingDiscountsResponse.prototype['shipping_discounts'] = undefined;






export default ListShippingDiscountsResponse;
