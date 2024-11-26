"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Company = _interopRequireDefault(require("../model/Company"));
var _CreateCompanyRequest = _interopRequireDefault(require("../model/CreateCompanyRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListCompaniesResponse = _interopRequireDefault(require("../model/ListCompaniesResponse"));
var _PatchCompanyRequest = _interopRequireDefault(require("../model/PatchCompanyRequest"));
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
* Company service.
* @module com.keap.sdk.core/api/CompanyApi
* @version 0.0.20
*/
var CompanyApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new CompanyApi. 
  * @alias module:com.keap.sdk.core/api/CompanyApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function CompanyApi(apiClient) {
    _classCallCheck(this, CompanyApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create a Company
   * Creates a new Company.`country_code` is required if `region` is specified.
   * @param {Object} opts Optional parameters
   * @param {module:com.keap.sdk.core/model/CreateCompanyRequest} [company] company
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Company} and HTTP response
   */
  return _createClass(CompanyApi, [{
    key: "createCompanyUsingPOST1WithHttpInfo",
    value: function createCompanyUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['company'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Company["default"];
      return this.apiClient.callApi('/v2/companies', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Company
     * Creates a new Company.`country_code` is required if `region` is specified.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateCompanyRequest} opts.company company
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Company}
     */
  }, {
    key: "createCompanyUsingPOST1",
    value: function createCompanyUsingPOST1(opts) {
      return this.createCompanyUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a Company
     * Deletes the specified Company
     * @param {String} companyId company_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteCompanyUsingDELETEWithHttpInfo",
    value: function deleteCompanyUsingDELETEWithHttpInfo(companyId) {
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new _Error["default"]("Missing the required parameter 'companyId' when calling deleteCompanyUsingDELETE");
      }
      var pathParams = {
        'company_id': companyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/companies/{company_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Company
     * Deletes the specified Company
     * @param {String} companyId company_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteCompanyUsingDELETE",
    value: function deleteCompanyUsingDELETE(companyId) {
      return this.deleteCompanyUsingDELETEWithHttpInfo(companyId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Company
     * Retrieves a single Company
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Company} and HTTP response
     */
  }, {
    key: "getCompanyUsingGET1WithHttpInfo",
    value: function getCompanyUsingGET1WithHttpInfo(companyId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new _Error["default"]("Missing the required parameter 'companyId' when calling getCompanyUsingGET1");
      }
      var pathParams = {
        'company_id': companyId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Company["default"];
      return this.apiClient.callApi('/v2/companies/{company_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Company
     * Retrieves a single Company
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Company}
     */
  }, {
    key: "getCompanyUsingGET1",
    value: function getCompanyUsingGET1(companyId, opts) {
      return this.getCompanyUsingGET1WithHttpInfo(companyId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Companies
     * Retrieves a list of all Companies
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren't included, by default.)
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListCompaniesResponse} and HTTP response
     */
  }, {
    key: "listCompaniesUsingGET1WithHttpInfo",
    value: function listCompaniesUsingGET1WithHttpInfo(opts) {
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
      var returnType = _ListCompaniesResponse["default"];
      return this.apiClient.callApi('/v2/companies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Companies
     * Retrieves a list of all Companies
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren't included, by default.)
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListCompaniesResponse}
     */
  }, {
    key: "listCompaniesUsingGET1",
    value: function listCompaniesUsingGET1(opts) {
      return this.listCompaniesUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Company
     * Updates a Company with the values provided in the request
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchCompanyRequest} [company] company
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Company} and HTTP response
     */
  }, {
    key: "patchCompanyUsingPATCHWithHttpInfo",
    value: function patchCompanyUsingPATCHWithHttpInfo(companyId, opts) {
      opts = opts || {};
      var postBody = opts['company'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new _Error["default"]("Missing the required parameter 'companyId' when calling patchCompanyUsingPATCH");
      }
      var pathParams = {
        'company_id': companyId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Company["default"];
      return this.apiClient.callApi('/v2/companies/{company_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Company
     * Updates a Company with the values provided in the request
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchCompanyRequest} opts.company company
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Company}
     */
  }, {
    key: "patchCompanyUsingPATCH",
    value: function patchCompanyUsingPATCH(companyId, opts) {
      return this.patchCompanyUsingPATCHWithHttpInfo(companyId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();