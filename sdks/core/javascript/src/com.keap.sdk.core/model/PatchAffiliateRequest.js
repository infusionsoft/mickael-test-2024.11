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
 * The PatchAffiliateRequest model module.
 * @module com.keap.sdk.core/model/PatchAffiliateRequest
 * @version 0.0.29
 */
class PatchAffiliateRequest {
    /**
     * Constructs a new <code>PatchAffiliateRequest</code>.
     * @alias module:com.keap.sdk.core/model/PatchAffiliateRequest
     * @param code {String} The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length
     * @param status {module:com.keap.sdk.core/model/PatchAffiliateRequest.StatusEnum} The Affiliate Status
     */
    constructor(code, status) { 
        
        PatchAffiliateRequest.initialize(this, code, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, status) { 
        obj['code'] = code;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>PatchAffiliateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/PatchAffiliateRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/PatchAffiliateRequest} The populated <code>PatchAffiliateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchAffiliateRequest();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PatchAffiliateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PatchAffiliateRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PatchAffiliateRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

PatchAffiliateRequest.RequiredProperties = ["code", "status"];

/**
 * The Affiliate code which have some validations. 1. The code should not have white spaces 2. The code should starts with letters 3. The code minimum 4 characters length
 * @member {String} code
 */
PatchAffiliateRequest.prototype['code'] = undefined;

/**
 * The contactId identifier , Must be a positive number
 * @member {String} contact_id
 */
PatchAffiliateRequest.prototype['contact_id'] = undefined;

/**
 * The Affiliate name will be derived from the Contact, when not explicitly provided
 * @member {String} name
 */
PatchAffiliateRequest.prototype['name'] = undefined;

/**
 * The Affiliate Status
 * @member {module:com.keap.sdk.core/model/PatchAffiliateRequest.StatusEnum} status
 */
PatchAffiliateRequest.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PatchAffiliateRequest['StatusEnum'] = {

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default PatchAffiliateRequest;
