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
import CreateEmailSentRequest from './CreateEmailSentRequest';

/**
 * The EmailSentCreateError model module.
 * @module com.keap.sdk.core/model/EmailSentCreateError
 * @version 0.0.76
 */
class EmailSentCreateError {
    /**
     * Constructs a new <code>EmailSentCreateError</code>.
     * @alias module:com.keap.sdk.core/model/EmailSentCreateError
     */
    constructor() { 
        
        EmailSentCreateError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSentCreateError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailSentCreateError} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailSentCreateError} The populated <code>EmailSentCreateError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSentCreateError();

            if (data.hasOwnProperty('email')) {
                obj['email'] = CreateEmailSentRequest.constructFromObject(data['email']);
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailSentCreateError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSentCreateError</code>.
     */
    static validateJSON(data) {
        // validate the optional field `email`
        if (data['email']) { // data not null
          CreateEmailSentRequest.validateJSON(data['email']);
        }
        // ensure the json data is a string
        if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
            throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/CreateEmailSentRequest} email
 */
EmailSentCreateError.prototype['email'] = undefined;

/**
 * @member {String} error_message
 */
EmailSentCreateError.prototype['error_message'] = undefined;






export default EmailSentCreateError;
