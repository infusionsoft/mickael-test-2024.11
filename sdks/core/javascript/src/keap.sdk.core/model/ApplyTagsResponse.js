/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApplyTagsResponse model module.
 * @module keap.sdk.core/model/ApplyTagsResponse
 */
class ApplyTagsResponse {
    /**
     * Constructs a new <code>ApplyTagsResponse</code>.
     * @alias module:keap.sdk.core/model/ApplyTagsResponse
     */
    constructor() { 
        
        ApplyTagsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplyTagsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/ApplyTagsResponse} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/ApplyTagsResponse} The populated <code>ApplyTagsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplyTagsResponse();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplyTagsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplyTagsResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, String>} results
 */
ApplyTagsResponse.prototype['results'] = undefined;






export default ApplyTagsResponse;
