"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCustomFieldRequest = _interopRequireDefault(require("../model/CreateCustomFieldRequest"));
var _CreateOpportunityRequest = _interopRequireDefault(require("../model/CreateOpportunityRequest"));
var _CreateOpportunityStageRequest = _interopRequireDefault(require("../model/CreateOpportunityStageRequest"));
var _CustomFieldMetaData = _interopRequireDefault(require("../model/CustomFieldMetaData"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListOpportunitiesResponse = _interopRequireDefault(require("../model/ListOpportunitiesResponse"));
var _ListOpportunityStagesResponse = _interopRequireDefault(require("../model/ListOpportunityStagesResponse"));
var _PatchOpportunityRequest = _interopRequireDefault(require("../model/PatchOpportunityRequest"));
var _RestOpportunityStage = _interopRequireDefault(require("../model/RestOpportunityStage"));
var _RestV2Opportunity = _interopRequireDefault(require("../model/RestV2Opportunity"));
var _UpdateCustomFieldMetaDataRequest = _interopRequireDefault(require("../model/UpdateCustomFieldMetaDataRequest"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
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
/**
* Opportunity service.
* @module com.keap.sdk.core/api/OpportunityApi
* @version 0.0.31
*/
var OpportunityApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new OpportunityApi. 
  * @alias module:com.keap.sdk.core/api/OpportunityApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function OpportunityApi(apiClient) {
    _classCallCheck(this, OpportunityApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create an Opportunity Custom Field
   * Adds a custom field of the specified type and options to the Opportunity object.
   * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
   */
  return _createClass(OpportunityApi, [{
    key: "createOpportunityCustomFieldsUsingPOSTWithHttpInfo",
    value: function createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField) {
      var postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new _Error["default"]("Missing the required parameter 'customField' when calling createOpportunityCustomFieldsUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/opportunities/model/customFields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Opportunity Custom Field
     * Adds a custom field of the specified type and options to the Opportunity object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "createOpportunityCustomFieldsUsingPOST",
    value: function createOpportunityCustomFieldsUsingPOST(customField) {
      return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField).then(function (response_and_data) {
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
  }, {
    key: "createOpportunityStageUsingPOSTWithHttpInfo",
    value: function createOpportunityStageUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['opportunityStage'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestOpportunityStage["default"];
      return this.apiClient.callApi('/v2/opportunities/stages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Opportunity Stage
     * Creates a new Opportunity Stage
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityStageRequest} opts.opportunityStage opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage}
     */
  }, {
    key: "createOpportunityStageUsingPOST",
    value: function createOpportunityStageUsingPOST(opts) {
      return this.createOpportunityStageUsingPOSTWithHttpInfo(opts).then(function (response_and_data) {
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
  }, {
    key: "createOpportunityUsingPOST1WithHttpInfo",
    value: function createOpportunityUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['opportunity'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestV2Opportunity["default"];
      return this.apiClient.callApi('/v2/opportunities', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Opportunity
     * Creates a new opportunity as the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityRequest} opts.opportunity opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
  }, {
    key: "createOpportunityUsingPOST1",
    value: function createOpportunityUsingPOST1(opts) {
      return this.createOpportunityUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Opportunity Stage
     * Deletes the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteOpportunityStageUsingDELETEWithHttpInfo",
    value: function deleteOpportunityStageUsingDELETEWithHttpInfo(stageId) {
      var postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new _Error["default"]("Missing the required parameter 'stageId' when calling deleteOpportunityStageUsingDELETE");
      }
      var pathParams = {
        'stage_id': stageId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/opportunities/stages/{stage_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Opportunity Stage
     * Deletes the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteOpportunityStageUsingDELETE",
    value: function deleteOpportunityStageUsingDELETE(stageId) {
      return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Opportunity
     * Deletes the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteOpportunityUsingDELETEWithHttpInfo",
    value: function deleteOpportunityUsingDELETEWithHttpInfo(opportunityId) {
      var postBody = null;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new _Error["default"]("Missing the required parameter 'opportunityId' when calling deleteOpportunityUsingDELETE");
      }
      var pathParams = {
        'opportunity_id': opportunityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/opportunities/{opportunity_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Opportunity
     * Deletes the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteOpportunityUsingDELETE",
    value: function deleteOpportunityUsingDELETE(opportunityId) {
      return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve an Opportunity Stage
     * Retrieves the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage} and HTTP response
     */
  }, {
    key: "getOpportunityStageUsingGETWithHttpInfo",
    value: function getOpportunityStageUsingGETWithHttpInfo(stageId) {
      var postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new _Error["default"]("Missing the required parameter 'stageId' when calling getOpportunityStageUsingGET");
      }
      var pathParams = {
        'stage_id': stageId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestOpportunityStage["default"];
      return this.apiClient.callApi('/v2/opportunities/stages/{stage_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Opportunity Stage
     * Retrieves the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage}
     */
  }, {
    key: "getOpportunityStageUsingGET",
    value: function getOpportunityStageUsingGET(stageId) {
      return this.getOpportunityStageUsingGETWithHttpInfo(stageId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Opportunity
     * Retrieves the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity} and HTTP response
     */
  }, {
    key: "getOpportunityUsingGET1WithHttpInfo",
    value: function getOpportunityUsingGET1WithHttpInfo(opportunityId) {
      var postBody = null;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new _Error["default"]("Missing the required parameter 'opportunityId' when calling getOpportunityUsingGET1");
      }
      var pathParams = {
        'opportunity_id': opportunityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestV2Opportunity["default"];
      return this.apiClient.callApi('/v2/opportunities/{opportunity_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Opportunity
     * Retrieves the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
  }, {
    key: "getOpportunityUsingGET1",
    value: function getOpportunityUsingGET1(opportunityId) {
      return this.getOpportunityUsingGET1WithHttpInfo(opportunityId).then(function (response_and_data) {
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
  }, {
    key: "listOpportunitiesUsingGET1WithHttpInfo",
    value: function listOpportunitiesUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListOpportunitiesResponse["default"];
      return this.apiClient.callApi('/v2/opportunities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
  }, {
    key: "listOpportunitiesUsingGET1",
    value: function listOpportunitiesUsingGET1(opts) {
      return this.listOpportunitiesUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
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
  }, {
    key: "listOpportunityStagesUsingGETWithHttpInfo",
    value: function listOpportunityStagesUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListOpportunityStagesResponse["default"];
      return this.apiClient.callApi('/v2/opportunities/stages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
  }, {
    key: "listOpportunityStagesUsingGET",
    value: function listOpportunityStagesUsingGET(opts) {
      return this.listOpportunityStagesUsingGETWithHttpInfo(opts).then(function (response_and_data) {
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
  }, {
    key: "updateOpportunityCustomFieldUsingPATCHWithHttpInfo",
    value: function updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling updateOpportunityCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateOpportunityCustomFieldUsingPATCH");
      }
      var pathParams = {
        'custom_field_id': customFieldId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/opportunities/model/customFields/{custom_field_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
  }, {
    key: "updateOpportunityCustomFieldUsingPATCH",
    value: function updateOpportunityCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts).then(function (response_and_data) {
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
  }, {
    key: "updateOpportunityUsingPATCHWithHttpInfo",
    value: function updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new _Error["default"]("Missing the required parameter 'opportunityId' when calling updateOpportunityUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateOpportunityUsingPATCH");
      }
      var pathParams = {
        'opportunity_id': opportunityId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestV2Opportunity["default"];
      return this.apiClient.callApi('/v2/opportunities/{opportunity_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
  }, {
    key: "updateOpportunityUsingPATCH",
    value: function updateOpportunityUsingPATCH(opportunityId, request, opts) {
      return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();