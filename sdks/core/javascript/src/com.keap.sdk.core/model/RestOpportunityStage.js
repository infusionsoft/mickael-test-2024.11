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
import ChecklistItem from './ChecklistItem';

/**
 * The RestOpportunityStage model module.
 * @module com.keap.sdk.core/model/RestOpportunityStage
 * @version 0.0.103
 */
class RestOpportunityStage {
    /**
     * Constructs a new <code>RestOpportunityStage</code>.
     * @alias module:com.keap.sdk.core/model/RestOpportunityStage
     */
    constructor() { 
        
        RestOpportunityStage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestOpportunityStage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/RestOpportunityStage} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/RestOpportunityStage} The populated <code>RestOpportunityStage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestOpportunityStage();

            if (data.hasOwnProperty('checklist_items')) {
                obj['checklist_items'] = ApiClient.convertToType(data['checklist_items'], [ChecklistItem]);
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');
            }
            if (data.hasOwnProperty('target_number_days')) {
                obj['target_number_days'] = ApiClient.convertToType(data['target_number_days'], 'Number');
            }
            if (data.hasOwnProperty('updated_time')) {
                obj['updated_time'] = ApiClient.convertToType(data['updated_time'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestOpportunityStage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestOpportunityStage</code>.
     */
    static validateJSON(data) {
        if (data['checklist_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['checklist_items'])) {
                throw new Error("Expected the field `checklist_items` to be an array in the JSON data but got " + data['checklist_items']);
            }
            // validate the optional field `checklist_items` (array)
            for (const item of data['checklist_items']) {
                ChecklistItem.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
            throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
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
        if (data['updated_time'] && !(typeof data['updated_time'] === 'string' || data['updated_time'] instanceof String)) {
            throw new Error("Expected the field `updated_time` to be a primitive type in the JSON string but got " + data['updated_time']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/ChecklistItem>} checklist_items
 */
RestOpportunityStage.prototype['checklist_items'] = undefined;

/**
 * @member {String} created_time
 */
RestOpportunityStage.prototype['created_time'] = undefined;

/**
 * @member {String} id
 */
RestOpportunityStage.prototype['id'] = undefined;

/**
 * @member {String} name
 */
RestOpportunityStage.prototype['name'] = undefined;

/**
 * @member {Number} order
 */
RestOpportunityStage.prototype['order'] = undefined;

/**
 * @member {Number} probability
 */
RestOpportunityStage.prototype['probability'] = undefined;

/**
 * @member {Number} target_number_days
 */
RestOpportunityStage.prototype['target_number_days'] = undefined;

/**
 * @member {String} updated_time
 */
RestOpportunityStage.prototype['updated_time'] = undefined;






export default RestOpportunityStage;
