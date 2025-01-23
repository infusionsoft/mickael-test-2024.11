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
 * The Money model module.
 * @module com.keap.sdk.core/model/Money
 * @version 0.0.102
 */
class Money {
    /**
     * Constructs a new <code>Money</code>.
     * Represents a monetary value with an amount and currency.
     * @alias module:com.keap.sdk.core/model/Money
     * @param amount {Number} The amount of money. This field is required.
     * @param currency {String} The currency of the money. This field is required.
     */
    constructor(amount, currency) { 
        
        Money.initialize(this, amount, currency);
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
     * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Money} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Money} The populated <code>Money</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Money();

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
     * Validates the JSON data with respect to <code>Money</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Money</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Money.RequiredProperties) {
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

Money.RequiredProperties = ["amount", "currency"];

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






export default Money;
