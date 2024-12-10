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
import CreateFunnelIntegrationRequest from '../model/CreateFunnelIntegrationRequest';
import CreateFunnelIntegrationTriggerEvents from '../model/CreateFunnelIntegrationTriggerEvents';
import DeleteFunnelIntegrationRequest from '../model/DeleteFunnelIntegrationRequest';
import Error from '../model/Error';
import FunnelIntegrationTriggerResultDTO from '../model/FunnelIntegrationTriggerResultDTO';

/**
* FunnelIntegration service.
* @module com.keap.sdk.core/api/FunnelIntegrationApi
* @version 0.0.39
*/
export default class FunnelIntegrationApi {

    /**
    * Constructs a new FunnelIntegrationApi. 
    * @alias module:com.keap.sdk.core/api/FunnelIntegrationApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Funnel Integrations into the app.
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} createFunnelIntegrationRequest createFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest) {
      let postBody = createFunnelIntegrationRequest;
      // verify the required parameter 'createFunnelIntegrationRequest' is set
      if (createFunnelIntegrationRequest === undefined || createFunnelIntegrationRequest === null) {
        throw new Error("Missing the required parameter 'createFunnelIntegrationRequest' when calling createFunnelIntegrationUsingPOST");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/funnelIntegration', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Funnel Integrations into the app.
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} createFunnelIntegrationRequest createFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest) {
      return this.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Achieve Funnel Integration Trigger Goal
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO>} and HTTP response
     */
    createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents) {
      let postBody = createFunnelIntegrationTriggerEvents;
      // verify the required parameter 'createFunnelIntegrationTriggerEvents' is set
      if (createFunnelIntegrationTriggerEvents === undefined || createFunnelIntegrationTriggerEvents === null) {
        throw new Error("Missing the required parameter 'createFunnelIntegrationTriggerEvents' when calling createIntegrationTriggerEventUsingPOST");
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
      let returnType = [FunnelIntegrationTriggerResultDTO];
      return this.apiClient.callApi(
        '/v2/funnelIntegration/trigger', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO>}
     */
    createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents) {
      return this.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes Funnel Integrations from the app.
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * @param {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest) {
      let postBody = deleteFunnelIntegrationRequest;
      // verify the required parameter 'deleteFunnelIntegrationRequest' is set
      if (deleteFunnelIntegrationRequest === undefined || deleteFunnelIntegrationRequest === null) {
        throw new Error("Missing the required parameter 'deleteFunnelIntegrationRequest' when calling deleteFunnelIntegrationUsingPOST");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/funnelIntegration/uninstall', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes Funnel Integrations from the app.
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * @param {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest) {
      return this.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
