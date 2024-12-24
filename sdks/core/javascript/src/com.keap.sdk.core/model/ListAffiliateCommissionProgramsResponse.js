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
import AffiliateProgramV2 from './AffiliateProgramV2';

/**
 * The ListAffiliateCommissionProgramsResponse model module.
 * @module com.keap.sdk.core/model/ListAffiliateCommissionProgramsResponse
 * @version 0.0.66
 */
class ListAffiliateCommissionProgramsResponse {
    /**
     * Constructs a new <code>ListAffiliateCommissionProgramsResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListAffiliateCommissionProgramsResponse
     */
    constructor() { 
        
        ListAffiliateCommissionProgramsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAffiliateCommissionProgramsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListAffiliateCommissionProgramsResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListAffiliateCommissionProgramsResponse} The populated <code>ListAffiliateCommissionProgramsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAffiliateCommissionProgramsResponse();

            if (data.hasOwnProperty('commission_programs')) {
                obj['commission_programs'] = ApiClient.convertToType(data['commission_programs'], [AffiliateProgramV2]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAffiliateCommissionProgramsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAffiliateCommissionProgramsResponse</code>.
     */
    static validateJSON(data) {
        if (data['commission_programs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['commission_programs'])) {
                throw new Error("Expected the field `commission_programs` to be an array in the JSON data but got " + data['commission_programs']);
            }
            // validate the optional field `commission_programs` (array)
            for (const item of data['commission_programs']) {
                AffiliateProgramV2.validateJSON(item);
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
 * @member {Array.<module:com.keap.sdk.core/model/AffiliateProgramV2>} commission_programs
 */
ListAffiliateCommissionProgramsResponse.prototype['commission_programs'] = undefined;

/**
 * @member {String} next_page_token
 */
ListAffiliateCommissionProgramsResponse.prototype['next_page_token'] = undefined;






export default ListAffiliateCommissionProgramsResponse;
