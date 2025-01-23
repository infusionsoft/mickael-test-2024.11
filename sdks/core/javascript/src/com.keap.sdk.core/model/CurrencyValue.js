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

/**
 * The CurrencyValue model module.
 * @module com.keap.sdk.core/model/CurrencyValue
 * @version 0.0.107
 */
class CurrencyValue {
    /**
     * Constructs a new <code>CurrencyValue</code>.
     * @alias module:com.keap.sdk.core/model/CurrencyValue
     */
    constructor() { 
        
        CurrencyValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CurrencyValue} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CurrencyValue} The populated <code>CurrencyValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyValue();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('formatted_amount')) {
                obj['formatted_amount'] = ApiClient.convertToType(data['formatted_amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CurrencyValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CurrencyValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['formatted_amount'] && !(typeof data['formatted_amount'] === 'string' || data['formatted_amount'] instanceof String)) {
            throw new Error("Expected the field `formatted_amount` to be a primitive type in the JSON string but got " + data['formatted_amount']);
        }

        return true;
    }


}



/**
 * The price amount in the smallest currency unit
 * @member {Number} amount
 */
CurrencyValue.prototype['amount'] = undefined;

/**
 * Three-letter ISO currency code
 * @member {String} currency_code
 */
CurrencyValue.prototype['currency_code'] = undefined;

/**
 * The product amount formatted using the tenant's currency locale
 * @member {String} formatted_amount
 */
CurrencyValue.prototype['formatted_amount'] = undefined;






export default CurrencyValue;
