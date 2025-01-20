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

/**
 * The CreateUpdateTagCategoryRequest model module.
 * @module com.keap.sdk.core/model/CreateUpdateTagCategoryRequest
 * @version 0.0.92
 */
class CreateUpdateTagCategoryRequest {
    /**
     * Constructs a new <code>CreateUpdateTagCategoryRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateUpdateTagCategoryRequest
     */
    constructor() { 
        
        CreateUpdateTagCategoryRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateUpdateTagCategoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagCategoryRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateUpdateTagCategoryRequest} The populated <code>CreateUpdateTagCategoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUpdateTagCategoryRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateUpdateTagCategoryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateUpdateTagCategoryRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
CreateUpdateTagCategoryRequest.prototype['description'] = undefined;

/**
 * @member {String} name
 */
CreateUpdateTagCategoryRequest.prototype['name'] = undefined;






export default CreateUpdateTagCategoryRequest;
