"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CancelSubscriptionsRequest = _interopRequireDefault(require("../model/CancelSubscriptionsRequest"));
var _CreateCustomFieldRequest = _interopRequireDefault(require("../model/CreateCustomFieldRequest"));
var _CreateSubscriptionV = _interopRequireDefault(require("../model/CreateSubscriptionV2"));
var _CustomFieldMetaData = _interopRequireDefault(require("../model/CustomFieldMetaData"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ObjectModel = _interopRequireDefault(require("../model/ObjectModel"));
var _RestSubscriptionV = _interopRequireDefault(require("../model/RestSubscriptionV2"));
var _UpdateCustomFieldMetaDataRequest = _interopRequireDefault(require("../model/UpdateCustomFieldMetaDataRequest"));
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
* Subscriptions service.
* @module com.keap.sdk.core/api/SubscriptionsApi
* @version 0.0.23
*/
var SubscriptionsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new SubscriptionsApi. 
  * @alias module:com.keap.sdk.core/api/SubscriptionsApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function SubscriptionsApi(apiClient) {
    _classCallCheck(this, SubscriptionsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Cancel Subscription
   * Cancels the specified subscription
   * @param {String} subscriptionId subscription_id
   * @param {module:com.keap.sdk.core/model/CancelSubscriptionsRequest} cancelSubscriptionsRequest cancelSubscriptionsRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  return _createClass(SubscriptionsApi, [{
    key: "cancelSubscriptionUsingPOSTWithHttpInfo",
    value: function cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest) {
      var postBody = cancelSubscriptionsRequest;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new _Error["default"]("Missing the required parameter 'subscriptionId' when calling cancelSubscriptionUsingPOST");
      }
      // verify the required parameter 'cancelSubscriptionsRequest' is set
      if (cancelSubscriptionsRequest === undefined || cancelSubscriptionsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'cancelSubscriptionsRequest' when calling cancelSubscriptionUsingPOST");
      }
      var pathParams = {
        'subscription_id': subscriptionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/subscriptions/{subscription_id}:deactivate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Cancel Subscription
     * Cancels the specified subscription
     * @param {String} subscriptionId subscription_id
     * @param {module:com.keap.sdk.core/model/CancelSubscriptionsRequest} cancelSubscriptionsRequest cancelSubscriptionsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "cancelSubscriptionUsingPOST",
    value: function cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest) {
      return this.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a Subscription's Custom Field
     * Adds a custom field of the specified type and options to the Subscription object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "createSubscriptionCustomFieldUsingPOSTWithHttpInfo",
    value: function createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField) {
      var postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new _Error["default"]("Missing the required parameter 'customField' when calling createSubscriptionCustomFieldUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/subscriptions/model/customFields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Subscription's Custom Field
     * Adds a custom field of the specified type and options to the Subscription object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "createSubscriptionCustomFieldUsingPOST",
    value: function createSubscriptionCustomFieldUsingPOST(customField) {
      return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create Subscription
     * Creates a subscription with the specified product and product subscription id.
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionV2} createSubscriptionV2 createSubscriptionV2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestSubscriptionV2} and HTTP response
     */
  }, {
    key: "createSubscriptionV2UsingPOSTWithHttpInfo",
    value: function createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2) {
      var postBody = createSubscriptionV2;
      // verify the required parameter 'createSubscriptionV2' is set
      if (createSubscriptionV2 === undefined || createSubscriptionV2 === null) {
        throw new _Error["default"]("Missing the required parameter 'createSubscriptionV2' when calling createSubscriptionV2UsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestSubscriptionV["default"];
      return this.apiClient.callApi('/v2/subscriptions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Subscription
     * Creates a subscription with the specified product and product subscription id.
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionV2} createSubscriptionV2 createSubscriptionV2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestSubscriptionV2}
     */
  }, {
    key: "createSubscriptionV2UsingPOST",
    value: function createSubscriptionV2UsingPOST(createSubscriptionV2) {
      return this.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Subscription's Custom Field Model
     * Gets the custom field's model for the Subscription object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
  }, {
    key: "retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo",
    value: function retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ObjectModel["default"];
      return this.apiClient.callApi('/v2/subscriptions/model', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Subscription's Custom Field Model
     * Gets the custom field's model for the Subscription object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
  }, {
    key: "retrieveSubscriptionCustomFieldModelUsingGET",
    value: function retrieveSubscriptionCustomFieldModelUsingGET() {
      return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Subscription's Custom Field
     * Updates a custom field of the specified type and options to the Subscription object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "updateSubscriptionCustomFieldUsingPATCHWithHttpInfo",
    value: function updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling updateSubscriptionCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateSubscriptionCustomFieldUsingPATCH");
      }
      var pathParams = {
        'custom_field_id': customFieldId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/subscriptions/model/customFields/{custom_field_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Subscription's Custom Field
     * Updates a custom field of the specified type and options to the Subscription object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "updateSubscriptionCustomFieldUsingPATCH",
    value: function updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();