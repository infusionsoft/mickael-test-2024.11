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
 * The LinkContactsRequest model module.
 * @module com.keap.sdk.core/model/LinkContactsRequest
 * @version 0.0.87
 */
class LinkContactsRequest {
    /**
     * Constructs a new <code>LinkContactsRequest</code>.
     * @alias module:com.keap.sdk.core/model/LinkContactsRequest
     */
    constructor() { 
        
        LinkContactsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LinkContactsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/LinkContactsRequest} The populated <code>LinkContactsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkContactsRequest();

            if (data.hasOwnProperty('contact1_id')) {
                obj['contact1_id'] = ApiClient.convertToType(data['contact1_id'], 'String');
            }
            if (data.hasOwnProperty('contact2_id')) {
                obj['contact2_id'] = ApiClient.convertToType(data['contact2_id'], 'String');
            }
            if (data.hasOwnProperty('link_type_id')) {
                obj['link_type_id'] = ApiClient.convertToType(data['link_type_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LinkContactsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkContactsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact1_id'] && !(typeof data['contact1_id'] === 'string' || data['contact1_id'] instanceof String)) {
            throw new Error("Expected the field `contact1_id` to be a primitive type in the JSON string but got " + data['contact1_id']);
        }
        // ensure the json data is a string
        if (data['contact2_id'] && !(typeof data['contact2_id'] === 'string' || data['contact2_id'] instanceof String)) {
            throw new Error("Expected the field `contact2_id` to be a primitive type in the JSON string but got " + data['contact2_id']);
        }
        // ensure the json data is a string
        if (data['link_type_id'] && !(typeof data['link_type_id'] === 'string' || data['link_type_id'] instanceof String)) {
            throw new Error("Expected the field `link_type_id` to be a primitive type in the JSON string but got " + data['link_type_id']);
        }

        return true;
    }


}



/**
 * @member {String} contact1_id
 */
LinkContactsRequest.prototype['contact1_id'] = undefined;

/**
 * @member {String} contact2_id
 */
LinkContactsRequest.prototype['contact2_id'] = undefined;

/**
 * @member {String} link_type_id
 */
LinkContactsRequest.prototype['link_type_id'] = undefined;






export default LinkContactsRequest;
