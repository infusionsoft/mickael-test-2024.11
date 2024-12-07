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
import AffiliateCommission from './AffiliateCommission';

/**
 * The ListAffiliateCommissionResponse model module.
 * @module com.keap.sdk.core/model/ListAffiliateCommissionResponse
 * @version 0.0.32
 */
class ListAffiliateCommissionResponse {
    /**
     * Constructs a new <code>ListAffiliateCommissionResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListAffiliateCommissionResponse
     */
    constructor() { 
        
        ListAffiliateCommissionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListAffiliateCommissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListAffiliateCommissionResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListAffiliateCommissionResponse} The populated <code>ListAffiliateCommissionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListAffiliateCommissionResponse();

            if (data.hasOwnProperty('AffiliateCommissions')) {
                obj['AffiliateCommissions'] = ApiClient.convertToType(data['AffiliateCommissions'], [AffiliateCommission]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('total_aff_comm_earned')) {
                obj['total_aff_comm_earned'] = ApiClient.convertToType(data['total_aff_comm_earned'], 'Number');
            }
            if (data.hasOwnProperty('total_claw_back')) {
                obj['total_claw_back'] = ApiClient.convertToType(data['total_claw_back'], 'Number');
            }
            if (data.hasOwnProperty('total_comm_earned')) {
                obj['total_comm_earned'] = ApiClient.convertToType(data['total_comm_earned'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListAffiliateCommissionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListAffiliateCommissionResponse</code>.
     */
    static validateJSON(data) {
        if (data['AffiliateCommissions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['AffiliateCommissions'])) {
                throw new Error("Expected the field `AffiliateCommissions` to be an array in the JSON data but got " + data['AffiliateCommissions']);
            }
            // validate the optional field `AffiliateCommissions` (array)
            for (const item of data['AffiliateCommissions']) {
                AffiliateCommission.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:com.keap.sdk.core/model/AffiliateCommission>} AffiliateCommissions
 */
ListAffiliateCommissionResponse.prototype['AffiliateCommissions'] = undefined;

/**
 * @member {String} next_page_token
 */
ListAffiliateCommissionResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Number} total_aff_comm_earned
 */
ListAffiliateCommissionResponse.prototype['total_aff_comm_earned'] = undefined;

/**
 * @member {Number} total_claw_back
 */
ListAffiliateCommissionResponse.prototype['total_claw_back'] = undefined;

/**
 * @member {Number} total_comm_earned
 */
ListAffiliateCommissionResponse.prototype['total_comm_earned'] = undefined;






export default ListAffiliateCommissionResponse;
