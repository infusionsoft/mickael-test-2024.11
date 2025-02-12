/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CurrencyValue from './CurrencyValue';

/**
 * The LeadSourceRecurringExpense model module.
 * @module keap.core.v2/model/LeadSourceRecurringExpense
 */
class LeadSourceRecurringExpense {
    /**
     * Constructs a new <code>LeadSourceRecurringExpense</code>.
     * @alias module:keap.core.v2/model/LeadSourceRecurringExpense
     */
    constructor() { 
        
        LeadSourceRecurringExpense.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadSourceRecurringExpense</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/LeadSourceRecurringExpense} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/LeadSourceRecurringExpense} The populated <code>LeadSourceRecurringExpense</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadSourceRecurringExpense();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = CurrencyValue.constructFromObject(data['amount']);
            }
            if (data.hasOwnProperty('create_time')) {
                obj['create_time'] = ApiClient.convertToType(data['create_time'], 'String');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('next_expense_time')) {
                obj['next_expense_time'] = ApiClient.convertToType(data['next_expense_time'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeadSourceRecurringExpense</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeadSourceRecurringExpense</code>.
     */
    static validateJSON(data) {
        // validate the optional field `amount`
        if (data['amount']) { // data not null
          CurrencyValue.validateJSON(data['amount']);
        }
        // ensure the json data is a string
        if (data['create_time'] && !(typeof data['create_time'] === 'string' || data['create_time'] instanceof String)) {
            throw new Error("Expected the field `create_time` to be a primitive type in the JSON string but got " + data['create_time']);
        }
        // ensure the json data is a string
        if (data['end_time'] && !(typeof data['end_time'] === 'string' || data['end_time'] instanceof String)) {
            throw new Error("Expected the field `end_time` to be a primitive type in the JSON string but got " + data['end_time']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['next_expense_time'] && !(typeof data['next_expense_time'] === 'string' || data['next_expense_time'] instanceof String)) {
            throw new Error("Expected the field `next_expense_time` to be a primitive type in the JSON string but got " + data['next_expense_time']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['start_time'] && !(typeof data['start_time'] === 'string' || data['start_time'] instanceof String)) {
            throw new Error("Expected the field `start_time` to be a primitive type in the JSON string but got " + data['start_time']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['update_time'] && !(typeof data['update_time'] === 'string' || data['update_time'] instanceof String)) {
            throw new Error("Expected the field `update_time` to be a primitive type in the JSON string but got " + data['update_time']);
        }

        return true;
    }


}



/**
 * @member {module:keap.core.v2/model/CurrencyValue} amount
 */
LeadSourceRecurringExpense.prototype['amount'] = undefined;

/**
 * The time this lead source recurring expense was created
 * @member {String} create_time
 */
LeadSourceRecurringExpense.prototype['create_time'] = undefined;

/**
 * The time this lead source recurring expense end
 * @member {String} end_time
 */
LeadSourceRecurringExpense.prototype['end_time'] = undefined;

/**
 * ID of the lead source recurring expense
 * @member {String} id
 */
LeadSourceRecurringExpense.prototype['id'] = undefined;

/**
 * The time this lead source recurring expense will incur a new expense
 * @member {String} next_expense_time
 */
LeadSourceRecurringExpense.prototype['next_expense_time'] = undefined;

/**
 * The notes for the lead source recurring expense
 * @member {String} notes
 */
LeadSourceRecurringExpense.prototype['notes'] = undefined;

/**
 * The time this lead source recurring expense starts
 * @member {String} start_time
 */
LeadSourceRecurringExpense.prototype['start_time'] = undefined;

/**
 * The title of the lead source recurring expense
 * @member {String} title
 */
LeadSourceRecurringExpense.prototype['title'] = undefined;

/**
 * The time this lead source recurring expense was last updated
 * @member {String} update_time
 */
LeadSourceRecurringExpense.prototype['update_time'] = undefined;






export default LeadSourceRecurringExpense;
