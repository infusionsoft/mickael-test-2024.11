/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProductInventory model module.
 * @module com.keap.sdk.core/model/ProductInventory
 * @version 0.0.95
 */
class ProductInventory {
    /**
     * Constructs a new <code>ProductInventory</code>.
     * @alias module:com.keap.sdk.core/model/ProductInventory
     */
    constructor() { 
        
        ProductInventory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductInventory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductInventory} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductInventory} The populated <code>ProductInventory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInventory();

            if (data.hasOwnProperty('email_for_inventory_notifications')) {
                obj['email_for_inventory_notifications'] = ApiClient.convertToType(data['email_for_inventory_notifications'], 'String');
            }
            if (data.hasOwnProperty('inventory_count')) {
                obj['inventory_count'] = ApiClient.convertToType(data['inventory_count'], 'Number');
            }
            if (data.hasOwnProperty('inventory_limit')) {
                obj['inventory_limit'] = ApiClient.convertToType(data['inventory_limit'], 'Number');
            }
            if (data.hasOwnProperty('out_of_stock_enabled')) {
                obj['out_of_stock_enabled'] = ApiClient.convertToType(data['out_of_stock_enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductInventory</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductInventory</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email_for_inventory_notifications'] && !(typeof data['email_for_inventory_notifications'] === 'string' || data['email_for_inventory_notifications'] instanceof String)) {
            throw new Error("Expected the field `email_for_inventory_notifications` to be a primitive type in the JSON string but got " + data['email_for_inventory_notifications']);
        }

        return true;
    }


}



/**
 * The email address for notifications about inventory
 * @member {String} email_for_inventory_notifications
 */
ProductInventory.prototype['email_for_inventory_notifications'] = undefined;

/**
 * The current inventory count for this product
 * @member {Number} inventory_count
 */
ProductInventory.prototype['inventory_count'] = undefined;

/**
 * The inventory limit for this product
 * @member {Number} inventory_limit
 */
ProductInventory.prototype['inventory_limit'] = undefined;

/**
 * The flag to enable out of stock inventory
 * @member {Boolean} out_of_stock_enabled
 */
ProductInventory.prototype['out_of_stock_enabled'] = undefined;






export default ProductInventory;
