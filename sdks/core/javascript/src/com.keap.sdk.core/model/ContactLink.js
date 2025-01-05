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
 * The ContactLink model module.
 * @module com.keap.sdk.core/model/ContactLink
 * @version 0.0.78
 */
class ContactLink {
    /**
     * Constructs a new <code>ContactLink</code>.
     * @alias module:com.keap.sdk.core/model/ContactLink
     */
    constructor() { 
        
        ContactLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ContactLink} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ContactLink} The populated <code>ContactLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactLink();

            if (data.hasOwnProperty('contact1_id')) {
                obj['contact1_id'] = ApiClient.convertToType(data['contact1_id'], 'String');
            }
            if (data.hasOwnProperty('contact2_id')) {
                obj['contact2_id'] = ApiClient.convertToType(data['contact2_id'], 'String');
            }
            if (data.hasOwnProperty('link_type_id')) {
                obj['link_type_id'] = ApiClient.convertToType(data['link_type_id'], 'String');
            }
            if (data.hasOwnProperty('link_type_name')) {
                obj['link_type_name'] = ApiClient.convertToType(data['link_type_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactLink</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactLink</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact1_id'] && !(typeof data['contact1_id'] === 'string' || data['contact1_id'] instanceof String)) {
            throw new Error("Expected the field `contact1_id` to be a primitive type in the JSON string but got " + data['contact1_id']);
        }
        // ensure the json data is a string
        if (data['contact2_id'] && !(typeof data['contact2_id'] === 'string' || data['contact2_id'] instanceof String)) {
            throw new Error("Expected the field `contact2_id` to be a primitive type in the JSON string but got " + data['contact2_id']);
        }
        // ensure the json data is a string
        if (data['link_type_id'] && !(typeof data['link_type_id'] === 'string' || data['link_type_id'] instanceof String)) {
            throw new Error("Expected the field `link_type_id` to be a primitive type in the JSON string but got " + data['link_type_id']);
        }
        // ensure the json data is a string
        if (data['link_type_name'] && !(typeof data['link_type_name'] === 'string' || data['link_type_name'] instanceof String)) {
            throw new Error("Expected the field `link_type_name` to be a primitive type in the JSON string but got " + data['link_type_name']);
        }

        return true;
    }


}



/**
 * @member {String} contact1_id
 */
ContactLink.prototype['contact1_id'] = undefined;

/**
 * @member {String} contact2_id
 */
ContactLink.prototype['contact2_id'] = undefined;

/**
 * @member {String} link_type_id
 */
ContactLink.prototype['link_type_id'] = undefined;

/**
 * @member {String} link_type_name
 */
ContactLink.prototype['link_type_name'] = undefined;






export default ContactLink;
