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
import Provinces from './Provinces';

/**
 * The ListProvincesResponse model module.
 * @module com.keap.sdk.core/model/ListProvincesResponse
 * @version 0.0.31
 */
class ListProvincesResponse {
    /**
     * Constructs a new <code>ListProvincesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListProvincesResponse
     * @param provinces {Array.<module:com.keap.sdk.core/model/Provinces>} A key-value pair of province code and province name.
     */
    constructor(provinces) { 
        
        ListProvincesResponse.initialize(this, provinces);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provinces) { 
        obj['provinces'] = provinces;
    }

    /**
     * Constructs a <code>ListProvincesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListProvincesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListProvincesResponse} The populated <code>ListProvincesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListProvincesResponse();

            if (data.hasOwnProperty('provinces')) {
                obj['provinces'] = ApiClient.convertToType(data['provinces'], [Provinces]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListProvincesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListProvincesResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListProvincesResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['provinces']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['provinces'])) {
                throw new Error("Expected the field `provinces` to be an array in the JSON data but got " + data['provinces']);
            }
            // validate the optional field `provinces` (array)
            for (const item of data['provinces']) {
                Provinces.validateJSON(item);
            };
        }

        return true;
    }


}

ListProvincesResponse.RequiredProperties = ["provinces"];

/**
 * A key-value pair of province code and province name.
 * @member {Array.<module:com.keap.sdk.core/model/Provinces>} provinces
 */
ListProvincesResponse.prototype['provinces'] = undefined;






export default ListProvincesResponse;
