/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EmailSendRequestAttachment from './EmailSendRequestAttachment';

/**
 * The EmailSendRequest model module.
 * @module keap.core.v2/model/EmailSendRequest
 */
class EmailSendRequest {
    /**
     * Constructs a new <code>EmailSendRequest</code>.
     * @alias module:keap.core.v2/model/EmailSendRequest
     * @param contacts {Array.<String>} An array of Contact Ids to receive the email
     * @param subject {String} The subject line of the email
     * @param userId {String} The infusionsoft user to send the email on behalf of
     */
    constructor(contacts, subject, userId) { 
        
        EmailSendRequest.initialize(this, contacts, subject, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contacts, subject, userId) { 
        obj['contacts'] = contacts;
        obj['subject'] = subject;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>EmailSendRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/EmailSendRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/EmailSendRequest} The populated <code>EmailSendRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSendRequest();

            if (data.hasOwnProperty('address_field')) {
                obj['address_field'] = ApiClient.convertToType(data['address_field'], 'String');
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [EmailSendRequestAttachment]);
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], ['String']);
            }
            if (data.hasOwnProperty('html_content')) {
                obj['html_content'] = ApiClient.convertToType(data['html_content'], 'String');
            }
            if (data.hasOwnProperty('plain_content')) {
                obj['plain_content'] = ApiClient.convertToType(data['plain_content'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailSendRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSendRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailSendRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address_field'] && !(typeof data['address_field'] === 'string' || data['address_field'] instanceof String)) {
            throw new Error("Expected the field `address_field` to be a primitive type in the JSON string but got " + data['address_field']);
        }
        if (data['attachments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attachments'])) {
                throw new Error("Expected the field `attachments` to be an array in the JSON data but got " + data['attachments']);
            }
            // validate the optional field `attachments` (array)
            for (const item of data['attachments']) {
                EmailSendRequestAttachment.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['contacts'])) {
            throw new Error("Expected the field `contacts` to be an array in the JSON data but got " + data['contacts']);
        }
        // ensure the json data is a string
        if (data['html_content'] && !(typeof data['html_content'] === 'string' || data['html_content'] instanceof String)) {
            throw new Error("Expected the field `html_content` to be a primitive type in the JSON string but got " + data['html_content']);
        }
        // ensure the json data is a string
        if (data['plain_content'] && !(typeof data['plain_content'] === 'string' || data['plain_content'] instanceof String)) {
            throw new Error("Expected the field `plain_content` to be a primitive type in the JSON string but got " + data['plain_content']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}

EmailSendRequest.RequiredProperties = ["contacts", "subject", "user_id"];

/**
 * Email field of each Contact record to address the email to, such as 'Email', 'EmailAddress2', 'EmailAddress3' or '_CustomFieldName', defaulting to the contact's primary email
 * @member {String} address_field
 */
EmailSendRequest.prototype['address_field'] = undefined;

/**
 * Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each
 * @member {Array.<module:keap.core.v2/model/EmailSendRequestAttachment>} attachments
 */
EmailSendRequest.prototype['attachments'] = undefined;

/**
 * An array of Contact Ids to receive the email
 * @member {Array.<String>} contacts
 */
EmailSendRequest.prototype['contacts'] = undefined;

/**
 * The HTML-formatted content of the email, encoded in Base64
 * @member {String} html_content
 */
EmailSendRequest.prototype['html_content'] = undefined;

/**
 * The plain-text content of the email, encoded in Base64
 * @member {String} plain_content
 */
EmailSendRequest.prototype['plain_content'] = undefined;

/**
 * The subject line of the email
 * @member {String} subject
 */
EmailSendRequest.prototype['subject'] = undefined;

/**
 * The infusionsoft user to send the email on behalf of
 * @member {String} user_id
 */
EmailSendRequest.prototype['user_id'] = undefined;






export default EmailSendRequest;
