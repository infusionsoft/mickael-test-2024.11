"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CategoryDiscount = _interopRequireDefault(require("../model/CategoryDiscount"));
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
* CategoryDiscount service.
* @module com.keap.sdk.core/api/CategoryDiscountApi
* @version 0.0.24
*/
var CategoryDiscountApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new CategoryDiscountApi. 
  * @alias module:com.keap.sdk.core/api/CategoryDiscountApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function CategoryDiscountApi(apiClient) {
    _classCallCheck(this, CategoryDiscountApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Delete a Category Discount
   * Deletes a specified Category Discount
   * @param {String} discountId discount_id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  return _createClass(CategoryDiscountApi, [{
    key: "deleteDiscountUsingDELETEWithHttpInfo",
    value: function deleteDiscountUsingDELETEWithHttpInfo(discountId) {
      var postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new _Error["default"]("Missing the required parameter 'discountId' when calling deleteDiscountUsingDELETE");
      }
      var pathParams = {
        'discount_id': discountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/discounts/productCategories/{discount_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Category Discount
     * Deletes a specified Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteDiscountUsingDELETE",
    value: function deleteDiscountUsingDELETE(discountId) {
      return this.deleteDiscountUsingDELETEWithHttpInfo(discountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Category Discount
     * Retrieves a single Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CategoryDiscount} and HTTP response
     */
  }, {
    key: "getDiscountUsingGETWithHttpInfo",
    value: function getDiscountUsingGETWithHttpInfo(discountId) {
      var postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new _Error["default"]("Missing the required parameter 'discountId' when calling getDiscountUsingGET");
      }
      var pathParams = {
        'discount_id': discountId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CategoryDiscount["default"];
      return this.apiClient.callApi('/v2/discounts/productCategories/{discount_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Category Discount
     * Retrieves a single Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CategoryDiscount}
     */
  }, {
    key: "getDiscountUsingGET",
    value: function getDiscountUsingGET(discountId) {
      return this.getDiscountUsingGETWithHttpInfo(discountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();