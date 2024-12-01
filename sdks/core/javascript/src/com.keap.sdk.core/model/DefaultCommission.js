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

/**
 * The DefaultCommission model module.
 * @module com.keap.sdk.core/model/DefaultCommission
 * @version 0.0.25
 */
class DefaultCommission {
    /**
     * Constructs a new <code>DefaultCommission</code>.
     * @alias module:com.keap.sdk.core/model/DefaultCommission
     */
    constructor() { 
        
        DefaultCommission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DefaultCommission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/DefaultCommission} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/DefaultCommission} The populated <code>DefaultCommission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DefaultCommission();

            if (data.hasOwnProperty('dollar_amount')) {
                obj['dollar_amount'] = ApiClient.convertToType(data['dollar_amount'], 'Number');
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DefaultCommission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DefaultCommission</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} dollar_amount
 */
DefaultCommission.prototype['dollar_amount'] = undefined;

/**
 * @member {Number} percentage
 */
DefaultCommission.prototype['percentage'] = undefined;






export default DefaultCommission;
