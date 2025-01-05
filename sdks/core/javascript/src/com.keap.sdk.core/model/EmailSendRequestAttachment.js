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
 * The EmailSendRequestAttachment model module.
 * @module com.keap.sdk.core/model/EmailSendRequestAttachment
 * @version 0.0.78
 */
class EmailSendRequestAttachment {
    /**
     * Constructs a new <code>EmailSendRequestAttachment</code>.
     * @alias module:com.keap.sdk.core/model/EmailSendRequestAttachment
     */
    constructor() { 
        
        EmailSendRequestAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSendRequestAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailSendRequestAttachment} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailSendRequestAttachment} The populated <code>EmailSendRequestAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSendRequestAttachment();

            if (data.hasOwnProperty('file_data')) {
                obj['file_data'] = ApiClient.convertToType(data['file_data'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailSendRequestAttachment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSendRequestAttachment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['file_data'] && !(typeof data['file_data'] === 'string' || data['file_data'] instanceof String)) {
            throw new Error("Expected the field `file_data` to be a primitive type in the JSON string but got " + data['file_data']);
        }
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }

        return true;
    }


}



/**
 * The content of the attachment, encoded in Base64
 * @member {String} file_data
 */
EmailSendRequestAttachment.prototype['file_data'] = undefined;

/**
 * The filename of the attached file, including extension
 * @member {String} file_name
 */
EmailSendRequestAttachment.prototype['file_name'] = undefined;






export default EmailSendRequestAttachment;
