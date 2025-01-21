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

/**
 * The BaseListResponseDeal model module.
 * @module com.keap.sdk.core/model/BaseListResponseDeal
 * @version 0.0.94
 */
class BaseListResponseDeal {
    /**
     * Constructs a new <code>BaseListResponseDeal</code>.
     * The list responses.
     * @alias module:com.keap.sdk.core/model/BaseListResponseDeal
     */
    constructor() { 
        
        BaseListResponseDeal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseListResponseDeal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/BaseListResponseDeal} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/BaseListResponseDeal} The populated <code>BaseListResponseDeal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseListResponseDeal();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseListResponseDeal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseListResponseDeal</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }

        return true;
    }


}



/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
BaseListResponseDeal.prototype['next_page_token'] = undefined;






export default BaseListResponseDeal;
