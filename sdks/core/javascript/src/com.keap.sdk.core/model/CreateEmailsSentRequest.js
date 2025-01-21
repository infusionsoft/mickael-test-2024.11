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
import CreateEmailSentRequest from './CreateEmailSentRequest';

/**
 * The CreateEmailsSentRequest model module.
 * @module com.keap.sdk.core/model/CreateEmailsSentRequest
 * @version 0.0.96
 */
class CreateEmailsSentRequest {
    /**
     * Constructs a new <code>CreateEmailsSentRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateEmailsSentRequest
     */
    constructor() { 
        
        CreateEmailsSentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEmailsSentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateEmailsSentRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateEmailsSentRequest} The populated <code>CreateEmailsSentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEmailsSentRequest();

            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], [CreateEmailSentRequest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateEmailsSentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEmailsSentRequest</code>.
     */
    static validateJSON(data) {
        if (data['emails']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['emails'])) {
                throw new Error("Expected the field `emails` to be an array in the JSON data but got " + data['emails']);
            }
            // validate the optional field `emails` (array)
            for (const item of data['emails']) {
                CreateEmailSentRequest.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/CreateEmailSentRequest>} emails
 */
CreateEmailsSentRequest.prototype['emails'] = undefined;






export default CreateEmailsSentRequest;
