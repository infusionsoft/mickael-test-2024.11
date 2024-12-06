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
 * The CheckListItemDetails model module.
 * @module com.keap.sdk.core/model/CheckListItemDetails
 * @version 0.0.31
 */
class CheckListItemDetails {
    /**
     * Constructs a new <code>CheckListItemDetails</code>.
     * @alias module:com.keap.sdk.core/model/CheckListItemDetails
     */
    constructor() { 
        
        CheckListItemDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckListItemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CheckListItemDetails} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CheckListItemDetails} The populated <code>CheckListItemDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckListItemDetails();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('done_date')) {
                obj['done_date'] = ApiClient.convertToType(data['done_date'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('instance_id')) {
                obj['instance_id'] = ApiClient.convertToType(data['instance_id'], 'Number');
            }
            if (data.hasOwnProperty('item_order')) {
                obj['item_order'] = ApiClient.convertToType(data['item_order'], 'Number');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckListItemDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckListItemDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
CheckListItemDetails.prototype['description'] = undefined;

/**
 * @member {Date} done_date
 */
CheckListItemDetails.prototype['done_date'] = undefined;

/**
 * @member {Number} id
 */
CheckListItemDetails.prototype['id'] = undefined;

/**
 * @member {Number} instance_id
 */
CheckListItemDetails.prototype['instance_id'] = undefined;

/**
 * @member {Number} item_order
 */
CheckListItemDetails.prototype['item_order'] = undefined;

/**
 * @member {Boolean} required
 */
CheckListItemDetails.prototype['required'] = undefined;






export default CheckListItemDetails;
