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

/**
 * The CancelSubscriptionsRequest model module.
 * @module com.keap.sdk.core/model/CancelSubscriptionsRequest
 * @version 0.0.38
 */
class CancelSubscriptionsRequest {
    /**
     * Constructs a new <code>CancelSubscriptionsRequest</code>.
     * @alias module:com.keap.sdk.core/model/CancelSubscriptionsRequest
     */
    constructor() { 
        
        CancelSubscriptionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CancelSubscriptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CancelSubscriptionsRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CancelSubscriptionsRequest} The populated <code>CancelSubscriptionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CancelSubscriptionsRequest();

            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CancelSubscriptionsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CancelSubscriptionsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }

        return true;
    }


}



/**
 * @member {String} reason
 */
CancelSubscriptionsRequest.prototype['reason'] = undefined;






export default CancelSubscriptionsRequest;
