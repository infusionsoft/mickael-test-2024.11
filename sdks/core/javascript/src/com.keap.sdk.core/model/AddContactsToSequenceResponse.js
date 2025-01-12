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

/**
 * The AddContactsToSequenceResponse model module.
 * @module com.keap.sdk.core/model/AddContactsToSequenceResponse
 * @version 0.0.85
 */
class AddContactsToSequenceResponse {
    /**
     * Constructs a new <code>AddContactsToSequenceResponse</code>.
     * @alias module:com.keap.sdk.core/model/AddContactsToSequenceResponse
     */
    constructor() { 
        
        AddContactsToSequenceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddContactsToSequenceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/AddContactsToSequenceResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/AddContactsToSequenceResponse} The populated <code>AddContactsToSequenceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddContactsToSequenceResponse();

            if (data.hasOwnProperty('add_to_sequence_results')) {
                obj['add_to_sequence_results'] = ApiClient.convertToType(data['add_to_sequence_results'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddContactsToSequenceResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddContactsToSequenceResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, String>} add_to_sequence_results
 */
AddContactsToSequenceResponse.prototype['add_to_sequence_results'] = undefined;






export default AddContactsToSequenceResponse;
