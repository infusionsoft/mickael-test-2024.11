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
 * The CreateNoteRequest model module.
 * @module com.keap.sdk.core/model/CreateNoteRequest
 * @version 0.0.105
 */
class CreateNoteRequest {
    /**
     * Constructs a new <code>CreateNoteRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateNoteRequest
     * @param userId {String} 
     */
    constructor(userId) { 
        
        CreateNoteRequest.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>CreateNoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateNoteRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateNoteRequest} The populated <code>CreateNoteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateNoteRequest();

            if (data.hasOwnProperty('is_pinned')) {
                obj['is_pinned'] = ApiClient.convertToType(data['is_pinned'], 'Boolean');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateNoteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateNoteRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateNoteRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}

CreateNoteRequest.RequiredProperties = ["user_id"];

/**
 * @member {Boolean} is_pinned
 */
CreateNoteRequest.prototype['is_pinned'] = undefined;

/**
 * @member {String} text
 */
CreateNoteRequest.prototype['text'] = undefined;

/**
 * A value for either `title` or `type` is required.
 * @member {String} title
 */
CreateNoteRequest.prototype['title'] = undefined;

/**
 * A value for either `title` or `type` is required. The value may be one of `Appointment`, `Call`, `Email`, `Fax`, `Letter` or `Other` in Keap Max/Pro, or an admin-configured value in Classic.
 * @member {String} type
 */
CreateNoteRequest.prototype['type'] = undefined;

/**
 * @member {String} user_id
 */
CreateNoteRequest.prototype['user_id'] = undefined;






export default CreateNoteRequest;
