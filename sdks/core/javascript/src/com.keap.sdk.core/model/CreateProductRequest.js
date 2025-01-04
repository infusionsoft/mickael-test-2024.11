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
 * The CreateProductRequest model module.
 * @module com.keap.sdk.core/model/CreateProductRequest
 * @version 0.0.77
 */
class CreateProductRequest {
    /**
     * Constructs a new <code>CreateProductRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateProductRequest
     */
    constructor() { 
        
        CreateProductRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateProductRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateProductRequest} The populated <code>CreateProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductRequest();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('city_taxable')) {
                obj['city_taxable'] = ApiClient.convertToType(data['city_taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('country_taxable')) {
                obj['country_taxable'] = ApiClient.convertToType(data['country_taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('state_taxable')) {
                obj['state_taxable'] = ApiClient.convertToType(data['state_taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('storefront_hidden')) {
                obj['storefront_hidden'] = ApiClient.convertToType(data['storefront_hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription_only')) {
                obj['subscription_only'] = ApiClient.convertToType(data['subscription_only'], 'Boolean');
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProductRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProductRequest</code>.
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
        if (data['short_description'] && !(typeof data['short_description'] === 'string' || data['short_description'] instanceof String)) {
            throw new Error("Expected the field `short_description` to be a primitive type in the JSON string but got " + data['short_description']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }

        return true;
    }


}



/**
 * True means active, False means inactive
 * @member {Boolean} active
 */
CreateProductRequest.prototype['active'] = undefined;

/**
 * If city-based taxes should be applied to this product
 * @member {Boolean} city_taxable
 */
CreateProductRequest.prototype['city_taxable'] = undefined;

/**
 * If country-based taxes should be applied to this product
 * @member {Boolean} country_taxable
 */
CreateProductRequest.prototype['country_taxable'] = undefined;

/**
 * Product long description
 * @member {String} description
 */
CreateProductRequest.prototype['description'] = undefined;

/**
 * Product name
 * @member {String} name
 */
CreateProductRequest.prototype['name'] = undefined;

/**
 * The product price. The value is in the currency’s smallest unit. e.g. $12.50 is 1250.
 * @member {Number} price
 */
CreateProductRequest.prototype['price'] = undefined;

/**
 * Product short description
 * @member {String} short_description
 */
CreateProductRequest.prototype['short_description'] = undefined;

/**
 * Product SKU
 * @member {String} sku
 */
CreateProductRequest.prototype['sku'] = undefined;

/**
 * If state-based taxes should be applied to this product
 * @member {Boolean} state_taxable
 */
CreateProductRequest.prototype['state_taxable'] = undefined;

/**
 * If the product should not be shown in the storefront
 * @member {Boolean} storefront_hidden
 */
CreateProductRequest.prototype['storefront_hidden'] = undefined;

/**
 * If the product is a subscription-only product
 * @member {Boolean} subscription_only
 */
CreateProductRequest.prototype['subscription_only'] = undefined;

/**
 * Whether or not the product should be taxed
 * @member {Boolean} taxable
 */
CreateProductRequest.prototype['taxable'] = undefined;

/**
 * Product weight
 * @member {Number} weight
 */
CreateProductRequest.prototype['weight'] = undefined;






export default CreateProductRequest;
