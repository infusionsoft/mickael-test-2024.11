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
 * The HistoricalCounts model module.
 * @module com.keap.sdk.core/model/HistoricalCounts
 * @version 0.0.62
 */
class HistoricalCounts {
    /**
     * Constructs a new <code>HistoricalCounts</code>.
     * @alias module:com.keap.sdk.core/model/HistoricalCounts
     */
    constructor() { 
        
        HistoricalCounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalCounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/HistoricalCounts} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/HistoricalCounts} The populated <code>HistoricalCounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalCounts();

            if (data.hasOwnProperty('24_hours')) {
                obj['24_hours'] = ApiClient.convertToType(data['24_hours'], 'Number');
            }
            if (data.hasOwnProperty('30_days')) {
                obj['30_days'] = ApiClient.convertToType(data['30_days'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HistoricalCounts</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HistoricalCounts</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} 24_hours
 */
HistoricalCounts.prototype['24_hours'] = undefined;

/**
 * @member {Number} 30_days
 */
HistoricalCounts.prototype['30_days'] = undefined;






export default HistoricalCounts;
