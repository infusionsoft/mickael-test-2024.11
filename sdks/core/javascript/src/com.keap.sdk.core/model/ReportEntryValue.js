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
 * The ReportEntryValue model module.
 * @module com.keap.sdk.core/model/ReportEntryValue
 * @version 0.0.90
 */
class ReportEntryValue {
    /**
     * Constructs a new <code>ReportEntryValue</code>.
     * @alias module:com.keap.sdk.core/model/ReportEntryValue
     */
    constructor() { 
        
        ReportEntryValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportEntryValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ReportEntryValue} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ReportEntryValue} The populated <code>ReportEntryValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportEntryValue();

            if (data.hasOwnProperty('field_name')) {
                obj['field_name'] = ApiClient.convertToType(data['field_name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportEntryValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportEntryValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['field_name'] && !(typeof data['field_name'] === 'string' || data['field_name'] instanceof String)) {
            throw new Error("Expected the field `field_name` to be a primitive type in the JSON string but got " + data['field_name']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {String} field_name
 */
ReportEntryValue.prototype['field_name'] = undefined;

/**
 * @member {String} value
 */
ReportEntryValue.prototype['value'] = undefined;






export default ReportEntryValue;
