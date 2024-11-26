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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import ListCountriesResponse from '../model/ListCountriesResponse';
import ListProvincesResponse from '../model/ListProvincesResponse';

/**
* Locale service.
* @module com.keap.sdk.core/api/LocaleApi
* @version 0.0.20
*/
export default class LocaleApi {

    /**
    * Constructs a new LocaleApi. 
    * @alias module:com.keap.sdk.core/api/LocaleApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List Countries
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListCountriesResponse} and HTTP response
     */
    listCountriesUsingGET2WithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCountriesResponse;
      return this.apiClient.callApi(
        '/v2/locales/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Countries
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListCountriesResponse}
     */
    listCountriesUsingGET2() {
      return this.listCountriesUsingGET2WithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List a Country's Provinces
     * @param {String} countryCode country_code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListProvincesResponse} and HTTP response
     */
    listProvincesForCountryUsingGETWithHttpInfo(countryCode) {
      let postBody = null;
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new Error("Missing the required parameter 'countryCode' when calling listProvincesForCountryUsingGET");
      }

      let pathParams = {
        'country_code': countryCode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListProvincesResponse;
      return this.apiClient.callApi(
        '/v2/locales/countries/{country_code}/provinces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List a Country's Provinces
     * @param {String} countryCode country_code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListProvincesResponse}
     */
    listProvincesForCountryUsingGET(countryCode) {
      return this.listProvincesForCountryUsingGETWithHttpInfo(countryCode)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
