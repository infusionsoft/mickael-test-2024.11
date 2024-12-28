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
import CreatePipelineRequest from '../model/CreatePipelineRequest';
import Pipeline from '../model/Pipeline';
import PipelineListResponse from '../model/PipelineListResponse';
import PipelineOutcomeLabelListResponse from '../model/PipelineOutcomeLabelListResponse';
import PipelineStageListResponse from '../model/PipelineStageListResponse';
import PipelineSummariesListResponse from '../model/PipelineSummariesListResponse';
import UpdateOutcomeLabelsRequest from '../model/UpdateOutcomeLabelsRequest';
import UpdatePipelineRequest from '../model/UpdatePipelineRequest';

/**
* Pipelines service.
* @module com.keap.sdk.core/api/PipelinesApi
* @version 0.0.70
*/
export default class PipelinesApi {

    /**
    * Constructs a new PipelinesApi. 
    * @alias module:com.keap.sdk.core/api/PipelinesApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param {module:com.keap.sdk.core/model/CreatePipelineRequest} createPipelineRequest the create request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Pipeline} and HTTP response
     */
    createWithHttpInfo(createPipelineRequest) {
      let postBody = createPipelineRequest;
      // verify the required parameter 'createPipelineRequest' is set
      if (createPipelineRequest === undefined || createPipelineRequest === null) {
        throw new Error("Missing the required parameter 'createPipelineRequest' when calling create");
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
      let returnType = Pipeline;
      return this.apiClient.callApi(
        '/v2/pipelines', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new entity.
     * Creates a new entity.
     * @param {module:com.keap.sdk.core/model/CreatePipelineRequest} createPipelineRequest the create request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Pipeline}
     */
    create(createPipelineRequest) {
      return this.createWithHttpInfo(createPipelineRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param {String} id the pipeline identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [allowCleanup] flag indicating whether cleanup is allowed, can be null
     * @param {String} [newStageId] the new stage identifier, can be null
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    delete1WithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling delete1");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'allow_cleanup': opts['allowCleanup'],
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
        '/v2/pipelines/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a pipeline.
     * Deletes a pipeline.
     * @param {String} id the pipeline identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowCleanup flag indicating whether cleanup is allowed, can be null
     * @param {String} opts.newStageId the new stage identifier, can be null
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    delete1(id, opts) {
      return this.delete1WithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param {String} id the entity identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Pipeline} and HTTP response
     */
    getWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling get");
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
      let returnType = Pipeline;
      return this.apiClient.callApi(
        '/v2/pipelines/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves an entity by its identifier.
     * Retrieves an entity by its identifier.
     * @param {String} id the entity identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Pipeline}
     */
    get(id) {
      return this.getWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets the outcome labels for a pipeline.
     * Gets the outcome labels for a pipeline.
     * @param {String} id the pipeline identifier
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PipelineOutcomeLabelListResponse} and HTTP response
     */
    getOutcomeLabelsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOutcomeLabels");
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
      let returnType = PipelineOutcomeLabelListResponse;
      return this.apiClient.callApi(
        '/v2/pipelines/{id}/outcomes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the outcome labels for a pipeline.
     * Gets the outcome labels for a pipeline.
     * @param {String} id the pipeline identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PipelineOutcomeLabelListResponse}
     */
    getOutcomeLabels(id, opts) {
      return this.getOutcomeLabelsWithHttpInfo(id, opts)
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PipelineListResponse} and HTTP response
     */
    listWithHttpInfo(opts) {
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
      let returnType = PipelineListResponse;
      return this.apiClient.callApi(
        '/v2/pipelines', 'GET',
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PipelineListResponse}
     */
    list(opts) {
      return this.listWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a list of stages for a specific pipeline.
     * Retrieves a list of stages for a specific pipeline.
     * @param {String} id the pipeline identifier
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PipelineStageListResponse} and HTTP response
     */
    listStagesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listStages");
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
      let returnType = PipelineStageListResponse;
      return this.apiClient.callApi(
        '/v2/pipelines/{id}/stages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a list of stages for a specific pipeline.
     * Retrieves a list of stages for a specific pipeline.
     * @param {String} id the pipeline identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PipelineStageListResponse}
     */
    listStages(id, opts) {
      return this.listStagesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PipelineSummariesListResponse} and HTTP response
     */
    listSummariesWithHttpInfo(opts) {
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
      let returnType = PipelineSummariesListResponse;
      return this.apiClient.callApi(
        '/v2/pipelines/summaries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a list of pipeline summaries.
     * Retrieves a list of pipeline summaries.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PipelineSummariesListResponse}
     */
    listSummaries(opts) {
      return this.listSummariesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param {String} id the pipeline identifier
     * @param {module:com.keap.sdk.core/model/UpdateOutcomeLabelsRequest} updateOutcomeLabelsRequest the request containing the new outcome labels
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PipelineOutcomeLabelListResponse} and HTTP response
     */
    setOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest) {
      let postBody = updateOutcomeLabelsRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setOutcomeLabels");
      }
      // verify the required parameter 'updateOutcomeLabelsRequest' is set
      if (updateOutcomeLabelsRequest === undefined || updateOutcomeLabelsRequest === null) {
        throw new Error("Missing the required parameter 'updateOutcomeLabelsRequest' when calling setOutcomeLabels");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PipelineOutcomeLabelListResponse;
      return this.apiClient.callApi(
        '/v2/pipelines/{id}/outcomes', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sets the outcome labels for a pipeline.
     * Sets the outcome labels for a pipeline.
     * @param {String} id the pipeline identifier
     * @param {module:com.keap.sdk.core/model/UpdateOutcomeLabelsRequest} updateOutcomeLabelsRequest the request containing the new outcome labels
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PipelineOutcomeLabelListResponse}
     */
    setOutcomeLabels(id, updateOutcomeLabelsRequest) {
      return this.setOutcomeLabelsWithHttpInfo(id, updateOutcomeLabelsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param {String} id the entity identifier
     * @param {Array.<String>} updateMask the fields to update
     * @param {module:com.keap.sdk.core/model/UpdatePipelineRequest} updatePipelineRequest the update request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Pipeline} and HTTP response
     */
    update1WithHttpInfo(id, updateMask, updatePipelineRequest) {
      let postBody = updatePipelineRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling update1");
      }
      // verify the required parameter 'updateMask' is set
      if (updateMask === undefined || updateMask === null) {
        throw new Error("Missing the required parameter 'updateMask' when calling update1");
      }
      // verify the required parameter 'updatePipelineRequest' is set
      if (updatePipelineRequest === undefined || updatePipelineRequest === null) {
        throw new Error("Missing the required parameter 'updatePipelineRequest' when calling update1");
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
      let returnType = Pipeline;
      return this.apiClient.callApi(
        '/v2/pipelines/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates an existing entity.
     * Updates an existing entity.
     * @param {String} id the entity identifier
     * @param {Array.<String>} updateMask the fields to update
     * @param {module:com.keap.sdk.core/model/UpdatePipelineRequest} updatePipelineRequest the update request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Pipeline}
     */
    update1(id, updateMask, updatePipelineRequest) {
      return this.update1WithHttpInfo(id, updateMask, updatePipelineRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
