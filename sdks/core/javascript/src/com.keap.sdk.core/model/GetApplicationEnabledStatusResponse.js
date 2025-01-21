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
 * The GetApplicationEnabledStatusResponse model module.
 * @module com.keap.sdk.core/model/GetApplicationEnabledStatusResponse
 * @version 0.0.94
 */
class GetApplicationEnabledStatusResponse {
    /**
     * Constructs a new <code>GetApplicationEnabledStatusResponse</code>.
     * @alias module:com.keap.sdk.core/model/GetApplicationEnabledStatusResponse
     */
    constructor() { 
        
        GetApplicationEnabledStatusResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetApplicationEnabledStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/GetApplicationEnabledStatusResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/GetApplicationEnabledStatusResponse} The populated <code>GetApplicationEnabledStatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetApplicationEnabledStatusResponse();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetApplicationEnabledStatusResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetApplicationEnabledStatusResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} enabled
 */
GetApplicationEnabledStatusResponse.prototype['enabled'] = undefined;






export default GetApplicationEnabledStatusResponse;
