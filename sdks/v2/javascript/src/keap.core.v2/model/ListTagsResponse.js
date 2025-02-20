/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Tag from './Tag';

/**
 * The ListTagsResponse model module.
 * @module keap.core.v2/model/ListTagsResponse
 */
class ListTagsResponse {
    /**
     * Constructs a new <code>ListTagsResponse</code>.
     * @alias module:keap.core.v2/model/ListTagsResponse
     */
    constructor() { 
        
        ListTagsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListTagsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/ListTagsResponse} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/ListTagsResponse} The populated <code>ListTagsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTagsResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListTagsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTagsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['tags']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tags'])) {
                throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
            }
            // validate the optional field `tags` (array)
            for (const item of data['tags']) {
                Tag.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListTagsResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/Tag>} tags
 */
ListTagsResponse.prototype['tags'] = undefined;






export default ListTagsResponse;
