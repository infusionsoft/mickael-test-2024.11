"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateEmailSentRequest = _interopRequireDefault(require("../model/CreateEmailSentRequest"));
var _CreateEmailsSentRequest = _interopRequireDefault(require("../model/CreateEmailsSentRequest"));
var _DeleteEmailsRequest = _interopRequireDefault(require("../model/DeleteEmailsRequest"));
var _DeleteEmailsResponse = _interopRequireDefault(require("../model/DeleteEmailsResponse"));
var _EmailSendRequest = _interopRequireDefault(require("../model/EmailSendRequest"));
var _EmailSentWithContent = _interopRequireDefault(require("../model/EmailSentWithContent"));
var _EmailsSentList = _interopRequireDefault(require("../model/EmailsSentList"));
var _Error = _interopRequireDefault(require("../model/Error"));
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
* Email service.
* @module com.keap.sdk.core/api/EmailApi
* @version 0.0.36
*/
var EmailApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new EmailApi. 
  * @alias module:com.keap.sdk.core/api/EmailApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function EmailApi(apiClient) {
    _classCallCheck(this, EmailApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create an Email Record
   * Creates a Record of an Email sent to a Contact
   * @param {module:com.keap.sdk.core/model/CreateEmailSentRequest} emailWithContent emailWithContent
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent} and HTTP response
   */
  return _createClass(EmailApi, [{
    key: "createEmailUsingPOST1WithHttpInfo",
    value: function createEmailUsingPOST1WithHttpInfo(emailWithContent) {
      var postBody = emailWithContent;
      // verify the required parameter 'emailWithContent' is set
      if (emailWithContent === undefined || emailWithContent === null) {
        throw new _Error["default"]("Missing the required parameter 'emailWithContent' when calling createEmailUsingPOST1");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailSentWithContent["default"];
      return this.apiClient.callApi('/v2/emails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Email Record
     * Creates a Record of an Email sent to a Contact
     * @param {module:com.keap.sdk.core/model/CreateEmailSentRequest} emailWithContent emailWithContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent}
     */
  }, {
    key: "createEmailUsingPOST1",
    value: function createEmailUsingPOST1(emailWithContent) {
      return this.createEmailUsingPOST1WithHttpInfo(emailWithContent).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a set of Email Records
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateEmailsSentRequest} [createEmailsSentRequest] Email records to persist, with content.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/EmailsSentList} and HTTP response
     */
  }, {
    key: "createEmailsUsingPOST1WithHttpInfo",
    value: function createEmailsUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['createEmailsSentRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EmailsSentList["default"];
      return this.apiClient.callApi('/v2/emails:batchAdd', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a set of Email Records
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateEmailsSentRequest} opts.createEmailsSentRequest Email records to persist, with content.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/EmailsSentList}
     */
  }, {
    key: "createEmailsUsingPOST1",
    value: function createEmailsUsingPOST1(opts) {
      return this.createEmailsUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Email Record
     * Deletes a specific Email Record
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteEmailUsingDELETE1WithHttpInfo",
    value: function deleteEmailUsingDELETE1WithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling deleteEmailUsingDELETE1");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/emails/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Email Record
     * Deletes a specific Email Record
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteEmailUsingDELETE1",
    value: function deleteEmailUsingDELETE1(id) {
      return this.deleteEmailUsingDELETE1WithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a set of Email Records
     * Removes a set of Email Records
     * @param {module:com.keap.sdk.core/model/DeleteEmailsRequest} deleteEmailsRequest deleteEmailsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/DeleteEmailsResponse} and HTTP response
     */
  }, {
    key: "deleteEmailsUsingPOST1WithHttpInfo",
    value: function deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest) {
      var postBody = deleteEmailsRequest;
      // verify the required parameter 'deleteEmailsRequest' is set
      if (deleteEmailsRequest === undefined || deleteEmailsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'deleteEmailsRequest' when calling deleteEmailsUsingPOST1");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DeleteEmailsResponse["default"];
      return this.apiClient.callApi('/v2/emails:batchRemove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a set of Email Records
     * Removes a set of Email Records
     * @param {module:com.keap.sdk.core/model/DeleteEmailsRequest} deleteEmailsRequest deleteEmailsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/DeleteEmailsResponse}
     */
  }, {
    key: "deleteEmailsUsingPOST1",
    value: function deleteEmailsUsingPOST1(deleteEmailsRequest) {
      return this.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve an Email
     * Retrieves a single Email that has been sent
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent} and HTTP response
     */
  }, {
    key: "getEmailUsingGET1WithHttpInfo",
    value: function getEmailUsingGET1WithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling getEmailUsingGET1");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmailSentWithContent["default"];
      return this.apiClient.callApi('/v2/emails/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Email
     * Retrieves a single Email that has been sent
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent}
     */
  }, {
    key: "getEmailUsingGET1",
    value: function getEmailUsingGET1(id) {
      return this.getEmailUsingGET1WithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Send an Email
     * Sends an Email to a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/EmailSendRequest} [emailSendRequest] emailSendRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "sendEmailUsingPOST1WithHttpInfo",
    value: function sendEmailUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['emailSendRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/emails:send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Send an Email
     * Sends an Email to a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/EmailSendRequest} opts.emailSendRequest emailSendRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "sendEmailUsingPOST1",
    value: function sendEmailUsingPOST1(opts) {
      return this.sendEmailUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();