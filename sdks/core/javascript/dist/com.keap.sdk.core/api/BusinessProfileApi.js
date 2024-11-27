"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _GetBusinessProfileResponse = _interopRequireDefault(require("../model/GetBusinessProfileResponse"));
var _PatchBusinessProfileRequest = _interopRequireDefault(require("../model/PatchBusinessProfileRequest"));
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
* BusinessProfile service.
* @module com.keap.sdk.core/api/BusinessProfileApi
* @version 0.0.21
*/
var BusinessProfileApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new BusinessProfileApi. 
  * @alias module:com.keap.sdk.core/api/BusinessProfileApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function BusinessProfileApi(apiClient) {
    _classCallCheck(this, BusinessProfileApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Retrieve Business Profile
   * Retrieves Business Profile information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse} and HTTP response
   */
  return _createClass(BusinessProfileApi, [{
    key: "getBusinessProfileUsingGETWithHttpInfo",
    value: function getBusinessProfileUsingGETWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetBusinessProfileResponse["default"];
      return this.apiClient.callApi('/v2/businessProfile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Business Profile
     * Retrieves Business Profile information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse}
     */
  }, {
    key: "getBusinessProfileUsingGET",
    value: function getBusinessProfileUsingGET() {
      return this.getBusinessProfileUsingGETWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update Business Profile
     * Updates Business Profile information.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchBusinessProfileRequest} [businessProfile] businessProfile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse} and HTTP response
     */
  }, {
    key: "patchBusinessProfileUsingPATCHWithHttpInfo",
    value: function patchBusinessProfileUsingPATCHWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['businessProfile'];
      var pathParams = {};
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GetBusinessProfileResponse["default"];
      return this.apiClient.callApi('/v2/businessProfile', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update Business Profile
     * Updates Business Profile information.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchBusinessProfileRequest} opts.businessProfile businessProfile
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetBusinessProfileResponse}
     */
  }, {
    key: "patchBusinessProfileUsingPATCH",
    value: function patchBusinessProfileUsingPATCH(opts) {
      return this.patchBusinessProfileUsingPATCHWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();