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
import BaseModel from './BaseModel';

/**
 * The DealNote model module.
 * @module com.keap.sdk.core/model/DealNote
 * @version 0.0.96
 */
class DealNote {
    /**
     * Constructs a new <code>DealNote</code>.
     * A model representing a note associated with a deal.
     * @alias module:com.keap.sdk.core/model/DealNote
     * @implements module:com.keap.sdk.core/model/BaseModel
     */
    constructor() { 
        BaseModel.initialize(this);
        DealNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DealNote} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DealNote} The populated <code>DealNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealNote();
            BaseModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'Date');
            }
            if (data.hasOwnProperty('modified_time')) {
                obj['modified_time'] = ApiClient.convertToType(data['modified_time'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealNote</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealNote</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['deal_id'] && !(typeof data['deal_id'] === 'string' || data['deal_id'] instanceof String)) {
            throw new Error("Expected the field `deal_id` to be a primitive type in the JSON string but got " + data['deal_id']);
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



/**
 * Unique identifier for the model.
 * @member {String} id
 */
DealNote.prototype['id'] = undefined;

/**
 * The ID of the deal associated with the note.
 * @member {String} deal_id
 */
DealNote.prototype['deal_id'] = undefined;

/**
 * The body content of the note.
 * @member {String} body
 */
DealNote.prototype['body'] = undefined;

/**
 * The ID of the user who created the note.
 * @member {String} created_by
 */
DealNote.prototype['created_by'] = undefined;

/**
 * The timestamp when the note was created. Formatted as a string according to the pattern \"yyyy-MM-dd'T'HH:mm:ss.SSSXXX\".
 * @member {Date} created_time
 */
DealNote.prototype['created_time'] = undefined;

/**
 * The timestamp when the note was last modified. Formatted as a string according to the pattern \"yyyy-MM-dd'T'HH:mm:ss.SSSXXX\".
 * @member {Date} modified_time
 */
DealNote.prototype['modified_time'] = undefined;


// Implement BaseModel interface:
/**
 * Unique identifier for the model.
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;




export default DealNote;
