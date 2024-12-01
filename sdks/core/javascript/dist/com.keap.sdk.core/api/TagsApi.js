"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ApplyRemoveTagRequest = _interopRequireDefault(require("../model/ApplyRemoveTagRequest"));
var _ApplyTagsResponse = _interopRequireDefault(require("../model/ApplyTagsResponse"));
var _CreateUpdateTagCategoryRequest = _interopRequireDefault(require("../model/CreateUpdateTagCategoryRequest"));
var _CreateUpdateTagRequest = _interopRequireDefault(require("../model/CreateUpdateTagRequest"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _GetTagCategoryResponse = _interopRequireDefault(require("../model/GetTagCategoryResponse"));
var _ListTagCategoriesResponse = _interopRequireDefault(require("../model/ListTagCategoriesResponse"));
var _ListTaggedCompaniesResponse = _interopRequireDefault(require("../model/ListTaggedCompaniesResponse"));
var _ListTaggedContactsResponse = _interopRequireDefault(require("../model/ListTaggedContactsResponse"));
var _ListTagsResponse = _interopRequireDefault(require("../model/ListTagsResponse"));
var _Tag = _interopRequireDefault(require("../model/Tag"));
var _UpdateTagCategoryResponse = _interopRequireDefault(require("../model/UpdateTagCategoryResponse"));
var _UpdateTagResponse = _interopRequireDefault(require("../model/UpdateTagResponse"));
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
* Tags service.
* @module com.keap.sdk.core/api/TagsApi
* @version 0.0.25
*/
var TagsApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TagsApi. 
  * @alias module:com.keap.sdk.core/api/TagsApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function TagsApi(apiClient) {
    _classCallCheck(this, TagsApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Apply Tag
   * Applies a Tag to a list of Contacts.
   * @param {String} tagId tag_id
   * @param {module:com.keap.sdk.core/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ApplyTagsResponse} and HTTP response
   */
  return _createClass(TagsApi, [{
    key: "applyTagsUsingPOSTWithHttpInfo",
    value: function applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest) {
      var postBody = applyRemoveTagRequest;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagId' when calling applyTagsUsingPOST");
      }
      // verify the required parameter 'applyRemoveTagRequest' is set
      if (applyRemoveTagRequest === undefined || applyRemoveTagRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'applyRemoveTagRequest' when calling applyTagsUsingPOST");
      }
      var pathParams = {
        'tag_id': tagId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplyTagsResponse["default"];
      return this.apiClient.callApi('/v2/tags/{tag_id}/contacts:applyTags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Apply Tag
     * Applies a Tag to a list of Contacts.
     * @param {String} tagId tag_id
     * @param {module:com.keap.sdk.core/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ApplyTagsResponse}
     */
  }, {
    key: "applyTagsUsingPOST",
    value: function applyTagsUsingPOST(tagId, applyRemoveTagRequest) {
      return this.applyTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create Tag Category
     * Creates a new Tag Category.
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagCategoryRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Tag} and HTTP response
     */
  }, {
    key: "createTagCategoryUsingPOST1WithHttpInfo",
    value: function createTagCategoryUsingPOST1WithHttpInfo(request) {
      var postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling createTagCategoryUsingPOST1");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Tag["default"];
      return this.apiClient.callApi('/v2/tags/categories', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Tag Category
     * Creates a new Tag Category.
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagCategoryRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Tag}
     */
  }, {
    key: "createTagCategoryUsingPOST1",
    value: function createTagCategoryUsingPOST1(request) {
      return this.createTagCategoryUsingPOST1WithHttpInfo(request).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Create Tag
     * Creates a new Tag
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagRequest} tag tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Tag} and HTTP response
     */
  }, {
    key: "createTagUsingPOST1WithHttpInfo",
    value: function createTagUsingPOST1WithHttpInfo(tag) {
      var postBody = tag;
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new _Error["default"]("Missing the required parameter 'tag' when calling createTagUsingPOST1");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Tag["default"];
      return this.apiClient.callApi('/v2/tags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create Tag
     * Creates a new Tag
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagRequest} tag tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Tag}
     */
  }, {
    key: "createTagUsingPOST1",
    value: function createTagUsingPOST1(tag) {
      return this.createTagUsingPOST1WithHttpInfo(tag).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Tag Category
     * Deletes the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteTagCategoryUsingDELETEWithHttpInfo",
    value: function deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId) {
      var postBody = null;
      // verify the required parameter 'tagCategoryId' is set
      if (tagCategoryId === undefined || tagCategoryId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagCategoryId' when calling deleteTagCategoryUsingDELETE");
      }
      var pathParams = {
        'tag_category_id': tagCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/tags/categories/{tag_category_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete Tag Category
     * Deletes the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteTagCategoryUsingDELETE",
    value: function deleteTagCategoryUsingDELETE(tagCategoryId) {
      return this.deleteTagCategoryUsingDELETEWithHttpInfo(tagCategoryId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete Tag
     * Deletes a Tag.
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteTagUsingDELETEWithHttpInfo",
    value: function deleteTagUsingDELETEWithHttpInfo(tagId) {
      var postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagId' when calling deleteTagUsingDELETE");
      }
      var pathParams = {
        'tag_id': tagId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/tags/{tag_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete Tag
     * Deletes a Tag.
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteTagUsingDELETE",
    value: function deleteTagUsingDELETE(tagId) {
      return this.deleteTagUsingDELETEWithHttpInfo(tagId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Tag Category
     * Returns information about the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetTagCategoryResponse} and HTTP response
     */
  }, {
    key: "getCategoryUsingGETWithHttpInfo",
    value: function getCategoryUsingGETWithHttpInfo(tagCategoryId) {
      var postBody = null;
      // verify the required parameter 'tagCategoryId' is set
      if (tagCategoryId === undefined || tagCategoryId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagCategoryId' when calling getCategoryUsingGET");
      }
      var pathParams = {
        'tag_category_id': tagCategoryId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetTagCategoryResponse["default"];
      return this.apiClient.callApi('/v2/tags/categories/{tag_category_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Tag Category
     * Returns information about the specified Tag Category
     * @param {String} tagCategoryId tag_category_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetTagCategoryResponse}
     */
  }, {
    key: "getCategoryUsingGET",
    value: function getCategoryUsingGET(tagCategoryId) {
      return this.getCategoryUsingGETWithHttpInfo(tagCategoryId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Tag
     * Retrieves information about the specified Tag
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Tag} and HTTP response
     */
  }, {
    key: "getTagUsingGET1WithHttpInfo",
    value: function getTagUsingGET1WithHttpInfo(tagId) {
      var postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagId' when calling getTagUsingGET1");
      }
      var pathParams = {
        'tag_id': tagId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Tag["default"];
      return this.apiClient.callApi('/v2/tags/{tag_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Tag
     * Retrieves information about the specified Tag
     * @param {String} tagId tag_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Tag}
     */
  }, {
    key: "getTagUsingGET1",
    value: function getTagUsingGET1(tagId) {
      return this.getTagUsingGET1WithHttpInfo(tagId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Tagged Companies
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListTaggedCompaniesResponse} and HTTP response
     */
  }, {
    key: "listCompaniesForTagIdUsingGET1WithHttpInfo",
    value: function listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagId' when calling listCompaniesForTagIdUsingGET1");
      }
      var pathParams = {
        'tag_id': tagId
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
      var returnType = _ListTaggedCompaniesResponse["default"];
      return this.apiClient.callApi('/v2/tags/{tag_id}/companies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Tagged Companies
     * Retrieves a list of Companies that have the given Tag applied. To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListTaggedCompaniesResponse}
     */
  }, {
    key: "listCompaniesForTagIdUsingGET1",
    value: function listCompaniesForTagIdUsingGET1(tagId, opts) {
      return this.listCompaniesForTagIdUsingGET1WithHttpInfo(tagId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Tagged Contacts
     * Retrieve a list of Contacts with the specified Tag. To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListTaggedContactsResponse} and HTTP response
     */
  }, {
    key: "listContactsWithTagIdUsingGETWithHttpInfo",
    value: function listContactsWithTagIdUsingGETWithHttpInfo(tagId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagId' when calling listContactsWithTagIdUsingGET");
      }
      var pathParams = {
        'tag_id': tagId
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
      var returnType = _ListTaggedContactsResponse["default"];
      return this.apiClient.callApi('/v2/tags/{tag_id}/contacts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Tagged Contacts
     * Retrieve a list of Contacts with the specified Tag. To search for `null` or empty fields use `filter==NONE`
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListTaggedContactsResponse}
     */
  }, {
    key: "listContactsWithTagIdUsingGET",
    value: function listContactsWithTagIdUsingGET(tagId, opts) {
      return this.listContactsWithTagIdUsingGETWithHttpInfo(tagId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Tag Categories
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListTagCategoriesResponse} and HTTP response
     */
  }, {
    key: "listTagCategoriesUsingGETWithHttpInfo",
    value: function listTagCategoriesUsingGETWithHttpInfo(opts) {
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
      var returnType = _ListTagCategoriesResponse["default"];
      return this.apiClient.callApi('/v2/tags/categories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Tag Categories
     * Retrieves the list of defined Tag Categories To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListTagCategoriesResponse}
     */
  }, {
    key: "listTagCategoriesUsingGET",
    value: function listTagCategoriesUsingGET(opts) {
      return this.listTagCategoriesUsingGETWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Tags
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListTagsResponse} and HTTP response
     */
  }, {
    key: "listTagsUsingGET1WithHttpInfo",
    value: function listTagsUsingGET1WithHttpInfo(opts) {
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
      var returnType = _ListTagsResponse["default"];
      return this.apiClient.callApi('/v2/tags', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Tags
     * Retrieve a list of Tags defined in the application. To search for `null` or empty fields use `filter==NONE`
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListTagsResponse}
     */
  }, {
    key: "listTagsUsingGET1",
    value: function listTagsUsingGET1(opts) {
      return this.listTagsUsingGET1WithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Tag Category
     * Updates a Tag Category with only the values provided in the request
     * @param {String} tagCategoryId tag_category_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagCategoryRequest} [tagCategory] tagCategory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/UpdateTagCategoryResponse} and HTTP response
     */
  }, {
    key: "patchTagCategoryUsingPATCHWithHttpInfo",
    value: function patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, opts) {
      opts = opts || {};
      var postBody = opts['tagCategory'];
      // verify the required parameter 'tagCategoryId' is set
      if (tagCategoryId === undefined || tagCategoryId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagCategoryId' when calling patchTagCategoryUsingPATCH");
      }
      var pathParams = {
        'tag_category_id': tagCategoryId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateTagCategoryResponse["default"];
      return this.apiClient.callApi('/v2/tags/categories/{tag_category_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Tag Category
     * Updates a Tag Category with only the values provided in the request
     * @param {String} tagCategoryId tag_category_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagCategoryRequest} opts.tagCategory tagCategory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/UpdateTagCategoryResponse}
     */
  }, {
    key: "patchTagCategoryUsingPATCH",
    value: function patchTagCategoryUsingPATCH(tagCategoryId, opts) {
      return this.patchTagCategoryUsingPATCHWithHttpInfo(tagCategoryId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Update a Tag
     * Updates a Tag with only the values provided in the request
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagRequest} [tag] tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/UpdateTagResponse} and HTTP response
     */
  }, {
    key: "patchTagUsingPATCHWithHttpInfo",
    value: function patchTagUsingPATCHWithHttpInfo(tagId, opts) {
      opts = opts || {};
      var postBody = opts['tag'];
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagId' when calling patchTagUsingPATCH");
      }
      var pathParams = {
        'tag_id': tagId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateTagResponse["default"];
      return this.apiClient.callApi('/v2/tags/{tag_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Tag
     * Updates a Tag with only the values provided in the request
     * @param {String} tagId tag_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreateUpdateTagRequest} opts.tag tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/UpdateTagResponse}
     */
  }, {
    key: "patchTagUsingPATCH",
    value: function patchTagUsingPATCH(tagId, opts) {
      return this.patchTagUsingPATCHWithHttpInfo(tagId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Remove Tags
     * Removes a Tag from a list of Contacts.
     * @param {String} tagId tag_id
     * @param {module:com.keap.sdk.core/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "removeTagsUsingPOSTWithHttpInfo",
    value: function removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest) {
      var postBody = applyRemoveTagRequest;
      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new _Error["default"]("Missing the required parameter 'tagId' when calling removeTagsUsingPOST");
      }
      // verify the required parameter 'applyRemoveTagRequest' is set
      if (applyRemoveTagRequest === undefined || applyRemoveTagRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'applyRemoveTagRequest' when calling removeTagsUsingPOST");
      }
      var pathParams = {
        'tag_id': tagId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/tags/{tag_id}/contacts:removeTags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Remove Tags
     * Removes a Tag from a list of Contacts.
     * @param {String} tagId tag_id
     * @param {module:com.keap.sdk.core/model/ApplyRemoveTagRequest} applyRemoveTagRequest applyRemoveTagRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "removeTagsUsingPOST",
    value: function removeTagsUsingPOST(tagId, applyRemoveTagRequest) {
      return this.removeTagsUsingPOSTWithHttpInfo(tagId, applyRemoveTagRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);
}();