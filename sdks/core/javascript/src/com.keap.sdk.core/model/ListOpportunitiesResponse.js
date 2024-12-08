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
import RestV2Opportunity from './RestV2Opportunity';

/**
 * The ListOpportunitiesResponse model module.
 * @module com.keap.sdk.core/model/ListOpportunitiesResponse
 * @version 0.0.33
 */
class ListOpportunitiesResponse {
    /**
     * Constructs a new <code>ListOpportunitiesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListOpportunitiesResponse
     */
    constructor() { 
        
        ListOpportunitiesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListOpportunitiesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListOpportunitiesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListOpportunitiesResponse} The populated <code>ListOpportunitiesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListOpportunitiesResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('opportunities')) {
                obj['opportunities'] = ApiClient.convertToType(data['opportunities'], [RestV2Opportunity]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListOpportunitiesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListOpportunitiesResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['opportunities']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['opportunities'])) {
                throw new Error("Expected the field `opportunities` to be an array in the JSON data but got " + data['opportunities']);
            }
            // validate the optional field `opportunities` (array)
            for (const item of data['opportunities']) {
                RestV2Opportunity.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListOpportunitiesResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/RestV2Opportunity>} opportunities
 */
ListOpportunitiesResponse.prototype['opportunities'] = undefined;






export default ListOpportunitiesResponse;
