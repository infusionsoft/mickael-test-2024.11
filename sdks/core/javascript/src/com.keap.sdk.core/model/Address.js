/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Address model module.
 * @module com.keap.sdk.core/model/Address
 * @version 0.0.45
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * @alias module:com.keap.sdk.core/model/Address
     */
    constructor() { 
        
        Address.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Address} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
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
            if (data.hasOwnProperty('region_code')) {
                obj['region_code'] = ApiClient.convertToType(data['region_code'], 'String');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
            }
            if (data.hasOwnProperty('zip_four')) {
                obj['zip_four'] = ApiClient.convertToType(data['zip_four'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Address</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Address</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
            throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
        }
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
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
        // ensure the json data is a string
        if (data['region_code'] && !(typeof data['region_code'] === 'string' || data['region_code'] instanceof String)) {
            throw new Error("Expected the field `region_code` to be a primitive type in the JSON string but got " + data['region_code']);
        }
        // ensure the json data is a string
        if (data['zip_code'] && !(typeof data['zip_code'] === 'string' || data['zip_code'] instanceof String)) {
            throw new Error("Expected the field `zip_code` to be a primitive type in the JSON string but got " + data['zip_code']);
        }
        // ensure the json data is a string
        if (data['zip_four'] && !(typeof data['zip_four'] === 'string' || data['zip_four'] instanceof String)) {
            throw new Error("Expected the field `zip_four` to be a primitive type in the JSON string but got " + data['zip_four']);
        }

        return true;
    }


}



/**
 * The long-name descriptive version of the Country Code
 * @member {String} country
 */
Address.prototype['country'] = undefined;

/**
 * An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
 * @member {String} country_code
 */
Address.prototype['country_code'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Address.FieldEnum} field
 */
Address.prototype['field'] = undefined;

/**
 * @member {String} line1
 */
Address.prototype['line1'] = undefined;

/**
 * @member {String} line2
 */
Address.prototype['line2'] = undefined;

/**
 * The municipality to which the address belongs
 * @member {String} locality
 */
Address.prototype['locality'] = undefined;

/**
 * @member {String} postal_code
 */
Address.prototype['postal_code'] = undefined;

/**
 * The long-name descriptive version of the Region Code
 * @member {String} region
 */
Address.prototype['region'] = undefined;

/**
 * An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US)
 * @member {String} region_code
 */
Address.prototype['region_code'] = undefined;

/**
 * @member {String} zip_code
 */
Address.prototype['zip_code'] = undefined;

/**
 * @member {String} zip_four
 */
Address.prototype['zip_four'] = undefined;





/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
Address['FieldEnum'] = {

    /**
     * value: "ADDRESS_FIELD_UNSPECIFIED"
     * @const
     */
    "ADDRESS_FIELD_UNSPECIFIED": "ADDRESS_FIELD_UNSPECIFIED",

    /**
     * value: "BILLING"
     * @const
     */
    "BILLING": "BILLING",

    /**
     * value: "SHIPPING"
     * @const
     */
    "SHIPPING": "SHIPPING",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default Address;
