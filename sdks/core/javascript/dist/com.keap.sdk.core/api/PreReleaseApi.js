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
var _CancelSubscriptionsRequest = _interopRequireDefault(require("../model/CancelSubscriptionsRequest"));
var _CategoryDiscount = _interopRequireDefault(require("../model/CategoryDiscount"));
var _CreateCommissionProgramRequest = _interopRequireDefault(require("../model/CreateCommissionProgramRequest"));
var _CreateCustomFieldRequest = _interopRequireDefault(require("../model/CreateCustomFieldRequest"));
var _CreateCustomFieldResponse = _interopRequireDefault(require("../model/CreateCustomFieldResponse"));
var _CreateDefaultCommissionProgramRequest = _interopRequireDefault(require("../model/CreateDefaultCommissionProgramRequest"));
var _CreateFunnelIntegrationRequest = _interopRequireDefault(require("../model/CreateFunnelIntegrationRequest"));
var _CreateFunnelIntegrationTriggerEvents = _interopRequireDefault(require("../model/CreateFunnelIntegrationTriggerEvents"));
var _CreateLeadSourceRequest = _interopRequireDefault(require("../model/CreateLeadSourceRequest"));
var _CreateOpportunityRequest = _interopRequireDefault(require("../model/CreateOpportunityRequest"));
var _CreateOpportunityStageRequest = _interopRequireDefault(require("../model/CreateOpportunityStageRequest"));
var _CreateOrPatchAffiliateLinkRequest = _interopRequireDefault(require("../model/CreateOrPatchAffiliateLinkRequest"));
var _CreatePatchTaskRequest = _interopRequireDefault(require("../model/CreatePatchTaskRequest"));
var _CreateProductCommissionProgramRequest = _interopRequireDefault(require("../model/CreateProductCommissionProgramRequest"));
var _CreateReferralRequest = _interopRequireDefault(require("../model/CreateReferralRequest"));
var _CreateRestOrderItemRequest = _interopRequireDefault(require("../model/CreateRestOrderItemRequest"));
var _CreateSubscriptionCommissionProgramRequest = _interopRequireDefault(require("../model/CreateSubscriptionCommissionProgramRequest"));
var _CreateTaskRequest = _interopRequireDefault(require("../model/CreateTaskRequest"));
var _CreateUserRequestV = _interopRequireDefault(require("../model/CreateUserRequestV2"));
var _CustomFieldMetaData = _interopRequireDefault(require("../model/CustomFieldMetaData"));
var _DeleteFunnelIntegrationRequest = _interopRequireDefault(require("../model/DeleteFunnelIntegrationRequest"));
var _DeleteSubscriptionPlanCommissionRequest = _interopRequireDefault(require("../model/DeleteSubscriptionPlanCommissionRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _FunnelIntegrationTriggerResultDTO = _interopRequireDefault(require("../model/FunnelIntegrationTriggerResultDTO"));
var _GetUserInfoResponse = _interopRequireDefault(require("../model/GetUserInfoResponse"));
var _LeadSource = _interopRequireDefault(require("../model/LeadSource"));
var _ListAffiliateCommissionProgramsResponse = _interopRequireDefault(require("../model/ListAffiliateCommissionProgramsResponse"));
var _ListAffiliateCommissionResponse = _interopRequireDefault(require("../model/ListAffiliateCommissionResponse"));
var _ListAffiliateLinksResponse = _interopRequireDefault(require("../model/ListAffiliateLinksResponse"));
var _ListAffiliateSummariesResponse = _interopRequireDefault(require("../model/ListAffiliateSummariesResponse"));
var _ListBasicContactResponse = _interopRequireDefault(require("../model/ListBasicContactResponse"));
var _ListCountriesResponse = _interopRequireDefault(require("../model/ListCountriesResponse"));
var _ListLandingPagesResponse = _interopRequireDefault(require("../model/ListLandingPagesResponse"));
var _ListLeadSourcesResponse = _interopRequireDefault(require("../model/ListLeadSourcesResponse"));
var _ListOpportunitiesResponse = _interopRequireDefault(require("../model/ListOpportunitiesResponse"));
var _ListOpportunityStagesResponse = _interopRequireDefault(require("../model/ListOpportunityStagesResponse"));
var _ListOrders = _interopRequireDefault(require("../model/ListOrders"));
var _ListProductsResponse = _interopRequireDefault(require("../model/ListProductsResponse"));
var _ListProvincesResponse = _interopRequireDefault(require("../model/ListProvincesResponse"));
var _ListRestMerchantResponse = _interopRequireDefault(require("../model/ListRestMerchantResponse"));
var _ListRestShippingMethodsResponse = _interopRequireDefault(require("../model/ListRestShippingMethodsResponse"));
var _ListSubscriptionPlansResponse = _interopRequireDefault(require("../model/ListSubscriptionPlansResponse"));
var _ListTasksResponse = _interopRequireDefault(require("../model/ListTasksResponse"));
var _ListUserResponse = _interopRequireDefault(require("../model/ListUserResponse"));
var _ObjectModel = _interopRequireDefault(require("../model/ObjectModel"));
var _PatchDefaultCommissionProgramRequest = _interopRequireDefault(require("../model/PatchDefaultCommissionProgramRequest"));
var _PatchOpportunityRequest = _interopRequireDefault(require("../model/PatchOpportunityRequest"));
var _PatchProductCommissionProgramRequest = _interopRequireDefault(require("../model/PatchProductCommissionProgramRequest"));
var _PatchSubscriptionCommissionProgramRequest = _interopRequireDefault(require("../model/PatchSubscriptionCommissionProgramRequest"));
var _PatchUserRequestV = _interopRequireDefault(require("../model/PatchUserRequestV2"));
var _ProductCommissionProgram = _interopRequireDefault(require("../model/ProductCommissionProgram"));
var _Referral = _interopRequireDefault(require("../model/Referral"));
var _RestCreateOrderRequest = _interopRequireDefault(require("../model/RestCreateOrderRequest"));
var _RestOpportunityStage = _interopRequireDefault(require("../model/RestOpportunityStage"));
var _RestV2Opportunity = _interopRequireDefault(require("../model/RestV2Opportunity"));
var _RestV2Order = _interopRequireDefault(require("../model/RestV2Order"));
var _RestV2OrderItem = _interopRequireDefault(require("../model/RestV2OrderItem"));
var _RestV2PatchOrderRequest = _interopRequireDefault(require("../model/RestV2PatchOrderRequest"));
var _SetDefaultCommissionProgramResponse = _interopRequireDefault(require("../model/SetDefaultCommissionProgramResponse"));
var _SubscriptionCommissionProgram = _interopRequireDefault(require("../model/SubscriptionCommissionProgram"));
var _Task = _interopRequireDefault(require("../model/Task"));
var _UpdateCustomFieldMetaDataRequest = _interopRequireDefault(require("../model/UpdateCustomFieldMetaDataRequest"));
var _UpdateTaskResponse = _interopRequireDefault(require("../model/UpdateTaskResponse"));
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
* PreRelease service.
* @module com.keap.sdk.core/api/PreReleaseApi
* @version 0.0.18
*/
var PreReleaseApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new PreReleaseApi. 
  * @alias module:com.keap.sdk.core/api/PreReleaseApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function PreReleaseApi(apiClient) {
    _classCallCheck(this, PreReleaseApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Assign Affiliate to Commission program
   * Assigns an Affiliate to Commission Program
   * @param {String} id id
   * @param {module:com.keap.sdk.core/model/AffiliateAddToProgramRequest} affiliateAddToProgramRequest affiliateAddToProgramRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  return _createClass(PreReleaseApi, [{
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
     * Cancel Subscription
     * Cancels the specified subscription
     * @param {String} subscriptionId subscription_id
     * @param {module:com.keap.sdk.core/model/CancelSubscriptionsRequest} cancelSubscriptionsRequest cancelSubscriptionsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
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
     * Create Funnel Integrations into the app.
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} createFunnelIntegrationRequest createFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "createFunnelIntegrationUsingPOSTWithHttpInfo",
    value: function createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest) {
      var postBody = createFunnelIntegrationRequest;
      // verify the required parameter 'createFunnelIntegrationRequest' is set
      if (createFunnelIntegrationRequest === undefined || createFunnelIntegrationRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createFunnelIntegrationRequest' when calling createFunnelIntegrationUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/funnelIntegration', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Funnel Integrations into the app.
     * Allows a list of both triggers / goals, and actions / sequence items to be installed at the same time.
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationRequest} createFunnelIntegrationRequest createFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "createFunnelIntegrationUsingPOST",
    value: function createFunnelIntegrationUsingPOST(createFunnelIntegrationRequest) {
      return this.createFunnelIntegrationUsingPOSTWithHttpInfo(createFunnelIntegrationRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO>} and HTTP response
     */
  }, {
    key: "createIntegrationTriggerEventUsingPOSTWithHttpInfo",
    value: function createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents) {
      var postBody = createFunnelIntegrationTriggerEvents;
      // verify the required parameter 'createFunnelIntegrationTriggerEvents' is set
      if (createFunnelIntegrationTriggerEvents === undefined || createFunnelIntegrationTriggerEvents === null) {
        throw new _Error["default"]("Missing the required parameter 'createFunnelIntegrationTriggerEvents' when calling createIntegrationTriggerEventUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_FunnelIntegrationTriggerResultDTO["default"]];
      return this.apiClient.callApi('/v2/funnelIntegration/trigger', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Achieve Funnel Integration Trigger Goal
     * @param {module:com.keap.sdk.core/model/CreateFunnelIntegrationTriggerEvents} createFunnelIntegrationTriggerEvents createFunnelIntegrationTriggerEvents
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:com.keap.sdk.core/model/FunnelIntegrationTriggerResultDTO>}
     */
  }, {
    key: "createIntegrationTriggerEventUsingPOST",
    value: function createIntegrationTriggerEventUsingPOST(createFunnelIntegrationTriggerEvents) {
      return this.createIntegrationTriggerEventUsingPOSTWithHttpInfo(createFunnelIntegrationTriggerEvents).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a Lead Source
     * Creates a new Lead Source
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateLeadSourceRequest} [leadsource] leadsource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/LeadSource} and HTTP response
     */
  }, {
    key: "createLeadSourceUsingPOSTWithHttpInfo",
    value: function createLeadSourceUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['leadsource'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LeadSource["default"];
      return this.apiClient.callApi('/v2/leadsources', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Lead Source
     * Creates a new Lead Source
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateLeadSourceRequest} opts.leadsource leadsource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/LeadSource}
     */
  }, {
    key: "createLeadSourceUsingPOST",
    value: function createLeadSourceUsingPOST(opts) {
      return this.createLeadSourceUsingPOSTWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a Custom Field
     * Adds a custom field of the specified type and options to the Note object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "createNoteCustomFieldUsingPOST1WithHttpInfo",
    value: function createNoteCustomFieldUsingPOST1WithHttpInfo(customField) {
      var postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new _Error["default"]("Missing the required parameter 'customField' when calling createNoteCustomFieldUsingPOST1");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/notes/model/customFields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Custom Field
     * Adds a custom field of the specified type and options to the Note object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "createNoteCustomFieldUsingPOST1",
    value: function createNoteCustomFieldUsingPOST1(customField) {
      return this.createNoteCustomFieldUsingPOST1WithHttpInfo(customField).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Opportunity Custom Field
     * Adds a custom field of the specified type and options to the Opportunity object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "createOpportunityCustomFieldsUsingPOSTWithHttpInfo",
    value: function createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField) {
      var postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new _Error["default"]("Missing the required parameter 'customField' when calling createOpportunityCustomFieldsUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/opportunities/model/customFields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Opportunity Custom Field
     * Adds a custom field of the specified type and options to the Opportunity object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "createOpportunityCustomFieldsUsingPOST",
    value: function createOpportunityCustomFieldsUsingPOST(customField) {
      return this.createOpportunityCustomFieldsUsingPOSTWithHttpInfo(customField).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Opportunity Stage
     * Creates a new Opportunity Stage
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityStageRequest} [opportunityStage] opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage} and HTTP response
     */
  }, {
    key: "createOpportunityStageUsingPOSTWithHttpInfo",
    value: function createOpportunityStageUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['opportunityStage'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestOpportunityStage["default"];
      return this.apiClient.callApi('/v2/opportunities/stages', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Opportunity Stage
     * Creates a new Opportunity Stage
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityStageRequest} opts.opportunityStage opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage}
     */
  }, {
    key: "createOpportunityStageUsingPOST",
    value: function createOpportunityStageUsingPOST(opts) {
      return this.createOpportunityStageUsingPOSTWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Opportunity
     * Creates a new opportunity as the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityRequest} [opportunity] opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity} and HTTP response
     */
  }, {
    key: "createOpportunityUsingPOST1WithHttpInfo",
    value: function createOpportunityUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['opportunity'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestV2Opportunity["default"];
      return this.apiClient.callApi('/v2/opportunities', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Opportunity
     * Creates a new opportunity as the authenticated user.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateOpportunityRequest} opts.opportunity opportunity
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
  }, {
    key: "createOpportunityUsingPOST1",
    value: function createOpportunityUsingPOST1(opts) {
      return this.createOpportunityUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Order's Custom Field
     * Adds a custom field of the specified type and options to the Order object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "createOrderCustomFieldUsingPOSTWithHttpInfo",
    value: function createOrderCustomFieldUsingPOSTWithHttpInfo(customField) {
      var postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new _Error["default"]("Missing the required parameter 'customField' when calling createOrderCustomFieldUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CustomFieldMetaData["default"];
      return this.apiClient.callApi('/v2/orders/model/customFields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Order's Custom Field
     * Adds a custom field of the specified type and options to the Order object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "createOrderCustomFieldUsingPOST",
    value: function createOrderCustomFieldUsingPOST(customField) {
      return this.createOrderCustomFieldUsingPOSTWithHttpInfo(customField).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Order Item
     * Creates an order item on an existing order.
     * @param {String} orderId order_id
     * @param {module:com.keap.sdk.core/model/CreateRestOrderItemRequest} createRestOrderItemRequest createRestOrderItemRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2OrderItem} and HTTP response
     */
  }, {
    key: "createOrderItemsOnOrderUsingPOST1WithHttpInfo",
    value: function createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest) {
      var postBody = createRestOrderItemRequest;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new _Error["default"]("Missing the required parameter 'orderId' when calling createOrderItemsOnOrderUsingPOST1");
      }
      // verify the required parameter 'createRestOrderItemRequest' is set
      if (createRestOrderItemRequest === undefined || createRestOrderItemRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createRestOrderItemRequest' when calling createOrderItemsOnOrderUsingPOST1");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestV2OrderItem["default"];
      return this.apiClient.callApi('/v2/orders/{order_id}/items', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Order Item
     * Creates an order item on an existing order.
     * @param {String} orderId order_id
     * @param {module:com.keap.sdk.core/model/CreateRestOrderItemRequest} createRestOrderItemRequest createRestOrderItemRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2OrderItem}
     */
  }, {
    key: "createOrderItemsOnOrderUsingPOST1",
    value: function createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest) {
      return this.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create an Order
     * Create a one time Order with Order items.
     * @param {module:com.keap.sdk.core/model/RestCreateOrderRequest} createOrderRequest createOrderRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Order} and HTTP response
     */
  }, {
    key: "createOrderUsingPOST1WithHttpInfo",
    value: function createOrderUsingPOST1WithHttpInfo(createOrderRequest) {
      var postBody = createOrderRequest;
      // verify the required parameter 'createOrderRequest' is set
      if (createOrderRequest === undefined || createOrderRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createOrderRequest' when calling createOrderUsingPOST1");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestV2Order["default"];
      return this.apiClient.callApi('/v2/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create an Order
     * Create a one time Order with Order items.
     * @param {module:com.keap.sdk.core/model/RestCreateOrderRequest} createOrderRequest createOrderRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Order}
     */
  }, {
    key: "createOrderUsingPOST1",
    value: function createOrderUsingPOST1(createOrderRequest) {
      return this.createOrderUsingPOST1WithHttpInfo(createOrderRequest).then(function (response_and_data) {
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
     * Create a Referral
     * Creates a new referral partner referral on the provided contact
     * @param {module:com.keap.sdk.core/model/CreateReferralRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Referral} and HTTP response
     */
  }, {
    key: "createReferralUsingPOSTWithHttpInfo",
    value: function createReferralUsingPOSTWithHttpInfo(request) {
      var postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling createReferralUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Referral["default"];
      return this.apiClient.callApi('/v2/referrals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Referral
     * Creates a new referral partner referral on the provided contact
     * @param {module:com.keap.sdk.core/model/CreateReferralRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Referral}
     */
  }, {
    key: "createReferralUsingPOST",
    value: function createReferralUsingPOST(request) {
      return this.createReferralUsingPOSTWithHttpInfo(request).then(function (response_and_data) {
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
     * Create a Custom Field
     * Adds a custom field of the specified type and options to the Task object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CreateCustomFieldResponse} and HTTP response
     */
  }, {
    key: "createTaskCustomFieldUsingPOST1WithHttpInfo",
    value: function createTaskCustomFieldUsingPOST1WithHttpInfo(customField) {
      var postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new _Error["default"]("Missing the required parameter 'customField' when calling createTaskCustomFieldUsingPOST1");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateCustomFieldResponse["default"];
      return this.apiClient.callApi('/v2/tasks/model/customFields', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Custom Field
     * Adds a custom field of the specified type and options to the Task object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CreateCustomFieldResponse}
     */
  }, {
    key: "createTaskCustomFieldUsingPOST1",
    value: function createTaskCustomFieldUsingPOST1(customField) {
      return this.createTaskCustomFieldUsingPOST1WithHttpInfo(customField).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a Task
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateTaskRequest} [task] task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Task} and HTTP response
     */
  }, {
    key: "createTaskUsingPOST1WithHttpInfo",
    value: function createTaskUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['task'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Task["default"];
      return this.apiClient.callApi('/v2/tasks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Task
     * Creates a new task as the authenticated user.   This endpoint does not currently support setting Custom Field values.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateTaskRequest} opts.task task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Task}
     */
  }, {
    key: "createTaskUsingPOST1",
    value: function createTaskUsingPOST1(opts) {
      return this.createTaskUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a User
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateUserRequestV2} [user] user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/User} and HTTP response
     */
  }, {
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
     * Delete a Category Discount
     * Deletes a specified Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
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
     * Delete a Free Trial Discount
     * Deletes a specified Free Trial Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteDiscountUsingDELETE1WithHttpInfo",
    value: function deleteDiscountUsingDELETE1WithHttpInfo(discountId) {
      var postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new _Error["default"]("Missing the required parameter 'discountId' when calling deleteDiscountUsingDELETE1");
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
      return this.apiClient.callApi('/v2/discounts/freeTrials/{discount_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Free Trial Discount
     * Deletes a specified Free Trial Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteDiscountUsingDELETE1",
    value: function deleteDiscountUsingDELETE1(discountId) {
      return this.deleteDiscountUsingDELETE1WithHttpInfo(discountId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Deletes Funnel Integrations from the app.
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * @param {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteFunnelIntegrationUsingPOSTWithHttpInfo",
    value: function deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest) {
      var postBody = deleteFunnelIntegrationRequest;
      // verify the required parameter 'deleteFunnelIntegrationRequest' is set
      if (deleteFunnelIntegrationRequest === undefined || deleteFunnelIntegrationRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'deleteFunnelIntegrationRequest' when calling deleteFunnelIntegrationUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/funnelIntegration/uninstall', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Deletes Funnel Integrations from the app.
     * Deletes all triggers / goals, and actions / sequence items for the given funnel integration
     * @param {module:com.keap.sdk.core/model/DeleteFunnelIntegrationRequest} deleteFunnelIntegrationRequest deleteFunnelIntegrationRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteFunnelIntegrationUsingPOST",
    value: function deleteFunnelIntegrationUsingPOST(deleteFunnelIntegrationRequest) {
      return this.deleteFunnelIntegrationUsingPOSTWithHttpInfo(deleteFunnelIntegrationRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Opportunity Stage
     * Deletes the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteOpportunityStageUsingDELETEWithHttpInfo",
    value: function deleteOpportunityStageUsingDELETEWithHttpInfo(stageId) {
      var postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new _Error["default"]("Missing the required parameter 'stageId' when calling deleteOpportunityStageUsingDELETE");
      }
      var pathParams = {
        'stage_id': stageId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/opportunities/stages/{stage_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Opportunity Stage
     * Deletes the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteOpportunityStageUsingDELETE",
    value: function deleteOpportunityStageUsingDELETE(stageId) {
      return this.deleteOpportunityStageUsingDELETEWithHttpInfo(stageId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Opportunity
     * Deletes the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteOpportunityUsingDELETEWithHttpInfo",
    value: function deleteOpportunityUsingDELETEWithHttpInfo(opportunityId) {
      var postBody = null;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new _Error["default"]("Missing the required parameter 'opportunityId' when calling deleteOpportunityUsingDELETE");
      }
      var pathParams = {
        'opportunity_id': opportunityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/opportunities/{opportunity_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Opportunity
     * Deletes the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteOpportunityUsingDELETE",
    value: function deleteOpportunityUsingDELETE(opportunityId) {
      return this.deleteOpportunityUsingDELETEWithHttpInfo(opportunityId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete an Order
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteOrderUsingDELETE1WithHttpInfo",
    value: function deleteOrderUsingDELETE1WithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new _Error["default"]("Missing the required parameter 'orderId' when calling deleteOrderUsingDELETE1");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/orders/{order_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete an Order
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteOrderUsingDELETE1",
    value: function deleteOrderUsingDELETE1(orderId) {
      return this.deleteOrderUsingDELETE1WithHttpInfo(orderId).then(function (response_and_data) {
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
     * Delete a Custom Field
     * Deletes a Custom Field from Task.
     * @param {String} customFieldId custom_field_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteTaskCustomFieldUsingDELETEWithHttpInfo",
    value: function deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId) {
      var postBody = null;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling deleteTaskCustomFieldUsingDELETE");
      }
      var pathParams = {
        'custom_field_id': customFieldId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/tasks/model/customFields/{custom_field_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Custom Field
     * Deletes a Custom Field from Task.
     * @param {String} customFieldId custom_field_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteTaskCustomFieldUsingDELETE",
    value: function deleteTaskCustomFieldUsingDELETE(customFieldId) {
      return this.deleteTaskCustomFieldUsingDELETEWithHttpInfo(customFieldId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a Task
     * Deletes a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteTaskUsingDELETE1WithHttpInfo",
    value: function deleteTaskUsingDELETE1WithHttpInfo(taskId) {
      var postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new _Error["default"]("Missing the required parameter 'taskId' when calling deleteTaskUsingDELETE1");
      }
      var pathParams = {
        'task_id': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/tasks/{task_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Task
     * Deletes a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteTaskUsingDELETE1",
    value: function deleteTaskUsingDELETE1(taskId) {
      return this.deleteTaskUsingDELETE1WithHttpInfo(taskId).then(function (response_and_data) {
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
     * Search for Contacts
     * Get a list of Contacts based search parameters.
     * @param {String} searchParam searchParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListBasicContactResponse} and HTTP response
     */
  }, {
    key: "getContactsBySearchTermUsingGETWithHttpInfo",
    value: function getContactsBySearchTermUsingGETWithHttpInfo(searchParam) {
      var postBody = null;
      // verify the required parameter 'searchParam' is set
      if (searchParam === undefined || searchParam === null) {
        throw new _Error["default"]("Missing the required parameter 'searchParam' when calling getContactsBySearchTermUsingGET");
      }
      var pathParams = {};
      var queryParams = {
        'searchParam': searchParam
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListBasicContactResponse["default"];
      return this.apiClient.callApi('/v2/contacts:search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Search for Contacts
     * Get a list of Contacts based search parameters.
     * @param {String} searchParam searchParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListBasicContactResponse}
     */
  }, {
    key: "getContactsBySearchTermUsingGET",
    value: function getContactsBySearchTermUsingGET(searchParam) {
      return this.getContactsBySearchTermUsingGETWithHttpInfo(searchParam).then(function (response_and_data) {
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

    /**
     * Retrieve an Opportunity Stage
     * Retrieves the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage} and HTTP response
     */
  }, {
    key: "getOpportunityStageUsingGETWithHttpInfo",
    value: function getOpportunityStageUsingGETWithHttpInfo(stageId) {
      var postBody = null;
      // verify the required parameter 'stageId' is set
      if (stageId === undefined || stageId === null) {
        throw new _Error["default"]("Missing the required parameter 'stageId' when calling getOpportunityStageUsingGET");
      }
      var pathParams = {
        'stage_id': stageId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestOpportunityStage["default"];
      return this.apiClient.callApi('/v2/opportunities/stages/{stage_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Opportunity Stage
     * Retrieves the specified Opportunity Stage
     * @param {String} stageId stage_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestOpportunityStage}
     */
  }, {
    key: "getOpportunityStageUsingGET",
    value: function getOpportunityStageUsingGET(stageId) {
      return this.getOpportunityStageUsingGETWithHttpInfo(stageId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Opportunity
     * Retrieves the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity} and HTTP response
     */
  }, {
    key: "getOpportunityUsingGET1WithHttpInfo",
    value: function getOpportunityUsingGET1WithHttpInfo(opportunityId) {
      var postBody = null;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new _Error["default"]("Missing the required parameter 'opportunityId' when calling getOpportunityUsingGET1");
      }
      var pathParams = {
        'opportunity_id': opportunityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestV2Opportunity["default"];
      return this.apiClient.callApi('/v2/opportunities/{opportunity_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Opportunity
     * Retrieves the specified Opportunity
     * @param {String} opportunityId opportunity_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
  }, {
    key: "getOpportunityUsingGET1",
    value: function getOpportunityUsingGET1(opportunityId) {
      return this.getOpportunityUsingGET1WithHttpInfo(opportunityId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve an Order
     * Retrieves a single Order for a given order id
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Order} and HTTP response
     */
  }, {
    key: "getOrderUsingGET1WithHttpInfo",
    value: function getOrderUsingGET1WithHttpInfo(orderId) {
      var postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new _Error["default"]("Missing the required parameter 'orderId' when calling getOrderUsingGET1");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestV2Order["default"];
      return this.apiClient.callApi('/v2/orders/{order_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Order
     * Retrieves a single Order for a given order id
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Order}
     */
  }, {
    key: "getOrderUsingGET1",
    value: function getOrderUsingGET1(orderId) {
      return this.getOrderUsingGET1WithHttpInfo(orderId).then(function (response_and_data) {
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
     * Retrieve a Task
     * Retrieves a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Task} and HTTP response
     */
  }, {
    key: "getTaskUsingGET1WithHttpInfo",
    value: function getTaskUsingGET1WithHttpInfo(taskId) {
      var postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new _Error["default"]("Missing the required parameter 'taskId' when calling getTaskUsingGET1");
      }
      var pathParams = {
        'task_id': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Task["default"];
      return this.apiClient.callApi('/v2/tasks/{task_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Task
     * Retrieves a single task
     * @param {String} taskId task_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Task}
     */
  }, {
    key: "getTaskUsingGET1",
    value: function getTaskUsingGET1(taskId) {
      return this.getTaskUsingGET1WithHttpInfo(taskId).then(function (response_and_data) {
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
     * List Countries
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListCountriesResponse} and HTTP response
     */
  }, {
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
     * List Landing Pages
     * Retrieves a list of all landing pages
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListLandingPagesResponse} and HTTP response
     */
  }, {
    key: "listLandingPagesUsingGETWithHttpInfo",
    value: function listLandingPagesUsingGETWithHttpInfo(opts) {
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
      var returnType = _ListLandingPagesResponse["default"];
      return this.apiClient.callApi('/v2/landingpages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Landing Pages
     * Retrieves a list of all landing pages
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListLandingPagesResponse}
     */
  }, {
    key: "listLandingPagesUsingGET",
    value: function listLandingPagesUsingGET(opts) {
      return this.listLandingPagesUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Lead Sources
     * Retrieves a list of lead sources
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListLeadSourcesResponse} and HTTP response
     */
  }, {
    key: "listLeadSourcesUsingGETWithHttpInfo",
    value: function listLeadSourcesUsingGETWithHttpInfo(opts) {
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
      var returnType = _ListLeadSourcesResponse["default"];
      return this.apiClient.callApi('/v2/leadsources', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Lead Sources
     * Retrieves a list of lead sources
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListLeadSourcesResponse}
     */
  }, {
    key: "listLeadSourcesUsingGET",
    value: function listLeadSourcesUsingGET(opts) {
      return this.listLeadSourcesUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Merchant accounts
     * Retrieves a list of Merchant accounts
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123;account_name=abc`
     * @param {String} [orderBy] Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListRestMerchantResponse} and HTTP response
     */
  }, {
    key: "listMerchantsUsingGETWithHttpInfo",
    value: function listMerchantsUsingGETWithHttpInfo(opts) {
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
      var returnType = _ListRestMerchantResponse["default"];
      return this.apiClient.callApi('/v2/merchants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Merchant accounts
     * Retrieves a list of Merchant accounts
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=id%3D%3D123` - `filter=account_name%3D%3Dabc` - `filter=id%3D%3D123;account_name=abc`
     * @param {String} opts.orderBy Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListRestMerchantResponse}
     */
  }, {
    key: "listMerchantsUsingGET",
    value: function listMerchantsUsingGET(opts) {
      return this.listMerchantsUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Opportunities
     * Retrieves a list of all Opportunities.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] fields
     * @param {String} [filter] Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param {String} [orderBy] Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListOpportunitiesResponse} and HTTP response
     */
  }, {
    key: "listOpportunitiesUsingGET1WithHttpInfo",
    value: function listOpportunitiesUsingGET1WithHttpInfo(opts) {
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
      var returnType = _ListOpportunitiesResponse["default"];
      return this.apiClient.callApi('/v2/opportunities', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Opportunities
     * Retrieves a list of all Opportunities.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields fields
     * @param {String} opts.filter Filter to apply, allowed fields are: - (String) stage_id - (String) user_id 
     * @param {String} opts.orderBy Attribute and direction to opportunities items. One of the following fields: - next_action_time - contact_name - opportunity_name - created_time One of the following directions: - asc - desc 
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListOpportunitiesResponse}
     */
  }, {
    key: "listOpportunitiesUsingGET1",
    value: function listOpportunitiesUsingGET1(opts) {
      return this.listOpportunitiesUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List of Opportunity Stages
     * Retrieves a list of Opportunity Stages.
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListOpportunityStagesResponse} and HTTP response
     */
  }, {
    key: "listOpportunityStagesUsingGETWithHttpInfo",
    value: function listOpportunityStagesUsingGETWithHttpInfo(opts) {
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
      var returnType = _ListOpportunityStagesResponse["default"];
      return this.apiClient.callApi('/v2/opportunities/stages', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List of Opportunity Stages
     * Retrieves a list of Opportunity Stages.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order stage items. One of the following fields: - stage_order One of the following directions: - asc - desc 
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListOpportunityStagesResponse}
     */
  }, {
    key: "listOpportunityStagesUsingGET",
    value: function listOpportunityStagesUsingGET(opts) {
      return this.listOpportunityStagesUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List orders
     * Retrieves a list of orders
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123;contact_id%3D%3D567`
     * @param {String} [orderBy] Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListOrders} and HTTP response
     */
  }, {
    key: "listOrdersUsingGET1WithHttpInfo",
    value: function listOrdersUsingGET1WithHttpInfo(opts) {
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
      var returnType = _ListOrders["default"];
      return this.apiClient.callApi('/v2/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List orders
     * Retrieves a list of orders
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are: - (String) product_id - (String) contact_id - (Boolean) paid - (String) created_since_time - (String) created_until_time You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=product_id%3D%3D123` - `filter=contact_id%3D%3D567` - `filter=product_id%3D%3D123;contact_id%3D%3D567`
     * @param {String} opts.orderBy Attribute and direction to order items. One of the following fields: - id - product_id - contact_id - due_date One of the following directions: - asc - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListOrders}
     */
  }, {
    key: "listOrdersUsingGET1",
    value: function listOrdersUsingGET1(opts) {
      return this.listOrdersUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Products
     * Retrieves a list of Products
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name   
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListProductsResponse} and HTTP response
     */
  }, {
    key: "listProductsUsingGET1WithHttpInfo",
    value: function listProductsUsingGET1WithHttpInfo(opts) {
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
      var returnType = _ListProductsResponse["default"];
      return this.apiClient.callApi('/v2/products', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Products
     * Retrieves a list of Products
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name   
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListProductsResponse}
     */
  }, {
    key: "listProductsUsingGET1",
    value: function listProductsUsingGET1(opts) {
      return this.listProductsUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
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

    /**
     * List Shipping methods
     * Retrieves a list of Shipping methods
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListRestShippingMethodsResponse} and HTTP response
     */
  }, {
    key: "listShippingMethodsUsingGETWithHttpInfo",
    value: function listShippingMethodsUsingGETWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListRestShippingMethodsResponse["default"];
      return this.apiClient.callApi('/v2/shipping', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Shipping methods
     * Retrieves a list of Shipping methods
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListRestShippingMethodsResponse}
     */
  }, {
    key: "listShippingMethodsUsingGET",
    value: function listShippingMethodsUsingGET() {
      return this.listShippingMethodsUsingGETWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
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
  }, {
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
     * List Tasks
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * @param {Object} opts Optional parameters
     * @param {String} [endDueTime] 
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @param {String} [startDueTime] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListTasksResponse} and HTTP response
     */
  }, {
    key: "listTasksUsingGET1WithHttpInfo",
    value: function listTasksUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'end_due_time': opts['endDueTime'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'start_due_time': opts['startDueTime']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListTasksResponse["default"];
      return this.apiClient.callApi('/v2/tasks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Tasks
     * Retrieve a list of tasks based on the provided filter. Tasks which are not assigned to a User may be queried with user_id==UNASSIGNED.
     * @param {Object} opts Optional parameters
     * @param {String} opts.endDueTime 
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @param {String} opts.startDueTime 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListTasksResponse}
     */
  }, {
    key: "listTasksUsingGET1",
    value: function listTasksUsingGET1(opts) {
      return this.listTasksUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
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
     * Update an Order
     * Updates an Order
     * @param {String} orderId order_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/RestV2PatchOrderRequest} [order] order
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Order} and HTTP response
     */
  }, {
    key: "patchOrderUsingPATCHWithHttpInfo",
    value: function patchOrderUsingPATCHWithHttpInfo(orderId, opts) {
      opts = opts || {};
      var postBody = opts['order'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new _Error["default"]("Missing the required parameter 'orderId' when calling patchOrderUsingPATCH");
      }
      var pathParams = {
        'order_id': orderId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestV2Order["default"];
      return this.apiClient.callApi('/v2/orders/{order_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an Order
     * Updates an Order
     * @param {String} orderId order_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/RestV2PatchOrderRequest} opts.order order
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Order}
     */
  }, {
    key: "patchOrderUsingPATCH",
    value: function patchOrderUsingPATCH(orderId, opts) {
      return this.patchOrderUsingPATCHWithHttpInfo(orderId, opts).then(function (response_and_data) {
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
     * Update a Task
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * @param {String} taskId task_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreatePatchTaskRequest} [task] task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/UpdateTaskResponse} and HTTP response
     */
  }, {
    key: "patchTaskUsingPATCHWithHttpInfo",
    value: function patchTaskUsingPATCHWithHttpInfo(taskId, opts) {
      opts = opts || {};
      var postBody = opts['task'];
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new _Error["default"]("Missing the required parameter 'taskId' when calling patchTaskUsingPATCH");
      }
      var pathParams = {
        'task_id': taskId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateTaskResponse["default"];
      return this.apiClient.callApi('/v2/tasks/{task_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Task
     * Updates a task with only the values provided in the request.  This endpoint does not currently support updating Custom Field values.
     * @param {String} taskId task_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreatePatchTaskRequest} opts.task task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/UpdateTaskResponse}
     */
  }, {
    key: "patchTaskUsingPATCH",
    value: function patchTaskUsingPATCH(taskId, opts) {
      return this.patchTaskUsingPATCHWithHttpInfo(taskId, opts).then(function (response_and_data) {
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
     * Retrieve Note Model
     * Gets the custom fields for the Note object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
  }, {
    key: "retrieveNoteModelUsingGET1WithHttpInfo",
    value: function retrieveNoteModelUsingGET1WithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ObjectModel["default"];
      return this.apiClient.callApi('/v2/notes/model', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Note Model
     * Gets the custom fields for the Note object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
  }, {
    key: "retrieveNoteModelUsingGET1",
    value: function retrieveNoteModelUsingGET1() {
      return this.retrieveNoteModelUsingGET1WithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve an Order's Custom Field Model
     * Gets the custom field's model for the Order object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
  }, {
    key: "retrieveOrderCustomFieldModelUsingGETWithHttpInfo",
    value: function retrieveOrderCustomFieldModelUsingGETWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ObjectModel["default"];
      return this.apiClient.callApi('/v2/orders/model', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve an Order's Custom Field Model
     * Gets the custom field's model for the Order object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
  }, {
    key: "retrieveOrderCustomFieldModelUsingGET",
    value: function retrieveOrderCustomFieldModelUsingGET() {
      return this.retrieveOrderCustomFieldModelUsingGETWithHttpInfo().then(function (response_and_data) {
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
     * Retrieve Task Model
     * Get the custom fields for the Task object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
  }, {
    key: "retrieveTaskModelUsingGET1WithHttpInfo",
    value: function retrieveTaskModelUsingGET1WithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ObjectModel["default"];
      return this.apiClient.callApi('/v2/tasks/model', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Task Model
     * Get the custom fields for the Task object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
  }, {
    key: "retrieveTaskModelUsingGET1",
    value: function retrieveTaskModelUsingGET1() {
      return this.retrieveTaskModelUsingGET1WithHttpInfo().then(function (response_and_data) {
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
     * Update a Custom Field
     * Updates a custom field of the specified type and options to the Note object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "updateNotesCustomFieldUsingPATCHWithHttpInfo",
    value: function updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling updateNotesCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateNotesCustomFieldUsingPATCH");
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
      return this.apiClient.callApi('/v2/notes/model/customFields/{custom_field_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Custom Field
     * Updates a custom field of the specified type and options to the Note object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "updateNotesCustomFieldUsingPATCH",
    value: function updateNotesCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateNotesCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Opportunity's Custom Field
     * Updates a custom field of the specified type and options to the Opportunity object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "updateOpportunityCustomFieldUsingPATCHWithHttpInfo",
    value: function updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling updateOpportunityCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateOpportunityCustomFieldUsingPATCH");
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
      return this.apiClient.callApi('/v2/opportunities/model/customFields/{custom_field_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Opportunity's Custom Field
     * Updates a custom field of the specified type and options to the Opportunity object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "updateOpportunityCustomFieldUsingPATCH",
    value: function updateOpportunityCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateOpportunityCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an opportunity
     * Updates specified values of a given opportunity
     * @param {String} opportunityId opportunity_id
     * @param {module:com.keap.sdk.core/model/PatchOpportunityRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity} and HTTP response
     */
  }, {
    key: "updateOpportunityUsingPATCHWithHttpInfo",
    value: function updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'opportunityId' is set
      if (opportunityId === undefined || opportunityId === null) {
        throw new _Error["default"]("Missing the required parameter 'opportunityId' when calling updateOpportunityUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateOpportunityUsingPATCH");
      }
      var pathParams = {
        'opportunity_id': opportunityId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestV2Opportunity["default"];
      return this.apiClient.callApi('/v2/opportunities/{opportunity_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an opportunity
     * Updates specified values of a given opportunity
     * @param {String} opportunityId opportunity_id
     * @param {module:com.keap.sdk.core/model/PatchOpportunityRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Opportunity}
     */
  }, {
    key: "updateOpportunityUsingPATCH",
    value: function updateOpportunityUsingPATCH(opportunityId, request, opts) {
      return this.updateOpportunityUsingPATCHWithHttpInfo(opportunityId, request, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update an Order's Custom Field
     * Updates a custom field of the specified type and options to the Order object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "updateOrderCustomFieldUsingPATCHWithHttpInfo",
    value: function updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling updateOrderCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateOrderCustomFieldUsingPATCH");
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
      return this.apiClient.callApi('/v2/orders/model/customFields/{custom_field_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update an Order's Custom Field
     * Updates a custom field of the specified type and options to the Order object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "updateOrderCustomFieldUsingPATCH",
    value: function updateOrderCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts).then(function (response_and_data) {
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

    /**
     * Update a Task's Custom Field
     * Updates a custom field of the specified type and options to the Task object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
  }, {
    key: "updateTaskCustomFieldUsingPATCHWithHttpInfo",
    value: function updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      var postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new _Error["default"]("Missing the required parameter 'customFieldId' when calling updateTaskCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling updateTaskCustomFieldUsingPATCH");
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
      return this.apiClient.callApi('/v2/tasks/model/customFields/{custom_field_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Task's Custom Field
     * Updates a custom field of the specified type and options to the Task object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
  }, {
    key: "updateTaskCustomFieldUsingPATCH",
    value: function updateTaskCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateTaskCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();