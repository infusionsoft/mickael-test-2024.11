/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListRestMerchantAccountResponse model module.
 * @module com.keap.sdk.core/model/ListRestMerchantAccountResponse
 * @version 0.0.84
 */
class ListRestMerchantAccountResponse {
    /**
     * Constructs a new <code>ListRestMerchantAccountResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListRestMerchantAccountResponse
     */
    constructor() { 
        
        ListRestMerchantAccountResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListRestMerchantAccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListRestMerchantAccountResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListRestMerchantAccountResponse} The populated <code>ListRestMerchantAccountResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListRestMerchantAccountResponse();

            if (data.hasOwnProperty('account_name')) {
                obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('is_test')) {
                obj['is_test'] = ApiClient.convertToType(data['is_test'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListRestMerchantAccountResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListRestMerchantAccountResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['account_name'] && !(typeof data['account_name'] === 'string' || data['account_name'] instanceof String)) {
            throw new Error("Expected the field `account_name` to be a primitive type in the JSON string but got " + data['account_name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} account_name
 */
ListRestMerchantAccountResponse.prototype['account_name'] = undefined;

/**
 * @member {String} id
 */
ListRestMerchantAccountResponse.prototype['id'] = undefined;

/**
 * @member {Boolean} is_test
 */
ListRestMerchantAccountResponse.prototype['is_test'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/ListRestMerchantAccountResponse.TypeEnum} type
 */
ListRestMerchantAccountResponse.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ListRestMerchantAccountResponse['TypeEnum'] = {

    /**
     * value: "USE_DEFAULT"
     * @const
     */
    "USE_DEFAULT": "USE_DEFAULT",

    /**
     * value: "PAY_PAL"
     * @const
     */
    "PAY_PAL": "PAY_PAL",

    /**
     * value: "PAY_PAL_PAYFLOW_PRO"
     * @const
     */
    "PAY_PAL_PAYFLOW_PRO": "PAY_PAL_PAYFLOW_PRO",

    /**
     * value: "PAYPAL_COMMERCE"
     * @const
     */
    "PAYPAL_COMMERCE": "PAYPAL_COMMERCE",

    /**
     * value: "PAYPAL_COMMERCE_UCC"
     * @const
     */
    "PAYPAL_COMMERCE_UCC": "PAYPAL_COMMERCE_UCC",

    /**
     * value: "GATEWAY_PAYFLOW_PRO"
     * @const
     */
    "GATEWAY_PAYFLOW_PRO": "GATEWAY_PAYFLOW_PRO",

    /**
     * value: "AUTHORIZE"
     * @const
     */
    "AUTHORIZE": "AUTHORIZE",

    /**
     * value: "AUTHORIZE_CARD_PRESENT"
     * @const
     */
    "AUTHORIZE_CARD_PRESENT": "AUTHORIZE_CARD_PRESENT",

    /**
     * value: "POWER_PAY"
     * @const
     */
    "POWER_PAY": "POWER_PAY",

    /**
     * value: "CART_CONNECT"
     * @const
     */
    "CART_CONNECT": "CART_CONNECT",

    /**
     * value: "SAGE_PAY"
     * @const
     */
    "SAGE_PAY": "SAGE_PAY",

    /**
     * value: "E_WAY"
     * @const
     */
    "E_WAY": "E_WAY",

    /**
     * value: "USA_E_PAY"
     * @const
     */
    "USA_E_PAY": "USA_E_PAY",

    /**
     * value: "MONERIS"
     * @const
     */
    "MONERIS": "MONERIS",

    /**
     * value: "DPS"
     * @const
     */
    "DPS": "DPS",

    /**
     * value: "DUMMY"
     * @const
     */
    "DUMMY": "DUMMY",

    /**
     * value: "INTERNET_SECURE"
     * @const
     */
    "INTERNET_SECURE": "INTERNET_SECURE",

    /**
     * value: "EASY_PAY_DIRECT"
     * @const
     */
    "EASY_PAY_DIRECT": "EASY_PAY_DIRECT",

    /**
     * value: "NEXUS"
     * @const
     */
    "NEXUS": "NEXUS",

    /**
     * value: "INF_PAY"
     * @const
     */
    "INF_PAY": "INF_PAY",

    /**
     * value: "FLEXPAY"
     * @const
     */
    "FLEXPAY": "FLEXPAY",

    /**
     * value: "STRIPE"
     * @const
     */
    "STRIPE": "STRIPE",

    /**
     * value: "STRIPE_ELEMENTS"
     * @const
     */
    "STRIPE_ELEMENTS": "STRIPE_ELEMENTS",

    /**
     * value: "WORLD_PAY"
     * @const
     */
    "WORLD_PAY": "WORLD_PAY",

    /**
     * value: "RAINFOREST"
     * @const
     */
    "RAINFOREST": "RAINFOREST",

    /**
     * value: "WEPAY"
     * @const
     */
    "WEPAY": "WEPAY",

    /**
     * value: "KEAPPAY"
     * @const
     */
    "KEAPPAY": "KEAPPAY",

    /**
     * value: "MANUAL"
     * @const
     */
    "MANUAL": "MANUAL",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default ListRestMerchantAccountResponse;
