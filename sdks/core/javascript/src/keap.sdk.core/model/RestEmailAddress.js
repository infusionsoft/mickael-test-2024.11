/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RestEmailAddress model module.
 * @module keap.sdk.core/model/RestEmailAddress
 */
class RestEmailAddress {
    /**
     * Constructs a new <code>RestEmailAddress</code>.
     * @alias module:keap.sdk.core/model/RestEmailAddress
     * @param email {String} 
     * @param optedIn {Boolean} 
     * @param status {module:keap.sdk.core/model/RestEmailAddress.StatusEnum} 
     */
    constructor(email, optedIn, status) { 
        
        RestEmailAddress.initialize(this, email, optedIn, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, optedIn, status) { 
        obj['email'] = email;
        obj['opted_in'] = optedIn;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>RestEmailAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/RestEmailAddress} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/RestEmailAddress} The populated <code>RestEmailAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestEmailAddress();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('opted_in')) {
                obj['opted_in'] = ApiClient.convertToType(data['opted_in'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestEmailAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestEmailAddress</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RestEmailAddress.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

RestEmailAddress.RequiredProperties = ["email", "opted_in", "status"];

/**
 * @member {String} email
 */
RestEmailAddress.prototype['email'] = undefined;

/**
 * @member {Boolean} opted_in
 */
RestEmailAddress.prototype['opted_in'] = undefined;

/**
 * @member {module:keap.sdk.core/model/RestEmailAddress.StatusEnum} status
 */
RestEmailAddress.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
RestEmailAddress['StatusEnum'] = {

    /**
     * value: "Unengaged Marketable"
     * @const
     */
    "Unengaged Marketable": "Unengaged Marketable",

    /**
     * value: "Unconfirmed"
     * @const
     */
    "Unconfirmed": "Unconfirmed",

    /**
     * value: "Confirmed (Legacy)"
     * @const
     */
    "Confirmed (Legacy)": "Confirmed (Legacy)",

    /**
     * value: "Confirmed"
     * @const
     */
    "Confirmed": "Confirmed",

    /**
     * value: "Unengaged NonMarketable"
     * @const
     */
    "Unengaged NonMarketable": "Unengaged NonMarketable",

    /**
     * value: "Non-marketable"
     * @const
     */
    "Non-marketable": "Non-marketable",

    /**
     * value: "Lockdown"
     * @const
     */
    "Lockdown": "Lockdown",

    /**
     * value: "Soft Bounce"
     * @const
     */
    "Soft Bounce": "Soft Bounce",

    /**
     * value: "Hard Bounce"
     * @const
     */
    "Hard Bounce": "Hard Bounce",

    /**
     * value: "Opt-Out"
     * @const
     */
    "Opt-Out": "Opt-Out",

    /**
     * value: "Opt-Out: Admin"
     * @const
     */
    "Opt-Out: Admin": "Opt-Out: Admin",

    /**
     * value: "Opt-Out: System"
     * @const
     */
    "Opt-Out: System": "Opt-Out: System",

    /**
     * value: "List Unsubscribe"
     * @const
     */
    "List Unsubscribe": "List Unsubscribe",

    /**
     * value: "Provided Feedback"
     * @const
     */
    "Provided Feedback": "Provided Feedback",

    /**
     * value: "Reported Spam"
     * @const
     */
    "Reported Spam": "Reported Spam",

    /**
     * value: "Invalid Email"
     * @const
     */
    "Invalid Email": "Invalid Email",

    /**
     * value: "Deactivated/Delinquent Mailbox"
     * @const
     */
    "Deactivated/Delinquent Mailbox": "Deactivated/Delinquent Mailbox",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default RestEmailAddress;
