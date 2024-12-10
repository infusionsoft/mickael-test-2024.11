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

/**
 * The CreateOpportunityStageCheckListItem model module.
 * @module com.keap.sdk.core/model/CreateOpportunityStageCheckListItem
 * @version 0.0.41
 */
class CreateOpportunityStageCheckListItem {
    /**
     * Constructs a new <code>CreateOpportunityStageCheckListItem</code>.
     * @alias module:com.keap.sdk.core/model/CreateOpportunityStageCheckListItem
     * @param description {String} 
     * @param order {Number} 
     * @param required {Boolean} 
     */
    constructor(description, order, required) { 
        
        CreateOpportunityStageCheckListItem.initialize(this, description, order, required);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, order, required) { 
        obj['description'] = description;
        obj['order'] = order;
        obj['required'] = required;
    }

    /**
     * Constructs a <code>CreateOpportunityStageCheckListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreateOpportunityStageCheckListItem} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreateOpportunityStageCheckListItem} The populated <code>CreateOpportunityStageCheckListItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOpportunityStageCheckListItem();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
     * Validates the JSON data with respect to <code>CreateOpportunityStageCheckListItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOpportunityStageCheckListItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateOpportunityStageCheckListItem.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

CreateOpportunityStageCheckListItem.RequiredProperties = ["description", "order", "required"];

/**
 * @member {String} description
 */
CreateOpportunityStageCheckListItem.prototype['description'] = undefined;

/**
 * @member {Number} order
 */
CreateOpportunityStageCheckListItem.prototype['order'] = undefined;

/**
 * @member {Boolean} required
 */
CreateOpportunityStageCheckListItem.prototype['required'] = undefined;






export default CreateOpportunityStageCheckListItem;
