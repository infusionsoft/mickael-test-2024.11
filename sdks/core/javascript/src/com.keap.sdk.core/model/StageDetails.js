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
import CheckListItemDetails from './CheckListItemDetails';

/**
 * The StageDetails model module.
 * @module com.keap.sdk.core/model/StageDetails
 * @version 0.0.19
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

            if (data.hasOwnProperty('check_list_items')) {
                obj['check_list_items'] = ApiClient.convertToType(data['check_list_items'], [CheckListItemDetails]);
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
        if (data['check_list_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['check_list_items'])) {
                throw new Error("Expected the field `check_list_items` to be an array in the JSON data but got " + data['check_list_items']);
            }
            // validate the optional field `check_list_items` (array)
            for (const item of data['check_list_items']) {
                CheckListItemDetails.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/CheckListItemDetails>} check_list_items
 */
StageDetails.prototype['check_list_items'] = undefined;

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
