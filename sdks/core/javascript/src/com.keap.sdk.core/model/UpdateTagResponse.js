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
import CategoryReference from './CategoryReference';

/**
 * The UpdateTagResponse model module.
 * @module com.keap.sdk.core/model/UpdateTagResponse
 * @version 0.0.76
 */
class UpdateTagResponse {
    /**
     * Constructs a new <code>UpdateTagResponse</code>.
     * @alias module:com.keap.sdk.core/model/UpdateTagResponse
     */
    constructor() { 
        
        UpdateTagResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTagResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateTagResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateTagResponse} The populated <code>UpdateTagResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTagResponse();

            if (data.hasOwnProperty('category')) {
                obj['category'] = CategoryReference.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateTagResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTagResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `category`
        if (data['category']) { // data not null
          CategoryReference.validateJSON(data['category']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {module:com.keap.sdk.core/model/CategoryReference} category
 */
UpdateTagResponse.prototype['category'] = undefined;

/**
 * @member {String} description
 */
UpdateTagResponse.prototype['description'] = undefined;

/**
 * @member {String} id
 */
UpdateTagResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
UpdateTagResponse.prototype['name'] = undefined;






export default UpdateTagResponse;
