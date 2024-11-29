"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateFunnelIntegrationRequest = _interopRequireDefault(require("../model/CreateFunnelIntegrationRequest"));
var _CreateFunnelIntegrationTriggerEvents = _interopRequireDefault(require("../model/CreateFunnelIntegrationTriggerEvents"));
var _DeleteFunnelIntegrationRequest = _interopRequireDefault(require("../model/DeleteFunnelIntegrationRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _FunnelIntegrationTriggerResultDTO = _interopRequireDefault(require("../model/FunnelIntegrationTriggerResultDTO"));
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
* FunnelIntegration service.
* @module com.keap.sdk.core/api/FunnelIntegrationApi
* @version 0.0.23
*/
var FunnelIntegrationApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new FunnelIntegrationApi. 
  * @alias module:com.keap.sdk.core/api/FunnelIntegrationApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function FunnelIntegrationApi(apiClient) {
    _classCallCheck(this, FunnelIntegrationApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create Funnel Integrations into the app.
   * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
   * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} createFunnelIntegrationRequest createFunnelIntegrationRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  return _createClass(FunnelIntegrationApi, [{
    key: "createFunnelIntegrationUsingPOSTWithHttpInfo",
    value: function createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest) {
      var postBody = createFunnelIntegrationRequest;
      // verify the required parameter 'createFunnelIntegrationRequest' is set
      if (createFunnelIntegrationRequest === undefined || createFunnelIntegrationRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createFunnelIntegrationRequest' when calling createFunnelIntegrationUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/funnelIntegration', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Funnel Integrations into the app.
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} createFunnelIntegrationRequest createFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "createFunnelIntegrationUsingPOST",
    value: function createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest) {
      return this.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO>} and HTTP response
     */
  }, {
    key: "createIntegrationTriggerEventUsingPOSTWithHttpInfo",
    value: function createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents) {
      var postBody = createFunnelIntegrationTriggerEvents;
      // verify the required parameter 'createFunnelIntegrationTriggerEvents' is set
      if (createFunnelIntegrationTriggerEvents === undefined || createFunnelIntegrationTriggerEvents === null) {
        throw new _Error["default"]("Missing the required parameter 'createFunnelIntegrationTriggerEvents' when calling createIntegrationTriggerEventUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_FunnelIntegrationTriggerResultDTO["default"]];
      return this.apiClient.callApi('/v2/funnelIntegration/trigger', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO>}
     */
  }, {
    key: "createIntegrationTriggerEventUsingPOST",
    value: function createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents) {
      return this.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Deletes Funnel Integrations from the app.
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * @param {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteFunnelIntegrationUsingPOSTWithHttpInfo",
    value: function deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest) {
      var postBody = deleteFunnelIntegrationRequest;
      // verify the required parameter 'deleteFunnelIntegrationRequest' is set
      if (deleteFunnelIntegrationRequest === undefined || deleteFunnelIntegrationRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'deleteFunnelIntegrationRequest' when calling deleteFunnelIntegrationUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/funnelIntegration/uninstall', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Deletes Funnel Integrations from the app.
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * @param {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteFunnelIntegrationUsingPOST",
    value: function deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest) {
      return this.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();