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
import NoteTemplate from './NoteTemplate';

/**
 * The ListNoteTemplateResponse model module.
 * @module com.keap.sdk.core/model/ListNoteTemplateResponse
 * @version 0.0.74
 */
class ListNoteTemplateResponse {
    /**
     * Constructs a new <code>ListNoteTemplateResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListNoteTemplateResponse
     */
    constructor() { 
        
        ListNoteTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListNoteTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListNoteTemplateResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListNoteTemplateResponse} The populated <code>ListNoteTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListNoteTemplateResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('note_templates')) {
                obj['note_templates'] = ApiClient.convertToType(data['note_templates'], [NoteTemplate]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListNoteTemplateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListNoteTemplateResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['note_templates']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['note_templates'])) {
                throw new Error("Expected the field `note_templates` to be an array in the JSON data but got " + data['note_templates']);
            }
            // validate the optional field `note_templates` (array)
            for (const item of data['note_templates']) {
                NoteTemplate.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListNoteTemplateResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/NoteTemplate>} note_templates
 */
ListNoteTemplateResponse.prototype['note_templates'] = undefined;






export default ListNoteTemplateResponse;
