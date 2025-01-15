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
import AddressInformation from './AddressInformation';

/**
 * The UpdateOrderRequest model module.
 * @module com.keap.sdk.core/model/UpdateOrderRequest
 * @version 0.0.87
 */
class UpdateOrderRequest {
    /**
     * Constructs a new <code>UpdateOrderRequest</code>.
     * @alias module:com.keap.sdk.core/model/UpdateOrderRequest
     */
    constructor() { 
        
        UpdateOrderRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateOrderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateOrderRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateOrderRequest} The populated <code>UpdateOrderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOrderRequest();

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('lead_affiliate_id')) {
                obj['lead_affiliate_id'] = ApiClient.convertToType(data['lead_affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('order_time')) {
                obj['order_time'] = ApiClient.convertToType(data['order_time'], 'String');
            }
            if (data.hasOwnProperty('order_title')) {
                obj['order_title'] = ApiClient.convertToType(data['order_title'], 'String');
            }
            if (data.hasOwnProperty('order_type')) {
                obj['order_type'] = ApiClient.convertToType(data['order_type'], 'String');
            }
            if (data.hasOwnProperty('promo_codes')) {
                obj['promo_codes'] = ApiClient.convertToType(data['promo_codes'], ['String']);
            }
            if (data.hasOwnProperty('sales_affiliate_id')) {
                obj['sales_affiliate_id'] = ApiClient.convertToType(data['sales_affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('shipping_address')) {
                obj['shipping_address'] = AddressInformation.constructFromObject(data['shipping_address']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateOrderRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateOrderRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['lead_affiliate_id'] && !(typeof data['lead_affiliate_id'] === 'string' || data['lead_affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `lead_affiliate_id` to be a primitive type in the JSON string but got " + data['lead_affiliate_id']);
        }
        // ensure the json data is a string
        if (data['order_time'] && !(typeof data['order_time'] === 'string' || data['order_time'] instanceof String)) {
            throw new Error("Expected the field `order_time` to be a primitive type in the JSON string but got " + data['order_time']);
        }
        // ensure the json data is a string
        if (data['order_title'] && !(typeof data['order_title'] === 'string' || data['order_title'] instanceof String)) {
            throw new Error("Expected the field `order_title` to be a primitive type in the JSON string but got " + data['order_title']);
        }
        // ensure the json data is a string
        if (data['order_type'] && !(typeof data['order_type'] === 'string' || data['order_type'] instanceof String)) {
            throw new Error("Expected the field `order_type` to be a primitive type in the JSON string but got " + data['order_type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['promo_codes'])) {
            throw new Error("Expected the field `promo_codes` to be an array in the JSON data but got " + data['promo_codes']);
        }
        // ensure the json data is a string
        if (data['sales_affiliate_id'] && !(typeof data['sales_affiliate_id'] === 'string' || data['sales_affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `sales_affiliate_id` to be a primitive type in the JSON string but got " + data['sales_affiliate_id']);
        }
        // validate the optional field `shipping_address`
        if (data['shipping_address']) { // data not null
          AddressInformation.validateJSON(data['shipping_address']);
        }

        return true;
    }


}



/**
 * @member {String} contact_id
 */
UpdateOrderRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} lead_affiliate_id
 */
UpdateOrderRequest.prototype['lead_affiliate_id'] = undefined;

/**
 * @member {String} order_time
 */
UpdateOrderRequest.prototype['order_time'] = undefined;

/**
 * @member {String} order_title
 */
UpdateOrderRequest.prototype['order_title'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/UpdateOrderRequest.OrderTypeEnum} order_type
 */
UpdateOrderRequest.prototype['order_type'] = undefined;

/**
 * Uses multiple strings as promo codes. The corresponding discount will be applied to the order.
 * @member {Array.<String>} promo_codes
 */
UpdateOrderRequest.prototype['promo_codes'] = undefined;

/**
 * @member {String} sales_affiliate_id
 */
UpdateOrderRequest.prototype['sales_affiliate_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/AddressInformation} shipping_address
 */
UpdateOrderRequest.prototype['shipping_address'] = undefined;





/**
 * Allowed values for the <code>order_type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateOrderRequest['OrderTypeEnum'] = {

    /**
     * value: "OFFLINE"
     * @const
     */
    "OFFLINE": "OFFLINE",

    /**
     * value: "ONLINE"
     * @const
     */
    "ONLINE": "ONLINE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default UpdateOrderRequest;
