/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateOrderItemRequest model module.
 * @module keap.sdk.core/model/UpdateOrderItemRequest
 */
class UpdateOrderItemRequest {
    /**
     * Constructs a new <code>UpdateOrderItemRequest</code>.
     * @alias module:keap.sdk.core/model/UpdateOrderItemRequest
     */
    constructor() { 
        
        UpdateOrderItemRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateOrderItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/UpdateOrderItemRequest} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/UpdateOrderItemRequest} The populated <code>UpdateOrderItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOrderItemRequest();

            if (data.hasOwnProperty('charge_inventory')) {
                obj['charge_inventory'] = ApiClient.convertToType(data['charge_inventory'], 'Boolean');
            }
            if (data.hasOwnProperty('cost_per_unit')) {
                obj['cost_per_unit'] = ApiClient.convertToType(data['cost_per_unit'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('price_per_unit')) {
                obj['price_per_unit'] = ApiClient.convertToType(data['price_per_unit'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateOrderItemRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateOrderItemRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * Determine if the order item has an impact on inventory.
 * @member {Boolean} charge_inventory
 */
UpdateOrderItemRequest.prototype['charge_inventory'] = undefined;

/**
 * @member {Number} cost_per_unit
 */
UpdateOrderItemRequest.prototype['cost_per_unit'] = undefined;

/**
 * @member {String} description
 */
UpdateOrderItemRequest.prototype['description'] = undefined;

/**
 * @member {String} name
 */
UpdateOrderItemRequest.prototype['name'] = undefined;

/**
 * @member {String} note
 */
UpdateOrderItemRequest.prototype['note'] = undefined;

/**
 * @member {Number} price_per_unit
 */
UpdateOrderItemRequest.prototype['price_per_unit'] = undefined;

/**
 * @member {Number} quantity
 */
UpdateOrderItemRequest.prototype['quantity'] = undefined;

/**
 * @member {module:keap.sdk.core/model/UpdateOrderItemRequest.TypeEnum} type
 */
UpdateOrderItemRequest.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
UpdateOrderItemRequest['TypeEnum'] = {

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
     * value: "FINANCE_CHARGE"
     * @const
     */
    "FINANCE_CHARGE": "FINANCE_CHARGE",

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
     * value: "SPECIAL_FREE_TRIAL_DAYS"
     * @const
     */
    "SPECIAL_FREE_TRIAL_DAYS": "SPECIAL_FREE_TRIAL_DAYS",

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


export default UpdateOrderItemRequest;
