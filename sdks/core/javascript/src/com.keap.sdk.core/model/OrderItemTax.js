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

/**
 * The OrderItemTax model module.
 * @module com.keap.sdk.core/model/OrderItemTax
 * @version 0.0.78
 */
class OrderItemTax {
    /**
     * Constructs a new <code>OrderItemTax</code>.
     * @alias module:com.keap.sdk.core/model/OrderItemTax
     */
    constructor() { 
        
        OrderItemTax.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemTax</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/OrderItemTax} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/OrderItemTax} The populated <code>OrderItemTax</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemTax();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('orderItemId')) {
                obj['orderItemId'] = ApiClient.convertToType(data['orderItemId'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('taxTemplateId')) {
                obj['taxTemplateId'] = ApiClient.convertToType(data['taxTemplateId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderItemTax</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderItemTax</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Number} amount
 */
OrderItemTax.prototype['amount'] = undefined;

/**
 * @member {Number} id
 */
OrderItemTax.prototype['id'] = undefined;

/**
 * @member {String} name
 */
OrderItemTax.prototype['name'] = undefined;

/**
 * @member {Number} orderItemId
 */
OrderItemTax.prototype['orderItemId'] = undefined;

/**
 * @member {Number} rate
 */
OrderItemTax.prototype['rate'] = undefined;

/**
 * @member {Number} taxTemplateId
 */
OrderItemTax.prototype['taxTemplateId'] = undefined;






export default OrderItemTax;
