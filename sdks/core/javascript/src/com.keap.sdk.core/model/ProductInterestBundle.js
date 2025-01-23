/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProductInterest from './ProductInterest';
import SubscriptionPlanInterest from './SubscriptionPlanInterest';

/**
 * The ProductInterestBundle model module.
 * @module com.keap.sdk.core/model/ProductInterestBundle
 * @version 0.0.104
 */
class ProductInterestBundle {
    /**
     * Constructs a new <code>ProductInterestBundle</code>.
     * @alias module:com.keap.sdk.core/model/ProductInterestBundle
     */
    constructor() { 
        
        ProductInterestBundle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductInterestBundle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ProductInterestBundle} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ProductInterestBundle} The populated <code>ProductInterestBundle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInterestBundle();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('product_interests')) {
                obj['product_interests'] = ApiClient.convertToType(data['product_interests'], [ProductInterest]);
            }
            if (data.hasOwnProperty('subscription_plan_interests')) {
                obj['subscription_plan_interests'] = ApiClient.convertToType(data['subscription_plan_interests'], [SubscriptionPlanInterest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductInterestBundle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductInterestBundle</code>.
     */
    static validateJSON(data) {
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
        if (data['product_interests']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['product_interests'])) {
                throw new Error("Expected the field `product_interests` to be an array in the JSON data but got " + data['product_interests']);
            }
            // validate the optional field `product_interests` (array)
            for (const item of data['product_interests']) {
                ProductInterest.validateJSON(item);
            };
        }
        if (data['subscription_plan_interests']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscription_plan_interests'])) {
                throw new Error("Expected the field `subscription_plan_interests` to be an array in the JSON data but got " + data['subscription_plan_interests']);
            }
            // validate the optional field `subscription_plan_interests` (array)
            for (const item of data['subscription_plan_interests']) {
                SubscriptionPlanInterest.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Product interest bundle description
 * @member {String} description
 */
ProductInterestBundle.prototype['description'] = undefined;

/**
 * The product interest bundle ID
 * @member {String} id
 */
ProductInterestBundle.prototype['id'] = undefined;

/**
 * Product interest bundle name
 * @member {String} name
 */
ProductInterestBundle.prototype['name'] = undefined;

/**
 * Product interests
 * @member {Array.<module:com.keap.sdk.core/model/ProductInterest>} product_interests
 */
ProductInterestBundle.prototype['product_interests'] = undefined;

/**
 * Subscription plan interests
 * @member {Array.<module:com.keap.sdk.core/model/SubscriptionPlanInterest>} subscription_plan_interests
 */
ProductInterestBundle.prototype['subscription_plan_interests'] = undefined;






export default ProductInterestBundle;
