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
import AutomationCategory from '../model/AutomationCategory';
import CreateAutomationCategoryRequest from '../model/CreateAutomationCategoryRequest';
import Error from '../model/Error';
import ListAutomationCategoryResponse from '../model/ListAutomationCategoryResponse';
import SaveAutomationCategoryRequest from '../model/SaveAutomationCategoryRequest';

/**
* AutomationCategory service.
* @module com.keap.sdk.core/api/AutomationCategoryApi
* @version 0.0.36
*/
export default class AutomationCategoryApi {

    /**
    * Constructs a new AutomationCategoryApi. 
    * @alias module:com.keap.sdk.core/api/AutomationCategoryApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create automation category
     * Creates a single automation category
     * @param {module:com.keap.sdk.core/model/CreateAutomationCategoryRequest} createAutomationCategoryRequest createAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AutomationCategory} and HTTP response
     */
    createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest) {
      let postBody = createAutomationCategoryRequest;
      // verify the required parameter 'createAutomationCategoryRequest' is set
      if (createAutomationCategoryRequest === undefined || createAutomationCategoryRequest === null) {
        throw new Error("Missing the required parameter 'createAutomationCategoryRequest' when calling createCategoryUsingPOST");
      }

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
      let returnType = AutomationCategory;
      return this.apiClient.callApi(
        '/v2/automationCategory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create automation category
     * Creates a single automation category
     * @param {module:com.keap.sdk.core/model/CreateAutomationCategoryRequest} createAutomationCategoryRequest createAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AutomationCategory}
     */
    createCategoryUsingPOST(createAutomationCategoryRequest) {
      return this.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete automation category
     * Deletes one or more automation categories based on the request parameters
     * @param {Array.<Number>} ids ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCategoriesUsingDELETEWithHttpInfo(ids) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling deleteCategoriesUsingDELETE");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/automationCategory', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete automation category
     * Deletes one or more automation categories based on the request parameters
     * @param {Array.<Number>} ids ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCategoriesUsingDELETE(ids) {
      return this.deleteCategoriesUsingDELETEWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List automation categories
     * Lists all automation categories based on the request parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAutomationCategoryResponse} and HTTP response
     */
    listCategoriesUsingGETWithHttpInfo() {
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
      let returnType = ListAutomationCategoryResponse;
      return this.apiClient.callApi(
        '/v2/automationCategory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List automation categories
     * Lists all automation categories based on the request parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAutomationCategoryResponse}
     */
    listCategoriesUsingGET() {
      return this.listCategoriesUsingGETWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Save automation category
     * Creates or updates a single automation category
     * @param {module:com.keap.sdk.core/model/SaveAutomationCategoryRequest} saveAutomationCategoryRequest saveAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AutomationCategory} and HTTP response
     */
    saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest) {
      let postBody = saveAutomationCategoryRequest;
      // verify the required parameter 'saveAutomationCategoryRequest' is set
      if (saveAutomationCategoryRequest === undefined || saveAutomationCategoryRequest === null) {
        throw new Error("Missing the required parameter 'saveAutomationCategoryRequest' when calling saveCategoryUsingPUT");
      }

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
      let returnType = AutomationCategory;
      return this.apiClient.callApi(
        '/v2/automationCategory', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Save automation category
     * Creates or updates a single automation category
     * @param {module:com.keap.sdk.core/model/SaveAutomationCategoryRequest} saveAutomationCategoryRequest saveAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AutomationCategory}
     */
    saveCategoryUsingPUT(saveAutomationCategoryRequest) {
      return this.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
