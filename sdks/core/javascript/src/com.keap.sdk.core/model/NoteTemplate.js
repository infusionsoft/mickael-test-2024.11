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
 * The NoteTemplate model module.
 * @module com.keap.sdk.core/model/NoteTemplate
 * @version 0.0.74
 */
class NoteTemplate {
    /**
     * Constructs a new <code>NoteTemplate</code>.
     * @alias module:com.keap.sdk.core/model/NoteTemplate
     */
    constructor() { 
        
        NoteTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NoteTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/NoteTemplate} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/NoteTemplate} The populated <code>NoteTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NoteTemplate();

            if (data.hasOwnProperty('action_type')) {
                obj['action_type'] = ApiClient.convertToType(data['action_type'], 'String');
            }
            if (data.hasOwnProperty('assignment_user_id')) {
                obj['assignment_user_id'] = ApiClient.convertToType(data['assignment_user_id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('notify_users')) {
                obj['notify_users'] = ApiClient.convertToType(data['notify_users'], ['String']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NoteTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NoteTemplate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['action_type'] && !(typeof data['action_type'] === 'string' || data['action_type'] instanceof String)) {
            throw new Error("Expected the field `action_type` to be a primitive type in the JSON string but got " + data['action_type']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['notify_users'])) {
            throw new Error("Expected the field `notify_users` to be an array in the JSON data but got " + data['notify_users']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/NoteTemplate.ActionTypeEnum} action_type
 */
NoteTemplate.prototype['action_type'] = undefined;

/**
 * @member {Number} assignment_user_id
 */
NoteTemplate.prototype['assignment_user_id'] = undefined;

/**
 * @member {String} description
 */
NoteTemplate.prototype['description'] = undefined;

/**
 * @member {String} id
 */
NoteTemplate.prototype['id'] = undefined;

/**
 * @member {Array.<String>} notify_users
 */
NoteTemplate.prototype['notify_users'] = undefined;

/**
 * @member {String} title
 */
NoteTemplate.prototype['title'] = undefined;





/**
 * Allowed values for the <code>action_type</code> property.
 * @enum {String}
 * @readonly
 */
NoteTemplate['ActionTypeEnum'] = {

    /**
     * value: "APPOINTMENT"
     * @const
     */
    "APPOINTMENT": "APPOINTMENT",

    /**
     * value: "CALL"
     * @const
     */
    "CALL": "CALL",

    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL",

    /**
     * value: "FAX"
     * @const
     */
    "FAX": "FAX",

    /**
     * value: "LETTER"
     * @const
     */
    "LETTER": "LETTER",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default NoteTemplate;
