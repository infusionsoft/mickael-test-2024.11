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
import Task from './Task';

/**
 * The ListTasksResponse model module.
 * @module com.keap.sdk.core/model/ListTasksResponse
 * @version 0.0.99
 */
class ListTasksResponse {
    /**
     * Constructs a new <code>ListTasksResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListTasksResponse
     */
    constructor() { 
        
        ListTasksResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListTasksResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListTasksResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListTasksResponse} The populated <code>ListTasksResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTasksResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('tasks')) {
                obj['tasks'] = ApiClient.convertToType(data['tasks'], [Task]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListTasksResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTasksResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['tasks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tasks'])) {
                throw new Error("Expected the field `tasks` to be an array in the JSON data but got " + data['tasks']);
            }
            // validate the optional field `tasks` (array)
            for (const item of data['tasks']) {
                Task.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListTasksResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Task>} tasks
 */
ListTasksResponse.prototype['tasks'] = undefined;






export default ListTasksResponse;
