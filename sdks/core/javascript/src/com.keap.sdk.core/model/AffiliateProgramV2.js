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
import DefaultCommission from './DefaultCommission';
import ProductCommission from './ProductCommission';
import SubscriptionCommission from './SubscriptionCommission';

/**
 * The AffiliateProgramV2 model module.
 * @module com.keap.sdk.core/model/AffiliateProgramV2
 * @version 0.0.80
 */
class AffiliateProgramV2 {
    /**
     * Constructs a new <code>AffiliateProgramV2</code>.
     * @alias module:com.keap.sdk.core/model/AffiliateProgramV2
     */
    constructor() { 
        
        AffiliateProgramV2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateProgramV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateProgramV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateProgramV2} The populated <code>AffiliateProgramV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateProgramV2();

            if (data.hasOwnProperty('affiliate_id')) {
                obj['affiliate_id'] = ApiClient.convertToType(data['affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('create_time')) {
                obj['create_time'] = ApiClient.convertToType(data['create_time'], 'Date');
            }
            if (data.hasOwnProperty('default_commission')) {
                obj['default_commission'] = DefaultCommission.constructFromObject(data['default_commission']);
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
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('product_commissions')) {
                obj['product_commissions'] = ApiClient.convertToType(data['product_commissions'], [ProductCommission]);
            }
            if (data.hasOwnProperty('subscription_commissions')) {
                obj['subscription_commissions'] = ApiClient.convertToType(data['subscription_commissions'], [SubscriptionCommission]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateProgramV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateProgramV2</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
        }
        // validate the optional field `default_commission`
        if (data['default_commission']) { // data not null
          DefaultCommission.validateJSON(data['default_commission']);
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
        // ensure the json data is a string
        if (data['priority'] && !(typeof data['priority'] === 'string' || data['priority'] instanceof String)) {
            throw new Error("Expected the field `priority` to be a primitive type in the JSON string but got " + data['priority']);
        }
        if (data['product_commissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['product_commissions'])) {
                throw new Error("Expected the field `product_commissions` to be an array in the JSON data but got " + data['product_commissions']);
            }
            // validate the optional field `product_commissions` (array)
            for (const item of data['product_commissions']) {
                ProductCommission.validateJSON(item);
            };
        }
        if (data['subscription_commissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscription_commissions'])) {
                throw new Error("Expected the field `subscription_commissions` to be an array in the JSON data but got " + data['subscription_commissions']);
            }
            // validate the optional field `subscription_commissions` (array)
            for (const item of data['subscription_commissions']) {
                SubscriptionCommission.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The affiliate_Id for Affiliate commission program
 * @member {String} affiliate_id
 */
AffiliateProgramV2.prototype['affiliate_id'] = undefined;

/**
 * The created time of affiliate commission program
 * @member {Date} create_time
 */
AffiliateProgramV2.prototype['create_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/DefaultCommission} default_commission
 */
AffiliateProgramV2.prototype['default_commission'] = undefined;

/**
 * The affiliate commission program name
 * @member {String} id
 */
AffiliateProgramV2.prototype['id'] = undefined;

/**
 * The affiliate commission program name
 * @member {String} name
 */
AffiliateProgramV2.prototype['name'] = undefined;

/**
 * The affiliate commission program notes
 * @member {String} notes
 */
AffiliateProgramV2.prototype['notes'] = undefined;

/**
 * The Affiliate commission program priority
 * @member {String} priority
 */
AffiliateProgramV2.prototype['priority'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/ProductCommission>} product_commissions
 */
AffiliateProgramV2.prototype['product_commissions'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/SubscriptionCommission>} subscription_commissions
 */
AffiliateProgramV2.prototype['subscription_commissions'] = undefined;






export default AffiliateProgramV2;
