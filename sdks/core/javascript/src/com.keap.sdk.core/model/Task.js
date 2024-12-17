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
 * The Task model module.
 * @module com.keap.sdk.core/model/Task
 * @version 0.0.46
 */
class Task {
    /**
     * Constructs a new <code>Task</code>.
     * @alias module:com.keap.sdk.core/model/Task
     */
    constructor() { 
        
        Task.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Task} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Task} The populated <code>Task</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Task();

            if (data.hasOwnProperty('assigned_to_user_id')) {
                obj['assigned_to_user_id'] = ApiClient.convertToType(data['assigned_to_user_id'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('completion_time')) {
                obj['completion_time'] = ApiClient.convertToType(data['completion_time'], 'String');
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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('due_time')) {
                obj['due_time'] = ApiClient.convertToType(data['due_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('modification_time')) {
                obj['modification_time'] = ApiClient.convertToType(data['modification_time'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('remind_time_mins')) {
                obj['remind_time_mins'] = ApiClient.convertToType(data['remind_time_mins'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Task</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Task</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['assigned_to_user_id'] && !(typeof data['assigned_to_user_id'] === 'string' || data['assigned_to_user_id'] instanceof String)) {
            throw new Error("Expected the field `assigned_to_user_id` to be a primitive type in the JSON string but got " + data['assigned_to_user_id']);
        }
        // ensure the json data is a string
        if (data['completion_time'] && !(typeof data['completion_time'] === 'string' || data['completion_time'] instanceof String)) {
            throw new Error("Expected the field `completion_time` to be a primitive type in the JSON string but got " + data['completion_time']);
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
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['due_time'] && !(typeof data['due_time'] === 'string' || data['due_time'] instanceof String)) {
            throw new Error("Expected the field `due_time` to be a primitive type in the JSON string but got " + data['due_time']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['modification_time'] && !(typeof data['modification_time'] === 'string' || data['modification_time'] instanceof String)) {
            throw new Error("Expected the field `modification_time` to be a primitive type in the JSON string but got " + data['modification_time']);
        }
        // ensure the json data is a string
        if (data['priority'] && !(typeof data['priority'] === 'string' || data['priority'] instanceof String)) {
            throw new Error("Expected the field `priority` to be a primitive type in the JSON string but got " + data['priority']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} assigned_to_user_id
 */
Task.prototype['assigned_to_user_id'] = undefined;

/**
 * @member {Boolean} completed
 */
Task.prototype['completed'] = undefined;

/**
 * @member {String} completion_time
 */
Task.prototype['completion_time'] = undefined;

/**
 * @member {String} contact_id
 */
Task.prototype['contact_id'] = undefined;

/**
 * On initial object the returned value for this property may not accurately represent the exact stored value.
 * @member {String} create_time
 */
Task.prototype['create_time'] = undefined;

/**
 * @member {String} created_by_user_id
 */
Task.prototype['created_by_user_id'] = undefined;

/**
 * @member {String} description
 */
Task.prototype['description'] = undefined;

/**
 * @member {String} due_time
 */
Task.prototype['due_time'] = undefined;

/**
 * @member {String} id
 */
Task.prototype['id'] = undefined;

/**
 * @member {String} modification_time
 */
Task.prototype['modification_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Task.PriorityEnum} priority
 */
Task.prototype['priority'] = undefined;

/**
 * @member {Number} remind_time_mins
 */
Task.prototype['remind_time_mins'] = undefined;

/**
 * @member {String} title
 */
Task.prototype['title'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/Task.TypeEnum} type
 */
Task.prototype['type'] = undefined;





/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
Task['PriorityEnum'] = {

    /**
     * value: "CRITICAL"
     * @const
     */
    "CRITICAL": "CRITICAL",

    /**
     * value: "ESSENTIAL"
     * @const
     */
    "ESSENTIAL": "ESSENTIAL",

    /**
     * value: "NONESSENTIAL"
     * @const
     */
    "NONESSENTIAL": "NONESSENTIAL",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Task['TypeEnum'] = {

    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL",

    /**
     * value: "CALL"
     * @const
     */
    "CALL": "CALL",

    /**
     * value: "APPOINTMENT"
     * @const
     */
    "APPOINTMENT": "APPOINTMENT",

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


export default Task;
