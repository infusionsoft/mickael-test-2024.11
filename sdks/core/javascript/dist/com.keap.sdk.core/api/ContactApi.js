"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _Contact = _interopRequireDefault(require("../model/Contact"));
var _ContactLink = _interopRequireDefault(require("../model/ContactLink"));
var _ContactLinkType = _interopRequireDefault(require("../model/ContactLinkType"));
var _CreateContactLinkTypeRequest = _interopRequireDefault(require("../model/CreateContactLinkTypeRequest"));
var _CreatePatchContactRequest = _interopRequireDefault(require("../model/CreatePatchContactRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _LinkContactsRequest = _interopRequireDefault(require("../model/LinkContactsRequest"));
var _ListBasicContactResponse = _interopRequireDefault(require("../model/ListBasicContactResponse"));
var _ListContactLinkTypesResponse = _interopRequireDefault(require("../model/ListContactLinkTypesResponse"));
var _ListContactLinksResponse = _interopRequireDefault(require("../model/ListContactLinksResponse"));
var _ListContactsResponse = _interopRequireDefault(require("../model/ListContactsResponse"));
var _ObjectModel = _interopRequireDefault(require("../model/ObjectModel"));
var _PaymentMethodList = _interopRequireDefault(require("../model/PaymentMethodList"));
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
* Contact service.
* @module com.keap.sdk.core/api/ContactApi
* @version 0.0.31
*/
var ContactApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new ContactApi. 
  * @alias module:com.keap.sdk.core/api/ContactApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function ContactApi(apiClient) {
    _classCallCheck(this, ContactApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create a Contact Link type
   * Creates a new type of Contact Link.
   * @param {module:com.keap.sdk.core/model/CreateContactLinkTypeRequest} request request
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ContactLinkType} and HTTP response
   */
  return _createClass(ContactApi, [{
    key: "createContactLinkTypeUsingPOSTWithHttpInfo",
    value: function createContactLinkTypeUsingPOSTWithHttpInfo(request) {
      var postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling createContactLinkTypeUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ContactLinkType["default"];
      return this.apiClient.callApi('/v2/contacts/links/types', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Contact Link type
     * Creates a new type of Contact Link.
     * @param {module:com.keap.sdk.core/model/CreateContactLinkTypeRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ContactLinkType}
     */
  }, {
    key: "createContactLinkTypeUsingPOST",
    value: function createContactLinkTypeUsingPOST(request) {
      return this.createContactLinkTypeUsingPOSTWithHttpInfo(request).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create a Contact
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} [contact] contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Contact} and HTTP response
     */
  }, {
    key: "createContactUsingPOST1WithHttpInfo",
    value: function createContactUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['contact'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/v2/contacts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Contact
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} opts.contact contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Contact}
     */
  }, {
    key: "createContactUsingPOST1",
    value: function createContactUsingPOST1(opts) {
      return this.createContactUsingPOST1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a Contact
     * Deletes the specified Contact.
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteContactUsingDELETE1WithHttpInfo",
    value: function deleteContactUsingDELETE1WithHttpInfo(contactId) {
      var postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling deleteContactUsingDELETE1");
      }
      var pathParams = {
        'contact_id': contactId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/contacts/{contact_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Contact
     * Deletes the specified Contact.
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteContactUsingDELETE1",
    value: function deleteContactUsingDELETE1(contactId) {
      return this.deleteContactUsingDELETE1WithHttpInfo(contactId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Contact
     * Retrieves a single Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Contact} and HTTP response
     */
  }, {
    key: "getContactUsingGET1WithHttpInfo",
    value: function getContactUsingGET1WithHttpInfo(contactId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling getContactUsingGET1");
      }
      var pathParams = {
        'contact_id': contactId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Contact
     * Retrieves a single Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Contact}
     */
  }, {
    key: "getContactUsingGET1",
    value: function getContactUsingGET1(contactId, opts) {
      return this.getContactUsingGET1WithHttpInfo(contactId, opts).then(function (response_and_data) {
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
     * Link Contacts
     * Links two Contacts together using the provided Link type
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ContactLink} and HTTP response
     */
  }, {
    key: "linkContactsUsingPOSTWithHttpInfo",
    value: function linkContactsUsingPOSTWithHttpInfo(linkContactsRequest) {
      var postBody = linkContactsRequest;
      // verify the required parameter 'linkContactsRequest' is set
      if (linkContactsRequest === undefined || linkContactsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'linkContactsRequest' when calling linkContactsUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ContactLink["default"];
      return this.apiClient.callApi('/v2/contacts:link', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Link Contacts
     * Links two Contacts together using the provided Link type
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ContactLink}
     */
  }, {
    key: "linkContactsUsingPOST",
    value: function linkContactsUsingPOST(linkContactsRequest) {
      return this.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Contact Link types
     * Retrieves a list of Contact Link types.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/String} [filter] Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue
     * @param {String} [orderBy] 
     * @param {Number} [pageSize] 
     * @param {String} [pageToken] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListContactLinkTypesResponse} and HTTP response
     */
  }, {
    key: "listContactLinkTypesUsingGETWithHttpInfo",
    value: function listContactLinkTypesUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filter': opts['filter'],
        'orderBy': opts['orderBy'],
        'pageSize': opts['pageSize'],
        'pageToken': opts['pageToken']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListContactLinkTypesResponse["default"];
      return this.apiClient.callApi('/v2/contacts/links/types', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Contact Link types
     * Retrieves a list of Contact Link types.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/String} opts.filter Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize 
     * @param {String} opts.pageToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListContactLinkTypesResponse}
     */
  }, {
    key: "listContactLinkTypesUsingGET",
    value: function listContactLinkTypesUsingGET(opts) {
      return this.listContactLinkTypesUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Linked Contacts
     * Retrieves a list of Linked Contacts for a given Contact
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListContactLinksResponse} and HTTP response
     */
  }, {
    key: "listContactLinksUsingGETWithHttpInfo",
    value: function listContactLinksUsingGETWithHttpInfo(contactId) {
      var postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling listContactLinksUsingGET");
      }
      var pathParams = {
        'contact_id': contactId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ListContactLinksResponse["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}/links', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Linked Contacts
     * Retrieves a list of Linked Contacts for a given Contact
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListContactLinksResponse}
     */
  }, {
    key: "listContactLinksUsingGET",
    value: function listContactLinksUsingGET(contactId) {
      return this.listContactLinksUsingGETWithHttpInfo(contactId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Contacts
     * Retrieves a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123;family_name=Smith`  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListContactsResponse} and HTTP response
     */
  }, {
    key: "listContactsUsingGET1WithHttpInfo",
    value: function listContactsUsingGET1WithHttpInfo(opts) {
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
      var returnType = _ListContactsResponse["default"];
      return this.apiClient.callApi('/v2/contacts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Contacts
     * Retrieves a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123;family_name=Smith`  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListContactsResponse}
     */
  }, {
    key: "listContactsUsingGET1",
    value: function listContactsUsingGET1(opts) {
      return this.listContactsUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Payment Methods
     * List all Payment Methods for a Contact.
     * @param {Number} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PaymentMethodList} and HTTP response
     */
  }, {
    key: "listPaymentMethodsUsingGETWithHttpInfo",
    value: function listPaymentMethodsUsingGETWithHttpInfo(contactId) {
      var postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling listPaymentMethodsUsingGET");
      }
      var pathParams = {
        'contact_id': contactId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaymentMethodList["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}/paymentMethods', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Payment Methods
     * List all Payment Methods for a Contact.
     * @param {Number} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PaymentMethodList}
     */
  }, {
    key: "listPaymentMethodsUsingGET",
    value: function listPaymentMethodsUsingGET(contactId) {
      return this.listPaymentMethodsUsingGETWithHttpInfo(contactId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Contact
     * Updates a Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} [contact] contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Contact} and HTTP response
     */
  }, {
    key: "patchContactUsingPATCHWithHttpInfo",
    value: function patchContactUsingPATCHWithHttpInfo(contactId, opts) {
      opts = opts || {};
      var postBody = opts['contact'];
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling patchContactUsingPATCH");
      }
      var pathParams = {
        'contact_id': contactId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Contact["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Contact
     * Updates a Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} opts.contact contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Contact}
     */
  }, {
    key: "patchContactUsingPATCH",
    value: function patchContactUsingPATCH(contactId, opts) {
      return this.patchContactUsingPATCHWithHttpInfo(contactId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve Contact Model
     * Get the custom fields and optional properties for the Contact object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
  }, {
    key: "retrieveContactModelUsingGET1WithHttpInfo",
    value: function retrieveContactModelUsingGET1WithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ObjectModel["default"];
      return this.apiClient.callApi('/v2/contacts/model', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve Contact Model
     * Get the custom fields and optional properties for the Contact object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
  }, {
    key: "retrieveContactModelUsingGET1",
    value: function retrieveContactModelUsingGET1() {
      return this.retrieveContactModelUsingGET1WithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Link between two Contacts
     * Deletes Link between two Contacts
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "unlinkContactsUsingPOSTWithHttpInfo",
    value: function unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest) {
      var postBody = linkContactsRequest;
      // verify the required parameter 'linkContactsRequest' is set
      if (linkContactsRequest === undefined || linkContactsRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'linkContactsRequest' when calling unlinkContactsUsingPOST");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/contacts:unlink', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete Link between two Contacts
     * Deletes Link between two Contacts
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "unlinkContactsUsingPOST",
    value: function unlinkContactsUsingPOST(linkContactsRequest) {
      return this.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();