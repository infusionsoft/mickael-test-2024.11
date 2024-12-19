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
import Country from './Country';

/**
 * The ListCountriesResponse model module.
 * @module com.keap.sdk.core/model/ListCountriesResponse
 * @version 0.0.54
 */
class ListCountriesResponse {
    /**
     * Constructs a new <code>ListCountriesResponse</code>.
     * @alias module:com.keap.sdk.core/model/ListCountriesResponse
     * @param countries {Array.<module:com.keap.sdk.core/model/Country>} A key-value pair of country code and country name.
     */
    constructor(countries) { 
        
        ListCountriesResponse.initialize(this, countries);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countries) { 
        obj['countries'] = countries;
    }

    /**
     * Constructs a <code>ListCountriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.keap.sdk.core/model/ListCountriesResponse} obj Optional instance to populate.
     * @return {module:com.keap.sdk.core/model/ListCountriesResponse} The populated <code>ListCountriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListCountriesResponse();

            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], [Country]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListCountriesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListCountriesResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ListCountriesResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['countries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['countries'])) {
                throw new Error("Expected the field `countries` to be an array in the JSON data but got " + data['countries']);
            }
            // validate the optional field `countries` (array)
            for (const item of data['countries']) {
                Country.validateJSON(item);
            };
        }

        return true;
    }


}

ListCountriesResponse.RequiredProperties = ["countries"];

/**
 * A key-value pair of country code and country name.
 * @member {Array.<module:com.keap.sdk.core/model/Country>} countries
 */
ListCountriesResponse.prototype['countries'] = undefined;






export default ListCountriesResponse;
