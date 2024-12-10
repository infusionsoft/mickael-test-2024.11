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
 * The CreateOrPatchAffiliateLinkRequest model module.
 * @module com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest
 * @version 0.0.38
 */
class CreateOrPatchAffiliateLinkRequest {
    /**
     * Constructs a new <code>CreateOrPatchAffiliateLinkRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest
     */
    constructor() { 
        
        CreateOrPatchAffiliateLinkRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateOrPatchAffiliateLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest} The populated <code>CreateOrPatchAffiliateLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOrPatchAffiliateLinkRequest();

            if (data.hasOwnProperty('affiliate_id')) {
                obj['affiliate_id'] = ApiClient.convertToType(data['affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('program_ids')) {
                obj['program_ids'] = ApiClient.convertToType(data['program_ids'], ['String']);
            }
            if (data.hasOwnProperty('website_address')) {
                obj['website_address'] = ApiClient.convertToType(data['website_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateOrPatchAffiliateLinkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOrPatchAffiliateLinkRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['program_ids'])) {
            throw new Error("Expected the field `program_ids` to be an array in the JSON data but got " + data['program_ids']);
        }
        // ensure the json data is a string
        if (data['website_address'] && !(typeof data['website_address'] === 'string' || data['website_address'] instanceof String)) {
            throw new Error("Expected the field `website_address` to be a primitive type in the JSON string but got " + data['website_address']);
        }

        return true;
    }


}



/**
 * The AffiliateId
 * @member {String} affiliate_id
 */
CreateOrPatchAffiliateLinkRequest.prototype['affiliate_id'] = undefined;

/**
 * Code
 * @member {String} code
 */
CreateOrPatchAffiliateLinkRequest.prototype['code'] = undefined;

/**
 * The Affiliate Link Name
 * @member {String} name
 */
CreateOrPatchAffiliateLinkRequest.prototype['name'] = undefined;

/**
 * @member {Array.<String>} program_ids
 */
CreateOrPatchAffiliateLinkRequest.prototype['program_ids'] = undefined;

/**
 * Website Address
 * @member {String} website_address
 */
CreateOrPatchAffiliateLinkRequest.prototype['website_address'] = undefined;






export default CreateOrPatchAffiliateLinkRequest;
