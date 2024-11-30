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
import CreateCustomFieldRequest from '../model/CreateCustomFieldRequest';
import CreateOpportunityRequest from '../model/CreateOpportunityRequest';
import CreateOpportunityStageRequest from '../model/CreateOpportunityStageRequest';
import CustomFieldMetaData from '../model/CustomFieldMetaData';
import Error from '../model/Error';
import ListOpportunitiesResponse from '../model/ListOpportunitiesResponse';
import ListOpportunityStagesResponse from '../model/ListOpportunityStagesResponse';
import PatchOpportunityRequest from '../model/PatchOpportunityRequest';
import RestOpportunityStage from '../model/RestOpportunityStage';
import RestV2Opportunity from '../model/RestV2Opportunity';
import UpdateCustomFieldMetaDataRequest from '../model/UpdateCustomFieldMetaDataRequest';

/**
* Opportunity service.
* @module com.keap.sdk.core/api/OpportunityApi
* @version 0.0.24
*/
export default class OpportunityApi {

    /**
    * Constructs a new OpportunityApi. 
    * @alias module:com.keap.sdk.core/api/OpportunityApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an Opportunity Custom Field
     * Adds a custom field of the specified type and options to the Opportunity object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
    createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField) {
      let postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new Error("Missing the required parameter 'customField' when calling createOpportunityCustomFieldsUsingPOST");
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
      let returnType = CustomFieldMetaData;
      return this.apiClient.callApi(
        '/v2/opportunities/model/customFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Opportunity Custom Field
     * Adds a custom field of the specified type and options to the Opportunity object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
    createOpportunityCustomFieldsUsingPOST(customField) {
      return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an Opportunity Stage
     * Creates a new Opportunity Stage
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityStageRequest} [opportunityStage] opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage} and HTTP response
     */
    createOpportunityStageUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['opportunityStage'];

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
      let returnType = RestOpportunityStage;
      return this.apiClient.callApi(
        '/v2/opportunities/stages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Opportunity Stage
     * Creates a new Opportunity Stage
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityStageRequest} opts.opportunityStage opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage}
     */
    createOpportunityStageUsingPOST(opts) {
      return this.createOpportunityStageUsingPOSTWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an Opportunity
     * Creates a new opportunity as the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityRequest} [opportunity] opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity} and HTTP response
     */
    createOpportunityUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['opportunity'];

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
      let returnType = RestV2Opportunity;
      return this.apiClient.callApi(
        '/v2/opportunities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Opportunity
     * Creates a new opportunity as the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityRequest} opts.opportunity opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
    createOpportunityUsingPOST1(opts) {
      return this.createOpportunityUsingPOST1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Opportunity Stage
     * Deletes the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOpportunityStageUsingDELETEWithHttpInfo(stageId) {
      let postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new Error("Missing the required parameter 'stageId' when calling deleteOpportunityStageUsingDELETE");
      }

      let pathParams = {
        'stage_id': stageId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/opportunities/stages/{stage_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an Opportunity Stage
     * Deletes the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOpportunityStageUsingDELETE(stageId) {
      return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Opportunity
     * Deletes the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOpportunityUsingDELETEWithHttpInfo(opportunityId) {
      let postBody = null;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new Error("Missing the required parameter 'opportunityId' when calling deleteOpportunityUsingDELETE");
      }

      let pathParams = {
        'opportunity_id': opportunityId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/opportunities/{opportunity_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an Opportunity
     * Deletes the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOpportunityUsingDELETE(opportunityId) {
      return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an Opportunity Stage
     * Retrieves the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage} and HTTP response
     */
    getOpportunityStageUsingGETWithHttpInfo(stageId) {
      let postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new Error("Missing the required parameter 'stageId' when calling getOpportunityStageUsingGET");
      }

      let pathParams = {
        'stage_id': stageId
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
      let returnType = RestOpportunityStage;
      return this.apiClient.callApi(
        '/v2/opportunities/stages/{stage_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Opportunity Stage
     * Retrieves the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage}
     */
    getOpportunityStageUsingGET(stageId) {
      return this.getOpportunityStageUsingGETWithHttpInfo(stageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Opportunity
     * Retrieves the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity} and HTTP response
     */
    getOpportunityUsingGET1WithHttpInfo(opportunityId) {
      let postBody = null;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new Error("Missing the required parameter 'opportunityId' when calling getOpportunityUsingGET1");
      }

      let pathParams = {
        'opportunity_id': opportunityId
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
      let returnType = RestV2Opportunity;
      return this.apiClient.callApi(
        '/v2/opportunities/{opportunity_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Opportunity
     * Retrieves the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
    getOpportunityUsingGET1(opportunityId) {
      return this.getOpportunityUsingGET1WithHttpInfo(opportunityId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Opportunities
     * Retrieves a list of all Opportunities.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] fields
     * @param {String} [filter] Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param {String} [orderBy] Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListOpportunitiesResponse} and HTTP response
     */
    listOpportunitiesUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
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
      let returnType = ListOpportunitiesResponse;
      return this.apiClient.callApi(
        '/v2/opportunities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Opportunities
     * Retrieves a list of all Opportunities.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields fields
     * @param {String} opts.filter Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param {String} opts.orderBy Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListOpportunitiesResponse}
     */
    listOpportunitiesUsingGET1(opts) {
      return this.listOpportunitiesUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of Opportunity Stages
     * Retrieves a list of Opportunity Stages.
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListOpportunityStagesResponse} and HTTP response
     */
    listOpportunityStagesUsingGETWithHttpInfo(opts) {
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
      let returnType = ListOpportunityStagesResponse;
      return this.apiClient.callApi(
        '/v2/opportunities/stages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of Opportunity Stages
     * Retrieves a list of Opportunity Stages.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListOpportunityStagesResponse}
     */
    listOpportunityStagesUsingGET(opts) {
      return this.listOpportunityStagesUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Opportunity's Custom Field
     * Updates a custom field of the specified type and options to the Opportunity object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
    updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      let postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling updateOpportunityCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateOpportunityCustomFieldUsingPATCH");
      }

      let pathParams = {
        'custom_field_id': customFieldId
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
      let returnType = CustomFieldMetaData;
      return this.apiClient.callApi(
        '/v2/opportunities/model/customFields/{custom_field_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Opportunity's Custom Field
     * Updates a custom field of the specified type and options to the Opportunity object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
    updateOpportunityCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an opportunity
     * Updates specified values of a given opportunity
     * @param {String} opportunityId opportunity_id
     * @param {module:com.keap.sdk.core/model/PatchOpportunityRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity} and HTTP response
     */
    updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, opts) {
      opts = opts || {};
      let postBody = request;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new Error("Missing the required parameter 'opportunityId' when calling updateOpportunityUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateOpportunityUsingPATCH");
      }

      let pathParams = {
        'opportunity_id': opportunityId
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
      let returnType = RestV2Opportunity;
      return this.apiClient.callApi(
        '/v2/opportunities/{opportunity_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an opportunity
     * Updates specified values of a given opportunity
     * @param {String} opportunityId opportunity_id
     * @param {module:com.keap.sdk.core/model/PatchOpportunityRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
    updateOpportunityUsingPATCH(opportunityId, request, opts) {
      return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
