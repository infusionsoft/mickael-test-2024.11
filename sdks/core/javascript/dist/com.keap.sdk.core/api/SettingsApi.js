"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _GetApplicationEnabledStatusResponse = _interopRequireDefault(require("../model/GetApplicationEnabledStatusResponse"));
var _GetContactOptionTypesResponse = _interopRequireDefault(require("../model/GetContactOptionTypesResponse"));
var _GetSettingsResponse = _interopRequireDefault(require("../model/GetSettingsResponse"));
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
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/**
* Settings service.
* @module com.keap.sdk.core/api/SettingsApi
* @version 2.70.0.736468-hf-202411121210
*/
var SettingsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new SettingsApi. 
  * @alias module:com.keap.sdk.core/api/SettingsApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function SettingsApi(apiClient) {
    _classCallCheck(this, SettingsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Get Application Configuration
   * Get configuration values for the application instance.
   * @param {Object} opts Optional parameters
   * @param {Array.<module:com.keap.sdk.core/model/String>} [fields] By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetSettingsResponse} and HTTP response
   */
  return _createClass(SettingsApi, [{
    key: "getApplicationConfigurationsUsingGETWithHttpInfo",
    value: function getApplicationConfigurationsUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSettingsResponse["default"];
      return this.apiClient.callApi('/v2/settings/applications:getConfiguration', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Application Configuration
     * Get configuration values for the application instance.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.fields By default only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetSettingsResponse}
     */
  }, {
    key: "getApplicationConfigurationsUsingGET",
    value: function getApplicationConfigurationsUsingGET(opts) {
      return this.getApplicationConfigurationsUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Contact Option types
     * Gets a list of Contact Option types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetContactOptionTypesResponse} and HTTP response
     */
  }, {
    key: "getContactOptionTypesUsingGET1WithHttpInfo",
    value: function getContactOptionTypesUsingGET1WithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetContactOptionTypesResponse["default"];
      return this.apiClient.callApi('/v2/settings/contactOptionTypes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Contact Option types
     * Gets a list of Contact Option types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetContactOptionTypesResponse}
     */
  }, {
    key: "getContactOptionTypesUsingGET1",
    value: function getContactOptionTypesUsingGET1() {
      return this.getContactOptionTypesUsingGET1WithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get Application Status
     * Check if the application is enabled or not
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetApplicationEnabledStatusResponse} and HTTP response
     */
  }, {
    key: "isApplicationEnabledUsingGETWithHttpInfo",
    value: function isApplicationEnabledUsingGETWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetApplicationEnabledStatusResponse["default"];
      return this.apiClient.callApi('/v2/settings/applications:isEnabled', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get Application Status
     * Check if the application is enabled or not
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetApplicationEnabledStatusResponse}
     */
  }, {
    key: "isApplicationEnabledUsingGET",
    value: function isApplicationEnabledUsingGET() {
      return this.isApplicationEnabledUsingGETWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();