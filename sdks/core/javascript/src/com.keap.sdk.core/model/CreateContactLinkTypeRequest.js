/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateContactLinkTypeRequest model module.
 * @module com.keap.sdk.core/model/CreateContactLinkTypeRequest
 * @version 0.0.107
 */
class CreateContactLinkTypeRequest {
    /**
     * Constructs a new <code>CreateContactLinkTypeRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateContactLinkTypeRequest
     */
    constructor() { 
        
        CreateContactLinkTypeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateContactLinkTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateContactLinkTypeRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateContactLinkTypeRequest} The populated <code>CreateContactLinkTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateContactLinkTypeRequest();

            if (data.hasOwnProperty('max_links')) {
                obj['max_links'] = ApiClient.convertToType(data['max_links'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateContactLinkTypeRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateContactLinkTypeRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Number} max_links
 */
CreateContactLinkTypeRequest.prototype['max_links'] = undefined;

/**
 * @member {String} name
 */
CreateContactLinkTypeRequest.prototype['name'] = undefined;






export default CreateContactLinkTypeRequest;
