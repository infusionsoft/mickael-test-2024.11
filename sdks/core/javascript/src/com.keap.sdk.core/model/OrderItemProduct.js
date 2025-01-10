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
import RestProductOption from './RestProductOption';
import RestSubscriptionPlan from './RestSubscriptionPlan';

/**
 * The OrderItemProduct model module.
 * @module com.keap.sdk.core/model/OrderItemProduct
 * @version 0.0.83
 */
class OrderItemProduct {
    /**
     * Constructs a new <code>OrderItemProduct</code>.
     * @alias module:com.keap.sdk.core/model/OrderItemProduct
     */
    constructor() { 
        
        OrderItemProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/OrderItemProduct} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/OrderItemProduct} The populated <code>OrderItemProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemProduct();

            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_updated_time')) {
                obj['last_updated_time'] = ApiClient.convertToType(data['last_updated_time'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product_options')) {
                obj['product_options'] = ApiClient.convertToType(data['product_options'], [RestProductOption]);
            }
            if (data.hasOwnProperty('product_price')) {
                obj['product_price'] = ApiClient.convertToType(data['product_price'], 'Number');
            }
            if (data.hasOwnProperty('product_short_description')) {
                obj['product_short_description'] = ApiClient.convertToType(data['product_short_description'], 'String');
            }
            if (data.hasOwnProperty('shippable')) {
                obj['shippable'] = ApiClient.convertToType(data['shippable'], 'Boolean');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('subscription_only')) {
                obj['subscription_only'] = ApiClient.convertToType(data['subscription_only'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription_plans')) {
                obj['subscription_plans'] = ApiClient.convertToType(data['subscription_plans'], [RestSubscriptionPlan]);
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderItemProduct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderItemProduct</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
            throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last_updated_time'] && !(typeof data['last_updated_time'] === 'string' || data['last_updated_time'] instanceof String)) {
            throw new Error("Expected the field `last_updated_time` to be a primitive type in the JSON string but got " + data['last_updated_time']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['product_options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['product_options'])) {
                throw new Error("Expected the field `product_options` to be an array in the JSON data but got " + data['product_options']);
            }
            // validate the optional field `product_options` (array)
            for (const item of data['product_options']) {
                RestProductOption.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['product_short_description'] && !(typeof data['product_short_description'] === 'string' || data['product_short_description'] instanceof String)) {
            throw new Error("Expected the field `product_short_description` to be a primitive type in the JSON string but got " + data['product_short_description']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        if (data['subscription_plans']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscription_plans'])) {
                throw new Error("Expected the field `subscription_plans` to be an array in the JSON data but got " + data['subscription_plans']);
            }
            // validate the optional field `subscription_plans` (array)
            for (const item of data['subscription_plans']) {
                RestSubscriptionPlan.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {String} created_time
 */
OrderItemProduct.prototype['created_time'] = undefined;

/**
 * @member {String} description
 */
OrderItemProduct.prototype['description'] = undefined;

/**
 * @member {String} id
 */
OrderItemProduct.prototype['id'] = undefined;

/**
 * @member {String} last_updated_time
 */
OrderItemProduct.prototype['last_updated_time'] = undefined;

/**
 * @member {String} name
 */
OrderItemProduct.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/RestProductOption>} product_options
 */
OrderItemProduct.prototype['product_options'] = undefined;

/**
 * @member {Number} product_price
 */
OrderItemProduct.prototype['product_price'] = undefined;

/**
 * @member {String} product_short_description
 */
OrderItemProduct.prototype['product_short_description'] = undefined;

/**
 * @member {Boolean} shippable
 */
OrderItemProduct.prototype['shippable'] = undefined;

/**
 * @member {String} sku
 */
OrderItemProduct.prototype['sku'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/OrderItemProduct.StatusEnum} status
 */
OrderItemProduct.prototype['status'] = undefined;

/**
 * @member {Boolean} subscription_only
 */
OrderItemProduct.prototype['subscription_only'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/RestSubscriptionPlan>} subscription_plans
 */
OrderItemProduct.prototype['subscription_plans'] = undefined;

/**
 * @member {Boolean} taxable
 */
OrderItemProduct.prototype['taxable'] = undefined;

/**
 * The url is the permalink to the resource
 * @member {String} url
 */
OrderItemProduct.prototype['url'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
OrderItemProduct['StatusEnum'] = {

    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default OrderItemProduct;
