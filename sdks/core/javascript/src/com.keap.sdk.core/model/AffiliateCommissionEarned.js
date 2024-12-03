/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AffiliateCommissionEarned model module.
 * @module com.keap.sdk.core/model/AffiliateCommissionEarned
 * @version 0.0.28
 */
class AffiliateCommissionEarned {
    /**
     * Constructs a new <code>AffiliateCommissionEarned</code>.
     * @alias module:com.keap.sdk.core/model/AffiliateCommissionEarned
     */
    constructor() { 
        
        AffiliateCommissionEarned.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateCommissionEarned</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateCommissionEarned} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateCommissionEarned} The populated <code>AffiliateCommissionEarned</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateCommissionEarned();

            if (data.hasOwnProperty('affiliate_commission_total')) {
                obj['affiliate_commission_total'] = ApiClient.convertToType(data['affiliate_commission_total'], 'Number');
            }
            if (data.hasOwnProperty('view_ledger_url')) {
                obj['view_ledger_url'] = ApiClient.convertToType(data['view_ledger_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateCommissionEarned</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateCommissionEarned</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['view_ledger_url'] && !(typeof data['view_ledger_url'] === 'string' || data['view_ledger_url'] instanceof String)) {
            throw new Error("Expected the field `view_ledger_url` to be a primitive type in the JSON string but got " + data['view_ledger_url']);
        }

        return true;
    }


}



/**
 * @member {Number} affiliate_commission_total
 */
AffiliateCommissionEarned.prototype['affiliate_commission_total'] = undefined;

/**
 * @member {String} view_ledger_url
 */
AffiliateCommissionEarned.prototype['view_ledger_url'] = undefined;






export default AffiliateCommissionEarned;
