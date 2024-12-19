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
import CheckListItemDetails from './CheckListItemDetails';

/**
 * The StageDetails model module.
 * @module com.keap.sdk.core/model/StageDetails
 * @version 0.0.53
 */
class StageDetails {
    /**
     * Constructs a new <code>StageDetails</code>.
     * @alias module:com.keap.sdk.core/model/StageDetails
     */
    constructor() { 
        
        StageDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StageDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/StageDetails} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/StageDetails} The populated <code>StageDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StageDetails();

            if (data.hasOwnProperty('checklist_items')) {
                obj['checklist_items'] = ApiClient.convertToType(data['checklist_items'], [CheckListItemDetails]);
            }
            if (data.hasOwnProperty('probability')) {
                obj['probability'] = ApiClient.convertToType(data['probability'], 'Number');
            }
            if (data.hasOwnProperty('stage_order')) {
                obj['stage_order'] = ApiClient.convertToType(data['stage_order'], 'Number');
            }
            if (data.hasOwnProperty('target_num_days')) {
                obj['target_num_days'] = ApiClient.convertToType(data['target_num_days'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StageDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StageDetails</code>.
     */
    static validateJSON(data) {
        if (data['checklist_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['checklist_items'])) {
                throw new Error("Expected the field `checklist_items` to be an array in the JSON data but got " + data['checklist_items']);
            }
            // validate the optional field `checklist_items` (array)
            for (const item of data['checklist_items']) {
                CheckListItemDetails.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/CheckListItemDetails>} checklist_items
 */
StageDetails.prototype['checklist_items'] = undefined;

/**
 * @member {Number} probability
 */
StageDetails.prototype['probability'] = undefined;

/**
 * @member {Number} stage_order
 */
StageDetails.prototype['stage_order'] = undefined;

/**
 * @member {Number} target_num_days
 */
StageDetails.prototype['target_num_days'] = undefined;






export default StageDetails;
