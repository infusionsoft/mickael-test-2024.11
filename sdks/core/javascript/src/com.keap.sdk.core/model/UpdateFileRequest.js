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
 * The UpdateFileRequest model module.
 * @module com.keap.sdk.core/model/UpdateFileRequest
 * @version 0.0.74
 */
class UpdateFileRequest {
    /**
     * Constructs a new <code>UpdateFileRequest</code>.
     * @alias module:com.keap.sdk.core/model/UpdateFileRequest
     */
    constructor() { 
        
        UpdateFileRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateFileRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateFileRequest} The populated <code>UpdateFileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFileRequest();

            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateFileRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateFileRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }

        return true;
    }


}



/**
 * @member {String} file_name
 */
UpdateFileRequest.prototype['file_name'] = undefined;

/**
 * @member {Boolean} is_public
 */
UpdateFileRequest.prototype['is_public'] = undefined;






export default UpdateFileRequest;
