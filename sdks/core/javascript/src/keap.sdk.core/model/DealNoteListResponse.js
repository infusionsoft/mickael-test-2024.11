/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseListResponseDealNote from './BaseListResponseDealNote';
import DealNote from './DealNote';

/**
 * The DealNoteListResponse model module.
 * @module keap.sdk.core/model/DealNoteListResponse
 */
class DealNoteListResponse {
    /**
     * Constructs a new <code>DealNoteListResponse</code>.
     * Response model for a list of deal notes.
     * @alias module:keap.sdk.core/model/DealNoteListResponse
     * @implements module:keap.sdk.core/model/BaseListResponseDealNote
     */
    constructor() { 
        BaseListResponseDealNote.initialize(this);
        DealNoteListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealNoteListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/DealNoteListResponse} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/DealNoteListResponse} The populated <code>DealNoteListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealNoteListResponse();
            BaseListResponseDealNote.constructFromObject(data, obj);

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], [DealNote]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DealNoteListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DealNoteListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['notes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['notes'])) {
                throw new Error("Expected the field `notes` to be an array in the JSON data but got " + data['notes']);
            }
            // validate the optional field `notes` (array)
            for (const item of data['notes']) {
                DealNote.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
DealNoteListResponse.prototype['next_page_token'] = undefined;

/**
 * The list of Note entities.
 * @member {Array.<module:keap.sdk.core/model/DealNote>} notes
 */
DealNoteListResponse.prototype['notes'] = undefined;


// Implement BaseListResponseDealNote interface:
/**
 * Token for the next page of results.
 * @member {String} next_page_token
 */
BaseListResponseDealNote.prototype['next_page_token'] = undefined;




export default DealNoteListResponse;
