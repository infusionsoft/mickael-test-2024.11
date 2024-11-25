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
import LeadSourceCategory from './LeadSourceCategory';

/**
 * The LeadSource model module.
 * @module com.keap.sdk.core/model/LeadSource
 * @version 0.0.18
 */
class LeadSource {
    /**
     * Constructs a new <code>LeadSource</code>.
     * @alias module:com.keap.sdk.core/model/LeadSource
     */
    constructor() { 
        
        LeadSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/LeadSource} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/LeadSource} The populated <code>LeadSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadSource();

            if (data.hasOwnProperty('category')) {
                obj['category'] = LeadSourceCategory.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('medium')) {
                obj['medium'] = ApiClient.convertToType(data['medium'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
            if (data.hasOwnProperty('status_is_active')) {
                obj['status_is_active'] = ApiClient.convertToType(data['status_is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('vendor')) {
                obj['vendor'] = ApiClient.convertToType(data['vendor'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeadSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeadSource</code>.
     */
    static validateJSON(data) {
        // validate the optional field `category`
        if (data['category']) { // data not null
          LeadSourceCategory.validateJSON(data['category']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['end_time'] && !(typeof data['end_time'] === 'string' || data['end_time'] instanceof String)) {
            throw new Error("Expected the field `end_time` to be a primitive type in the JSON string but got " + data['end_time']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['medium'] && !(typeof data['medium'] === 'string' || data['medium'] instanceof String)) {
            throw new Error("Expected the field `medium` to be a primitive type in the JSON string but got " + data['medium']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['start_time'] && !(typeof data['start_time'] === 'string' || data['start_time'] instanceof String)) {
            throw new Error("Expected the field `start_time` to be a primitive type in the JSON string but got " + data['start_time']);
        }
        // ensure the json data is a string
        if (data['vendor'] && !(typeof data['vendor'] === 'string' || data['vendor'] instanceof String)) {
            throw new Error("Expected the field `vendor` to be a primitive type in the JSON string but got " + data['vendor']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/LeadSourceCategory} category
 */
LeadSource.prototype['category'] = undefined;

/**
 * @member {String} description
 */
LeadSource.prototype['description'] = undefined;

/**
 * @member {String} end_time
 */
LeadSource.prototype['end_time'] = undefined;

/**
 * @member {String} id
 */
LeadSource.prototype['id'] = undefined;

/**
 * @member {String} medium
 */
LeadSource.prototype['medium'] = undefined;

/**
 * @member {String} message
 */
LeadSource.prototype['message'] = undefined;

/**
 * @member {String} name
 */
LeadSource.prototype['name'] = undefined;

/**
 * @member {String} start_time
 */
LeadSource.prototype['start_time'] = undefined;

/**
 * @member {Boolean} status_is_active
 */
LeadSource.prototype['status_is_active'] = undefined;

/**
 * @member {String} vendor
 */
LeadSource.prototype['vendor'] = undefined;






export default LeadSource;
