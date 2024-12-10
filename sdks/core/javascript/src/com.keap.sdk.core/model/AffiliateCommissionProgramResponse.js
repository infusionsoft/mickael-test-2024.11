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
 * The AffiliateCommissionProgramResponse model module.
 * @module com.keap.sdk.core/model/AffiliateCommissionProgramResponse
 * @version 0.0.40
 */
class AffiliateCommissionProgramResponse {
    /**
     * Constructs a new <code>AffiliateCommissionProgramResponse</code>.
     * @alias module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse
     */
    constructor() { 
        
        AffiliateCommissionProgramResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateCommissionProgramResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse} The populated <code>AffiliateCommissionProgramResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateCommissionProgramResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateCommissionProgramResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateCommissionProgramResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
AffiliateCommissionProgramResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AffiliateCommissionProgramResponse.prototype['name'] = undefined;

/**
 * @member {String} notes
 */
AffiliateCommissionProgramResponse.prototype['notes'] = undefined;

/**
 * @member {Number} priority
 */
AffiliateCommissionProgramResponse.prototype['priority'] = undefined;






export default AffiliateCommissionProgramResponse;
