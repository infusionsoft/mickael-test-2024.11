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

/**
 * The AddToAutomationSequenceResponse model module.
 * @module com.keap.sdk.core/model/AddToAutomationSequenceResponse
 * @version 0.0.81
 */
class AddToAutomationSequenceResponse {
    /**
     * Constructs a new <code>AddToAutomationSequenceResponse</code>.
     * @alias module:com.keap.sdk.core/model/AddToAutomationSequenceResponse
     */
    constructor() { 
        
        AddToAutomationSequenceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddToAutomationSequenceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AddToAutomationSequenceResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AddToAutomationSequenceResponse} The populated <code>AddToAutomationSequenceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddToAutomationSequenceResponse();

            if (data.hasOwnProperty('add_to_automation_sequence_results')) {
                obj['add_to_automation_sequence_results'] = ApiClient.convertToType(data['add_to_automation_sequence_results'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddToAutomationSequenceResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddToAutomationSequenceResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, String>} add_to_automation_sequence_results
 */
AddToAutomationSequenceResponse.prototype['add_to_automation_sequence_results'] = undefined;






export default AddToAutomationSequenceResponse;
