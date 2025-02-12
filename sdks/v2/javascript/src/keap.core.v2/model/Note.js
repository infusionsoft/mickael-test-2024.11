/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BasicUser from './BasicUser';

/**
 * The Note model module.
 * @module keap.core.v2/model/Note
 */
class Note {
    /**
     * Constructs a new <code>Note</code>.
     * @alias module:keap.core.v2/model/Note
     */
    constructor() { 
        
        Note.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/Note} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/Note} The populated <code>Note</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Note();

            if (data.hasOwnProperty('assigned_to_user')) {
                obj['assigned_to_user'] = BasicUser.constructFromObject(data['assigned_to_user']);
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('create_time')) {
                obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
            }
            if (data.hasOwnProperty('created_by_user_id')) {
                obj['created_by_user_id'] = ApiClient.convertToType(data['created_by_user_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_updated_by_user_id')) {
                obj['last_updated_by_user_id'] = ApiClient.convertToType(data['last_updated_by_user_id'], 'String');
            }
            if (data.hasOwnProperty('pinned_at')) {
                obj['pinned_at'] = ApiClient.convertToType(data['pinned_at'], 'String');
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
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Note</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Note</code>.
     */
    static validateJSON(data) {
        // validate the optional field `assigned_to_user`
        if (data['assigned_to_user']) { // data not null
          BasicUser.validateJSON(data['assigned_to_user']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['create_time'] && !(typeof data['create_time'] === 'string' || data['create_time'] instanceof String)) {
            throw new Error("Expected the field `create_time` to be a primitive type in the JSON string but got " + data['create_time']);
        }
        // ensure the json data is a string
        if (data['created_by_user_id'] && !(typeof data['created_by_user_id'] === 'string' || data['created_by_user_id'] instanceof String)) {
            throw new Error("Expected the field `created_by_user_id` to be a primitive type in the JSON string but got " + data['created_by_user_id']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last_updated_by_user_id'] && !(typeof data['last_updated_by_user_id'] === 'string' || data['last_updated_by_user_id'] instanceof String)) {
            throw new Error("Expected the field `last_updated_by_user_id` to be a primitive type in the JSON string but got " + data['last_updated_by_user_id']);
        }
        // ensure the json data is a string
        if (data['pinned_at'] && !(typeof data['pinned_at'] === 'string' || data['pinned_at'] instanceof String)) {
            throw new Error("Expected the field `pinned_at` to be a primitive type in the JSON string but got " + data['pinned_at']);
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
        if (data['update_time'] && !(typeof data['update_time'] === 'string' || data['update_time'] instanceof String)) {
            throw new Error("Expected the field `update_time` to be a primitive type in the JSON string but got " + data['update_time']);
        }

        return true;
    }


}



/**
 * @member {module:keap.core.v2/model/BasicUser} assigned_to_user
 */
Note.prototype['assigned_to_user'] = undefined;

/**
 * @member {String} contact_id
 */
Note.prototype['contact_id'] = undefined;

/**
 * @member {String} create_time
 */
Note.prototype['create_time'] = undefined;

/**
 * @member {String} created_by_user_id
 */
Note.prototype['created_by_user_id'] = undefined;

/**
 * @member {String} id
 */
Note.prototype['id'] = undefined;

/**
 * @member {String} last_updated_by_user_id
 */
Note.prototype['last_updated_by_user_id'] = undefined;

/**
 * @member {String} pinned_at
 */
Note.prototype['pinned_at'] = undefined;

/**
 * @member {String} text
 */
Note.prototype['text'] = undefined;

/**
 * @member {String} title
 */
Note.prototype['title'] = undefined;

/**
 * @member {String} type
 */
Note.prototype['type'] = undefined;

/**
 * @member {String} update_time
 */
Note.prototype['update_time'] = undefined;






export default Note;
