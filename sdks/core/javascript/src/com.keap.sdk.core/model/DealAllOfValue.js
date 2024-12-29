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
import Money from './Money';

/**
 * The DealAllOfValue model module.
 * @module com.keap.sdk.core/model/DealAllOfValue
 * @version 0.0.71
 */
class DealAllOfValue {
    /**
     * Constructs a new <code>DealAllOfValue</code>.
     * The monetary value of the deal. This field is required and must be valid.
     * @alias module:com.keap.sdk.core/model/DealAllOfValue
     * @implements module:com.keap.sdk.core/model/Money
     * @param amount {Number} The amount of money. This field is required.
     * @param currency {String} The currency of the money. This field is required.
     */
    constructor(amount, currency) { 
        Money.initialize(this, amount, currency);
        DealAllOfValue.initialize(this, amount, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currency) { 
        obj['amount'] = amount;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>DealAllOfValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DealAllOfValue} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DealAllOfValue} The populated <code>DealAllOfValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealAllOfValue();
            Money.constructFromObject(data, obj);

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealAllOfValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealAllOfValue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DealAllOfValue.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}

DealAllOfValue.RequiredProperties = ["amount", "currency"];

/**
 * The amount of money. This field is required.
 * @member {Number} amount
 */
DealAllOfValue.prototype['amount'] = undefined;

/**
 * The currency of the money. This field is required.
 * @member {String} currency
 */
DealAllOfValue.prototype['currency'] = undefined;


// Implement Money interface:
/**
 * The amount of money. This field is required.
 * @member {Number} amount
 */
Money.prototype['amount'] = undefined;
/**
 * The currency of the money. This field is required.
 * @member {String} currency
 */
Money.prototype['currency'] = undefined;




export default DealAllOfValue;
