"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ReportExecutionResult = _interopRequireDefault(require("../model/ReportExecutionResult"));
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
* Reporting service.
* @module com.keap.sdk.core/api/ReportingApi
* @version 2.70.0.739356-hf-202411181744
*/
var ReportingApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new ReportingApi. 
  * @alias module:com.keap.sdk.core/api/ReportingApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function ReportingApi(apiClient) {
    _classCallCheck(this, ReportingApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Run a Report
   * Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>
   * @param {String} reportId The unique identifier of the report (Saved Search) to execute
   * @param {Object} opts Optional parameters
   * @param {String} [fields] Comma-separated list of fields to return (or do not supply a value to return all)
   * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
   * @param {Number} [pageSize = 1000)] Total number of items to return per page
   * @param {String} [pageToken] Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ReportExecutionResult} and HTTP response
   */
  return _createClass(ReportingApi, [{
    key: "runReportUsingPOSTWithHttpInfo",
    value: function runReportUsingPOSTWithHttpInfo(reportId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling runReportUsingPOST");
      }
      var pathParams = {
        'report_id': reportId
      };
      var queryParams = {
        'fields': opts['fields'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReportExecutionResult["default"];
      return this.apiClient.callApi('/v2/reporting/reports/{report_id}:run', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Run a Report
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>
     * @param {String} reportId The unique identifier of the report (Saved Search) to execute
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Comma-separated list of fields to return (or do not supply a value to return all)
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page (default to 1000)
     * @param {String} opts.pageToken Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ReportExecutionResult}
     */
  }, {
    key: "runReportUsingPOST",
    value: function runReportUsingPOST(reportId, opts) {
      return this.runReportUsingPOSTWithHttpInfo(reportId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();