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
import Campaign from './Campaign';

/**
 * The ListCampaignsResponse model module.
 * @module com.keap.sdk.core/model/ListCampaignsResponse
 * @version 0.0.52
 */
class ListCampaignsResponse {
    /**
     * Constructs a new <code>ListCampaignsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListCampaignsResponse
     */
    constructor() { 
        
        ListCampaignsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListCampaignsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListCampaignsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListCampaignsResponse} The populated <code>ListCampaignsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListCampaignsResponse();

            if (data.hasOwnProperty('campaigns')) {
                obj['campaigns'] = ApiClient.convertToType(data['campaigns'], [Campaign]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListCampaignsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListCampaignsResponse</code>.
     */
    static validateJSON(data) {
        if (data['campaigns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['campaigns'])) {
                throw new Error("Expected the field `campaigns` to be an array in the JSON data but got " + data['campaigns']);
            }
            // validate the optional field `campaigns` (array)
            for (const item of data['campaigns']) {
                Campaign.validateJSON(item);
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
 * @member {Array.<module:com.keap.sdk.core/model/Campaign>} campaigns
 */
ListCampaignsResponse.prototype['campaigns'] = undefined;

/**
 * @member {String} next_page_token
 */
ListCampaignsResponse.prototype['next_page_token'] = undefined;






export default ListCampaignsResponse;
