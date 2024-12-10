"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AffiliateAddToProgramRequest = _interopRequireDefault(require("../model/AffiliateAddToProgramRequest"));
var _AffiliateCommissionEarned = _interopRequireDefault(require("../model/AffiliateCommissionEarned"));
var _AffiliateCommissionProgramResponse = _interopRequireDefault(require("../model/AffiliateCommissionProgramResponse"));
var _AffiliateLink = _interopRequireDefault(require("../model/AffiliateLink"));
var _AffiliateProgramV = _interopRequireDefault(require("../model/AffiliateProgramV2"));
var _AffiliateRemoveFromProgramRequest = _interopRequireDefault(require("../model/AffiliateRemoveFromProgramRequest"));
var _CreateAffiliateRequest = _interopRequireDefault(require("../model/CreateAffiliateRequest"));
var _CreateCommissionProgramRequest = _interopRequireDefault(require("../model/CreateCommissionProgramRequest"));
var _CreateCustomFieldRequest = _interopRequireDefault(require("../model/CreateCustomFieldRequest"));
var _CreateDefaultCommissionProgramRequest = _interopRequireDefault(require("../model/CreateDefaultCommissionProgramRequest"));
var _CreateOrPatchAffiliateLinkRequest = _interopRequireDefault(require("../model/CreateOrPatchAffiliateLinkRequest"));
var _CreateProductCommissionProgramRequest = _interopRequireDefault(require("../model/CreateProductCommissionProgramRequest"));
var _CreateSubscriptionCommissionProgramRequest = _interopRequireDefault(require("../model/CreateSubscriptionCommissionProgramRequest"));
var _CustomFieldMetaData = _interopRequireDefault(require("../model/CustomFieldMetaData"));
var _DeleteSubscriptionPlanCommissionRequest = _interopRequireDefault(require("../model/DeleteSubscriptionPlanCommissionRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListAffiliateCommissionProgramsResponse = _interopRequireDefault(require("../model/ListAffiliateCommissionProgramsResponse"));
var _ListAffiliateCommissionResponse = _interopRequireDefault(require("../model/ListAffiliateCommissionResponse"));
var _ListAffiliateLinksResponse = _interopRequireDefault(require("../model/ListAffiliateLinksResponse"));
var _ListAffiliateSummariesResponse = _interopRequireDefault(require("../model/ListAffiliateSummariesResponse"));
var _ObjectModel = _interopRequireDefault(require("../model/ObjectModel"));
var _PatchAffiliateRequest = _interopRequireDefault(require("../model/PatchAffiliateRequest"));
var _PatchCommissionProgramRequest = _interopRequireDefault(require("../model/PatchCommissionProgramRequest"));
var _PatchDefaultCommissionProgramRequest = _interopRequireDefault(require("../model/PatchDefaultCommissionProgramRequest"));
var _PatchProductCommissionProgramRequest = _interopRequireDefault(require("../model/PatchProductCommissionProgramRequest"));
var _PatchSubscriptionCommissionProgramRequest = _interopRequireDefault(require("../model/PatchSubscriptionCommissionProgramRequest"));
var _ProductCommissionProgram = _interopRequireDefault(require("../model/ProductCommissionProgram"));
var _RestAffiliate = _interopRequireDefault(require("../model/RestAffiliate"));
var _SetDefaultCommissionProgramResponse = _interopRequireDefault(require("../model/SetDefaultCommissionProgramResponse"));
var _SubscriptionCommissionProgram = _interopRequireDefault(require("../model/SubscriptionCommissionProgram"));
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
* Affiliate service.
* @module com.keap.sdk.core/api/AffiliateApi
* @version 0.0.38
*/
var AffiliateApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new AffiliateApi. 
  * @alias module:com.keap.sdk.core/api/AffiliateApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function AffiliateApi(apiClient) {
    _classCallCheck(this, AffiliateApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Assign Affiliate to Commission program
   * Assigns an Affiliate to Commission Program
   * @param {String} id id
   * @param {module:com.keap.sdk.core/model/AffiliateAddToProgramRequest} affiliateAddToProgramRequest affiliateAddToProgramRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  return _createClass(AffiliateApi, [{
    key: "addAffiliateToProgramUsingPOSTWithHttpInfo",
    value: function addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest) {
      var postBody = affiliateAddToProgramRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling addAffiliateToProgramUsingPOST");
      }
      // verify the required parameter 'affiliateAddToProgramRequest' is set
      if (affiliateAddToProgramRequest === undefined || affiliateAddToProgramRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'affiliateAddToProgramRequest' when calling addAffiliateToProgramUsingPOST");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/affiliates/{id}:assignToProgram', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Assign Affiliate to Commission program
     * Assigns an Affiliate to Commission Program
     * @param {String} id id
     * @param {module:com.keap.sdk.core/model/AffiliateAddToProgramRequest} affiliateAddToProgramRequest affiliateAddToProgramRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "addAffiliateToProgramUsingPOST",
    value: function addAffiliateToProgramUsingPOST(id, affiliateAddToProgramRequest) {
      return this.addAffiliateToProgramUsingPOSTWithHttpInfo(id, affiliateAddToProgramRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Affiliate
     * Creates a single Affiliate
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateAffiliateRequest} [insertAffiliate] Affiliate request to insert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestAffiliate} and HTTP response
     */
  }, {
    key: "addAffiliateUsingPOSTWithHttpInfo",
    value: function addAffiliateUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['insertAffiliate'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestAffiliate["default"];
      return this.apiClient.callApi('/v2/affiliates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Affiliate
     * Creates a single Affiliate
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateAffiliateRequest} opts.insertAffiliate Affiliate request to insert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestAffiliate}
     */
  }, {
    key: "addAffiliateUsingPOST",
    value: function addAffiliateUsingPOST(opts) {
      return this.addAffiliateUsingPOSTWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Affiliate Commission Program
     * Creates an Affiliate Commission Program
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateCommissionProgramRequest} [insertCommissionProgram] Commission Program to insert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse} and HTTP response
     */
  }, {
    key: "addCommissionProgramUsingPOSTWithHttpInfo",
    value: function addCommissionProgramUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['insertCommissionProgram'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AffiliateCommissionProgramResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Affiliate Commission Program
     * Creates an Affiliate Commission Program
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateCommissionProgramRequest} opts.insertCommissionProgram Commission Program to insert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse}
     */
  }, {
    key: "addCommissionProgramUsingPOST",
    value: function addCommissionProgramUsingPOST(opts) {
      return this.addCommissionProgramUsingPOSTWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Assign a Product Commission Program
     * Assigns a Product Commission Program to a Product
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest} [productCommissionProgram] Product Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ProductCommissionProgram} and HTTP response
     */
  }, {
    key: "assignProductCommissionProgramUsingPOSTWithHttpInfo",
    value: function assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, opts) {
      opts = opts || {};
      var postBody = opts['productCommissionProgram'];
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling assignProductCommissionProgramUsingPOST");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProductCommissionProgram["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/productCommissionProgram/{commission_program_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Assign a Product Commission Program
     * Assigns a Product Commission Program to a Product
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateProductCommissionProgramRequest} opts.productCommissionProgram Product Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ProductCommissionProgram}
     */
  }, {
    key: "assignProductCommissionProgramUsingPOST",
    value: function assignProductCommissionProgramUsingPOST(commissionProgramId, opts) {
      return this.assignProductCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Assign a Subscription Commission Program
     * Assigns a Subscription Commission Program to a Subscription
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionCommissionProgramRequest} [subscriptionCommissionProgram] Subscription Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/SubscriptionCommissionProgram} and HTTP response
     */
  }, {
    key: "assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo",
    value: function assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, opts) {
      opts = opts || {};
      var postBody = opts['subscriptionCommissionProgram'];
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling assignSubscriptionCommissionProgramUsingPOST");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SubscriptionCommissionProgram["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/subscriptionCommissionProgram/{commission_program_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Assign a Subscription Commission Program
     * Assigns a Subscription Commission Program to a Subscription
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionCommissionProgramRequest} opts.subscriptionCommissionProgram Subscription Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/SubscriptionCommissionProgram}
     */
  }, {
    key: "assignSubscriptionCommissionProgramUsingPOST",
    value: function assignSubscriptionCommissionProgramUsingPOST(commissionProgramId, opts) {
      return this.assignSubscriptionCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Affiliate Custom Field
     * Creates a single Affiliate Custom Field
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "createAffiliateCustomFieldUsingPOSTWithHttpInfo",
    value: function createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField) {
      var postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new _Error["default"]("Missing the required parameter 'customField' when calling createAffiliateCustomFieldUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/affiliates/model/customFields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Affiliate Custom Field
     * Creates a single Affiliate Custom Field
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "createAffiliateCustomFieldUsingPOST",
    value: function createAffiliateCustomFieldUsingPOST(customField) {
      return this.createAffiliateCustomFieldUsingPOSTWithHttpInfo(customField).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a Default Commission Program
     * Creates a Default Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateDefaultCommissionProgramRequest} [createDefaultCommissionProgramRequest] Values of the Default Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/SetDefaultCommissionProgramResponse} and HTTP response
     */
  }, {
    key: "createDefaultCommissionProgramUsingPOSTWithHttpInfo",
    value: function createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, opts) {
      opts = opts || {};
      var postBody = opts['createDefaultCommissionProgramRequest'];
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling createDefaultCommissionProgramUsingPOST");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SetDefaultCommissionProgramResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/defaultCommissionProgram/{commission_program_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Default Commission Program
     * Creates a Default Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateDefaultCommissionProgramRequest} opts.createDefaultCommissionProgramRequest Values of the Default Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/SetDefaultCommissionProgramResponse}
     */
  }, {
    key: "createDefaultCommissionProgramUsingPOST",
    value: function createDefaultCommissionProgramUsingPOST(commissionProgramId, opts) {
      return this.createDefaultCommissionProgramUsingPOSTWithHttpInfo(commissionProgramId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Affiliate Link
     * Creates a single Affiliate Link
     * @param {module:com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateLink} and HTTP response
     */
  }, {
    key: "createRedirectLinkUsingPOSTWithHttpInfo",
    value: function createRedirectLinkUsingPOSTWithHttpInfo(request) {
      var postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling createRedirectLinkUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AffiliateLink["default"];
      return this.apiClient.callApi('/v2/affiliates/redirects', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Affiliate Link
     * Creates a single Affiliate Link
     * @param {module:com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateLink}
     */
  }, {
    key: "createRedirectLinkUsingPOST",
    value: function createRedirectLinkUsingPOST(request) {
      return this.createRedirectLinkUsingPOSTWithHttpInfo(request).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a Commission Program
     * Deletes a Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo",
    value: function deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId) {
      var postBody = null;
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling deleteAffiliateCommissionProgramUsingDELETE");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/{commission_program_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Commission Program
     * Deletes a Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteAffiliateCommissionProgramUsingDELETE",
    value: function deleteAffiliateCommissionProgramUsingDELETE(commissionProgramId) {
      return this.deleteAffiliateCommissionProgramUsingDELETEWithHttpInfo(commissionProgramId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Affiliate
     * Deletes the specified Affiliate
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteAffiliateUsingDELETEWithHttpInfo",
    value: function deleteAffiliateUsingDELETEWithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling deleteAffiliateUsingDELETE");
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
      return this.apiClient.callApi('/v2/affiliates/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete Affiliate
     * Deletes the specified Affiliate
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteAffiliateUsingDELETE",
    value: function deleteAffiliateUsingDELETE(id) {
      return this.deleteAffiliateUsingDELETEWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Affiliate Link
     * Deletes an Affiliate Link
     * @param {String} redirectId redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteRedirectLinkUsingDELETEWithHttpInfo",
    value: function deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId) {
      var postBody = null;
      // verify the required parameter 'redirectId' is set
      if (redirectId === undefined || redirectId === null) {
        throw new _Error["default"]("Missing the required parameter 'redirectId' when calling deleteRedirectLinkUsingDELETE");
      }
      var pathParams = {
        'redirect_id': redirectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/affiliates/redirects/{redirect_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Affiliate Link
     * Deletes an Affiliate Link
     * @param {String} redirectId redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteRedirectLinkUsingDELETE",
    value: function deleteRedirectLinkUsingDELETE(redirectId) {
      return this.deleteRedirectLinkUsingDELETEWithHttpInfo(redirectId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * @param {String} affiliateId affiliate_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionEarned} and HTTP response
     */
  }, {
    key: "getAffiliateCommissionTotalUsingGETWithHttpInfo",
    value: function getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId) {
      var postBody = null;
      // verify the required parameter 'affiliateId' is set
      if (affiliateId === undefined || affiliateId === null) {
        throw new _Error["default"]("Missing the required parameter 'affiliateId' when calling getAffiliateCommissionTotalUsingGET");
      }
      var pathParams = {
        'affiliate_id': affiliateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AffiliateCommissionEarned["default"];
      return this.apiClient.callApi('/v2/affiliates/{affiliate_id}/commissionTotal', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Affiliate Commission Earned and View LedgerURl for portal
     * Get the Affiliate Commission Earned and View LedgerURl for portal
     * @param {String} affiliateId affiliate_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionEarned}
     */
  }, {
    key: "getAffiliateCommissionTotalUsingGET",
    value: function getAffiliateCommissionTotalUsingGET(affiliateId) {
      return this.getAffiliateCommissionTotalUsingGETWithHttpInfo(affiliateId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Affiliate Commission and Clawbacks
     * Retrieve a list of Affiliate's Commissions and Clawbacks
     * @param {String} affiliateId affiliate_id
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAffiliateCommissionResponse} and HTTP response
     */
  }, {
    key: "getAffiliateCommissionsUsingGETWithHttpInfo",
    value: function getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'affiliateId' is set
      if (affiliateId === undefined || affiliateId === null) {
        throw new _Error["default"]("Missing the required parameter 'affiliateId' when calling getAffiliateCommissionsUsingGET");
      }
      var pathParams = {
        'affiliate_id': affiliateId
      };
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
      var returnType = _ListAffiliateCommissionResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/{affiliate_id}:commissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Affiliate Commission and Clawbacks
     * Retrieve a list of Affiliate's Commissions and Clawbacks
     * @param {String} affiliateId affiliate_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) affiliateId  - (String) since  - (String) until  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - date_earned   One of the following directions:   - asc   - date_created   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAffiliateCommissionResponse}
     */
  }, {
    key: "getAffiliateCommissionsUsingGET",
    value: function getAffiliateCommissionsUsingGET(affiliateId, opts) {
      return this.getAffiliateCommissionsUsingGETWithHttpInfo(affiliateId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Affiliate Model
     * Get the custom fields and optional properties for the Affiliate object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
  }, {
    key: "getAffiliateCustomFieldsUsingGETWithHttpInfo",
    value: function getAffiliateCustomFieldsUsingGETWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ObjectModel["default"];
      return this.apiClient.callApi('/v2/affiliates/model', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Affiliate Model
     * Get the custom fields and optional properties for the Affiliate object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
  }, {
    key: "getAffiliateCustomFieldsUsingGET",
    value: function getAffiliateCustomFieldsUsingGET() {
      return this.getAffiliateCustomFieldsUsingGETWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve an Affiliate
     * Retrieves a single Affiliate
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestAffiliate} and HTTP response
     */
  }, {
    key: "getAffiliateUsingGET1WithHttpInfo",
    value: function getAffiliateUsingGET1WithHttpInfo(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling getAffiliateUsingGET1");
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
      var returnType = _RestAffiliate["default"];
      return this.apiClient.callApi('/v2/affiliates/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Affiliate
     * Retrieves a single Affiliate
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestAffiliate}
     */
  }, {
    key: "getAffiliateUsingGET1",
    value: function getAffiliateUsingGET1(id) {
      return this.getAffiliateUsingGET1WithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Commission Program
     * Retrieves a single Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateProgramV2} and HTTP response
     */
  }, {
    key: "getCommissionProgramUsingGETWithHttpInfo",
    value: function getCommissionProgramUsingGETWithHttpInfo(commissionProgramId) {
      var postBody = null;
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling getCommissionProgramUsingGET");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AffiliateProgramV["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/{commission_program_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Commission Program
     * Retrieves a single Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateProgramV2}
     */
  }, {
    key: "getCommissionProgramUsingGET",
    value: function getCommissionProgramUsingGET(commissionProgramId) {
      return this.getCommissionProgramUsingGETWithHttpInfo(commissionProgramId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve an Affiliate Link
     * Retrieves information about a single Affiliate Link
     * @param {String} redirectId redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateLink} and HTTP response
     */
  }, {
    key: "getRedirectLinkUsingGETWithHttpInfo",
    value: function getRedirectLinkUsingGETWithHttpInfo(redirectId) {
      var postBody = null;
      // verify the required parameter 'redirectId' is set
      if (redirectId === undefined || redirectId === null) {
        throw new _Error["default"]("Missing the required parameter 'redirectId' when calling getRedirectLinkUsingGET");
      }
      var pathParams = {
        'redirect_id': redirectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AffiliateLink["default"];
      return this.apiClient.callApi('/v2/affiliates/redirects/{redirect_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Affiliate Link
     * Retrieves information about a single Affiliate Link
     * @param {String} redirectId redirect_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateLink}
     */
  }, {
    key: "getRedirectLinkUsingGET",
    value: function getRedirectLinkUsingGET(redirectId) {
      return this.getRedirectLinkUsingGETWithHttpInfo(redirectId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Affiliate Commission Programs
     * Retrieves a list of Affiliate Commission Programs
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAffiliateCommissionProgramsResponse} and HTTP response
     */
  }, {
    key: "listAffiliateCommissionProgramsUsingGETWithHttpInfo",
    value: function listAffiliateCommissionProgramsUsingGETWithHttpInfo(opts) {
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
      var returnType = _ListAffiliateCommissionProgramsResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Affiliate Commission Programs
     * Retrieves a list of Affiliate Commission Programs
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAffiliateCommissionProgramsResponse}
     */
  }, {
    key: "listAffiliateCommissionProgramsUsingGET",
    value: function listAffiliateCommissionProgramsUsingGET(opts) {
      return this.listAffiliateCommissionProgramsUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Affiliate Links
     * Retrieves a list of Affiliate Links
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAffiliateLinksResponse} and HTTP response
     */
  }, {
    key: "listAffiliateLinksUsingGETWithHttpInfo",
    value: function listAffiliateLinksUsingGETWithHttpInfo(opts) {
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
      var returnType = _ListAffiliateLinksResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/redirects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Affiliate Links
     * Retrieves a list of Affiliate Links
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name   - (String) affiliate_id  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   - date_created   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAffiliateLinksResponse}
     */
  }, {
    key: "listAffiliateLinksUsingGET",
    value: function listAffiliateLinksUsingGET(opts) {
      return this.listAffiliateLinksUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Affiliate Summaries
     * Retrieve a list of Affiliate Summaries
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
     * @param {String} [orderBy] Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListAffiliateSummariesResponse} and HTTP response
     */
  }, {
    key: "listSummariesUsingGET1WithHttpInfo",
    value: function listSummariesUsingGET1WithHttpInfo(opts) {
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
      var returnType = _ListAffiliateSummariesResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/summaries', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Affiliate Summaries
     * Retrieve a list of Affiliate Summaries
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are: - (List[String]) affiliate_ids - (String) since_time - (String) until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:  - `filter=since_time%3D%3D2024-09-17T-15:50+00`  - `filter=until_time%3D%3D2024-09-17T-15:50+00`  - `filter=affiliate_ids%3D%3D123,456,789` 
     * @param {String} opts.orderBy Attribute and direction to order items. One of the following fields: - affiliate_id - amount_earned - balance - clawbacks One of the following directions: - asc - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListAffiliateSummariesResponse}
     */
  }, {
    key: "listSummariesUsingGET1",
    value: function listSummariesUsingGET1(opts) {
      return this.listSummariesUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Affiliate Commission Program
     * Updates the properties of an Affiliate Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {module:com.keap.sdk.core/model/PatchCommissionProgramRequest} patchCommissionProgramRequest patchCommissionProgramRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse} and HTTP response
     */
  }, {
    key: "patchCommissionProgramUsingPATCHWithHttpInfo",
    value: function patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, opts) {
      opts = opts || {};
      var postBody = patchCommissionProgramRequest;
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling patchCommissionProgramUsingPATCH");
      }
      // verify the required parameter 'patchCommissionProgramRequest' is set
      if (patchCommissionProgramRequest === undefined || patchCommissionProgramRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'patchCommissionProgramRequest' when calling patchCommissionProgramUsingPATCH");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AffiliateCommissionProgramResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/{commission_program_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Affiliate Commission Program
     * Updates the properties of an Affiliate Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {module:com.keap.sdk.core/model/PatchCommissionProgramRequest} patchCommissionProgramRequest patchCommissionProgramRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse}
     */
  }, {
    key: "patchCommissionProgramUsingPATCH",
    value: function patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, opts) {
      return this.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Default Commission Program
     * Updates a Default Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [updateMask] update_mask
     * @param {module:com.keap.sdk.core/model/PatchDefaultCommissionProgramRequest} [patchDefaultCommissionProgramRequest] Values of the default Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/SetDefaultCommissionProgramResponse} and HTTP response
     */
  }, {
    key: "patchDefaultCommissionProgramUsingPATCHWithHttpInfo",
    value: function patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, opts) {
      opts = opts || {};
      var postBody = opts['patchDefaultCommissionProgramRequest'];
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling patchDefaultCommissionProgramUsingPATCH");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SetDefaultCommissionProgramResponse["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/defaultCommissionPrograms/{commission_program_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Default Commission Program
     * Updates a Default Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.updateMask update_mask
     * @param {module:com.keap.sdk.core/model/PatchDefaultCommissionProgramRequest} opts.patchDefaultCommissionProgramRequest Values of the default Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/SetDefaultCommissionProgramResponse}
     */
  }, {
    key: "patchDefaultCommissionProgramUsingPATCH",
    value: function patchDefaultCommissionProgramUsingPATCH(commissionProgramId, opts) {
      return this.patchDefaultCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Product Commission Program
     * Updates a Product Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [updateMask] update_mask
     * @param {module:com.keap.sdk.core/model/PatchProductCommissionProgramRequest} [patchProductCommissionProgramRequest] Values of the product Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ProductCommissionProgram} and HTTP response
     */
  }, {
    key: "patchProductCommissionProgramUsingPATCHWithHttpInfo",
    value: function patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, opts) {
      opts = opts || {};
      var postBody = opts['patchProductCommissionProgramRequest'];
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling patchProductCommissionProgramUsingPATCH");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProductCommissionProgram["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/productCommissionPrograms/{commission_program_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Product Commission Program
     * Updates a Product Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.updateMask update_mask
     * @param {module:com.keap.sdk.core/model/PatchProductCommissionProgramRequest} opts.patchProductCommissionProgramRequest Values of the product Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ProductCommissionProgram}
     */
  }, {
    key: "patchProductCommissionProgramUsingPATCH",
    value: function patchProductCommissionProgramUsingPATCH(commissionProgramId, opts) {
      return this.patchProductCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Subscription Commission Program
     * Updates a Subscription Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [updateMask] update_mask
     * @param {module:com.keap.sdk.core/model/PatchSubscriptionCommissionProgramRequest} [patchSubscriptionCommissionProgramRequest] Values of the subscription Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/SubscriptionCommissionProgram} and HTTP response
     */
  }, {
    key: "patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo",
    value: function patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, opts) {
      opts = opts || {};
      var postBody = opts['patchSubscriptionCommissionProgramRequest'];
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionProgramId' when calling patchSubscriptionCommissionProgramUsingPATCH");
      }
      var pathParams = {
        'commission_program_id': commissionProgramId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SubscriptionCommissionProgram["default"];
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/subscriptionCommissionPrograms/{commission_program_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Subscription Commission Program
     * Updates a Subscription Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.updateMask update_mask
     * @param {module:com.keap.sdk.core/model/PatchSubscriptionCommissionProgramRequest} opts.patchSubscriptionCommissionProgramRequest Values of the subscription Commission Program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/SubscriptionCommissionProgram}
     */
  }, {
    key: "patchSubscriptionCommissionProgramUsingPATCH",
    value: function patchSubscriptionCommissionProgramUsingPATCH(commissionProgramId, opts) {
      return this.patchSubscriptionCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove an Affiliate from a Commission Program
     * Removes an Affiliate from a Commission Program
     * @param {String} id id
     * @param {module:com.keap.sdk.core/model/AffiliateRemoveFromProgramRequest} removeFromProgramRequest removeFromProgramRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "removeAffiliateFromProgramUsingPOSTWithHttpInfo",
    value: function removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest) {
      var postBody = removeFromProgramRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling removeAffiliateFromProgramUsingPOST");
      }
      // verify the required parameter 'removeFromProgramRequest' is set
      if (removeFromProgramRequest === undefined || removeFromProgramRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'removeFromProgramRequest' when calling removeAffiliateFromProgramUsingPOST");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/affiliates/{id}:removeFromProgram', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove an Affiliate from a Commission Program
     * Removes an Affiliate from a Commission Program
     * @param {String} id id
     * @param {module:com.keap.sdk.core/model/AffiliateRemoveFromProgramRequest} removeFromProgramRequest removeFromProgramRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "removeAffiliateFromProgramUsingPOST",
    value: function removeAffiliateFromProgramUsingPOST(id, removeFromProgramRequest) {
      return this.removeAffiliateFromProgramUsingPOSTWithHttpInfo(id, removeFromProgramRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove a Subscription from a Commission Program
     * Removes a Subscription from a Commission Program
     * @param {String} commissionId commission_id
     * @param {module:com.keap.sdk.core/model/DeleteSubscriptionPlanCommissionRequest} deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo",
    value: function removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest) {
      var postBody = deleteSubscriptionPlanCommissionRequest;
      // verify the required parameter 'commissionId' is set
      if (commissionId === undefined || commissionId === null) {
        throw new _Error["default"]("Missing the required parameter 'commissionId' when calling removeSubscriptionPlanCommissionFromCommissionsUsingPOST");
      }
      // verify the required parameter 'deleteSubscriptionPlanCommissionRequest' is set
      if (deleteSubscriptionPlanCommissionRequest === undefined || deleteSubscriptionPlanCommissionRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'deleteSubscriptionPlanCommissionRequest' when calling removeSubscriptionPlanCommissionFromCommissionsUsingPOST");
      }
      var pathParams = {
        'commission_id': commissionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/affiliates/commissionPrograms/{commission_id}:removeSubscriptionCommission', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove a Subscription from a Commission Program
     * Removes a Subscription from a Commission Program
     * @param {String} commissionId commission_id
     * @param {module:com.keap.sdk.core/model/DeleteSubscriptionPlanCommissionRequest} deleteSubscriptionPlanCommissionRequest deleteSubscriptionPlanCommissionRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "removeSubscriptionPlanCommissionFromCommissionsUsingPOST",
    value: function removeSubscriptionPlanCommissionFromCommissionsUsingPOST(commissionId, deleteSubscriptionPlanCommissionRequest) {
      return this.removeSubscriptionPlanCommissionFromCommissionsUsingPOSTWithHttpInfo(commissionId, deleteSubscriptionPlanCommissionRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Custom Field
     * Updates a custom field of the specified type and options to the Affiliate object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "updateAffiliateCustomFieldUsingPATCHWithHttpInfo",
    value: function updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling updateAffiliateCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateAffiliateCustomFieldUsingPATCH");
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
      return this.apiClient.callApi('/v2/affiliates/model/customFields/{custom_field_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Custom Field
     * Updates a custom field of the specified type and options to the Affiliate object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "updateAffiliateCustomFieldUsingPATCH",
    value: function updateAffiliateCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateAffiliateCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an Affiliate
     * Updates a single Affiliate
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/PatchAffiliateRequest} [patchAffiliate] Affiliate request to patch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestAffiliate} and HTTP response
     */
  }, {
    key: "updateAffiliateUsingPATCHWithHttpInfo",
    value: function updateAffiliateUsingPATCHWithHttpInfo(id, opts) {
      opts = opts || {};
      var postBody = opts['patchAffiliate'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling updateAffiliateUsingPATCH");
      }
      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestAffiliate["default"];
      return this.apiClient.callApi('/v2/affiliates/{id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an Affiliate
     * Updates a single Affiliate
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/PatchAffiliateRequest} opts.patchAffiliate Affiliate request to patch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestAffiliate}
     */
  }, {
    key: "updateAffiliateUsingPATCH",
    value: function updateAffiliateUsingPATCH(id, opts) {
      return this.updateAffiliateUsingPATCHWithHttpInfo(id, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an Affiliate Link
     * Updates an Affiliate Link
     * @param {String} redirectId redirect_id
     * @param {module:com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateLink} and HTTP response
     */
  }, {
    key: "updateRedirectLinkUsingPATCHWithHttpInfo",
    value: function updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request) {
      var postBody = request;
      // verify the required parameter 'redirectId' is set
      if (redirectId === undefined || redirectId === null) {
        throw new _Error["default"]("Missing the required parameter 'redirectId' when calling updateRedirectLinkUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateRedirectLinkUsingPATCH");
      }
      var pathParams = {
        'redirect_id': redirectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AffiliateLink["default"];
      return this.apiClient.callApi('/v2/affiliates/redirects/{redirect_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an Affiliate Link
     * Updates an Affiliate Link
     * @param {String} redirectId redirect_id
     * @param {module:com.keap.sdk.core/model/CreateOrPatchAffiliateLinkRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateLink}
     */
  }, {
    key: "updateRedirectLinkUsingPATCH",
    value: function updateRedirectLinkUsingPATCH(redirectId, request) {
      return this.updateRedirectLinkUsingPATCHWithHttpInfo(redirectId, request).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();