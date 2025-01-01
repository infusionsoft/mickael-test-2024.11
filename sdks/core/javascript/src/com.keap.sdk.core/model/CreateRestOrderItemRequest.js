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
 * The CreateRestOrderItemRequest model module.
 * @module com.keap.sdk.core/model/CreateRestOrderItemRequest
 * @version 0.0.74
 */
class CreateRestOrderItemRequest {
    /**
     * Constructs a new <code>CreateRestOrderItemRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateRestOrderItemRequest
     * @param productId {String} The id of the product to be added to the order.
     * @param quantity {Number} Quantity must be greater than or equal to 1
     */
    constructor(productId, quantity) { 
        
        CreateRestOrderItemRequest.initialize(this, productId, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productId, quantity) { 
        obj['product_id'] = productId;
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>CreateRestOrderItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateRestOrderItemRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateRestOrderItemRequest} The populated <code>CreateRestOrderItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRestOrderItemRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('product_type')) {
                obj['product_type'] = ApiClient.convertToType(data['product_type'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateRestOrderItemRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateRestOrderItemRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateRestOrderItemRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['product_id'] && !(typeof data['product_id'] === 'string' || data['product_id'] instanceof String)) {
            throw new Error("Expected the field `product_id` to be a primitive type in the JSON string but got " + data['product_id']);
        }
        // ensure the json data is a string
        if (data['product_type'] && !(typeof data['product_type'] === 'string' || data['product_type'] instanceof String)) {
            throw new Error("Expected the field `product_type` to be a primitive type in the JSON string but got " + data['product_type']);
        }

        return true;
    }


}

CreateRestOrderItemRequest.RequiredProperties = ["product_id", "quantity"];

/**
 * @member {String} description
 */
CreateRestOrderItemRequest.prototype['description'] = undefined;

/**
 * Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0.
 * @member {Number} price
 */
CreateRestOrderItemRequest.prototype['price'] = undefined;

/**
 * The id of the product to be added to the order.
 * @member {String} product_id
 */
CreateRestOrderItemRequest.prototype['product_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateRestOrderItemRequest.ProductTypeEnum} product_type
 */
CreateRestOrderItemRequest.prototype['product_type'] = undefined;

/**
 * Quantity must be greater than or equal to 1
 * @member {Number} quantity
 */
CreateRestOrderItemRequest.prototype['quantity'] = undefined;





/**
 * Allowed values for the <code>product_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateRestOrderItemRequest['ProductTypeEnum'] = {

    /**
     * value: "PRODUCT"
     * @const
     */
    "PRODUCT": "PRODUCT",

    /**
     * value: "DIGITAL"
     * @const
     */
    "DIGITAL": "DIGITAL",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default CreateRestOrderItemRequest;
