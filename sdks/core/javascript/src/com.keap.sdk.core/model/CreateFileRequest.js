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
 * The CreateFileRequest model module.
 * @module com.keap.sdk.core/model/CreateFileRequest
 * @version 0.0.76
 */
class CreateFileRequest {
    /**
     * Constructs a new <code>CreateFileRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateFileRequest
     * @param contactId {String} 
     * @param fileName {String} 
     */
    constructor(contactId, fileName) { 
        
        CreateFileRequest.initialize(this, contactId, fileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contactId, fileName) { 
        obj['contact_id'] = contactId;
        obj['file_name'] = fileName;
    }

    /**
     * Constructs a <code>CreateFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateFileRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateFileRequest} The populated <code>CreateFileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFileRequest();

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('file_association')) {
                obj['file_association'] = ApiClient.convertToType(data['file_association'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('is_public')) {
                obj['is_public'] = ApiClient.convertToType(data['is_public'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateFileRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateFileRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateFileRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['file_association'] && !(typeof data['file_association'] === 'string' || data['file_association'] instanceof String)) {
            throw new Error("Expected the field `file_association` to be a primitive type in the JSON string but got " + data['file_association']);
        }
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }

        return true;
    }


}

CreateFileRequest.RequiredProperties = ["contact_id", "file_name"];

/**
 * @member {String} contact_id
 */
CreateFileRequest.prototype['contact_id'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/CreateFileRequest.FileAssociationEnum} file_association
 */
CreateFileRequest.prototype['file_association'] = undefined;

/**
 * @member {String} file_name
 */
CreateFileRequest.prototype['file_name'] = undefined;

/**
 * @member {Boolean} is_public
 */
CreateFileRequest.prototype['is_public'] = undefined;





/**
 * Allowed values for the <code>file_association</code> property.
 * @enum {String}
 * @readonly
 */
CreateFileRequest['FileAssociationEnum'] = {

    /**
     * value: "CONTACT"
     * @const
     */
    "CONTACT": "CONTACT",

    /**
     * value: "USER"
     * @const
     */
    "USER": "USER",

    /**
     * value: "COMPANY"
     * @const
     */
    "COMPANY": "COMPANY",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default CreateFileRequest;
