/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseListResponseDeal from './BaseListResponseDeal';
import Deal from './Deal';

/**
 * The StageDealListResponse model module.
 * @module com.keap.sdk.core/model/StageDealListResponse
 * @version 0.0.84
 */
class StageDealListResponse {
    /**
     * Constructs a new <code>StageDealListResponse</code>.
     * Response for a list of deals in a stage.
     * @alias module:com.keap.sdk.core/model/StageDealListResponse
     * @implements module:com.keap.sdk.core/model/BaseListResponseDeal
     */
    constructor() { 
        BaseListResponseDeal.initialize(this);
        StageDealListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StageDealListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/StageDealListResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/StageDealListResponse} The populated <code>StageDealListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StageDealListResponse();
            BaseListResponseDeal.constructFromObject(data, obj);

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('deals')) {
                obj['deals'] = ApiClient.convertToType(data['deals'], [Deal]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StageDealListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StageDealListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['deals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['deals'])) {
                throw new Error("Expected the field `deals` to be an array in the JSON data but got " + data['deals']);
            }
            // validate the optional field `deals` (array)
            for (const item of data['deals']) {
                Deal.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
StageDealListResponse.prototype['next_page_token'] = undefined;

/**
 * The list of deals in a stage.
 * @member {Array.<module:com.keap.sdk.core/model/Deal>} deals
 */
StageDealListResponse.prototype['deals'] = undefined;


// Implement BaseListResponseDeal interface:
/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
BaseListResponseDeal.prototype['next_page_token'] = undefined;




export default StageDealListResponse;
