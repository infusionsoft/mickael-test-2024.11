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
import DiscountCriteria from './DiscountCriteria';

/**
 * The CreateCategoryDiscountRequest model module.
 * @module com.keap.sdk.core/model/CreateCategoryDiscountRequest
 * @version 0.0.95
 */
class CreateCategoryDiscountRequest {
    /**
     * Constructs a new <code>CreateCategoryDiscountRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateCategoryDiscountRequest
     * @param applyToCommissions {Boolean} 
     * @param discountPercent {Number} 
     * @param name {String} 
     * @param productCategoryIds {Array.<String>} 
     */
    constructor(applyToCommissions, discountPercent, name, productCategoryIds) { 
        
        CreateCategoryDiscountRequest.initialize(this, applyToCommissions, discountPercent, name, productCategoryIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, applyToCommissions, discountPercent, name, productCategoryIds) { 
        obj['apply_to_commissions'] = applyToCommissions;
        obj['discount_percent'] = discountPercent;
        obj['name'] = name;
        obj['product_category_ids'] = productCategoryIds;
    }

    /**
     * Constructs a <code>CreateCategoryDiscountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateCategoryDiscountRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateCategoryDiscountRequest} The populated <code>CreateCategoryDiscountRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCategoryDiscountRequest();

            if (data.hasOwnProperty('apply_to_commissions')) {
                obj['apply_to_commissions'] = ApiClient.convertToType(data['apply_to_commissions'], 'Boolean');
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], [DiscountCriteria]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product_category_ids')) {
                obj['product_category_ids'] = ApiClient.convertToType(data['product_category_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateCategoryDiscountRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateCategoryDiscountRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateCategoryDiscountRequest.RequiredProperties) {
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
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product_category_ids'])) {
            throw new Error("Expected the field `product_category_ids` to be an array in the JSON data but got " + data['product_category_ids']);
        }

        return true;
    }


}

CreateCategoryDiscountRequest.RequiredProperties = ["apply_to_commissions", "discount_percent", "name", "product_category_ids"];

/**
 * @member {Boolean} apply_to_commissions
 */
CreateCategoryDiscountRequest.prototype['apply_to_commissions'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/DiscountCriteria>} criteria
 */
CreateCategoryDiscountRequest.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
CreateCategoryDiscountRequest.prototype['description'] = undefined;

/**
 * @member {Number} discount_percent
 */
CreateCategoryDiscountRequest.prototype['discount_percent'] = undefined;

/**
 * @member {String} name
 */
CreateCategoryDiscountRequest.prototype['name'] = undefined;

/**
 * @member {Array.<String>} product_category_ids
 */
CreateCategoryDiscountRequest.prototype['product_category_ids'] = undefined;






export default CreateCategoryDiscountRequest;
