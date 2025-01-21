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
 * The OriginRequest model module.
 * @module com.keap.sdk.core/model/OriginRequest
 * @version 0.0.96
 */
class OriginRequest {
    /**
     * Constructs a new <code>OriginRequest</code>.
     * @alias module:com.keap.sdk.core/model/OriginRequest
     */
    constructor() { 
        
        OriginRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OriginRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/OriginRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/OriginRequest} The populated <code>OriginRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OriginRequest();

            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OriginRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OriginRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ip_address'] && !(typeof data['ip_address'] === 'string' || data['ip_address'] instanceof String)) {
            throw new Error("Expected the field `ip_address` to be a primitive type in the JSON string but got " + data['ip_address']);
        }

        return true;
    }


}



/**
 * @member {String} ip_address
 */
OriginRequest.prototype['ip_address'] = undefined;






export default OriginRequest;
