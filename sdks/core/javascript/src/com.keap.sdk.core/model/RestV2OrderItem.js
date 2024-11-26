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
import Discount from './Discount';
import OrderItemTax from './OrderItemTax';
import RestProduct from './RestProduct';
import RestSubscriptionPlan from './RestSubscriptionPlan';
import RestV2Subscription from './RestV2Subscription';

/**
 * The RestV2OrderItem model module.
 * @module com.keap.sdk.core/model/RestV2OrderItem
 * @version 0.0.19
 */
class RestV2OrderItem {
    /**
     * Constructs a new <code>RestV2OrderItem</code>.
     * @alias module:com.keap.sdk.core/model/RestV2OrderItem
     */
    constructor() { 
        
        RestV2OrderItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestV2OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestV2OrderItem} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestV2OrderItem} The populated <code>RestV2OrderItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestV2OrderItem();

            if (data.hasOwnProperty('billing_cycle')) {
                obj['billing_cycle'] = ApiClient.convertToType(data['billing_cycle'], 'Number');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('cycle')) {
                obj['cycle'] = ApiClient.convertToType(data['cycle'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('number_of_payments')) {
                obj['number_of_payments'] = ApiClient.convertToType(data['number_of_payments'], 'Number');
            }
            if (data.hasOwnProperty('order_item_taxes')) {
                obj['order_item_taxes'] = ApiClient.convertToType(data['order_item_taxes'], [OrderItemTax]);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = RestProduct.constructFromObject(data['product']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('special')) {
                obj['special'] = Discount.constructFromObject(data['special']);
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = RestV2Subscription.constructFromObject(data['subscription']);
            }
            if (data.hasOwnProperty('subscription_based')) {
                obj['subscription_based'] = ApiClient.convertToType(data['subscription_based'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription_id')) {
                obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
            }
            if (data.hasOwnProperty('subscription_plan')) {
                obj['subscription_plan'] = RestSubscriptionPlan.constructFromObject(data['subscription_plan']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2OrderItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2OrderItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cycle'] && !(typeof data['cycle'] === 'string' || data['cycle'] instanceof String)) {
            throw new Error("Expected the field `cycle` to be a primitive type in the JSON string but got " + data['cycle']);
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        if (data['order_item_taxes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['order_item_taxes'])) {
                throw new Error("Expected the field `order_item_taxes` to be an array in the JSON data but got " + data['order_item_taxes']);
            }
            // validate the optional field `order_item_taxes` (array)
            for (const item of data['order_item_taxes']) {
                OrderItemTax.validateJSON(item);
            };
        }
        // validate the optional field `product`
        if (data['product']) { // data not null
          RestProduct.validateJSON(data['product']);
        }
        // validate the optional field `special`
        if (data['special']) { // data not null
          Discount.validateJSON(data['special']);
        }
        // validate the optional field `subscription`
        if (data['subscription']) { // data not null
          RestV2Subscription.validateJSON(data['subscription']);
        }
        // ensure the json data is a string
        if (data['subscription_id'] && !(typeof data['subscription_id'] === 'string' || data['subscription_id'] instanceof String)) {
            throw new Error("Expected the field `subscription_id` to be a primitive type in the JSON string but got " + data['subscription_id']);
        }
        // validate the optional field `subscription_plan`
        if (data['subscription_plan']) { // data not null
          RestSubscriptionPlan.validateJSON(data['subscription_plan']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Number} billing_cycle
 */
RestV2OrderItem.prototype['billing_cycle'] = undefined;

/**
 * @member {Number} cost
 */
RestV2OrderItem.prototype['cost'] = undefined;

/**
 * The interval at which the customer is charged for the subscription.
 * @member {module:com.keap.sdk.core/model/RestV2OrderItem.CycleEnum} cycle
 */
RestV2OrderItem.prototype['cycle'] = undefined;

/**
 * @member {String} description
 */
RestV2OrderItem.prototype['description'] = undefined;

/**
 * @member {Number} discount
 */
RestV2OrderItem.prototype['discount'] = undefined;

/**
 * Interval at which a customer receives a product or service as part of a subscription plan.
 * @member {Number} frequency
 */
RestV2OrderItem.prototype['frequency'] = undefined;

/**
 * @member {String} id
 */
RestV2OrderItem.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RestV2OrderItem.prototype['name'] = undefined;

/**
 * @member {String} notes
 */
RestV2OrderItem.prototype['notes'] = undefined;

/**
 * @member {Number} number_of_payments
 */
RestV2OrderItem.prototype['number_of_payments'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/OrderItemTax>} order_item_taxes
 */
RestV2OrderItem.prototype['order_item_taxes'] = undefined;

/**
 * @member {Number} price
 */
RestV2OrderItem.prototype['price'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestProduct} product
 */
RestV2OrderItem.prototype['product'] = undefined;

/**
 * @member {Number} quantity
 */
RestV2OrderItem.prototype['quantity'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Discount} special
 */
RestV2OrderItem.prototype['special'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2Subscription} subscription
 */
RestV2OrderItem.prototype['subscription'] = undefined;

/**
 * @member {Boolean} subscription_based
 */
RestV2OrderItem.prototype['subscription_based'] = undefined;

/**
 * @member {String} subscription_id
 */
RestV2OrderItem.prototype['subscription_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestSubscriptionPlan} subscription_plan
 */
RestV2OrderItem.prototype['subscription_plan'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/RestV2OrderItem.TypeEnum} type
 */
RestV2OrderItem.prototype['type'] = undefined;





/**
 * Allowed values for the <code>cycle</code> property.
 * @enum {String}
 * @readonly
 */
RestV2OrderItem['CycleEnum'] = {

    /**
     * value: "YEAR"
     * @const
     */
    "YEAR": "YEAR",

    /**
     * value: "MONTH"
     * @const
     */
    "MONTH": "MONTH",

    /**
     * value: "WEEK"
     * @const
     */
    "WEEK": "WEEK",

    /**
     * value: "DAY_OF_YEAR"
     * @const
     */
    "DAY_OF_YEAR": "DAY_OF_YEAR",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RestV2OrderItem['TypeEnum'] = {

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",

    /**
     * value: "SHIPPING"
     * @const
     */
    "SHIPPING": "SHIPPING",

    /**
     * value: "TAX"
     * @const
     */
    "TAX": "TAX",

    /**
     * value: "SERVICE"
     * @const
     */
    "SERVICE": "SERVICE",

    /**
     * value: "PRODUCT"
     * @const
     */
    "PRODUCT": "PRODUCT",

    /**
     * value: "UPSELL"
     * @const
     */
    "UPSELL": "UPSELL",

    /**
     * value: "FINANCECHARGE"
     * @const
     */
    "FINANCECHARGE": "FINANCECHARGE",

    /**
     * value: "SPECIAL"
     * @const
     */
    "SPECIAL": "SPECIAL",

    /**
     * value: "PROGRAM"
     * @const
     */
    "PROGRAM": "PROGRAM",

    /**
     * value: "SUBSCRIPTION"
     * @const
     */
    "SUBSCRIPTION": "SUBSCRIPTION",

    /**
     * value: "SPECIAL_FREE_TRAIL_DAYS"
     * @const
     */
    "SPECIAL_FREE_TRAIL_DAYS": "SPECIAL_FREE_TRAIL_DAYS",

    /**
     * value: "SPECIAL_ORDER_TOTAL"
     * @const
     */
    "SPECIAL_ORDER_TOTAL": "SPECIAL_ORDER_TOTAL",

    /**
     * value: "SPECIAL_PRODUCT"
     * @const
     */
    "SPECIAL_PRODUCT": "SPECIAL_PRODUCT",

    /**
     * value: "SPECIAL_CATEGORY"
     * @const
     */
    "SPECIAL_CATEGORY": "SPECIAL_CATEGORY",

    /**
     * value: "SPECIAL_SHIPPING"
     * @const
     */
    "SPECIAL_SHIPPING": "SPECIAL_SHIPPING",

    /**
     * value: "TIP"
     * @const
     */
    "TIP": "TIP",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default RestV2OrderItem;
