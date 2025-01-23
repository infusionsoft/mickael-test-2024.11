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
import CurrencyValue from './CurrencyValue';

/**
 * The SubscriptionPlanInterest model module.
 * @module com.keap.sdk.core/model/SubscriptionPlanInterest
 * @version 0.0.102
 */
class SubscriptionPlanInterest {
    /**
     * Constructs a new <code>SubscriptionPlanInterest</code>.
     * @alias module:com.keap.sdk.core/model/SubscriptionPlanInterest
     */
    constructor() { 
        
        SubscriptionPlanInterest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionPlanInterest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/SubscriptionPlanInterest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/SubscriptionPlanInterest} The populated <code>SubscriptionPlanInterest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionPlanInterest();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = CurrencyValue.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriptionPlanInterest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriptionPlanInterest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          CurrencyValue.validateJSON(data['price']);
        }

        return true;
    }


}



/**
 * The percent to discount the product. Percent represented in a whole number, for example 10 is 10%
 * @member {Number} discount_percent
 */
SubscriptionPlanInterest.prototype['discount_percent'] = undefined;

/**
 * The product ID
 * @member {String} id
 */
SubscriptionPlanInterest.prototype['id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CurrencyValue} price
 */
SubscriptionPlanInterest.prototype['price'] = undefined;

/**
 * The quantity of product.
 * @member {Number} quantity
 */
SubscriptionPlanInterest.prototype['quantity'] = undefined;






export default SubscriptionPlanInterest;
