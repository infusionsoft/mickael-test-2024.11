/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateLeadSourceExpenseRequest model module.
 * @module keap.core.v2/model/CreateLeadSourceExpenseRequest
 */
class CreateLeadSourceExpenseRequest {
    /**
     * Constructs a new <code>CreateLeadSourceExpenseRequest</code>.
     * @alias module:keap.core.v2/model/CreateLeadSourceExpenseRequest
     */
    constructor() { 
        
        CreateLeadSourceExpenseRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateLeadSourceExpenseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/CreateLeadSourceExpenseRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/CreateLeadSourceExpenseRequest} The populated <code>CreateLeadSourceExpenseRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLeadSourceExpenseRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('incurred_time')) {
                obj['incurred_time'] = ApiClient.convertToType(data['incurred_time'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateLeadSourceExpenseRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateLeadSourceExpenseRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['incurred_time'] && !(typeof data['incurred_time'] === 'string' || data['incurred_time'] instanceof String)) {
            throw new Error("Expected the field `incurred_time` to be a primitive type in the JSON string but got " + data['incurred_time']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {String} amount
 */
CreateLeadSourceExpenseRequest.prototype['amount'] = undefined;

/**
 * @member {String} incurred_time
 */
CreateLeadSourceExpenseRequest.prototype['incurred_time'] = undefined;

/**
 * @member {String} notes
 */
CreateLeadSourceExpenseRequest.prototype['notes'] = undefined;

/**
 * @member {String} title
 */
CreateLeadSourceExpenseRequest.prototype['title'] = undefined;






export default CreateLeadSourceExpenseRequest;
