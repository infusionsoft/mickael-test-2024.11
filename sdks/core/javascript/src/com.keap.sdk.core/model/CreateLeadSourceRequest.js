/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LeadSourceCategory from './LeadSourceCategory';

/**
 * The CreateLeadSourceRequest model module.
 * @module com.keap.sdk.core/model/CreateLeadSourceRequest
 * @version 0.0.86
 */
class CreateLeadSourceRequest {
    /**
     * Constructs a new <code>CreateLeadSourceRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateLeadSourceRequest
     */
    constructor() { 
        
        CreateLeadSourceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateLeadSourceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateLeadSourceRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateLeadSourceRequest} The populated <code>CreateLeadSourceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLeadSourceRequest();

            if (data.hasOwnProperty('category')) {
                obj['category'] = LeadSourceCategory.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
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
     * Validates the JSON data with respect to <code>CreateLeadSourceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateLeadSourceRequest</code>.
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
CreateLeadSourceRequest.prototype['category'] = undefined;

/**
 * @member {String} description
 */
CreateLeadSourceRequest.prototype['description'] = undefined;

/**
 * @member {String} end_time
 */
CreateLeadSourceRequest.prototype['end_time'] = undefined;

/**
 * @member {String} medium
 */
CreateLeadSourceRequest.prototype['medium'] = undefined;

/**
 * @member {String} message
 */
CreateLeadSourceRequest.prototype['message'] = undefined;

/**
 * @member {String} name
 */
CreateLeadSourceRequest.prototype['name'] = undefined;

/**
 * @member {String} start_time
 */
CreateLeadSourceRequest.prototype['start_time'] = undefined;

/**
 * @member {Boolean} status_is_active
 */
CreateLeadSourceRequest.prototype['status_is_active'] = undefined;

/**
 * @member {String} vendor
 */
CreateLeadSourceRequest.prototype['vendor'] = undefined;






export default CreateLeadSourceRequest;
