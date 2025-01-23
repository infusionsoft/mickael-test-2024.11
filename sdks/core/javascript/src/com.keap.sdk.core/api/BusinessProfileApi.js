/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import GetBusinessProfileResponse from '../model/GetBusinessProfileResponse';
import UpdateBusinessProfileRequest from '../model/UpdateBusinessProfileRequest';

/**
* BusinessProfile service.
* @module com.keap.sdk.core/api/BusinessProfileApi
* @version 0.0.104
*/
export default class BusinessProfileApi {

    /**
    * Constructs a new BusinessProfileApi. 
    * @alias module:com.keap.sdk.core/api/BusinessProfileApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieve Business Profile
     * Retrieves Business Profile information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse} and HTTP response
     */
    getBusinessProfileUsingGETWithHttpInfo() {
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
      let returnType = GetBusinessProfileResponse;
      return this.apiClient.callApi(
        '/v2/businessProfile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Business Profile
     * Retrieves Business Profile information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse}
     */
    getBusinessProfileUsingGET() {
      return this.getBusinessProfileUsingGETWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Business Profile
     * Updates Business Profile information.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/UpdateBusinessProfileRequest} [updateBusinessProfileRequest] businessProfile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse} and HTTP response
     */
    updateBusinessProfileUsingPATCHWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['updateBusinessProfileRequest'];

      let pathParams = {
      };
      let queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GetBusinessProfileResponse;
      return this.apiClient.callApi(
        '/v2/businessProfile', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Business Profile
     * Updates Business Profile information.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/UpdateBusinessProfileRequest} opts.updateBusinessProfileRequest businessProfile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse}
     */
    updateBusinessProfileUsingPATCH(opts) {
      return this.updateBusinessProfileUsingPATCHWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
