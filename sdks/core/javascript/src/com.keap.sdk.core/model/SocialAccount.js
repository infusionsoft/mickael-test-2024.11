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
 * The SocialAccount model module.
 * @module com.keap.sdk.core/model/SocialAccount
 * @version 0.0.105
 */
class SocialAccount {
    /**
     * Constructs a new <code>SocialAccount</code>.
     * @alias module:com.keap.sdk.core/model/SocialAccount
     * @param type {module:com.keap.sdk.core/model/SocialAccount.TypeEnum} 
     */
    constructor(type) { 
        
        SocialAccount.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>SocialAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/SocialAccount} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/SocialAccount} The populated <code>SocialAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SocialAccount();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SocialAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SocialAccount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SocialAccount.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

SocialAccount.RequiredProperties = ["type"];

/**
 * @member {String} name
 */
SocialAccount.prototype['name'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/SocialAccount.TypeEnum} type
 */
SocialAccount.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SocialAccount['TypeEnum'] = {

    /**
     * value: "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED"
     * @const
     */
    "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED": "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED",

    /**
     * value: "FACEBOOK"
     * @const
     */
    "FACEBOOK": "FACEBOOK",

    /**
     * value: "LINKED_IN"
     * @const
     */
    "LINKED_IN": "LINKED_IN",

    /**
     * value: "TWITTER"
     * @const
     */
    "TWITTER": "TWITTER",

    /**
     * value: "INSTAGRAM"
     * @const
     */
    "INSTAGRAM": "INSTAGRAM",

    /**
     * value: "SNAPCHAT"
     * @const
     */
    "SNAPCHAT": "SNAPCHAT",

    /**
     * value: "YOUTUBE"
     * @const
     */
    "YOUTUBE": "YOUTUBE",

    /**
     * value: "PINTEREST"
     * @const
     */
    "PINTEREST": "PINTEREST",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default SocialAccount;
