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
import HistoricalCounts from './HistoricalCounts';
import SequencePath from './SequencePath';

/**
 * The Sequence model module.
 * @module com.keap.sdk.core/model/Sequence
 * @version 0.0.21
 */
class Sequence {
    /**
     * Constructs a new <code>Sequence</code>.
     * @alias module:com.keap.sdk.core/model/Sequence
     */
    constructor() { 
        
        Sequence.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Sequence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Sequence} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Sequence} The populated <code>Sequence</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sequence();

            if (data.hasOwnProperty('active_contact_count')) {
                obj['active_contact_count'] = ApiClient.convertToType(data['active_contact_count'], 'Number');
            }
            if (data.hasOwnProperty('active_contact_count_completed')) {
                obj['active_contact_count_completed'] = ApiClient.convertToType(data['active_contact_count_completed'], 'Number');
            }
            if (data.hasOwnProperty('historical_contact_count')) {
                obj['historical_contact_count'] = HistoricalCounts.constructFromObject(data['historical_contact_count']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], [SequencePath]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Sequence</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Sequence</code>.
     */
    static validateJSON(data) {
        // validate the optional field `historical_contact_count`
        if (data['historical_contact_count']) { // data not null
          HistoricalCounts.validateJSON(data['historical_contact_count']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['paths']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['paths'])) {
                throw new Error("Expected the field `paths` to be an array in the JSON data but got " + data['paths']);
            }
            // validate the optional field `paths` (array)
            for (const item of data['paths']) {
                SequencePath.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} active_contact_count
 */
Sequence.prototype['active_contact_count'] = undefined;

/**
 * @member {Number} active_contact_count_completed
 */
Sequence.prototype['active_contact_count_completed'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/HistoricalCounts} historical_contact_count
 */
Sequence.prototype['historical_contact_count'] = undefined;

/**
 * @member {String} id
 */
Sequence.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Sequence.prototype['name'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/SequencePath>} paths
 */
Sequence.prototype['paths'] = undefined;






export default Sequence;
