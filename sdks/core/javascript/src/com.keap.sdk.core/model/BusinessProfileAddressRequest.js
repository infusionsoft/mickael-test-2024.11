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
 * The BusinessProfileAddressRequest model module.
 * @module com.keap.sdk.core/model/BusinessProfileAddressRequest
 * @version 0.0.103
 */
class BusinessProfileAddressRequest {
    /**
     * Constructs a new <code>BusinessProfileAddressRequest</code>.
     * @alias module:com.keap.sdk.core/model/BusinessProfileAddressRequest
     * @param countryCode {String} An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
     * @param line1 {String} 
     * @param line2 {String} 
     * @param locality {String} The municipality to which the address belongs
     * @param postalCode {String} 
     * @param region {String} The long-name descriptive version of the Region Code
     */
    constructor(countryCode, line1, line2, locality, postalCode, region) { 
        
        BusinessProfileAddressRequest.initialize(this, countryCode, line1, line2, locality, postalCode, region);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countryCode, line1, line2, locality, postalCode, region) { 
        obj['country_code'] = countryCode;
        obj['line1'] = line1;
        obj['line2'] = line2;
        obj['locality'] = locality;
        obj['postal_code'] = postalCode;
        obj['region'] = region;
    }

    /**
     * Constructs a <code>BusinessProfileAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/BusinessProfileAddressRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/BusinessProfileAddressRequest} The populated <code>BusinessProfileAddressRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BusinessProfileAddressRequest();

            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('line1')) {
                obj['line1'] = ApiClient.convertToType(data['line1'], 'String');
            }
            if (data.hasOwnProperty('line2')) {
                obj['line2'] = ApiClient.convertToType(data['line2'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BusinessProfileAddressRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BusinessProfileAddressRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BusinessProfileAddressRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
            throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
        }
        // ensure the json data is a string
        if (data['line1'] && !(typeof data['line1'] === 'string' || data['line1'] instanceof String)) {
            throw new Error("Expected the field `line1` to be a primitive type in the JSON string but got " + data['line1']);
        }
        // ensure the json data is a string
        if (data['line2'] && !(typeof data['line2'] === 'string' || data['line2'] instanceof String)) {
            throw new Error("Expected the field `line2` to be a primitive type in the JSON string but got " + data['line2']);
        }
        // ensure the json data is a string
        if (data['locality'] && !(typeof data['locality'] === 'string' || data['locality'] instanceof String)) {
            throw new Error("Expected the field `locality` to be a primitive type in the JSON string but got " + data['locality']);
        }
        // ensure the json data is a string
        if (data['postal_code'] && !(typeof data['postal_code'] === 'string' || data['postal_code'] instanceof String)) {
            throw new Error("Expected the field `postal_code` to be a primitive type in the JSON string but got " + data['postal_code']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }

        return true;
    }


}

BusinessProfileAddressRequest.RequiredProperties = ["country_code", "line1", "line2", "locality", "postal_code", "region"];

/**
 * An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
 * @member {String} country_code
 */
BusinessProfileAddressRequest.prototype['country_code'] = undefined;

/**
 * @member {String} line1
 */
BusinessProfileAddressRequest.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
BusinessProfileAddressRequest.prototype['line2'] = undefined;

/**
 * The municipality to which the address belongs
 * @member {String} locality
 */
BusinessProfileAddressRequest.prototype['locality'] = undefined;

/**
 * @member {String} postal_code
 */
BusinessProfileAddressRequest.prototype['postal_code'] = undefined;

/**
 * The long-name descriptive version of the Region Code
 * @member {String} region
 */
BusinessProfileAddressRequest.prototype['region'] = undefined;






export default BusinessProfileAddressRequest;
