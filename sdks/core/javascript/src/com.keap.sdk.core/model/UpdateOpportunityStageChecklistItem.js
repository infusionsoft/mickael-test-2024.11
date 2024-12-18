/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateOpportunityStageChecklistItem model module.
 * @module com.keap.sdk.core/model/UpdateOpportunityStageChecklistItem
 * @version 0.0.48
 */
class UpdateOpportunityStageChecklistItem {
    /**
     * Constructs a new <code>UpdateOpportunityStageChecklistItem</code>.
     * @alias module:com.keap.sdk.core/model/UpdateOpportunityStageChecklistItem
     */
    constructor() { 
        
        UpdateOpportunityStageChecklistItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateOpportunityStageChecklistItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateOpportunityStageChecklistItem} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateOpportunityStageChecklistItem} The populated <code>UpdateOpportunityStageChecklistItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOpportunityStageChecklistItem();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = ApiClient.convertToType(data['order'], 'Number');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateOpportunityStageChecklistItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateOpportunityStageChecklistItem</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
UpdateOpportunityStageChecklistItem.prototype['description'] = undefined;

/**
 * @member {String} id
 */
UpdateOpportunityStageChecklistItem.prototype['id'] = undefined;

/**
 * @member {Number} order
 */
UpdateOpportunityStageChecklistItem.prototype['order'] = undefined;

/**
 * @member {Boolean} required
 */
UpdateOpportunityStageChecklistItem.prototype['required'] = undefined;






export default UpdateOpportunityStageChecklistItem;
