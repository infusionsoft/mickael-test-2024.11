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
import AddToAutomationSequenceRequest from '../model/AddToAutomationSequenceRequest';
import AddToAutomationSequenceResponse from '../model/AddToAutomationSequenceResponse';
import Automation from '../model/Automation';
import Error from '../model/Error';
import ListAutomationIdsResponse from '../model/ListAutomationIdsResponse';
import ListAutomationResponse from '../model/ListAutomationResponse';
import UpdateAutomationCategoryRequest from '../model/UpdateAutomationCategoryRequest';

/**
* Automation service.
* @module com.keap.sdk.core/api/AutomationApi
* @version 0.0.75
*/
export default class AutomationApi {

    /**
    * Constructs a new AutomationApi. 
    * @alias module:com.keap.sdk.core/api/AutomationApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add Contacts to an Automation Sequence
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * @param {String} automationId automation_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/AddToAutomationSequenceRequest} addToAutomationSequenceRequest addToAutomationSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AddToAutomationSequenceResponse} and HTTP response
     */
    addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest) {
      let postBody = addToAutomationSequenceRequest;
      // verify the required parameter 'automationId' is set
      if (automationId === undefined || automationId === null) {
        throw new Error("Missing the required parameter 'automationId' when calling addContactsToAutomationSequenceUsingPOST");
      }
      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new Error("Missing the required parameter 'sequenceId' when calling addContactsToAutomationSequenceUsingPOST");
      }
      // verify the required parameter 'addToAutomationSequenceRequest' is set
      if (addToAutomationSequenceRequest === undefined || addToAutomationSequenceRequest === null) {
        throw new Error("Missing the required parameter 'addToAutomationSequenceRequest' when calling addContactsToAutomationSequenceUsingPOST");
      }

      let pathParams = {
        'automation_id': automationId,
        'sequence_id': sequenceId
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
      let returnType = AddToAutomationSequenceResponse;
      return this.apiClient.callApi(
        '/v2/automations/{automation_id}/sequences/{sequence_id}:addContacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add Contacts to an Automation Sequence
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * @param {String} automationId automation_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/AddToAutomationSequenceRequest} addToAutomationSequenceRequest addToAutomationSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AddToAutomationSequenceResponse}
     */
    addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest) {
      return this.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Automation
     * Deletes a single automation
     * @param {Array.<Number>} automationIds automation_ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAutomationUsingDELETEWithHttpInfo(automationIds) {
      let postBody = null;
      // verify the required parameter 'automationIds' is set
      if (automationIds === undefined || automationIds === null) {
        throw new Error("Missing the required parameter 'automationIds' when calling deleteAutomationUsingDELETE");
      }

      let pathParams = {
      };
      let queryParams = {
        'automation_ids': this.apiClient.buildCollectionParam(automationIds, 'multi')
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
        '/v2/automations', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an Automation
     * Deletes a single automation
     * @param {Array.<Number>} automationIds automation_ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAutomationUsingDELETE(automationIds) {
      return this.deleteAutomationUsingDELETEWithHttpInfo(automationIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an Automation
     * Retrieves a single automation
     * @param {String} automationId automation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Automation} and HTTP response
     */
    getAutomationUsingGETWithHttpInfo(automationId) {
      let postBody = null;
      // verify the required parameter 'automationId' is set
      if (automationId === undefined || automationId === null) {
        throw new Error("Missing the required parameter 'automationId' when calling getAutomationUsingGET");
      }

      let pathParams = {
        'automation_id': automationId
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
      let returnType = Automation;
      return this.apiClient.callApi(
        '/v2/automations/{automation_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Automation
     * Retrieves a single automation
     * @param {String} automationId automation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Automation}
     */
    getAutomationUsingGET(automationId) {
      return this.getAutomationUsingGETWithHttpInfo(automationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Automations Ids
     * Lists all automations ids based on the request parameters.
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.   - `filter=name%3D%3DSpring Automation`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @param {Boolean} [stats] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAutomationIdsResponse} and HTTP response
     */
    listAllAutomationIdsUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'stats': opts['stats']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAutomationIdsResponse;
      return this.apiClient.callApi(
        '/v2/automations/ids', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Automations Ids
     * Lists all automations ids based on the request parameters.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.   - `filter=name%3D%3DSpring Automation`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @param {Boolean} opts.stats 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAutomationIdsResponse}
     */
    listAllAutomationIdsUsingGET(opts) {
      return this.listAllAutomationIdsUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Automations
     * Lists all automations based on the request parameters.
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.   - `filter=name%3D%3DSpring Automation`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @param {Boolean} [stats] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAutomationResponse} and HTTP response
     */
    listAutomationsUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'stats': opts['stats']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAutomationResponse;
      return this.apiClient.callApi(
        '/v2/automations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Automations
     * Lists all automations based on the request parameters.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the automation name.   - `filter=name%3D%3DSpring Automation`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   - category   - activeContacts   - publishedDate   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @param {Boolean} opts.stats 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAutomationResponse}
     */
    listAutomationsUsingGET(opts) {
      return this.listAutomationsUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an Automation's Category
     * Updates the category of one or more automations
     * @param {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} updateAutomationCategoryRequest updateAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest) {
      let postBody = updateAutomationCategoryRequest;
      // verify the required parameter 'updateAutomationCategoryRequest' is set
      if (updateAutomationCategoryRequest === undefined || updateAutomationCategoryRequest === null) {
        throw new Error("Missing the required parameter 'updateAutomationCategoryRequest' when calling updateAutomationCategoryUsingPUT");
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
        '/v2/automations/category', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an Automation's Category
     * Updates the category of one or more automations
     * @param {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} updateAutomationCategoryRequest updateAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest) {
      return this.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
