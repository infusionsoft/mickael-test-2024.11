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

/**
 * The AffiliateRemoveFromProgramRequest model module.
 * @module com.keap.sdk.core/model/AffiliateRemoveFromProgramRequest
 * @version 0.0.83
 */
class AffiliateRemoveFromProgramRequest {
    /**
     * Constructs a new <code>AffiliateRemoveFromProgramRequest</code>.
     * @alias module:com.keap.sdk.core/model/AffiliateRemoveFromProgramRequest
     */
    constructor() { 
        
        AffiliateRemoveFromProgramRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateRemoveFromProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateRemoveFromProgramRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateRemoveFromProgramRequest} The populated <code>AffiliateRemoveFromProgramRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateRemoveFromProgramRequest();

            if (data.hasOwnProperty('affiliate_program_id')) {
                obj['affiliate_program_id'] = ApiClient.convertToType(data['affiliate_program_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateRemoveFromProgramRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateRemoveFromProgramRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['affiliate_program_id'] && !(typeof data['affiliate_program_id'] === 'string' || data['affiliate_program_id'] instanceof String)) {
            throw new Error("Expected the field `affiliate_program_id` to be a primitive type in the JSON string but got " + data['affiliate_program_id']);
        }

        return true;
    }


}



/**
 * @member {String} affiliate_program_id
 */
AffiliateRemoveFromProgramRequest.prototype['affiliate_program_id'] = undefined;






export default AffiliateRemoveFromProgramRequest;
