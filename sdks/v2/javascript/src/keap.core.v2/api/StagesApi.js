/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateStageRequest from '../model/CreateStageRequest';
import Stage from '../model/Stage';
import StageDealListResponse from '../model/StageDealListResponse';
import StageListResponse from '../model/StageListResponse';
import UpdateStageRequest from '../model/UpdateStageRequest';

/**
* Stages service.
* @module keap.core.v2/api/StagesApi
*/
export default class StagesApi {

    /**
    * Constructs a new StagesApi. 
    * @alias module:keap.core.v2/api/StagesApi
    * @class
    * @param {module:keap.core.v2/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:keap.core.v2/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param {module:keap.core.v2/model/CreateStageRequest} createStageRequest the create request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Stage} and HTTP response
     */
    create1WithHttpInfo(createStageRequest) {
      let postBody = createStageRequest;
      // verify the required parameter 'createStageRequest' is set
      if (createStageRequest === undefined || createStageRequest === null) {
        throw new Error("Missing the required parameter 'createStageRequest' when calling create1");
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
      let returnType = Stage;
      return this.apiClient.callApi(
        '/v2/stages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param {module:keap.core.v2/model/CreateStageRequest} createStageRequest the create request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Stage}
     */
    create1(createStageRequest) {
      return this.create1WithHttpInfo(createStageRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param {String} id the stage identifier
     * @param {Object} opts Optional parameters
     * @param {String} [newStageId] the new stage identifier, can be null
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    delete2WithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling delete2");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'new_stage_id': opts['newStageId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/stages/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a stage by its identifier for a given tenant.
     * Deletes a stage by its identifier for a given tenant.
     * @param {String} id the stage identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.newStageId the new stage identifier, can be null
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    delete2(id, opts) {
      return this.delete2WithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param {String} id the entity identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Stage} and HTTP response
     */
    get1WithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling get1");
      }

      let pathParams = {
        'id': id
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
      let returnType = Stage;
      return this.apiClient.callApi(
        '/v2/stages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param {String} id the entity identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Stage}
     */
    get1(id) {
      return this.get1WithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/StageListResponse} and HTTP response
     */
    list1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'page_token': opts['pageToken'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StageListResponse;
      return this.apiClient.callApi(
        '/v2/stages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Lists entities based on the provided ListCommand.
     * Lists entities based on the provided ListCommand.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/StageListResponse}
     */
    list1(opts) {
      return this.list1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a list of deals for a specific stage.
     * Retrieves a list of deals for a specific stage.
     * @param {String} id the stage identifier
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/StageDealListResponse} and HTTP response
     */
    listStages1WithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listStages1");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filter': opts['filter'],
        'page_token': opts['pageToken'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StageDealListResponse;
      return this.apiClient.callApi(
        '/v2/stages/{id}/deals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a list of deals for a specific stage.
     * Retrieves a list of deals for a specific stage.
     * @param {String} id the stage identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/StageDealListResponse}
     */
    listStages1(id, opts) {
      return this.listStages1WithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param {String} id the entity identifier
     * @param {Array.<String>} updateMask the fields to update
     * @param {module:keap.core.v2/model/UpdateStageRequest} updateStageRequest the update request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:keap.core.v2/model/Stage} and HTTP response
     */
    update2WithHttpInfo(id, updateMask, updateStageRequest) {
      let postBody = updateStageRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling update2");
      }
      // verify the required parameter 'updateMask' is set
      if (updateMask === undefined || updateMask === null) {
        throw new Error("Missing the required parameter 'updateMask' when calling update2");
      }
      // verify the required parameter 'updateStageRequest' is set
      if (updateStageRequest === undefined || updateStageRequest === null) {
        throw new Error("Missing the required parameter 'updateStageRequest' when calling update2");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(updateMask, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Stage;
      return this.apiClient.callApi(
        '/v2/stages/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param {String} id the entity identifier
     * @param {Array.<String>} updateMask the fields to update
     * @param {module:keap.core.v2/model/UpdateStageRequest} updateStageRequest the update request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:keap.core.v2/model/Stage}
     */
    update2(id, updateMask, updateStageRequest) {
      return this.update2WithHttpInfo(id, updateMask, updateStageRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
