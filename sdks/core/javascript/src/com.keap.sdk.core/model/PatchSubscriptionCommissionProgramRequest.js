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
 * The PatchSubscriptionCommissionProgramRequest model module.
 * @module com.keap.sdk.core/model/PatchSubscriptionCommissionProgramRequest
 * @version 0.0.52
 */
class PatchSubscriptionCommissionProgramRequest {
    /**
     * Constructs a new <code>PatchSubscriptionCommissionProgramRequest</code>.
     * @alias module:com.keap.sdk.core/model/PatchSubscriptionCommissionProgramRequest
     */
    constructor() { 
        
        PatchSubscriptionCommissionProgramRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchSubscriptionCommissionProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PatchSubscriptionCommissionProgramRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PatchSubscriptionCommissionProgramRequest} The populated <code>PatchSubscriptionCommissionProgramRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchSubscriptionCommissionProgramRequest();

            if (data.hasOwnProperty('dollar_amount')) {
                obj['dollar_amount'] = ApiClient.convertToType(data['dollar_amount'], 'String');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'String');
            }
            if (data.hasOwnProperty('subscription_id')) {
                obj['subscription_id'] = ApiClient.convertToType(data['subscription_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchSubscriptionCommissionProgramRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchSubscriptionCommissionProgramRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dollar_amount'] && !(typeof data['dollar_amount'] === 'string' || data['dollar_amount'] instanceof String)) {
            throw new Error("Expected the field `dollar_amount` to be a primitive type in the JSON string but got " + data['dollar_amount']);
        }
        // ensure the json data is a string
        if (data['percentage'] && !(typeof data['percentage'] === 'string' || data['percentage'] instanceof String)) {
            throw new Error("Expected the field `percentage` to be a primitive type in the JSON string but got " + data['percentage']);
        }
        // ensure the json data is a string
        if (data['subscription_id'] && !(typeof data['subscription_id'] === 'string' || data['subscription_id'] instanceof String)) {
            throw new Error("Expected the field `subscription_id` to be a primitive type in the JSON string but got " + data['subscription_id']);
        }

        return true;
    }


}



/**
 * @member {String} dollar_amount
 */
PatchSubscriptionCommissionProgramRequest.prototype['dollar_amount'] = undefined;

/**
 * @member {String} percentage
 */
PatchSubscriptionCommissionProgramRequest.prototype['percentage'] = undefined;

/**
 * @member {String} subscription_id
 */
PatchSubscriptionCommissionProgramRequest.prototype['subscription_id'] = undefined;






export default PatchSubscriptionCommissionProgramRequest;
