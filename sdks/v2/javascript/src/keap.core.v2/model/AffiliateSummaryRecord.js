/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AffiliateSummaryRecord model module.
 * @module keap.core.v2/model/AffiliateSummaryRecord
 */
class AffiliateSummaryRecord {
    /**
     * Constructs a new <code>AffiliateSummaryRecord</code>.
     * @alias module:keap.core.v2/model/AffiliateSummaryRecord
     */
    constructor() { 
        
        AffiliateSummaryRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AffiliateSummaryRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/AffiliateSummaryRecord} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/AffiliateSummaryRecord} The populated <code>AffiliateSummaryRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AffiliateSummaryRecord();

            if (data.hasOwnProperty('affiliateId')) {
                obj['affiliateId'] = ApiClient.convertToType(data['affiliateId'], 'Number');
            }
            if (data.hasOwnProperty('amountEarned')) {
                obj['amountEarned'] = ApiClient.convertToType(data['amountEarned'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('clawbacks')) {
                obj['clawbacks'] = ApiClient.convertToType(data['clawbacks'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AffiliateSummaryRecord</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AffiliateSummaryRecord</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} affiliateId
 */
AffiliateSummaryRecord.prototype['affiliateId'] = undefined;

/**
 * @member {Number} amountEarned
 */
AffiliateSummaryRecord.prototype['amountEarned'] = undefined;

/**
 * @member {Number} balance
 */
AffiliateSummaryRecord.prototype['balance'] = undefined;

/**
 * @member {Number} clawbacks
 */
AffiliateSummaryRecord.prototype['clawbacks'] = undefined;






export default AffiliateSummaryRecord;
