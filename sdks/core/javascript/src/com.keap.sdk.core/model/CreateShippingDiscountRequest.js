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
import DiscountCriteria from './DiscountCriteria';

/**
 * The CreateShippingDiscountRequest model module.
 * @module com.keap.sdk.core/model/CreateShippingDiscountRequest
 * @version 0.0.55
 */
class CreateShippingDiscountRequest {
    /**
     * Constructs a new <code>CreateShippingDiscountRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateShippingDiscountRequest
     * @param discountType {module:com.keap.sdk.core/model/CreateShippingDiscountRequest.DiscountTypeEnum} 
     * @param discountValue {Number} 
     * @param name {String} 
     */
    constructor(discountType, discountValue, name) { 
        
        CreateShippingDiscountRequest.initialize(this, discountType, discountValue, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, discountType, discountValue, name) { 
        obj['discount_type'] = discountType;
        obj['discount_value'] = discountValue;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateShippingDiscountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateShippingDiscountRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateShippingDiscountRequest} The populated <code>CreateShippingDiscountRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateShippingDiscountRequest();

            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], [DiscountCriteria]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount_type')) {
                obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
            }
            if (data.hasOwnProperty('discount_value')) {
                obj['discount_value'] = ApiClient.convertToType(data['discount_value'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateShippingDiscountRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateShippingDiscountRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateShippingDiscountRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['criteria']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['criteria'])) {
                throw new Error("Expected the field `criteria` to be an array in the JSON data but got " + data['criteria']);
            }
            // validate the optional field `criteria` (array)
            for (const item of data['criteria']) {
                DiscountCriteria.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['discount_type'] && !(typeof data['discount_type'] === 'string' || data['discount_type'] instanceof String)) {
            throw new Error("Expected the field `discount_type` to be a primitive type in the JSON string but got " + data['discount_type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateShippingDiscountRequest.RequiredProperties = ["discount_type", "discount_value", "name"];

/**
 * @member {Array.<module:com.keap.sdk.core/model/DiscountCriteria>} criteria
 */
CreateShippingDiscountRequest.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
CreateShippingDiscountRequest.prototype['description'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateShippingDiscountRequest.DiscountTypeEnum} discount_type
 */
CreateShippingDiscountRequest.prototype['discount_type'] = undefined;

/**
 * @member {Number} discount_value
 */
CreateShippingDiscountRequest.prototype['discount_value'] = undefined;

/**
 * @member {String} name
 */
CreateShippingDiscountRequest.prototype['name'] = undefined;





/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateShippingDiscountRequest['DiscountTypeEnum'] = {

    /**
     * value: "AMOUNT"
     * @const
     */
    "AMOUNT": "AMOUNT",

    /**
     * value: "PERCENT"
     * @const
     */
    "PERCENT": "PERCENT",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default CreateShippingDiscountRequest;
