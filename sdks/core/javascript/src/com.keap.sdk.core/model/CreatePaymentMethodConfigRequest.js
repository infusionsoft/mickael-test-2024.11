/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreatePaymentMethodConfigRequest model module.
 * @module com.keap.sdk.core/model/CreatePaymentMethodConfigRequest
 * @version 0.0.105
 */
class CreatePaymentMethodConfigRequest {
    /**
     * Constructs a new <code>CreatePaymentMethodConfigRequest</code>.
     * @alias module:com.keap.sdk.core/model/CreatePaymentMethodConfigRequest
     */
    constructor() { 
        
        CreatePaymentMethodConfigRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreatePaymentMethodConfigRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/CreatePaymentMethodConfigRequest} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/CreatePaymentMethodConfigRequest} The populated <code>CreatePaymentMethodConfigRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePaymentMethodConfigRequest();

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreatePaymentMethodConfigRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePaymentMethodConfigRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }

        return true;
    }


}



/**
 * @member {String} contact_id
 */
CreatePaymentMethodConfigRequest.prototype['contact_id'] = undefined;






export default CreatePaymentMethodConfigRequest;
