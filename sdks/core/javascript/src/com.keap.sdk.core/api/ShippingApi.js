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
import ListRestShippingMethodsResponse from '../model/ListRestShippingMethodsResponse';

/**
* Shipping service.
* @module com.keap.sdk.core/api/ShippingApi
* @version 0.0.20
*/
export default class ShippingApi {

    /**
    * Constructs a new ShippingApi. 
    * @alias module:com.keap.sdk.core/api/ShippingApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List Shipping methods
     * Retrieves a list of Shipping methods
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListRestShippingMethodsResponse} and HTTP response
     */
    listShippingMethodsUsingGETWithHttpInfo() {
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
      let returnType = ListRestShippingMethodsResponse;
      return this.apiClient.callApi(
        '/v2/shipping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Shipping methods
     * Retrieves a list of Shipping methods
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListRestShippingMethodsResponse}
     */
    listShippingMethodsUsingGET() {
      return this.listShippingMethodsUsingGETWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
