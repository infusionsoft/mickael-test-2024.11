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
import LeadSource from './LeadSource';

/**
 * The ListLeadSourcesResponse model module.
 * @module com.keap.sdk.core/model/ListLeadSourcesResponse
 * @version 0.0.60
 */
class ListLeadSourcesResponse {
    /**
     * Constructs a new <code>ListLeadSourcesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListLeadSourcesResponse
     */
    constructor() { 
        
        ListLeadSourcesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListLeadSourcesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListLeadSourcesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListLeadSourcesResponse} The populated <code>ListLeadSourcesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListLeadSourcesResponse();

            if (data.hasOwnProperty('leadsources')) {
                obj['leadsources'] = ApiClient.convertToType(data['leadsources'], [LeadSource]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListLeadSourcesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListLeadSourcesResponse</code>.
     */
    static validateJSON(data) {
        if (data['leadsources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['leadsources'])) {
                throw new Error("Expected the field `leadsources` to be an array in the JSON data but got " + data['leadsources']);
            }
            // validate the optional field `leadsources` (array)
            for (const item of data['leadsources']) {
                LeadSource.validateJSON(item);
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
 * @member {Array.<module:com.keap.sdk.core/model/LeadSource>} leadsources
 */
ListLeadSourcesResponse.prototype['leadsources'] = undefined;

/**
 * @member {String} next_page_token
 */
ListLeadSourcesResponse.prototype['next_page_token'] = undefined;






export default ListLeadSourcesResponse;
