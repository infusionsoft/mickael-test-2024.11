/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateLeadSourceRequest from '../model/CreateLeadSourceRequest';
import Error from '../model/Error';
import LeadSource from '../model/LeadSource';
import ListLeadSourcesResponse from '../model/ListLeadSourcesResponse';

/**
* LeadSources service.
* @module com.keap.sdk.core/api/LeadSourcesApi
* @version 0.0.44
*/
export default class LeadSourcesApi {

    /**
    * Constructs a new LeadSourcesApi. 
    * @alias module:com.keap.sdk.core/api/LeadSourcesApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Lead Source
     * Creates a new Lead Source
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateLeadSourceRequest} [leadsource] leadsource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/LeadSource} and HTTP response
     */
    createLeadSourceUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['leadsource'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LeadSource;
      return this.apiClient.callApi(
        '/v2/leadsources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Lead Source
     * Creates a new Lead Source
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateLeadSourceRequest} opts.leadsource leadsource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/LeadSource}
     */
    createLeadSourceUsingPOST(opts) {
      return this.createLeadSourceUsingPOSTWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Lead Sources
     * Retrieves a list of lead sources
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListLeadSourcesResponse} and HTTP response
     */
    listLeadSourcesUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListLeadSourcesResponse;
      return this.apiClient.callApi(
        '/v2/leadsources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Lead Sources
     * Retrieves a list of lead sources
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListLeadSourcesResponse}
     */
    listLeadSourcesUsingGET(opts) {
      return this.listLeadSourcesUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
