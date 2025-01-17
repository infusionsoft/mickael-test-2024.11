/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateEmailAddress model module.
 * @module com.keap.sdk.core/model/UpdateEmailAddress
 * @version 0.0.89
 */
class UpdateEmailAddress {
    /**
     * Constructs a new <code>UpdateEmailAddress</code>.
     * @alias module:com.keap.sdk.core/model/UpdateEmailAddress
     * @param optedIn {Boolean} 
     * @param reason {String} 
     */
    constructor(optedIn, reason) { 
        
        UpdateEmailAddress.initialize(this, optedIn, reason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, optedIn, reason) { 
        obj['opted_in'] = optedIn;
        obj['reason'] = reason;
    }

    /**
     * Constructs a <code>UpdateEmailAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/UpdateEmailAddress} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/UpdateEmailAddress} The populated <code>UpdateEmailAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEmailAddress();

            if (data.hasOwnProperty('opted_in')) {
                obj['opted_in'] = ApiClient.convertToType(data['opted_in'], 'Boolean');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateEmailAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateEmailAddress</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateEmailAddress.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['reason'] && !(typeof data['reason'] === 'string' || data['reason'] instanceof String)) {
            throw new Error("Expected the field `reason` to be a primitive type in the JSON string but got " + data['reason']);
        }

        return true;
    }


}

UpdateEmailAddress.RequiredProperties = ["opted_in", "reason"];

/**
 * @member {Boolean} opted_in
 */
UpdateEmailAddress.prototype['opted_in'] = undefined;

/**
 * @member {String} reason
 */
UpdateEmailAddress.prototype['reason'] = undefined;






export default UpdateEmailAddress;
