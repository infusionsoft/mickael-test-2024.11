/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AddToAutomationSequenceRequest model module.
 * @module keap.sdk.core/model/AddToAutomationSequenceRequest
 */
class AddToAutomationSequenceRequest {
    /**
     * Constructs a new <code>AddToAutomationSequenceRequest</code>.
     * @alias module:keap.sdk.core/model/AddToAutomationSequenceRequest
     */
    constructor() { 
        
        AddToAutomationSequenceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddToAutomationSequenceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.sdk.core/model/AddToAutomationSequenceRequest} obj Optional instance to populate.
     * @return {module:keap.sdk.core/model/AddToAutomationSequenceRequest} The populated <code>AddToAutomationSequenceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddToAutomationSequenceRequest();

            if (data.hasOwnProperty('contact_ids')) {
                obj['contact_ids'] = ApiClient.convertToType(data['contact_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddToAutomationSequenceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddToAutomationSequenceRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['contact_ids'])) {
            throw new Error("Expected the field `contact_ids` to be an array in the JSON data but got " + data['contact_ids']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} contact_ids
 */
AddToAutomationSequenceRequest.prototype['contact_ids'] = undefined;






export default AddToAutomationSequenceRequest;
