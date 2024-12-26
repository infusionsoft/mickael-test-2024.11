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
import LandingPage from './LandingPage';

/**
 * The ListLandingPagesResponse model module.
 * @module com.keap.sdk.core/model/ListLandingPagesResponse
 * @version 0.0.68
 */
class ListLandingPagesResponse {
    /**
     * Constructs a new <code>ListLandingPagesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListLandingPagesResponse
     */
    constructor() { 
        
        ListLandingPagesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListLandingPagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListLandingPagesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListLandingPagesResponse} The populated <code>ListLandingPagesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListLandingPagesResponse();

            if (data.hasOwnProperty('landingpages')) {
                obj['landingpages'] = ApiClient.convertToType(data['landingpages'], [LandingPage]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'String');
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListLandingPagesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListLandingPagesResponse</code>.
     */
    static validateJSON(data) {
        if (data['landingpages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['landingpages'])) {
                throw new Error("Expected the field `landingpages` to be an array in the JSON data but got " + data['landingpages']);
            }
            // validate the optional field `landingpages` (array)
            for (const item of data['landingpages']) {
                LandingPage.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        // ensure the json data is a string
        if (data['page_size'] && !(typeof data['page_size'] === 'string' || data['page_size'] instanceof String)) {
            throw new Error("Expected the field `page_size` to be a primitive type in the JSON string but got " + data['page_size']);
        }
        // ensure the json data is a string
        if (data['pages'] && !(typeof data['pages'] === 'string' || data['pages'] instanceof String)) {
            throw new Error("Expected the field `pages` to be a primitive type in the JSON string but got " + data['pages']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/LandingPage>} landingpages
 */
ListLandingPagesResponse.prototype['landingpages'] = undefined;

/**
 * @member {String} next_page_token
 */
ListLandingPagesResponse.prototype['next_page_token'] = undefined;

/**
 * @member {String} page_size
 */
ListLandingPagesResponse.prototype['page_size'] = undefined;

/**
 * @member {String} pages
 */
ListLandingPagesResponse.prototype['pages'] = undefined;






export default ListLandingPagesResponse;
