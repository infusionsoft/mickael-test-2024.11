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
import AffiliateLink from './AffiliateLink';

/**
 * The ListAffiliateLinksResponse model module.
 * @module com.keap.sdk.core/model/ListAffiliateLinksResponse
 * @version 0.0.41
 */
class ListAffiliateLinksResponse {
    /**
     * Constructs a new <code>ListAffiliateLinksResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListAffiliateLinksResponse
     */
    constructor() { 
        
        ListAffiliateLinksResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAffiliateLinksResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListAffiliateLinksResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListAffiliateLinksResponse} The populated <code>ListAffiliateLinksResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAffiliateLinksResponse();

            if (data.hasOwnProperty('affiliate_links')) {
                obj['affiliate_links'] = ApiClient.convertToType(data['affiliate_links'], [AffiliateLink]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAffiliateLinksResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAffiliateLinksResponse</code>.
     */
    static validateJSON(data) {
        if (data['affiliate_links']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['affiliate_links'])) {
                throw new Error("Expected the field `affiliate_links` to be an array in the JSON data but got " + data['affiliate_links']);
            }
            // validate the optional field `affiliate_links` (array)
            for (const item of data['affiliate_links']) {
                AffiliateLink.validateJSON(item);
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
 * @member {Array.<module:com.keap.sdk.core/model/AffiliateLink>} affiliate_links
 */
ListAffiliateLinksResponse.prototype['affiliate_links'] = undefined;

/**
 * @member {String} next_page_token
 */
ListAffiliateLinksResponse.prototype['next_page_token'] = undefined;






export default ListAffiliateLinksResponse;
