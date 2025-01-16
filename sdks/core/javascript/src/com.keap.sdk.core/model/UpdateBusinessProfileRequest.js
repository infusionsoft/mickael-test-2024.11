/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BusinessProfileAddressRequest from './BusinessProfileAddressRequest';

/**
 * The UpdateBusinessProfileRequest model module.
 * @module com.keap.sdk.core/model/UpdateBusinessProfileRequest
 * @version 0.0.88
 */
class UpdateBusinessProfileRequest {
    /**
     * Constructs a new <code>UpdateBusinessProfileRequest</code>.
     * Update profile information about the business that owns/uses this account
     * @alias module:com.keap.sdk.core/model/UpdateBusinessProfileRequest
     */
    constructor() { 
        
        UpdateBusinessProfileRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateBusinessProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateBusinessProfileRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateBusinessProfileRequest} The populated <code>UpdateBusinessProfileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateBusinessProfileRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = BusinessProfileAddressRequest.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('business_goals')) {
                obj['business_goals'] = ApiClient.convertToType(data['business_goals'], ['String']);
            }
            if (data.hasOwnProperty('business_primary_color')) {
                obj['business_primary_color'] = ApiClient.convertToType(data['business_primary_color'], 'String');
            }
            if (data.hasOwnProperty('business_secondary_color')) {
                obj['business_secondary_color'] = ApiClient.convertToType(data['business_secondary_color'], 'String');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateBusinessProfileRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateBusinessProfileRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `address`
        if (data['address']) { // data not null
          BusinessProfileAddressRequest.validateJSON(data['address']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['business_goals'])) {
            throw new Error("Expected the field `business_goals` to be an array in the JSON data but got " + data['business_goals']);
        }
        // ensure the json data is a string
        if (data['business_primary_color'] && !(typeof data['business_primary_color'] === 'string' || data['business_primary_color'] instanceof String)) {
            throw new Error("Expected the field `business_primary_color` to be a primitive type in the JSON string but got " + data['business_primary_color']);
        }
        // ensure the json data is a string
        if (data['business_secondary_color'] && !(typeof data['business_secondary_color'] === 'string' || data['business_secondary_color'] instanceof String)) {
            throw new Error("Expected the field `business_secondary_color` to be a primitive type in the JSON string but got " + data['business_secondary_color']);
        }
        // ensure the json data is a string
        if (data['currency_code'] && !(typeof data['currency_code'] === 'string' || data['currency_code'] instanceof String)) {
            throw new Error("Expected the field `currency_code` to be a primitive type in the JSON string but got " + data['currency_code']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['website'] && !(typeof data['website'] === 'string' || data['website'] instanceof String)) {
            throw new Error("Expected the field `website` to be a primitive type in the JSON string but got " + data['website']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/BusinessProfileAddressRequest} address
 */
UpdateBusinessProfileRequest.prototype['address'] = undefined;

/**
 * The goals of this business, ie. Grow Business, Convert more leads
 * @member {Array.<String>} business_goals
 */
UpdateBusinessProfileRequest.prototype['business_goals'] = undefined;

/**
 * @member {String} business_primary_color
 */
UpdateBusinessProfileRequest.prototype['business_primary_color'] = undefined;

/**
 * @member {String} business_secondary_color
 */
UpdateBusinessProfileRequest.prototype['business_secondary_color'] = undefined;

/**
 * ISO 4217 Currency Code
 * @member {String} currency_code
 */
UpdateBusinessProfileRequest.prototype['currency_code'] = undefined;

/**
 * @member {String} email
 */
UpdateBusinessProfileRequest.prototype['email'] = undefined;

/**
 * @member {String} name
 */
UpdateBusinessProfileRequest.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
UpdateBusinessProfileRequest.prototype['phone'] = undefined;

/**
 * @member {String} website
 */
UpdateBusinessProfileRequest.prototype['website'] = undefined;






export default UpdateBusinessProfileRequest;
