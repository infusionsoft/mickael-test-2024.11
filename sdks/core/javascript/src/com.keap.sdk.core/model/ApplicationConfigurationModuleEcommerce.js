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
 * The ApplicationConfigurationModuleEcommerce model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleEcommerce
 * @version 0.0.18
 */
class ApplicationConfigurationModuleEcommerce {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleEcommerce</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleEcommerce
     */
    constructor() { 
        
        ApplicationConfigurationModuleEcommerce.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleEcommerce</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEcommerce} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleEcommerce} The populated <code>ApplicationConfigurationModuleEcommerce</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleEcommerce();

            if (data.hasOwnProperty('credit_card_types')) {
                obj['credit_card_types'] = ApiClient.convertToType(data['credit_card_types'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('default_charge_max_retry_attempts')) {
                obj['default_charge_max_retry_attempts'] = ApiClient.convertToType(data['default_charge_max_retry_attempts'], 'Number');
            }
            if (data.hasOwnProperty('default_country')) {
                obj['default_country'] = ApiClient.convertToType(data['default_country'], 'String');
            }
            if (data.hasOwnProperty('default_merchant')) {
                obj['default_merchant'] = ApiClient.convertToType(data['default_merchant'], 'String');
            }
            if (data.hasOwnProperty('default_number_of_days_between_charge_attempts')) {
                obj['default_number_of_days_between_charge_attempts'] = ApiClient.convertToType(data['default_number_of_days_between_charge_attempts'], 'Number');
            }
            if (data.hasOwnProperty('default_tax')) {
                obj['default_tax'] = ApiClient.convertToType(data['default_tax'], 'String');
            }
            if (data.hasOwnProperty('default_to_auto_charge')) {
                obj['default_to_auto_charge'] = ApiClient.convertToType(data['default_to_auto_charge'], 'Boolean');
            }
            if (data.hasOwnProperty('merchant_account_max_retry_attempts')) {
                obj['merchant_account_max_retry_attempts'] = ApiClient.convertToType(data['merchant_account_max_retry_attempts'], 'Number');
            }
            if (data.hasOwnProperty('payment_types')) {
                obj['payment_types'] = ApiClient.convertToType(data['payment_types'], 'String');
            }
            if (data.hasOwnProperty('promo_codes')) {
                obj['promo_codes'] = ApiClient.convertToType(data['promo_codes'], 'String');
            }
            if (data.hasOwnProperty('track_cost_per_unit')) {
                obj['track_cost_per_unit'] = ApiClient.convertToType(data['track_cost_per_unit'], 'Boolean');
            }
            if (data.hasOwnProperty('track_inventory')) {
                obj['track_inventory'] = ApiClient.convertToType(data['track_inventory'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleEcommerce</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleEcommerce</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['credit_card_types'] && !(typeof data['credit_card_types'] === 'string' || data['credit_card_types'] instanceof String)) {
            throw new Error("Expected the field `credit_card_types` to be a primitive type in the JSON string but got " + data['credit_card_types']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['default_country'] && !(typeof data['default_country'] === 'string' || data['default_country'] instanceof String)) {
            throw new Error("Expected the field `default_country` to be a primitive type in the JSON string but got " + data['default_country']);
        }
        // ensure the json data is a string
        if (data['default_merchant'] && !(typeof data['default_merchant'] === 'string' || data['default_merchant'] instanceof String)) {
            throw new Error("Expected the field `default_merchant` to be a primitive type in the JSON string but got " + data['default_merchant']);
        }
        // ensure the json data is a string
        if (data['default_tax'] && !(typeof data['default_tax'] === 'string' || data['default_tax'] instanceof String)) {
            throw new Error("Expected the field `default_tax` to be a primitive type in the JSON string but got " + data['default_tax']);
        }
        // ensure the json data is a string
        if (data['payment_types'] && !(typeof data['payment_types'] === 'string' || data['payment_types'] instanceof String)) {
            throw new Error("Expected the field `payment_types` to be a primitive type in the JSON string but got " + data['payment_types']);
        }
        // ensure the json data is a string
        if (data['promo_codes'] && !(typeof data['promo_codes'] === 'string' || data['promo_codes'] instanceof String)) {
            throw new Error("Expected the field `promo_codes` to be a primitive type in the JSON string but got " + data['promo_codes']);
        }

        return true;
    }


}



/**
 * @member {String} credit_card_types
 */
ApplicationConfigurationModuleEcommerce.prototype['credit_card_types'] = undefined;

/**
 * @member {String} currency
 */
ApplicationConfigurationModuleEcommerce.prototype['currency'] = undefined;

/**
 * @member {Number} default_charge_max_retry_attempts
 */
ApplicationConfigurationModuleEcommerce.prototype['default_charge_max_retry_attempts'] = undefined;

/**
 * @member {String} default_country
 */
ApplicationConfigurationModuleEcommerce.prototype['default_country'] = undefined;

/**
 * @member {String} default_merchant
 */
ApplicationConfigurationModuleEcommerce.prototype['default_merchant'] = undefined;

/**
 * @member {Number} default_number_of_days_between_charge_attempts
 */
ApplicationConfigurationModuleEcommerce.prototype['default_number_of_days_between_charge_attempts'] = undefined;

/**
 * @member {String} default_tax
 */
ApplicationConfigurationModuleEcommerce.prototype['default_tax'] = undefined;

/**
 * @member {Boolean} default_to_auto_charge
 */
ApplicationConfigurationModuleEcommerce.prototype['default_to_auto_charge'] = undefined;

/**
 * @member {Number} merchant_account_max_retry_attempts
 */
ApplicationConfigurationModuleEcommerce.prototype['merchant_account_max_retry_attempts'] = undefined;

/**
 * @member {String} payment_types
 */
ApplicationConfigurationModuleEcommerce.prototype['payment_types'] = undefined;

/**
 * @member {String} promo_codes
 */
ApplicationConfigurationModuleEcommerce.prototype['promo_codes'] = undefined;

/**
 * @member {Boolean} track_cost_per_unit
 */
ApplicationConfigurationModuleEcommerce.prototype['track_cost_per_unit'] = undefined;

/**
 * @member {Boolean} track_inventory
 */
ApplicationConfigurationModuleEcommerce.prototype['track_inventory'] = undefined;






export default ApplicationConfigurationModuleEcommerce;
