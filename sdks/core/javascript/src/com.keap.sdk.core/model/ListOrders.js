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
import RestV2Order from './RestV2Order';

/**
 * The ListOrders model module.
 * @module com.keap.sdk.core/model/ListOrders
 * @version 0.0.61
 */
class ListOrders {
    /**
     * Constructs a new <code>ListOrders</code>.
     * @alias module:com.keap.sdk.core/model/ListOrders
     */
    constructor() { 
        
        ListOrders.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListOrders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListOrders} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListOrders} The populated <code>ListOrders</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListOrders();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [RestV2Order]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListOrders</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListOrders</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['orders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['orders'])) {
                throw new Error("Expected the field `orders` to be an array in the JSON data but got " + data['orders']);
            }
            // validate the optional field `orders` (array)
            for (const item of data['orders']) {
                RestV2Order.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListOrders.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/RestV2Order>} orders
 */
ListOrders.prototype['orders'] = undefined;






export default ListOrders;
