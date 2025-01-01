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
 * The GetContactOptionTypesResponse model module.
 * @module com.keap.sdk.core/model/GetContactOptionTypesResponse
 * @version 0.0.74
 */
class GetContactOptionTypesResponse {
    /**
     * Constructs a new <code>GetContactOptionTypesResponse</code>.
     * @alias module:com.keap.sdk.core/model/GetContactOptionTypesResponse
     */
    constructor() { 
        
        GetContactOptionTypesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetContactOptionTypesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/GetContactOptionTypesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/GetContactOptionTypesResponse} The populated <code>GetContactOptionTypesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetContactOptionTypesResponse();

            if (data.hasOwnProperty('option_types')) {
                obj['option_types'] = ApiClient.convertToType(data['option_types'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetContactOptionTypesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetContactOptionTypesResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['option_types'])) {
            throw new Error("Expected the field `option_types` to be an array in the JSON data but got " + data['option_types']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} option_types
 */
GetContactOptionTypesResponse.prototype['option_types'] = undefined;






export default GetContactOptionTypesResponse;
