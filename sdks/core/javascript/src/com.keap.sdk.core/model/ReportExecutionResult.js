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
import ReportEntryRecord from './ReportEntryRecord';

/**
 * The ReportExecutionResult model module.
 * @module com.keap.sdk.core/model/ReportExecutionResult
 * @version 0.0.22
 */
class ReportExecutionResult {
    /**
     * Constructs a new <code>ReportExecutionResult</code>.
     * @alias module:com.keap.sdk.core/model/ReportExecutionResult
     */
    constructor() { 
        
        ReportExecutionResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportExecutionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ReportExecutionResult} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ReportExecutionResult} The populated <code>ReportExecutionResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportExecutionResult();

            if (data.hasOwnProperty('page_token')) {
                obj['page_token'] = ApiClient.convertToType(data['page_token'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [ReportEntryRecord]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportExecutionResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportExecutionResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['page_token'] && !(typeof data['page_token'] === 'string' || data['page_token'] instanceof String)) {
            throw new Error("Expected the field `page_token` to be a primitive type in the JSON string but got " + data['page_token']);
        }
        if (data['results']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['results'])) {
                throw new Error("Expected the field `results` to be an array in the JSON data but got " + data['results']);
            }
            // validate the optional field `results` (array)
            for (const item of data['results']) {
                ReportEntryRecord.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} page_token
 */
ReportExecutionResult.prototype['page_token'] = undefined;

/**
 * @member {Array.<module:com.keap.sdk.core/model/ReportEntryRecord>} results
 */
ReportExecutionResult.prototype['results'] = undefined;






export default ReportExecutionResult;
