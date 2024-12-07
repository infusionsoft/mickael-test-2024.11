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
import Company from './Company';

/**
 * The ListCompaniesResponse model module.
 * @module com.keap.sdk.core/model/ListCompaniesResponse
 * @version 0.0.32
 */
class ListCompaniesResponse {
    /**
     * Constructs a new <code>ListCompaniesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListCompaniesResponse
     */
    constructor() { 
        
        ListCompaniesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListCompaniesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListCompaniesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListCompaniesResponse} The populated <code>ListCompaniesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListCompaniesResponse();

            if (data.hasOwnProperty('companies')) {
                obj['companies'] = ApiClient.convertToType(data['companies'], [Company]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListCompaniesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListCompaniesResponse</code>.
     */
    static validateJSON(data) {
        if (data['companies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['companies'])) {
                throw new Error("Expected the field `companies` to be an array in the JSON data but got " + data['companies']);
            }
            // validate the optional field `companies` (array)
            for (const item of data['companies']) {
                Company.validateJSON(item);
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
 * @member {Array.<module:com.keap.sdk.core/model/Company>} companies
 */
ListCompaniesResponse.prototype['companies'] = undefined;

/**
 * @member {String} next_page_token
 */
ListCompaniesResponse.prototype['next_page_token'] = undefined;






export default ListCompaniesResponse;
