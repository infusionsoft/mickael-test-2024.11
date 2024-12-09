"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _RestEmailAddress = _interopRequireDefault(require("../model/RestEmailAddress"));
var _UpdateEmailAddress = _interopRequireDefault(require("../model/UpdateEmailAddress"));
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
* EmailAddress service.
* @module com.keap.sdk.core/api/EmailAddressApi
* @version 0.0.34
*/
var EmailAddressApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new EmailAddressApi. 
  * @alias module:com.keap.sdk.core/api/EmailAddressApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function EmailAddressApi(apiClient) {
    _classCallCheck(this, EmailAddressApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Retrieve an Email Address status
   * Retrieves the opt-in status for given Email Address
   * @param {String} email email
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestEmailAddress} and HTTP response
   */
  return _createClass(EmailAddressApi, [{
    key: "getEmailAddressStatusUsingGETWithHttpInfo",
    value: function getEmailAddressStatusUsingGETWithHttpInfo(email) {
      var postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new _Error["default"]("Missing the required parameter 'email' when calling getEmailAddressStatusUsingGET");
      }
      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestEmailAddress["default"];
      return this.apiClient.callApi('/v2/emailAddresses/{email}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Email Address status
     * Retrieves the opt-in status for given Email Address
     * @param {String} email email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestEmailAddress}
     */
  }, {
    key: "getEmailAddressStatusUsingGET",
    value: function getEmailAddressStatusUsingGET(email) {
      return this.getEmailAddressStatusUsingGETWithHttpInfo(email).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an Email Address opt-in status
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * @param {String} email email
     * @param {module:com.keap.sdk.core/model/UpdateEmailAddress} updateEmailAddress updateEmailAddress
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestEmailAddress} and HTTP response
     */
  }, {
    key: "updateEmailAddressOptStatusUsingPUTWithHttpInfo",
    value: function updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress) {
      var postBody = updateEmailAddress;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new _Error["default"]("Missing the required parameter 'email' when calling updateEmailAddressOptStatusUsingPUT");
      }
      // verify the required parameter 'updateEmailAddress' is set
      if (updateEmailAddress === undefined || updateEmailAddress === null) {
        throw new _Error["default"]("Missing the required parameter 'updateEmailAddress' when calling updateEmailAddressOptStatusUsingPUT");
      }
      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestEmailAddress["default"];
      return this.apiClient.callApi('/v2/emailAddresses/{email}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an Email Address opt-in status
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * @param {String} email email
     * @param {module:com.keap.sdk.core/model/UpdateEmailAddress} updateEmailAddress updateEmailAddress
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestEmailAddress}
     */
  }, {
    key: "updateEmailAddressOptStatusUsingPUT",
    value: function updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress) {
      return this.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();