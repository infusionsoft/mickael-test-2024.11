"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateUserRequestV = _interopRequireDefault(require("../model/CreateUserRequestV2"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _GetUserInfoResponse = _interopRequireDefault(require("../model/GetUserInfoResponse"));
var _ListUserResponse = _interopRequireDefault(require("../model/ListUserResponse"));
var _PatchUserRequestV = _interopRequireDefault(require("../model/PatchUserRequestV2"));
var _User = _interopRequireDefault(require("../model/User"));
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
* Users service.
* @module com.keap.sdk.core/api/UsersApi
* @version 0.0.31
*/
var UsersApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:com.keap.sdk.core/api/UsersApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create a User
   * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
   * @param {Object} opts Optional parameters
   * @param {module:com.keap.sdk.core/model/CreateUserRequestV2} [user] user
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/User} and HTTP response
   */
  return _createClass(UsersApi, [{
    key: "createUserUsingPOST1WithHttpInfo",
    value: function createUserUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['user'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/v2/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a User
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateUserRequestV2} opts.user user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/User}
     */
  }, {
    key: "createUserUsingPOST1",
    value: function createUserUsingPOST1(opts) {
      return this.createUserUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get User
     * Retrieves a specific User
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/User} and HTTP response
     */
  }, {
    key: "getUserByIdUsingGETWithHttpInfo",
    value: function getUserByIdUsingGETWithHttpInfo(userId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling getUserByIdUsingGET");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/v2/users/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get User
     * Retrieves a specific User
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/User}
     */
  }, {
    key: "getUserByIdUsingGET",
    value: function getUserByIdUsingGET(userId) {
      return this.getUserByIdUsingGETWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve User Info
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetUserInfoResponse} and HTTP response
     */
  }, {
    key: "getUserInfoUsingGET1WithHttpInfo",
    value: function getUserInfoUsingGET1WithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetUserInfoResponse["default"];
      return this.apiClient.callApi('/v2/oauth/connect/userinfo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve User Info
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetUserInfoResponse}
     */
  }, {
    key: "getUserInfoUsingGET1",
    value: function getUserInfoUsingGET1() {
      return this.getUserInfoUsingGET1WithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get User email signature
     * Retrieves a HTML snippet that contains the user's email signature.
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
  }, {
    key: "getUserSignatureUsingGET1WithHttpInfo",
    value: function getUserSignatureUsingGET1WithHttpInfo(userId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling getUserSignatureUsingGET1");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/v2/users/{user_id}/signature', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Get User email signature
     * Retrieves a HTML snippet that contains the user's email signature.
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
  }, {
    key: "getUserSignatureUsingGET1",
    value: function getUserSignatureUsingGET1(userId) {
      return this.getUserSignatureUsingGET1WithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Users
     * Retrieves a list of users
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. 'given_name desc'
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListUserResponse} and HTTP response
     */
  }, {
    key: "listUsersUsingGET1WithHttpInfo",
    value: function listUsersUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListUserResponse["default"];
      return this.apiClient.callApi('/v2/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Users
     * Retrieves a list of users
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. 'given_name desc'
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListUserResponse}
     */
  }, {
    key: "listUsersUsingGET1",
    value: function listUsersUsingGET1(opts) {
      return this.listUsersUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update User
     * Updates information on a specific User
     * @param {String} userId user_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchUserRequestV2} [user] user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/User} and HTTP response
     */
  }, {
    key: "patchUserUsingPATCHWithHttpInfo",
    value: function patchUserUsingPATCHWithHttpInfo(userId, opts) {
      opts = opts || {};
      var postBody = opts['user'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new _Error["default"]("Missing the required parameter 'userId' when calling patchUserUsingPATCH");
      }
      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/v2/users/{user_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update User
     * Updates information on a specific User
     * @param {String} userId user_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchUserRequestV2} opts.user user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/User}
     */
  }, {
    key: "patchUserUsingPATCH",
    value: function patchUserUsingPATCH(userId, opts) {
      return this.patchUserUsingPATCHWithHttpInfo(userId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();