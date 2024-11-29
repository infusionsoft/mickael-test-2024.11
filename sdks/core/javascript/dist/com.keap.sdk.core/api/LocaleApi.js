"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListCountriesResponse = _interopRequireDefault(require("../model/ListCountriesResponse"));
var _ListProvincesResponse = _interopRequireDefault(require("../model/ListProvincesResponse"));
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
* Locale service.
* @module com.keap.sdk.core/api/LocaleApi
* @version 0.0.23
*/
var LocaleApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new LocaleApi. 
  * @alias module:com.keap.sdk.core/api/LocaleApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function LocaleApi(apiClient) {
    _classCallCheck(this, LocaleApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * List Countries
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListCountriesResponse} and HTTP response
   */
  return _createClass(LocaleApi, [{
    key: "listCountriesUsingGET2WithHttpInfo",
    value: function listCountriesUsingGET2WithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListCountriesResponse["default"];
      return this.apiClient.callApi('/v2/locales/countries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Countries
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListCountriesResponse}
     */
  }, {
    key: "listCountriesUsingGET2",
    value: function listCountriesUsingGET2() {
      return this.listCountriesUsingGET2WithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List a Country's Provinces
     * @param {String} countryCode country_code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListProvincesResponse} and HTTP response
     */
  }, {
    key: "listProvincesForCountryUsingGETWithHttpInfo",
    value: function listProvincesForCountryUsingGETWithHttpInfo(countryCode) {
      var postBody = null;
      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw new _Error["default"]("Missing the required parameter 'countryCode' when calling listProvincesForCountryUsingGET");
      }
      var pathParams = {
        'country_code': countryCode
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListProvincesResponse["default"];
      return this.apiClient.callApi('/v2/locales/countries/{country_code}/provinces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List a Country's Provinces
     * @param {String} countryCode country_code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListProvincesResponse}
     */
  }, {
    key: "listProvincesForCountryUsingGET",
    value: function listProvincesForCountryUsingGET(countryCode) {
      return this.listProvincesForCountryUsingGETWithHttpInfo(countryCode).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();