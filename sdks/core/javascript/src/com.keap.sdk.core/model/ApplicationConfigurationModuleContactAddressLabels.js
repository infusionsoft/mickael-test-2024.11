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
 * The ApplicationConfigurationModuleContactAddressLabels model module.
 * @module com.keap.sdk.core/model/ApplicationConfigurationModuleContactAddressLabels
 * @version 0.0.44
 */
class ApplicationConfigurationModuleContactAddressLabels {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleContactAddressLabels</code>.
     * @alias module:com.keap.sdk.core/model/ApplicationConfigurationModuleContactAddressLabels
     */
    constructor() { 
        
        ApplicationConfigurationModuleContactAddressLabels.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleContactAddressLabels</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContactAddressLabels} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ApplicationConfigurationModuleContactAddressLabels} The populated <code>ApplicationConfigurationModuleContactAddressLabels</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleContactAddressLabels();

            if (data.hasOwnProperty('line_1')) {
                obj['line_1'] = ApiClient.convertToType(data['line_1'], 'String');
            }
            if (data.hasOwnProperty('line_2')) {
                obj['line_2'] = ApiClient.convertToType(data['line_2'], 'String');
            }
            if (data.hasOwnProperty('line_3')) {
                obj['line_3'] = ApiClient.convertToType(data['line_3'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleContactAddressLabels</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleContactAddressLabels</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['line_1'] && !(typeof data['line_1'] === 'string' || data['line_1'] instanceof String)) {
            throw new Error("Expected the field `line_1` to be a primitive type in the JSON string but got " + data['line_1']);
        }
        // ensure the json data is a string
        if (data['line_2'] && !(typeof data['line_2'] === 'string' || data['line_2'] instanceof String)) {
            throw new Error("Expected the field `line_2` to be a primitive type in the JSON string but got " + data['line_2']);
        }
        // ensure the json data is a string
        if (data['line_3'] && !(typeof data['line_3'] === 'string' || data['line_3'] instanceof String)) {
            throw new Error("Expected the field `line_3` to be a primitive type in the JSON string but got " + data['line_3']);
        }

        return true;
    }


}



/**
 * @member {String} line_1
 */
ApplicationConfigurationModuleContactAddressLabels.prototype['line_1'] = undefined;

/**
 * @member {String} line_2
 */
ApplicationConfigurationModuleContactAddressLabels.prototype['line_2'] = undefined;

/**
 * @member {String} line_3
 */
ApplicationConfigurationModuleContactAddressLabels.prototype['line_3'] = undefined;






export default ApplicationConfigurationModuleContactAddressLabels;
