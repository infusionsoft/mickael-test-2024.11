"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AutomationCategory = _interopRequireDefault(require("../model/AutomationCategory"));
var _CreateAutomationCategoryRequest = _interopRequireDefault(require("../model/CreateAutomationCategoryRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListAutomationCategoryResponse = _interopRequireDefault(require("../model/ListAutomationCategoryResponse"));
var _SaveAutomationCategoryRequest = _interopRequireDefault(require("../model/SaveAutomationCategoryRequest"));
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
* AutomationCategory service.
* @module com.keap.sdk.core/api/AutomationCategoryApi
* @version 0.0.37
*/
var AutomationCategoryApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AutomationCategoryApi. 
  * @alias module:com.keap.sdk.core/api/AutomationCategoryApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function AutomationCategoryApi(apiClient) {
    _classCallCheck(this, AutomationCategoryApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create automation category
   * Creates a single automation category
   * @param {module:com.keap.sdk.core/model/CreateAutomationCategoryRequest} createAutomationCategoryRequest createAutomationCategoryRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AutomationCategory} and HTTP response
   */
  return _createClass(AutomationCategoryApi, [{
    key: "createCategoryUsingPOSTWithHttpInfo",
    value: function createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest) {
      var postBody = createAutomationCategoryRequest;
      // verify the required parameter 'createAutomationCategoryRequest' is set
      if (createAutomationCategoryRequest === undefined || createAutomationCategoryRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createAutomationCategoryRequest' when calling createCategoryUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AutomationCategory["default"];
      return this.apiClient.callApi('/v2/automationCategory', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create automation category
     * Creates a single automation category
     * @param {module:com.keap.sdk.core/model/CreateAutomationCategoryRequest} createAutomationCategoryRequest createAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AutomationCategory}
     */
  }, {
    key: "createCategoryUsingPOST",
    value: function createCategoryUsingPOST(createAutomationCategoryRequest) {
      return this.createCategoryUsingPOSTWithHttpInfo(createAutomationCategoryRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete automation category
     * Deletes one or more automation categories based on the request parameters
     * @param {Array.<Number>} ids ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteCategoriesUsingDELETEWithHttpInfo",
    value: function deleteCategoriesUsingDELETEWithHttpInfo(ids) {
      var postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new _Error["default"]("Missing the required parameter 'ids' when calling deleteCategoriesUsingDELETE");
      }
      var pathParams = {};
      var queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/automationCategory', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete automation category
     * Deletes one or more automation categories based on the request parameters
     * @param {Array.<Number>} ids ids
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteCategoriesUsingDELETE",
    value: function deleteCategoriesUsingDELETE(ids) {
      return this.deleteCategoriesUsingDELETEWithHttpInfo(ids).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List automation categories
     * Lists all automation categories based on the request parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAutomationCategoryResponse} and HTTP response
     */
  }, {
    key: "listCategoriesUsingGETWithHttpInfo",
    value: function listCategoriesUsingGETWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListAutomationCategoryResponse["default"];
      return this.apiClient.callApi('/v2/automationCategory', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List automation categories
     * Lists all automation categories based on the request parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAutomationCategoryResponse}
     */
  }, {
    key: "listCategoriesUsingGET",
    value: function listCategoriesUsingGET() {
      return this.listCategoriesUsingGETWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Save automation category
     * Creates or updates a single automation category
     * @param {module:com.keap.sdk.core/model/SaveAutomationCategoryRequest} saveAutomationCategoryRequest saveAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AutomationCategory} and HTTP response
     */
  }, {
    key: "saveCategoryUsingPUTWithHttpInfo",
    value: function saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest) {
      var postBody = saveAutomationCategoryRequest;
      // verify the required parameter 'saveAutomationCategoryRequest' is set
      if (saveAutomationCategoryRequest === undefined || saveAutomationCategoryRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'saveAutomationCategoryRequest' when calling saveCategoryUsingPUT");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AutomationCategory["default"];
      return this.apiClient.callApi('/v2/automationCategory', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Save automation category
     * Creates or updates a single automation category
     * @param {module:com.keap.sdk.core/model/SaveAutomationCategoryRequest} saveAutomationCategoryRequest saveAutomationCategoryRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AutomationCategory}
     */
  }, {
    key: "saveCategoryUsingPUT",
    value: function saveCategoryUsingPUT(saveAutomationCategoryRequest) {
      return this.saveCategoryUsingPUTWithHttpInfo(saveAutomationCategoryRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();