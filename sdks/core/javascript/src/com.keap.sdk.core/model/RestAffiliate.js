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
 * The RestAffiliate model module.
 * @module com.keap.sdk.core/model/RestAffiliate
 * @version 0.0.92
 */
class RestAffiliate {
    /**
     * Constructs a new <code>RestAffiliate</code>.
     * @alias module:com.keap.sdk.core/model/RestAffiliate
     */
    constructor() { 
        
        RestAffiliate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestAffiliate} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestAffiliate} The populated <code>RestAffiliate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestAffiliate();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('unique_site_id')) {
                obj['unique_site_id'] = ApiClient.convertToType(data['unique_site_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestAffiliate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestAffiliate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['unique_site_id'] && !(typeof data['unique_site_id'] === 'string' || data['unique_site_id'] instanceof String)) {
            throw new Error("Expected the field `unique_site_id` to be a primitive type in the JSON string but got " + data['unique_site_id']);
        }

        return true;
    }


}



/**
 * The Affiliate Code
 * @member {String} code
 */
RestAffiliate.prototype['code'] = undefined;

/**
 * The ContactID
 * @member {String} contact_id
 */
RestAffiliate.prototype['contact_id'] = undefined;

/**
 * The AffiliateId
 * @member {String} id
 */
RestAffiliate.prototype['id'] = undefined;

/**
 * The Affiliate Name
 * @member {String} name
 */
RestAffiliate.prototype['name'] = undefined;

/**
 * The Affiliate Status
 * @member {module:com.keap.sdk.core/model/RestAffiliate.StatusEnum} status
 */
RestAffiliate.prototype['status'] = undefined;

/**
 * The Affiliate PortalSite Id
 * @member {String} unique_site_id
 */
RestAffiliate.prototype['unique_site_id'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
RestAffiliate['StatusEnum'] = {

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


export default RestAffiliate;
