/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UpdateOpportunityStageChecklistItem from './UpdateOpportunityStageChecklistItem';

/**
 * The UpdateOpportunityStageRequest model module.
 * @module com.keap.sdk.core/model/UpdateOpportunityStageRequest
 * @version 0.0.85
 */
class UpdateOpportunityStageRequest {
    /**
     * Constructs a new <code>UpdateOpportunityStageRequest</code>.
     * @alias module:com.keap.sdk.core/model/UpdateOpportunityStageRequest
     */
    constructor() { 
        
        UpdateOpportunityStageRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateOpportunityStageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateOpportunityStageRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateOpportunityStageRequest} The populated <code>UpdateOpportunityStageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOpportunityStageRequest();

            if (data.hasOwnProperty('checklist_items')) {
                obj['checklist_items'] = ApiClient.convertToType(data['checklist_items'], [UpdateOpportunityStageChecklistItem]);
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
     * Validates the JSON data with respect to <code>UpdateOpportunityStageRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateOpportunityStageRequest</code>.
     */
    static validateJSON(data) {
        if (data['checklist_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['checklist_items'])) {
                throw new Error("Expected the field `checklist_items` to be an array in the JSON data but got " + data['checklist_items']);
            }
            // validate the optional field `checklist_items` (array)
            for (const item of data['checklist_items']) {
                UpdateOpportunityStageChecklistItem.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/UpdateOpportunityStageChecklistItem>} checklist_items
 */
UpdateOpportunityStageRequest.prototype['checklist_items'] = undefined;

/**
 * @member {String} name
 */
UpdateOpportunityStageRequest.prototype['name'] = undefined;

/**
 * @member {Number} order
 */
UpdateOpportunityStageRequest.prototype['order'] = undefined;

/**
 * must be an integer between 0 and 100.
 * @member {Number} probability
 */
UpdateOpportunityStageRequest.prototype['probability'] = undefined;

/**
 * Value should be >=0.
 * @member {Number} target_number_days
 */
UpdateOpportunityStageRequest.prototype['target_number_days'] = undefined;






export default UpdateOpportunityStageRequest;
