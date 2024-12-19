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
 * The AffiliateCommission model module.
 * @module com.keap.sdk.core/model/AffiliateCommission
 * @version 0.0.52
 */
class AffiliateCommission {
    /**
     * Constructs a new <code>AffiliateCommission</code>.
     * @alias module:com.keap.sdk.core/model/AffiliateCommission
     */
    constructor() { 
        
        AffiliateCommission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateCommission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateCommission} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateCommission} The populated <code>AffiliateCommission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateCommission();

            if (data.hasOwnProperty('aff_owed_id')) {
                obj['aff_owed_id'] = ApiClient.convertToType(data['aff_owed_id'], 'Number');
            }
            if (data.hasOwnProperty('amount_earned')) {
                obj['amount_earned'] = ApiClient.convertToType(data['amount_earned'], 'Number');
            }
            if (data.hasOwnProperty('contact_first_name')) {
                obj['contact_first_name'] = ApiClient.convertToType(data['contact_first_name'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'Number');
            }
            if (data.hasOwnProperty('contact_last_name')) {
                obj['contact_last_name'] = ApiClient.convertToType(data['contact_last_name'], 'String');
            }
            if (data.hasOwnProperty('date_earned')) {
                obj['date_earned'] = ApiClient.convertToType(data['date_earned'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'Number');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('sales_affiliate_id')) {
                obj['sales_affiliate_id'] = ApiClient.convertToType(data['sales_affiliate_id'], 'Number');
            }
            if (data.hasOwnProperty('sold_by_first_name')) {
                obj['sold_by_first_name'] = ApiClient.convertToType(data['sold_by_first_name'], 'String');
            }
            if (data.hasOwnProperty('sold_by_last_name')) {
                obj['sold_by_last_name'] = ApiClient.convertToType(data['sold_by_last_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateCommission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateCommission</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact_first_name'] && !(typeof data['contact_first_name'] === 'string' || data['contact_first_name'] instanceof String)) {
            throw new Error("Expected the field `contact_first_name` to be a primitive type in the JSON string but got " + data['contact_first_name']);
        }
        // ensure the json data is a string
        if (data['contact_last_name'] && !(typeof data['contact_last_name'] === 'string' || data['contact_last_name'] instanceof String)) {
            throw new Error("Expected the field `contact_last_name` to be a primitive type in the JSON string but got " + data['contact_last_name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['product_name'] && !(typeof data['product_name'] === 'string' || data['product_name'] instanceof String)) {
            throw new Error("Expected the field `product_name` to be a primitive type in the JSON string but got " + data['product_name']);
        }
        // ensure the json data is a string
        if (data['sold_by_first_name'] && !(typeof data['sold_by_first_name'] === 'string' || data['sold_by_first_name'] instanceof String)) {
            throw new Error("Expected the field `sold_by_first_name` to be a primitive type in the JSON string but got " + data['sold_by_first_name']);
        }
        // ensure the json data is a string
        if (data['sold_by_last_name'] && !(typeof data['sold_by_last_name'] === 'string' || data['sold_by_last_name'] instanceof String)) {
            throw new Error("Expected the field `sold_by_last_name` to be a primitive type in the JSON string but got " + data['sold_by_last_name']);
        }

        return true;
    }


}



/**
 * @member {Number} aff_owed_id
 */
AffiliateCommission.prototype['aff_owed_id'] = undefined;

/**
 * @member {Number} amount_earned
 */
AffiliateCommission.prototype['amount_earned'] = undefined;

/**
 * @member {String} contact_first_name
 */
AffiliateCommission.prototype['contact_first_name'] = undefined;

/**
 * @member {Number} contact_id
 */
AffiliateCommission.prototype['contact_id'] = undefined;

/**
 * @member {String} contact_last_name
 */
AffiliateCommission.prototype['contact_last_name'] = undefined;

/**
 * @member {Date} date_earned
 */
AffiliateCommission.prototype['date_earned'] = undefined;

/**
 * @member {String} description
 */
AffiliateCommission.prototype['description'] = undefined;

/**
 * @member {Number} invoice_id
 */
AffiliateCommission.prototype['invoice_id'] = undefined;

/**
 * @member {String} product_name
 */
AffiliateCommission.prototype['product_name'] = undefined;

/**
 * @member {Number} sales_affiliate_id
 */
AffiliateCommission.prototype['sales_affiliate_id'] = undefined;

/**
 * @member {String} sold_by_first_name
 */
AffiliateCommission.prototype['sold_by_first_name'] = undefined;

/**
 * @member {String} sold_by_last_name
 */
AffiliateCommission.prototype['sold_by_last_name'] = undefined;






export default AffiliateCommission;
