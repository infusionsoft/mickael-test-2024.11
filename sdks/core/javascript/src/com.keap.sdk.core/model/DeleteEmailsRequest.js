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
 * The DeleteEmailsRequest model module.
 * @module com.keap.sdk.core/model/DeleteEmailsRequest
 * @version 0.0.32
 */
class DeleteEmailsRequest {
    /**
     * Constructs a new <code>DeleteEmailsRequest</code>.
     * @alias module:com.keap.sdk.core/model/DeleteEmailsRequest
     */
    constructor() { 
        
        DeleteEmailsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteEmailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DeleteEmailsRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DeleteEmailsRequest} The populated <code>DeleteEmailsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteEmailsRequest();

            if (data.hasOwnProperty('email_ids')) {
                obj['email_ids'] = ApiClient.convertToType(data['email_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteEmailsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteEmailsRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['email_ids'])) {
            throw new Error("Expected the field `email_ids` to be an array in the JSON data but got " + data['email_ids']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} email_ids
 */
DeleteEmailsRequest.prototype['email_ids'] = undefined;






export default DeleteEmailsRequest;
