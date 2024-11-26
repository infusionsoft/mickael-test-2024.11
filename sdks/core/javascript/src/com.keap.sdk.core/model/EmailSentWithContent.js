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
 * The EmailSentWithContent model module.
 * @module com.keap.sdk.core/model/EmailSentWithContent
 * @version 0.0.20
 */
class EmailSentWithContent {
    /**
     * Constructs a new <code>EmailSentWithContent</code>.
     * @alias module:com.keap.sdk.core/model/EmailSentWithContent
     */
    constructor() { 
        
        EmailSentWithContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSentWithContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/EmailSentWithContent} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/EmailSentWithContent} The populated <code>EmailSentWithContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSentWithContent();

            if (data.hasOwnProperty('clicked_time')) {
                obj['clicked_time'] = ApiClient.convertToType(data['clicked_time'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], 'String');
            }
            if (data.hasOwnProperty('html_content')) {
                obj['html_content'] = ApiClient.convertToType(data['html_content'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('opened_time')) {
                obj['opened_time'] = ApiClient.convertToType(data['opened_time'], 'String');
            }
            if (data.hasOwnProperty('original_provider')) {
                obj['original_provider'] = ApiClient.convertToType(data['original_provider'], 'String');
            }
            if (data.hasOwnProperty('original_provider_id')) {
                obj['original_provider_id'] = ApiClient.convertToType(data['original_provider_id'], 'String');
            }
            if (data.hasOwnProperty('plain_content')) {
                obj['plain_content'] = ApiClient.convertToType(data['plain_content'], 'String');
            }
            if (data.hasOwnProperty('provider_source_id')) {
                obj['provider_source_id'] = ApiClient.convertToType(data['provider_source_id'], 'String');
            }
            if (data.hasOwnProperty('received_time')) {
                obj['received_time'] = ApiClient.convertToType(data['received_time'], 'String');
            }
            if (data.hasOwnProperty('sent_from_address')) {
                obj['sent_from_address'] = ApiClient.convertToType(data['sent_from_address'], 'String');
            }
            if (data.hasOwnProperty('sent_from_reply_address')) {
                obj['sent_from_reply_address'] = ApiClient.convertToType(data['sent_from_reply_address'], 'String');
            }
            if (data.hasOwnProperty('sent_time')) {
                obj['sent_time'] = ApiClient.convertToType(data['sent_time'], 'String');
            }
            if (data.hasOwnProperty('sent_to_address')) {
                obj['sent_to_address'] = ApiClient.convertToType(data['sent_to_address'], 'String');
            }
            if (data.hasOwnProperty('sent_to_bcc_address_list')) {
                obj['sent_to_bcc_address_list'] = ApiClient.convertToType(data['sent_to_bcc_address_list'], ['String']);
            }
            if (data.hasOwnProperty('sent_to_cc_address_list')) {
                obj['sent_to_cc_address_list'] = ApiClient.convertToType(data['sent_to_cc_address_list'], ['String']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailSentWithContent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailSentWithContent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['clicked_time'] && !(typeof data['clicked_time'] === 'string' || data['clicked_time'] instanceof String)) {
            throw new Error("Expected the field `clicked_time` to be a primitive type in the JSON string but got " + data['clicked_time']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['headers'] && !(typeof data['headers'] === 'string' || data['headers'] instanceof String)) {
            throw new Error("Expected the field `headers` to be a primitive type in the JSON string but got " + data['headers']);
        }
        // ensure the json data is a string
        if (data['html_content'] && !(typeof data['html_content'] === 'string' || data['html_content'] instanceof String)) {
            throw new Error("Expected the field `html_content` to be a primitive type in the JSON string but got " + data['html_content']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['opened_time'] && !(typeof data['opened_time'] === 'string' || data['opened_time'] instanceof String)) {
            throw new Error("Expected the field `opened_time` to be a primitive type in the JSON string but got " + data['opened_time']);
        }
        // ensure the json data is a string
        if (data['original_provider'] && !(typeof data['original_provider'] === 'string' || data['original_provider'] instanceof String)) {
            throw new Error("Expected the field `original_provider` to be a primitive type in the JSON string but got " + data['original_provider']);
        }
        // ensure the json data is a string
        if (data['original_provider_id'] && !(typeof data['original_provider_id'] === 'string' || data['original_provider_id'] instanceof String)) {
            throw new Error("Expected the field `original_provider_id` to be a primitive type in the JSON string but got " + data['original_provider_id']);
        }
        // ensure the json data is a string
        if (data['plain_content'] && !(typeof data['plain_content'] === 'string' || data['plain_content'] instanceof String)) {
            throw new Error("Expected the field `plain_content` to be a primitive type in the JSON string but got " + data['plain_content']);
        }
        // ensure the json data is a string
        if (data['provider_source_id'] && !(typeof data['provider_source_id'] === 'string' || data['provider_source_id'] instanceof String)) {
            throw new Error("Expected the field `provider_source_id` to be a primitive type in the JSON string but got " + data['provider_source_id']);
        }
        // ensure the json data is a string
        if (data['received_time'] && !(typeof data['received_time'] === 'string' || data['received_time'] instanceof String)) {
            throw new Error("Expected the field `received_time` to be a primitive type in the JSON string but got " + data['received_time']);
        }
        // ensure the json data is a string
        if (data['sent_from_address'] && !(typeof data['sent_from_address'] === 'string' || data['sent_from_address'] instanceof String)) {
            throw new Error("Expected the field `sent_from_address` to be a primitive type in the JSON string but got " + data['sent_from_address']);
        }
        // ensure the json data is a string
        if (data['sent_from_reply_address'] && !(typeof data['sent_from_reply_address'] === 'string' || data['sent_from_reply_address'] instanceof String)) {
            throw new Error("Expected the field `sent_from_reply_address` to be a primitive type in the JSON string but got " + data['sent_from_reply_address']);
        }
        // ensure the json data is a string
        if (data['sent_time'] && !(typeof data['sent_time'] === 'string' || data['sent_time'] instanceof String)) {
            throw new Error("Expected the field `sent_time` to be a primitive type in the JSON string but got " + data['sent_time']);
        }
        // ensure the json data is a string
        if (data['sent_to_address'] && !(typeof data['sent_to_address'] === 'string' || data['sent_to_address'] instanceof String)) {
            throw new Error("Expected the field `sent_to_address` to be a primitive type in the JSON string but got " + data['sent_to_address']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sent_to_bcc_address_list'])) {
            throw new Error("Expected the field `sent_to_bcc_address_list` to be an array in the JSON data but got " + data['sent_to_bcc_address_list']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sent_to_cc_address_list'])) {
            throw new Error("Expected the field `sent_to_cc_address_list` to be an array in the JSON data but got " + data['sent_to_cc_address_list']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }

        return true;
    }


}



/**
 * @member {String} clicked_time
 */
EmailSentWithContent.prototype['clicked_time'] = undefined;

/**
 * @member {String} contact_id
 */
EmailSentWithContent.prototype['contact_id'] = undefined;

/**
 * @member {String} headers
 */
EmailSentWithContent.prototype['headers'] = undefined;

/**
 * Base64 encoded HTML
 * @member {String} html_content
 */
EmailSentWithContent.prototype['html_content'] = undefined;

/**
 * @member {String} id
 */
EmailSentWithContent.prototype['id'] = undefined;

/**
 * @member {String} opened_time
 */
EmailSentWithContent.prototype['opened_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/EmailSentWithContent.OriginalProviderEnum} original_provider
 */
EmailSentWithContent.prototype['original_provider'] = undefined;

/**
 * @member {String} original_provider_id
 */
EmailSentWithContent.prototype['original_provider_id'] = undefined;

/**
 * Base64 encoded plain text
 * @member {String} plain_content
 */
EmailSentWithContent.prototype['plain_content'] = undefined;

/**
 * @member {String} provider_source_id
 */
EmailSentWithContent.prototype['provider_source_id'] = undefined;

/**
 * @member {String} received_time
 */
EmailSentWithContent.prototype['received_time'] = undefined;

/**
 * @member {String} sent_from_address
 */
EmailSentWithContent.prototype['sent_from_address'] = undefined;

/**
 * @member {String} sent_from_reply_address
 */
EmailSentWithContent.prototype['sent_from_reply_address'] = undefined;

/**
 * @member {String} sent_time
 */
EmailSentWithContent.prototype['sent_time'] = undefined;

/**
 * @member {String} sent_to_address
 */
EmailSentWithContent.prototype['sent_to_address'] = undefined;

/**
 * @member {Array.<String>} sent_to_bcc_address_list
 */
EmailSentWithContent.prototype['sent_to_bcc_address_list'] = undefined;

/**
 * @member {Array.<String>} sent_to_cc_address_list
 */
EmailSentWithContent.prototype['sent_to_cc_address_list'] = undefined;

/**
 * @member {String} subject
 */
EmailSentWithContent.prototype['subject'] = undefined;





/**
 * Allowed values for the <code>original_provider</code> property.
 * @enum {String}
 * @readonly
 */
EmailSentWithContent['OriginalProviderEnum'] = {

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",

    /**
     * value: "INFUSIONSOFT"
     * @const
     */
    "INFUSIONSOFT": "INFUSIONSOFT",

    /**
     * value: "MICROSOFT"
     * @const
     */
    "MICROSOFT": "MICROSOFT",

    /**
     * value: "GOOGLE"
     * @const
     */
    "GOOGLE": "GOOGLE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default EmailSentWithContent;
