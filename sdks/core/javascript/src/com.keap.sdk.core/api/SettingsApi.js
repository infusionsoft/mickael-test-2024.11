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
import GetApplicationEnabledStatusResponse from '../model/GetApplicationEnabledStatusResponse';
import GetContactOptionTypesResponse from '../model/GetContactOptionTypesResponse';
import GetSettingsResponse from '../model/GetSettingsResponse';

/**
* Settings service.
* @module com.keap.sdk.core/api/SettingsApi
* @version 0.0.19
*/
export default class SettingsApi {

    /**
    * Constructs a new SettingsApi. 
    * @alias module:com.keap.sdk.core/api/SettingsApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Application Configuration
     * Get configuration values for the application instance.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [fields] By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetSettingsResponse} and HTTP response
     */
    getApplicationConfigurationsUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetSettingsResponse;
      return this.apiClient.callApi(
        '/v2/settings/applications:getConfiguration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Application Configuration
     * Get configuration values for the application instance.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.fields By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetSettingsResponse}
     */
    getApplicationConfigurationsUsingGET(opts) {
      return this.getApplicationConfigurationsUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Contact Option types
     * Gets a list of Contact Option types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetContactOptionTypesResponse} and HTTP response
     */
    getContactOptionTypesUsingGET1WithHttpInfo() {
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
      let returnType = GetContactOptionTypesResponse;
      return this.apiClient.callApi(
        '/v2/settings/contactOptionTypes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Contact Option types
     * Gets a list of Contact Option types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetContactOptionTypesResponse}
     */
    getContactOptionTypesUsingGET1() {
      return this.getContactOptionTypesUsingGET1WithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Application Status
     * Check if the application is enabled or not
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetApplicationEnabledStatusResponse} and HTTP response
     */
    isApplicationEnabledUsingGETWithHttpInfo() {
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
      let returnType = GetApplicationEnabledStatusResponse;
      return this.apiClient.callApi(
        '/v2/settings/applications:isEnabled', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Application Status
     * Check if the application is enabled or not
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetApplicationEnabledStatusResponse}
     */
    isApplicationEnabledUsingGET() {
      return this.isApplicationEnabledUsingGETWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
