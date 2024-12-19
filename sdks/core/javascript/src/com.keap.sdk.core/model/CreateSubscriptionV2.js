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
 * The CreateSubscriptionV2 model module.
 * @module com.keap.sdk.core/model/CreateSubscriptionV2
 * @version 0.0.60
 */
class CreateSubscriptionV2 {
    /**
     * Constructs a new <code>CreateSubscriptionV2</code>.
     * @alias module:com.keap.sdk.core/model/CreateSubscriptionV2
     * @param contactId {String} 
     */
    constructor(contactId) { 
        
        CreateSubscriptionV2.initialize(this, contactId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contactId) { 
        obj['contact_id'] = contactId;
    }

    /**
     * Constructs a <code>CreateSubscriptionV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionV2} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateSubscriptionV2} The populated <code>CreateSubscriptionV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSubscriptionV2();

            if (data.hasOwnProperty('allow_duplicate')) {
                obj['allow_duplicate'] = ApiClient.convertToType(data['allow_duplicate'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_tax')) {
                obj['allow_tax'] = ApiClient.convertToType(data['allow_tax'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_charge')) {
                obj['auto_charge'] = ApiClient.convertToType(data['auto_charge'], 'Boolean');
            }
            if (data.hasOwnProperty('billing_amount')) {
                obj['billing_amount'] = ApiClient.convertToType(data['billing_amount'], 'Number');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('first_bill_date')) {
                obj['first_bill_date'] = ApiClient.convertToType(data['first_bill_date'], 'Date');
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('sale_affiliate_id')) {
                obj['sale_affiliate_id'] = ApiClient.convertToType(data['sale_affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('subscription_plan_id')) {
                obj['subscription_plan_id'] = ApiClient.convertToType(data['subscription_plan_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSubscriptionV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSubscriptionV2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateSubscriptionV2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
            throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
        }
        // ensure the json data is a string
        if (data['sale_affiliate_id'] && !(typeof data['sale_affiliate_id'] === 'string' || data['sale_affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `sale_affiliate_id` to be a primitive type in the JSON string but got " + data['sale_affiliate_id']);
        }
        // ensure the json data is a string
        if (data['subscription_plan_id'] && !(typeof data['subscription_plan_id'] === 'string' || data['subscription_plan_id'] instanceof String)) {
            throw new Error("Expected the field `subscription_plan_id` to be a primitive type in the JSON string but got " + data['subscription_plan_id']);
        }

        return true;
    }


}

CreateSubscriptionV2.RequiredProperties = ["contact_id"];

/**
 * If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false.
 * @member {Boolean} allow_duplicate
 */
CreateSubscriptionV2.prototype['allow_duplicate'] = undefined;

/**
 * Only works if the product the product subscription is for is taxable. Default is false.
 * @member {Boolean} allow_tax
 */
CreateSubscriptionV2.prototype['allow_tax'] = undefined;

/**
 * Defaults to true.
 * @member {Boolean} auto_charge
 */
CreateSubscriptionV2.prototype['auto_charge'] = undefined;

/**
 * Must be 0 or greater. Default is the price in the product subscription.
 * @member {Number} billing_amount
 */
CreateSubscriptionV2.prototype['billing_amount'] = undefined;

/**
 * @member {String} contact_id
 */
CreateSubscriptionV2.prototype['contact_id'] = undefined;

/**
 * The first day the subscription will bill, in EST. Must not be in the past. Default is today.
 * @member {Date} first_bill_date
 */
CreateSubscriptionV2.prototype['first_bill_date'] = undefined;

/**
 * Default is the contact's most recently used card, if auto charge is true. Default is 0 otherwise.
 * @member {String} payment_method_id
 */
CreateSubscriptionV2.prototype['payment_method_id'] = undefined;

/**
 * Must be greater than 0. Default is 1.
 * @member {Number} quantity
 */
CreateSubscriptionV2.prototype['quantity'] = undefined;

/**
 * @member {String} sale_affiliate_id
 */
CreateSubscriptionV2.prototype['sale_affiliate_id'] = undefined;

/**
 * Id of the product subscription.
 * @member {String} subscription_plan_id
 */
CreateSubscriptionV2.prototype['subscription_plan_id'] = undefined;






export default CreateSubscriptionV2;
