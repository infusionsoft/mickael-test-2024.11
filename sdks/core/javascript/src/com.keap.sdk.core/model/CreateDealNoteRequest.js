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
 * The CreateDealNoteRequest model module.
 * @module com.keap.sdk.core/model/CreateDealNoteRequest
 * @version 0.0.101
 */
class CreateDealNoteRequest {
    /**
     * Constructs a new <code>CreateDealNoteRequest</code>.
     * Request model for creating a deal note.
     * @alias module:com.keap.sdk.core/model/CreateDealNoteRequest
     * @param body {String} The body of the note. Must not be blank and must be between 1 and 5000 characters.
     * @param createdBy {String} The creator of the note. Must not be blank and must be between 1 and 255 characters.
     */
    constructor(body, createdBy) { 
        
        CreateDealNoteRequest.initialize(this, body, createdBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, body, createdBy) { 
        obj['body'] = body;
        obj['created_by'] = createdBy;
    }

    /**
     * Constructs a <code>CreateDealNoteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateDealNoteRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateDealNoteRequest} The populated <code>CreateDealNoteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDealNoteRequest();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateDealNoteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateDealNoteRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateDealNoteRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['created_by'] && !(typeof data['created_by'] === 'string' || data['created_by'] instanceof String)) {
            throw new Error("Expected the field `created_by` to be a primitive type in the JSON string but got " + data['created_by']);
        }

        return true;
    }


}

CreateDealNoteRequest.RequiredProperties = ["body", "created_by"];

/**
 * The body of the note. Must not be blank and must be between 1 and 5000 characters.
 * @member {String} body
 */
CreateDealNoteRequest.prototype['body'] = undefined;

/**
 * The creator of the note. Must not be blank and must be between 1 and 255 characters.
 * @member {String} created_by
 */
CreateDealNoteRequest.prototype['created_by'] = undefined;






export default CreateDealNoteRequest;
