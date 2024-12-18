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


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import ListSubscriptionPlansResponse from '../model/ListSubscriptionPlansResponse';

/**
* SubscriptionPlans service.
* @module com.keap.sdk.core/api/SubscriptionPlansApi
* @version 0.0.48
*/
export default class SubscriptionPlansApi {

    /**
    * Constructs a new SubscriptionPlansApi. 
    * @alias module:com.keap.sdk.core/api/SubscriptionPlansApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List Subscription Plans
     * Retrieves a list of Subscription Plans
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListSubscriptionPlansResponse} and HTTP response
     */
    listSubscriptionPlansUsingGETWithHttpInfo(opts) {
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
      let returnType = ListSubscriptionPlansResponse;
      return this.apiClient.callApi(
        '/v2/subscriptionPlans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Subscription Plans
     * Retrieves a list of Subscription Plans
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name   
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListSubscriptionPlansResponse}
     */
    listSubscriptionPlansUsingGET(opts) {
      return this.listSubscriptionPlansUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
