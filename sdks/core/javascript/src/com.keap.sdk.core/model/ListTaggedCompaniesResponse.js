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
import TaggedCompany from './TaggedCompany';

/**
 * The ListTaggedCompaniesResponse model module.
 * @module com.keap.sdk.core/model/ListTaggedCompaniesResponse
 * @version 0.0.103
 */
class ListTaggedCompaniesResponse {
    /**
     * Constructs a new <code>ListTaggedCompaniesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListTaggedCompaniesResponse
     */
    constructor() { 
        
        ListTaggedCompaniesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListTaggedCompaniesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListTaggedCompaniesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListTaggedCompaniesResponse} The populated <code>ListTaggedCompaniesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTaggedCompaniesResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('tagged_companies')) {
                obj['tagged_companies'] = ApiClient.convertToType(data['tagged_companies'], [TaggedCompany]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListTaggedCompaniesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTaggedCompaniesResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['tagged_companies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tagged_companies'])) {
                throw new Error("Expected the field `tagged_companies` to be an array in the JSON data but got " + data['tagged_companies']);
            }
            // validate the optional field `tagged_companies` (array)
            for (const item of data['tagged_companies']) {
                TaggedCompany.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListTaggedCompaniesResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/TaggedCompany>} tagged_companies
 */
ListTaggedCompaniesResponse.prototype['tagged_companies'] = undefined;






export default ListTaggedCompaniesResponse;
