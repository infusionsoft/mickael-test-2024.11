"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _AddContactsToSequenceRequest = _interopRequireDefault(require("../model/AddContactsToSequenceRequest"));
var _AddContactsToSequenceResponse = _interopRequireDefault(require("../model/AddContactsToSequenceResponse"));
var _Campaign = _interopRequireDefault(require("../model/Campaign"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListCampaignsResponse = _interopRequireDefault(require("../model/ListCampaignsResponse"));
var _RemoveContactsFromSequenceRequest = _interopRequireDefault(require("../model/RemoveContactsFromSequenceRequest"));
var _RemoveContactsFromSequenceResponse = _interopRequireDefault(require("../model/RemoveContactsFromSequenceResponse"));
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
* Campaign service.
* @module com.keap.sdk.core/api/CampaignApi
* @version 0.0.24
*/
var CampaignApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new CampaignApi. 
  * @alias module:com.keap.sdk.core/api/CampaignApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function CampaignApi(apiClient) {
    _classCallCheck(this, CampaignApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Add Contacts to Campaign Sequence
   * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
   * @param {String} campaignId campaign_id
   * @param {String} sequenceId sequence_id
   * @param {module:com.keap.sdk.core/model/AddContactsToSequenceRequest} addContactsToSequenceRequest addContactsToSequenceRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AddContactsToSequenceResponse} and HTTP response
   */
  return _createClass(CampaignApi, [{
    key: "addContactsToCampaignSequenceUsingPOST1WithHttpInfo",
    value: function addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest) {
      var postBody = addContactsToSequenceRequest;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new _Error["default"]("Missing the required parameter 'campaignId' when calling addContactsToCampaignSequenceUsingPOST1");
      }
      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new _Error["default"]("Missing the required parameter 'sequenceId' when calling addContactsToCampaignSequenceUsingPOST1");
      }
      // verify the required parameter 'addContactsToSequenceRequest' is set
      if (addContactsToSequenceRequest === undefined || addContactsToSequenceRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'addContactsToSequenceRequest' when calling addContactsToCampaignSequenceUsingPOST1");
      }
      var pathParams = {
        'campaign_id': campaignId,
        'sequence_id': sequenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _AddContactsToSequenceResponse["default"];
      return this.apiClient.callApi('/v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Add Contacts to Campaign Sequence
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * @param {String} campaignId campaign_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/AddContactsToSequenceRequest} addContactsToSequenceRequest addContactsToSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AddContactsToSequenceResponse}
     */
  }, {
    key: "addContactsToCampaignSequenceUsingPOST1",
    value: function addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest) {
      return this.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Campaign
     * Retrieves a single campaign
     * @param {String} campaignId campaign_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Campaign} and HTTP response
     */
  }, {
    key: "getCampaignUsingGET1WithHttpInfo",
    value: function getCampaignUsingGET1WithHttpInfo(campaignId) {
      var postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new _Error["default"]("Missing the required parameter 'campaignId' when calling getCampaignUsingGET1");
      }
      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Campaign["default"];
      return this.apiClient.callApi('/v2/campaigns/{campaign_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Campaign
     * Retrieves a single campaign
     * @param {String} campaignId campaign_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Campaign}
     */
  }, {
    key: "getCampaignUsingGET1",
    value: function getCampaignUsingGET1(campaignId) {
      return this.getCampaignUsingGET1WithHttpInfo(campaignId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Campaigns
     * Retrieves all campaigns for the authenticated user
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name.   - `filter=name%3D%3DSpring Campaign`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @param {Boolean} [stats] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListCampaignsResponse} and HTTP response
     */
  }, {
    key: "listCampaignsUsingGET1WithHttpInfo",
    value: function listCampaignsUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'stats': opts['stats']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListCampaignsResponse["default"];
      return this.apiClient.callApi('/v2/campaigns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Campaigns
     * Retrieves all campaigns for the authenticated user
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name.   - `filter=name%3D%3DSpring Campaign`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @param {Boolean} opts.stats 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListCampaignsResponse}
     */
  }, {
    key: "listCampaignsUsingGET1",
    value: function listCampaignsUsingGET1(opts) {
      return this.listCampaignsUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove Contacts from Campaign Sequence
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * @param {String} campaignId campaign_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/RemoveContactsFromSequenceRequest} removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RemoveContactsFromSequenceResponse} and HTTP response
     */
  }, {
    key: "removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo",
    value: function removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest) {
      var postBody = removeContactsFromSequenceRequest;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new _Error["default"]("Missing the required parameter 'campaignId' when calling removeContactsFromCampaignSequenceUsingPOST");
      }
      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new _Error["default"]("Missing the required parameter 'sequenceId' when calling removeContactsFromCampaignSequenceUsingPOST");
      }
      // verify the required parameter 'removeContactsFromSequenceRequest' is set
      if (removeContactsFromSequenceRequest === undefined || removeContactsFromSequenceRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'removeContactsFromSequenceRequest' when calling removeContactsFromCampaignSequenceUsingPOST");
      }
      var pathParams = {
        'campaign_id': campaignId,
        'sequence_id': sequenceId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RemoveContactsFromSequenceResponse["default"];
      return this.apiClient.callApi('/v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove Contacts from Campaign Sequence
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * @param {String} campaignId campaign_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/RemoveContactsFromSequenceRequest} removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RemoveContactsFromSequenceResponse}
     */
  }, {
    key: "removeContactsFromCampaignSequenceUsingPOST",
    value: function removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest) {
      return this.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();