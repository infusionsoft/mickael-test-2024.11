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

/**
 * The BaseListResponseStage model module.
 * @module com.keap.sdk.core/model/BaseListResponseStage
 * @version 0.0.64
 */
class BaseListResponseStage {
    /**
     * Constructs a new <code>BaseListResponseStage</code>.
     * The list responses.
     * @alias module:com.keap.sdk.core/model/BaseListResponseStage
     */
    constructor() { 
        
        BaseListResponseStage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseListResponseStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/BaseListResponseStage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/BaseListResponseStage} The populated <code>BaseListResponseStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseListResponseStage();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseListResponseStage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseListResponseStage</code>.
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
BaseListResponseStage.prototype['next_page_token'] = undefined;






export default BaseListResponseStage;
