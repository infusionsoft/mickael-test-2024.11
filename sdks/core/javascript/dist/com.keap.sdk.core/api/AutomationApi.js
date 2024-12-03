"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddToAutomationSequenceRequest = _interopRequireDefault(require("../model/AddToAutomationSequenceRequest"));
var _AddToAutomationSequenceResponse = _interopRequireDefault(require("../model/AddToAutomationSequenceResponse"));
var _Automation = _interopRequireDefault(require("../model/Automation"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListAutomationIdsResponse = _interopRequireDefault(require("../model/ListAutomationIdsResponse"));
var _ListAutomationResponse = _interopRequireDefault(require("../model/ListAutomationResponse"));
var _UpdateAutomationCategoryRequest = _interopRequireDefault(require("../model/UpdateAutomationCategoryRequest"));
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
* Automation service.
* @module com.keap.sdk.core/api/AutomationApi
* @version 0.0.28
*/
var AutomationApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AutomationApi. 
  * @alias module:com.keap.sdk.core/api/AutomationApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function AutomationApi(apiClient) {
    _classCallCheck(this, AutomationApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Add Contacts to an Automation Sequence
   * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
   * @param {String} automationId automation_id
   * @param {String} sequenceId sequence_id
   * @param {module:com.keap.sdk.core/model/AddToAutomationSequenceRequest} addToAutomationSequenceRequest addToAutomationSequenceRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AddToAutomationSequenceResponse} and HTTP response
   */
  return _createClass(AutomationApi, [{
    key: "addContactsToAutomationSequenceUsingPOSTWithHttpInfo",
    value: function addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest) {
      var postBody = addToAutomationSequenceRequest;
      // verify the required parameter 'automationId' is set
      if (automationId === undefined || automationId === null) {
        throw new _Error["default"]("Missing the required parameter 'automationId' when calling addContactsToAutomationSequenceUsingPOST");
      }
      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new _Error["default"]("Missing the required parameter 'sequenceId' when calling addContactsToAutomationSequenceUsingPOST");
      }
      // verify the required parameter 'addToAutomationSequenceRequest' is set
      if (addToAutomationSequenceRequest === undefined || addToAutomationSequenceRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'addToAutomationSequenceRequest' when calling addContactsToAutomationSequenceUsingPOST");
      }
      var pathParams = {
        'automation_id': automationId,
        'sequence_id': sequenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddToAutomationSequenceResponse["default"];
      return this.apiClient.callApi('/v2/automations/{automation_id}/sequences/{sequence_id}:addContacts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Add Contacts to an Automation Sequence
     * Adds a list of contacts to an automation sequence Response contains a map of the provided list of Contact Ids and their individual result.
     * @param {String} automationId automation_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/AddToAutomationSequenceRequest} addToAutomationSequenceRequest addToAutomationSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AddToAutomationSequenceResponse}
     */
  }, {
    key: "addContactsToAutomationSequenceUsingPOST",
    value: function addContactsToAutomationSequenceUsingPOST(automationId, sequenceId, addToAutomationSequenceRequest) {
      return this.addContactsToAutomationSequenceUsingPOSTWithHttpInfo(automationId, sequenceId, addToAutomationSequenceRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Automation
     * Deletes a single automation
     * @param {Array.<Number>} automationIds automation_ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteAutomationUsingDELETEWithHttpInfo",
    value: function deleteAutomationUsingDELETEWithHttpInfo(automationIds) {
      var postBody = null;
      // verify the required parameter 'automationIds' is set
      if (automationIds === undefined || automationIds === null) {
        throw new _Error["default"]("Missing the required parameter 'automationIds' when calling deleteAutomationUsingDELETE");
      }
      var pathParams = {};
      var queryParams = {
        'automation_ids': this.apiClient.buildCollectionParam(automationIds, 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/automations', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Automation
     * Deletes a single automation
     * @param {Array.<Number>} automationIds automation_ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteAutomationUsingDELETE",
    value: function deleteAutomationUsingDELETE(automationIds) {
      return this.deleteAutomationUsingDELETEWithHttpInfo(automationIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve an Automation
     * Retrieves a single automation
     * @param {String} automationId automation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Automation} and HTTP response
     */
  }, {
    key: "getAutomationUsingGETWithHttpInfo",
    value: function getAutomationUsingGETWithHttpInfo(automationId) {
      var postBody = null;
      // verify the required parameter 'automationId' is set
      if (automationId === undefined || automationId === null) {
        throw new _Error["default"]("Missing the required parameter 'automationId' when calling getAutomationUsingGET");
      }
      var pathParams = {
        'automation_id': automationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Automation["default"];
      return this.apiClient.callApi('/v2/automations/{automation_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Automation
     * Retrieves a single automation
     * @param {String} automationId automation_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Automation}
     */
  }, {
    key: "getAutomationUsingGET",
    value: function getAutomationUsingGET(automationId) {
      return this.getAutomationUsingGETWithHttpInfo(automationId).then(function (response_and_data) {
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
  }, {
    key: "listAllAutomationIdsUsingGETWithHttpInfo",
    value: function listAllAutomationIdsUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'stats': opts['stats']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAutomationIdsResponse["default"];
      return this.apiClient.callApi('/v2/automations/ids', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
  }, {
    key: "listAllAutomationIdsUsingGET",
    value: function listAllAutomationIdsUsingGET(opts) {
      return this.listAllAutomationIdsUsingGETWithHttpInfo(opts).then(function (response_and_data) {
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
  }, {
    key: "listAutomationsUsingGETWithHttpInfo",
    value: function listAutomationsUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'stats': opts['stats']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAutomationResponse["default"];
      return this.apiClient.callApi('/v2/automations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
  }, {
    key: "listAutomationsUsingGET",
    value: function listAutomationsUsingGET(opts) {
      return this.listAutomationsUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an Automation's Category
     * Updates the category of one or more automations
     * @param {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} updateAutomationCategoryRequest updateAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "updateAutomationCategoryUsingPUTWithHttpInfo",
    value: function updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest) {
      var postBody = updateAutomationCategoryRequest;
      // verify the required parameter 'updateAutomationCategoryRequest' is set
      if (updateAutomationCategoryRequest === undefined || updateAutomationCategoryRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'updateAutomationCategoryRequest' when calling updateAutomationCategoryUsingPUT");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/automations/category', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an Automation's Category
     * Updates the category of one or more automations
     * @param {module:com.keap.sdk.core/model/UpdateAutomationCategoryRequest} updateAutomationCategoryRequest updateAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "updateAutomationCategoryUsingPUT",
    value: function updateAutomationCategoryUsingPUT(updateAutomationCategoryRequest) {
      return this.updateAutomationCategoryUsingPUTWithHttpInfo(updateAutomationCategoryRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();