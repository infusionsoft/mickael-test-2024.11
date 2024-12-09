"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListSubscriptionPlansResponse = _interopRequireDefault(require("../model/ListSubscriptionPlansResponse"));
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
* SubscriptionPlans service.
* @module com.keap.sdk.core/api/SubscriptionPlansApi
* @version 0.0.35
*/
var SubscriptionPlansApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new SubscriptionPlansApi. 
  * @alias module:com.keap.sdk.core/api/SubscriptionPlansApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function SubscriptionPlansApi(apiClient) {
    _classCallCheck(this, SubscriptionPlansApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * List Subscription Plans
   * Retrieves a list of Subscription Plans
   * @param {Object} opts Optional parameters
   * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name   
   * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
   * @param {Number} [pageSize] Total number of items to return per page
   * @param {String} [pageToken] Page token
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListSubscriptionPlansResponse} and HTTP response
   */
  return _createClass(SubscriptionPlansApi, [{
    key: "listSubscriptionPlansUsingGETWithHttpInfo",
    value: function listSubscriptionPlansUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
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
      var returnType = _ListSubscriptionPlansResponse["default"];
      return this.apiClient.callApi('/v2/subscriptionPlans', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Subscription Plans
     * Retrieves a list of Subscription Plans
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name   
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListSubscriptionPlansResponse}
     */
  }, {
    key: "listSubscriptionPlansUsingGET",
    value: function listSubscriptionPlansUsingGET(opts) {
      return this.listSubscriptionPlansUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();