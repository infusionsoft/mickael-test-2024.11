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
import Contact from './Contact';

/**
 * The ListContactsResponse model module.
 * @module com.keap.sdk.core/model/ListContactsResponse
 * @version 0.0.37
 */
class ListContactsResponse {
    /**
     * Constructs a new <code>ListContactsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListContactsResponse
     */
    constructor() { 
        
        ListContactsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListContactsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListContactsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListContactsResponse} The populated <code>ListContactsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListContactsResponse();

            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [Contact]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListContactsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListContactsResponse</code>.
     */
    static validateJSON(data) {
        if (data['contacts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contacts'])) {
                throw new Error("Expected the field `contacts` to be an array in the JSON data but got " + data['contacts']);
            }
            // validate the optional field `contacts` (array)
            for (const item of data['contacts']) {
                Contact.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/Contact>} contacts
 */
ListContactsResponse.prototype['contacts'] = undefined;

/**
 * @member {String} next_page_token
 */
ListContactsResponse.prototype['next_page_token'] = undefined;






export default ListContactsResponse;
