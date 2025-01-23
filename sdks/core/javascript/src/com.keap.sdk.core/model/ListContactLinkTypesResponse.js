/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContactLinkType from './ContactLinkType';

/**
 * The ListContactLinkTypesResponse model module.
 * @module com.keap.sdk.core/model/ListContactLinkTypesResponse
 * @version 0.0.100
 */
class ListContactLinkTypesResponse {
    /**
     * Constructs a new <code>ListContactLinkTypesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListContactLinkTypesResponse
     */
    constructor() { 
        
        ListContactLinkTypesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListContactLinkTypesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListContactLinkTypesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListContactLinkTypesResponse} The populated <code>ListContactLinkTypesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListContactLinkTypesResponse();

            if (data.hasOwnProperty('contact_link_types')) {
                obj['contact_link_types'] = ApiClient.convertToType(data['contact_link_types'], [ContactLinkType]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListContactLinkTypesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListContactLinkTypesResponse</code>.
     */
    static validateJSON(data) {
        if (data['contact_link_types']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contact_link_types'])) {
                throw new Error("Expected the field `contact_link_types` to be an array in the JSON data but got " + data['contact_link_types']);
            }
            // validate the optional field `contact_link_types` (array)
            for (const item of data['contact_link_types']) {
                ContactLinkType.validateJSON(item);
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
 * @member {Array.<module:com.keap.sdk.core/model/ContactLinkType>} contact_link_types
 */
ListContactLinkTypesResponse.prototype['contact_link_types'] = undefined;

/**
 * @member {String} next_page_token
 */
ListContactLinkTypesResponse.prototype['next_page_token'] = undefined;






export default ListContactLinkTypesResponse;
