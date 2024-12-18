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
import CreateOpportunityStageChecklistItem from './CreateOpportunityStageChecklistItem';

/**
 * The CreateOpportunityStageRequest model module.
 * @module com.keap.sdk.core/model/CreateOpportunityStageRequest
 * @version 0.0.48
 */
class CreateOpportunityStageRequest {
    /**
     * Constructs a new <code>CreateOpportunityStageRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreateOpportunityStageRequest
     * @param name {String} 
     * @param order {Number} 
     * @param probability {Number} 
     * @param targetNumberDays {Number} 
     */
    constructor(name, order, probability, targetNumberDays) { 
        
        CreateOpportunityStageRequest.initialize(this, name, order, probability, targetNumberDays);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, order, probability, targetNumberDays) { 
        obj['name'] = name;
        obj['order'] = order;
        obj['probability'] = probability;
        obj['target_number_days'] = targetNumberDays;
    }

    /**
     * Constructs a <code>CreateOpportunityStageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateOpportunityStageRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateOpportunityStageRequest} The populated <code>CreateOpportunityStageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOpportunityStageRequest();

            if (data.hasOwnProperty('checklist_items')) {
                obj['checklist_items'] = ApiClient.convertToType(data['checklist_items'], [CreateOpportunityStageChecklistItem]);
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateOpportunityStageRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOpportunityStageRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateOpportunityStageRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['checklist_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['checklist_items'])) {
                throw new Error("Expected the field `checklist_items` to be an array in the JSON data but got " + data['checklist_items']);
            }
            // validate the optional field `checklist_items` (array)
            for (const item of data['checklist_items']) {
                CreateOpportunityStageChecklistItem.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateOpportunityStageRequest.RequiredProperties = ["name", "order", "probability", "target_number_days"];

/**
 * @member {Array.<module:com.keap.sdk.core/model/CreateOpportunityStageChecklistItem>} checklist_items
 */
CreateOpportunityStageRequest.prototype['checklist_items'] = undefined;

/**
 * @member {String} name
 */
CreateOpportunityStageRequest.prototype['name'] = undefined;

/**
 * @member {Number} order
 */
CreateOpportunityStageRequest.prototype['order'] = undefined;

/**
 * @member {Number} probability
 */
CreateOpportunityStageRequest.prototype['probability'] = undefined;

/**
 * @member {Number} target_number_days
 */
CreateOpportunityStageRequest.prototype['target_number_days'] = undefined;






export default CreateOpportunityStageRequest;
