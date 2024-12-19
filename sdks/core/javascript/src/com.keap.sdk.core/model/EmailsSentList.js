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
import EmailSentCreateError from './EmailSentCreateError';
import EmailSentWithContent from './EmailSentWithContent';

/**
 * The EmailsSentList model module.
 * @module com.keap.sdk.core/model/EmailsSentList
 * @version 0.0.61
 */
class EmailsSentList {
    /**
     * Constructs a new <code>EmailsSentList</code>.
     * @alias module:com.keap.sdk.core/model/EmailsSentList
     */
    constructor() { 
        
        EmailsSentList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailsSentList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailsSentList} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailsSentList} The populated <code>EmailsSentList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailsSentList();

            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], [EmailSentWithContent]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [EmailSentCreateError]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailsSentList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailsSentList</code>.
     */
    static validateJSON(data) {
        if (data['emails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['emails'])) {
                throw new Error("Expected the field `emails` to be an array in the JSON data but got " + data['emails']);
            }
            // validate the optional field `emails` (array)
            for (const item of data['emails']) {
                EmailSentWithContent.validateJSON(item);
            };
        }
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                EmailSentCreateError.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/EmailSentWithContent>} emails
 */
EmailsSentList.prototype['emails'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/EmailSentCreateError>} errors
 */
EmailsSentList.prototype['errors'] = undefined;






export default EmailsSentList;
