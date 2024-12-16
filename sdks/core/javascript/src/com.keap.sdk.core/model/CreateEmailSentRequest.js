/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateEmailSentRequest model module.
 * @module com.keap.sdk.core/model/CreateEmailSentRequest
 * @version 0.0.45
 */
class CreateEmailSentRequest {
    /**
     * Constructs a new <code>CreateEmailSentRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateEmailSentRequest
     * @param sentToAddress {String} 
     */
    constructor(sentToAddress) { 
        
        CreateEmailSentRequest.initialize(this, sentToAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sentToAddress) { 
        obj['sent_to_address'] = sentToAddress;
    }

    /**
     * Constructs a <code>CreateEmailSentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateEmailSentRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateEmailSentRequest} The populated <code>CreateEmailSentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEmailSentRequest();

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
     * Validates the JSON data with respect to <code>CreateEmailSentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEmailSentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateEmailSentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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

CreateEmailSentRequest.RequiredProperties = ["sent_to_address"];

/**
 * @member {String} clicked_time
 */
CreateEmailSentRequest.prototype['clicked_time'] = undefined;

/**
 * @member {String} contact_id
 */
CreateEmailSentRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} headers
 */
CreateEmailSentRequest.prototype['headers'] = undefined;

/**
 * Base64 encoded HTML
 * @member {String} html_content
 */
CreateEmailSentRequest.prototype['html_content'] = undefined;

/**
 * @member {String} opened_time
 */
CreateEmailSentRequest.prototype['opened_time'] = undefined;

/**
 * Provider that sent the email, defaults to UNKNOWN
 * @member {module:com.keap.sdk.core/model/CreateEmailSentRequest.OriginalProviderEnum} original_provider
 */
CreateEmailSentRequest.prototype['original_provider'] = undefined;

/**
 * Provider id that sent the email, must be unique when combined with provider.  If omitted a UUID without dashes is autogenerated for the record.
 * @member {String} original_provider_id
 */
CreateEmailSentRequest.prototype['original_provider_id'] = undefined;

/**
 * Base64 encoded text
 * @member {String} plain_content
 */
CreateEmailSentRequest.prototype['plain_content'] = undefined;

/**
 * The email address of the synced email account that generated this message.
 * @member {String} provider_source_id
 */
CreateEmailSentRequest.prototype['provider_source_id'] = undefined;

/**
 * @member {String} received_time
 */
CreateEmailSentRequest.prototype['received_time'] = undefined;

/**
 * @member {String} sent_from_address
 */
CreateEmailSentRequest.prototype['sent_from_address'] = undefined;

/**
 * @member {String} sent_from_reply_address
 */
CreateEmailSentRequest.prototype['sent_from_reply_address'] = undefined;

/**
 * @member {String} sent_time
 */
CreateEmailSentRequest.prototype['sent_time'] = undefined;

/**
 * @member {String} sent_to_address
 */
CreateEmailSentRequest.prototype['sent_to_address'] = undefined;

/**
 * @member {Array.<String>} sent_to_bcc_address_list
 */
CreateEmailSentRequest.prototype['sent_to_bcc_address_list'] = undefined;

/**
 * @member {Array.<String>} sent_to_cc_address_list
 */
CreateEmailSentRequest.prototype['sent_to_cc_address_list'] = undefined;

/**
 * @member {String} subject
 */
CreateEmailSentRequest.prototype['subject'] = undefined;





/**
 * Allowed values for the <code>original_provider</code> property.
 * @enum {String}
 * @readonly
 */
CreateEmailSentRequest['OriginalProviderEnum'] = {

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


export default CreateEmailSentRequest;
