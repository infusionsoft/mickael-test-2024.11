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
import ListRestMerchantAccountResponse from './ListRestMerchantAccountResponse';

/**
 * The ListRestMerchantResponse model module.
 * @module com.keap.sdk.core/model/ListRestMerchantResponse
 * @version 0.0.77
 */
class ListRestMerchantResponse {
    /**
     * Constructs a new <code>ListRestMerchantResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListRestMerchantResponse
     */
    constructor() { 
        
        ListRestMerchantResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListRestMerchantResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListRestMerchantResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListRestMerchantResponse} The populated <code>ListRestMerchantResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListRestMerchantResponse();

            if (data.hasOwnProperty('default_merchant_account_id')) {
                obj['default_merchant_account_id'] = ApiClient.convertToType(data['default_merchant_account_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_accounts')) {
                obj['merchant_accounts'] = ApiClient.convertToType(data['merchant_accounts'], [ListRestMerchantAccountResponse]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListRestMerchantResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListRestMerchantResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['default_merchant_account_id'] && !(typeof data['default_merchant_account_id'] === 'string' || data['default_merchant_account_id'] instanceof String)) {
            throw new Error("Expected the field `default_merchant_account_id` to be a primitive type in the JSON string but got " + data['default_merchant_account_id']);
        }
        if (data['merchant_accounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['merchant_accounts'])) {
                throw new Error("Expected the field `merchant_accounts` to be an array in the JSON data but got " + data['merchant_accounts']);
            }
            // validate the optional field `merchant_accounts` (array)
            for (const item of data['merchant_accounts']) {
                ListRestMerchantAccountResponse.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }

        return true;
    }


}



/**
 * @member {String} default_merchant_account_id
 */
ListRestMerchantResponse.prototype['default_merchant_account_id'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/ListRestMerchantAccountResponse>} merchant_accounts
 */
ListRestMerchantResponse.prototype['merchant_accounts'] = undefined;

/**
 * @member {String} next_page_token
 */
ListRestMerchantResponse.prototype['next_page_token'] = undefined;






export default ListRestMerchantResponse;
