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
import Goal from './Goal';
import Sequence from './Sequence';

/**
 * The Campaign model module.
 * @module com.keap.sdk.core/model/Campaign
 * @version 0.0.93
 */
class Campaign {
    /**
     * Constructs a new <code>Campaign</code>.
     * @alias module:com.keap.sdk.core/model/Campaign
     */
    constructor() { 
        
        Campaign.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Campaign} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Campaign} The populated <code>Campaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Campaign();

            if (data.hasOwnProperty('active_contact_count')) {
                obj['active_contact_count'] = ApiClient.convertToType(data['active_contact_count'], 'Number');
            }
            if (data.hasOwnProperty('completed_contact_count')) {
                obj['completed_contact_count'] = ApiClient.convertToType(data['completed_contact_count'], 'Number');
            }
            if (data.hasOwnProperty('created_by_global_id')) {
                obj['created_by_global_id'] = ApiClient.convertToType(data['created_by_global_id'], 'String');
            }
            if (data.hasOwnProperty('date_created')) {
                obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('goals')) {
                obj['goals'] = ApiClient.convertToType(data['goals'], [Goal]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('published_date')) {
                obj['published_date'] = ApiClient.convertToType(data['published_date'], 'Date');
            }
            if (data.hasOwnProperty('published_status')) {
                obj['published_status'] = ApiClient.convertToType(data['published_status'], 'Boolean');
            }
            if (data.hasOwnProperty('published_time_zone')) {
                obj['published_time_zone'] = ApiClient.convertToType(data['published_time_zone'], 'String');
            }
            if (data.hasOwnProperty('sequences')) {
                obj['sequences'] = ApiClient.convertToType(data['sequences'], [Sequence]);
            }
            if (data.hasOwnProperty('time_zone')) {
                obj['time_zone'] = ApiClient.convertToType(data['time_zone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Campaign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Campaign</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_by_global_id'] && !(typeof data['created_by_global_id'] === 'string' || data['created_by_global_id'] instanceof String)) {
            throw new Error("Expected the field `created_by_global_id` to be a primitive type in the JSON string but got " + data['created_by_global_id']);
        }
        // ensure the json data is a string
        if (data['date_created'] && !(typeof data['date_created'] === 'string' || data['date_created'] instanceof String)) {
            throw new Error("Expected the field `date_created` to be a primitive type in the JSON string but got " + data['date_created']);
        }
        // ensure the json data is a string
        if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
            throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
        }
        if (data['goals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['goals'])) {
                throw new Error("Expected the field `goals` to be an array in the JSON data but got " + data['goals']);
            }
            // validate the optional field `goals` (array)
            for (const item of data['goals']) {
                Goal.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['published_time_zone'] && !(typeof data['published_time_zone'] === 'string' || data['published_time_zone'] instanceof String)) {
            throw new Error("Expected the field `published_time_zone` to be a primitive type in the JSON string but got " + data['published_time_zone']);
        }
        if (data['sequences']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sequences'])) {
                throw new Error("Expected the field `sequences` to be an array in the JSON data but got " + data['sequences']);
            }
            // validate the optional field `sequences` (array)
            for (const item of data['sequences']) {
                Sequence.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['time_zone'] && !(typeof data['time_zone'] === 'string' || data['time_zone'] instanceof String)) {
            throw new Error("Expected the field `time_zone` to be a primitive type in the JSON string but got " + data['time_zone']);
        }

        return true;
    }


}



/**
 * @member {Number} active_contact_count
 */
Campaign.prototype['active_contact_count'] = undefined;

/**
 * @member {Number} completed_contact_count
 */
Campaign.prototype['completed_contact_count'] = undefined;

/**
 * @member {String} created_by_global_id
 */
Campaign.prototype['created_by_global_id'] = undefined;

/**
 * @member {String} date_created
 */
Campaign.prototype['date_created'] = undefined;

/**
 * @member {String} error_message
 */
Campaign.prototype['error_message'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Goal>} goals
 */
Campaign.prototype['goals'] = undefined;

/**
 * @member {String} id
 */
Campaign.prototype['id'] = undefined;

/**
 * @member {Boolean} locked
 */
Campaign.prototype['locked'] = undefined;

/**
 * @member {String} name
 */
Campaign.prototype['name'] = undefined;

/**
 * @member {Date} published_date
 */
Campaign.prototype['published_date'] = undefined;

/**
 * @member {Boolean} published_status
 */
Campaign.prototype['published_status'] = undefined;

/**
 * @member {String} published_time_zone
 */
Campaign.prototype['published_time_zone'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/Sequence>} sequences
 */
Campaign.prototype['sequences'] = undefined;

/**
 * @member {String} time_zone
 */
Campaign.prototype['time_zone'] = undefined;






export default Campaign;
