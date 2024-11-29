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
import ReportEntryValue from './ReportEntryValue';

/**
 * The ReportEntryRecord model module.
 * @module com.keap.sdk.core/model/ReportEntryRecord
 * @version 0.0.23
 */
class ReportEntryRecord {
    /**
     * Constructs a new <code>ReportEntryRecord</code>.
     * @alias module:com.keap.sdk.core/model/ReportEntryRecord
     */
    constructor() { 
        
        ReportEntryRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportEntryRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ReportEntryRecord} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ReportEntryRecord} The populated <code>ReportEntryRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportEntryRecord();

            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], [ReportEntryValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportEntryRecord</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportEntryRecord</code>.
     */
    static validateJSON(data) {
        if (data['columns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['columns'])) {
                throw new Error("Expected the field `columns` to be an array in the JSON data but got " + data['columns']);
            }
            // validate the optional field `columns` (array)
            for (const item of data['columns']) {
                ReportEntryValue.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/ReportEntryValue>} columns
 */
ReportEntryRecord.prototype['columns'] = undefined;






export default ReportEntryRecord;
