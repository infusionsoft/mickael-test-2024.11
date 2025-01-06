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
import BaseModel from './BaseModel';
import DealAllOfCustomFields from './DealAllOfCustomFields';
import DealAllOfStage from './DealAllOfStage';
import DealAllOfValue from './DealAllOfValue';
import DealContact from './DealContact';

/**
 * The Deal model module.
 * @module com.keap.sdk.core/model/Deal
 * @version 0.0.79
 */
class Deal {
    /**
     * Constructs a new <code>Deal</code>.
     * Represents a deal.
     * @alias module:com.keap.sdk.core/model/Deal
     * @implements module:com.keap.sdk.core/model/BaseModel
     * @param name {String} The name of the deal. This field is required and must have at least one character.
     * @param value {module:com.keap.sdk.core/model/DealAllOfValue} 
     * @param contacts {Array.<module:com.keap.sdk.core/model/DealContact>} The list of contacts associated with the deal. This field is required.
     * @param stage {module:com.keap.sdk.core/model/DealAllOfStage} 
     * @param stageAssignmentTime {Date} The time when the deal was assigned to the current stage. This field is required.
     * @param owners {Array.<module:com.keap.sdk.core/model/BaseModel>} The list of owners of the deal. This field is required.
     * @param taskIds {Array.<String>} The list of task IDs associated with the deal. This field is required.
     * @param status {String} The status of the deal. This field is required.
     */
    constructor(name, value, contacts, stage, stageAssignmentTime, owners, taskIds, status) { 
        BaseModel.initialize(this);
        Deal.initialize(this, name, value, contacts, stage, stageAssignmentTime, owners, taskIds, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, value, contacts, stage, stageAssignmentTime, owners, taskIds, status) { 
        obj['name'] = name;
        obj['value'] = value;
        obj['contacts'] = contacts;
        obj['stage'] = stage;
        obj['stage_assignment_time'] = stageAssignmentTime;
        obj['owners'] = owners;
        obj['task_ids'] = taskIds;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>Deal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/Deal} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/Deal} The populated <code>Deal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Deal();
            BaseModel.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = DealAllOfValue.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [DealContact]);
            }
            if (data.hasOwnProperty('stage')) {
                obj['stage'] = DealAllOfStage.constructFromObject(data['stage']);
            }
            if (data.hasOwnProperty('stage_assignment_time')) {
                obj['stage_assignment_time'] = ApiClient.convertToType(data['stage_assignment_time'], 'Date');
            }
            if (data.hasOwnProperty('owners')) {
                obj['owners'] = ApiClient.convertToType(data['owners'], [Owner]);
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
            }
            if (data.hasOwnProperty('task_ids')) {
                obj['task_ids'] = ApiClient.convertToType(data['task_ids'], ['String']);
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('estimated_close_time')) {
                obj['estimated_close_time'] = ApiClient.convertToType(data['estimated_close_time'], 'Date');
            }
            if (data.hasOwnProperty('closed_time')) {
                obj['closed_time'] = ApiClient.convertToType(data['closed_time'], 'Date');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = DealAllOfCustomFields.constructFromObject(data['custom_fields']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Deal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Deal</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Deal.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          DealAllOfValue.validateJSON(data['value']);
        }
        if (data['contacts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contacts'])) {
                throw new Error("Expected the field `contacts` to be an array in the JSON data but got " + data['contacts']);
            }
            // validate the optional field `contacts` (array)
            for (const item of data['contacts']) {
                DealContact.validateJSON(item);
            };
        }
        // validate the optional field `stage`
        if (data['stage']) { // data not null
          DealAllOfStage.validateJSON(data['stage']);
        }
        if (data['owners']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['owners'])) {
                throw new Error("Expected the field `owners` to be an array in the JSON data but got " + data['owners']);
            }
            // validate the optional field `owners` (array)
            for (const item of data['owners']) {
                BaseModel.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['owner_id'] && !(typeof data['owner_id'] === 'string' || data['owner_id'] instanceof String)) {
            throw new Error("Expected the field `owner_id` to be a primitive type in the JSON string but got " + data['owner_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['task_ids'])) {
            throw new Error("Expected the field `task_ids` to be an array in the JSON data but got " + data['task_ids']);
        }
        // ensure the json data is a string
        if (data['order_id'] && !(typeof data['order_id'] === 'string' || data['order_id'] instanceof String)) {
            throw new Error("Expected the field `order_id` to be a primitive type in the JSON string but got " + data['order_id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `custom_fields`
        if (data['custom_fields']) { // data not null
          DealAllOfCustomFields.validateJSON(data['custom_fields']);
        }

        return true;
    }


}

Deal.RequiredProperties = ["name", "value", "contacts", "stage", "stage_assignment_time", "owners", "task_ids", "status"];

/**
 * Unique identifier for the model.
 * @member {String} id
 */
Deal.prototype['id'] = undefined;

/**
 * The name of the deal. This field is required and must have at least one character.
 * @member {String} name
 */
Deal.prototype['name'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/DealAllOfValue} value
 */
Deal.prototype['value'] = undefined;

/**
 * The list of contacts associated with the deal. This field is required.
 * @member {Array.<module:com.keap.sdk.core/model/DealContact>} contacts
 */
Deal.prototype['contacts'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/DealAllOfStage} stage
 */
Deal.prototype['stage'] = undefined;

/**
 * The time when the deal was assigned to the current stage. This field is required.
 * @member {Date} stage_assignment_time
 */
Deal.prototype['stage_assignment_time'] = undefined;

/**
 * The list of owners of the deal. This field is required.
 * @member {Array.<module:com.keap.sdk.core/model/BaseModel>} owners
 */
Deal.prototype['owners'] = undefined;

/**
 * The ID of the owner of the deal. This field is optional.
 * @member {String} owner_id
 */
Deal.prototype['owner_id'] = undefined;

/**
 * The list of task IDs associated with the deal. This field is required.
 * @member {Array.<String>} task_ids
 */
Deal.prototype['task_ids'] = undefined;

/**
 * The order of the deal. This field is optional.
 * @member {String} order_id
 */
Deal.prototype['order_id'] = undefined;

/**
 * The status of the deal. This field is required.
 * @member {String} status
 */
Deal.prototype['status'] = undefined;

/**
 * The estimated close time of the deal. This field is optional.
 * @member {Date} estimated_close_time
 */
Deal.prototype['estimated_close_time'] = undefined;

/**
 * The actual close time of the deal. This field is optional.
 * @member {Date} closed_time
 */
Deal.prototype['closed_time'] = undefined;

/**
 * @member {module:com.keap.sdk.core/model/DealAllOfCustomFields} custom_fields
 */
Deal.prototype['custom_fields'] = undefined;


// Implement BaseModel interface:
/**
 * Unique identifier for the model.
 * @member {String} id
 */
BaseModel.prototype['id'] = undefined;




export default Deal;
