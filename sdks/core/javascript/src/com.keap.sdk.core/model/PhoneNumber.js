/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PhoneNumber model module.
 * @module com.keap.sdk.core/model/PhoneNumber
 * @version 0.0.20
 */
class PhoneNumber {
    /**
     * Constructs a new <code>PhoneNumber</code>.
     * @alias module:com.keap.sdk.core/model/PhoneNumber
     */
    constructor() { 
        
        PhoneNumber.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PhoneNumber} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PhoneNumber} The populated <code>PhoneNumber</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhoneNumber();

            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PhoneNumber</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PhoneNumber</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['extension'] && !(typeof data['extension'] === 'string' || data['extension'] instanceof String)) {
            throw new Error("Expected the field `extension` to be a primitive type in the JSON string but got " + data['extension']);
        }
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }
        // ensure the json data is a string
        if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
            throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} extension
 */
PhoneNumber.prototype['extension'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/PhoneNumber.FieldEnum} field
 */
PhoneNumber.prototype['field'] = undefined;

/**
 * @member {String} number
 */
PhoneNumber.prototype['number'] = undefined;

/**
 * @member {String} type
 */
PhoneNumber.prototype['type'] = undefined;





/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
PhoneNumber['FieldEnum'] = {

    /**
     * value: "PHONE_NUMBER_FIELD_UNSPECIFIED"
     * @const
     */
    "PHONE_NUMBER_FIELD_UNSPECIFIED": "PHONE_NUMBER_FIELD_UNSPECIFIED",

    /**
     * value: "PHONE1"
     * @const
     */
    "PHONE1": "PHONE1",

    /**
     * value: "PHONE2"
     * @const
     */
    "PHONE2": "PHONE2",

    /**
     * value: "PHONE3"
     * @const
     */
    "PHONE3": "PHONE3",

    /**
     * value: "PHONE4"
     * @const
     */
    "PHONE4": "PHONE4",

    /**
     * value: "PHONE5"
     * @const
     */
    "PHONE5": "PHONE5",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default PhoneNumber;
