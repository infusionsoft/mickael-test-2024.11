"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCustomFieldRequest = _interopRequireDefault(require("../model/CreateCustomFieldRequest"));
var _CreateNoteRequest = _interopRequireDefault(require("../model/CreateNoteRequest"));
var _CustomFieldMetaData = _interopRequireDefault(require("../model/CustomFieldMetaData"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _GetNoteResponse = _interopRequireDefault(require("../model/GetNoteResponse"));
var _ListNotesResponse = _interopRequireDefault(require("../model/ListNotesResponse"));
var _Note = _interopRequireDefault(require("../model/Note"));
var _ObjectModel = _interopRequireDefault(require("../model/ObjectModel"));
var _UpdateCustomFieldMetaDataRequest = _interopRequireDefault(require("../model/UpdateCustomFieldMetaDataRequest"));
var _UpdateNoteRequest = _interopRequireDefault(require("../model/UpdateNoteRequest"));
var _UpdateNoteResponse = _interopRequireDefault(require("../model/UpdateNoteResponse"));
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
* Note service.
* @module com.keap.sdk.core/api/NoteApi
* @version 0.0.20
*/
var NoteApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new NoteApi. 
  * @alias module:com.keap.sdk.core/api/NoteApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function NoteApi(apiClient) {
    _classCallCheck(this, NoteApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create a Custom Field
   * Adds a custom field of the specified type and options to the Note object.
   * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
   */
  return _createClass(NoteApi, [{
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
     * Create a Note
     * Creates a new Note.
     * @param {String} contactId contact_id
     * @param {module:com.keap.sdk.core/model/CreateNoteRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Note} and HTTP response
     */
  }, {
    key: "createNoteUsingPOST1WithHttpInfo",
    value: function createNoteUsingPOST1WithHttpInfo(contactId, request) {
      var postBody = request;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling createNoteUsingPOST1");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new _Error["default"]("Missing the required parameter 'request' when calling createNoteUsingPOST1");
      }
      var pathParams = {
        'contact_id': contactId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Note["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}/notes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Note
     * Creates a new Note.
     * @param {String} contactId contact_id
     * @param {module:com.keap.sdk.core/model/CreateNoteRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Note}
     */
  }, {
    key: "createNoteUsingPOST1",
    value: function createNoteUsingPOST1(contactId, request) {
      return this.createNoteUsingPOST1WithHttpInfo(contactId, request).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Delete a Note
     * Deletes the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
  }, {
    key: "deleteNoteUsingDELETE1WithHttpInfo",
    value: function deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId) {
      var postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling deleteNoteUsingDELETE1");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new _Error["default"]("Missing the required parameter 'noteId' when calling deleteNoteUsingDELETE1");
      }
      var pathParams = {
        'contact_id': contactId,
        'note_id': noteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v2/contacts/{contact_id}/notes/{note_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Delete a Note
     * Deletes the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
  }, {
    key: "deleteNoteUsingDELETE1",
    value: function deleteNoteUsingDELETE1(contactId, noteId) {
      return this.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Retrieve a Note
     * Retrieves the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetNoteResponse} and HTTP response
     */
  }, {
    key: "getNoteUsingGET1WithHttpInfo",
    value: function getNoteUsingGET1WithHttpInfo(contactId, noteId) {
      var postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling getNoteUsingGET1");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new _Error["default"]("Missing the required parameter 'noteId' when calling getNoteUsingGET1");
      }
      var pathParams = {
        'contact_id': contactId,
        'note_id': noteId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetNoteResponse["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}/notes/{note_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Retrieve a Note
     * Retrieves the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetNoteResponse}
     */
  }, {
    key: "getNoteUsingGET1",
    value: function getNoteUsingGET1(contactId, noteId) {
      return this.getNoteUsingGET1WithHttpInfo(contactId, noteId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * List Notes
     * Retrieves a list of Notes
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListNotesResponse} and HTTP response
     */
  }, {
    key: "listNotesUsingGET1WithHttpInfo",
    value: function listNotesUsingGET1WithHttpInfo(contactId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling listNotesUsingGET1");
      }
      var pathParams = {
        'contact_id': contactId
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
      var returnType = _ListNotesResponse["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}/notes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * List Notes
     * Retrieves a list of Notes
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListNotesResponse}
     */
  }, {
    key: "listNotesUsingGET1",
    value: function listNotesUsingGET1(contactId, opts) {
      return this.listNotesUsingGET1WithHttpInfo(contactId, opts).then(function (response_and_data) {
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
     * Update a Note
     * Updates a Note for a Contact
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @param {module:com.keap.sdk.core/model/UpdateNoteRequest} updateNoteRequest updateNoteRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/UpdateNoteResponse} and HTTP response
     */
  }, {
    key: "updateNoteUsingPATCHWithHttpInfo",
    value: function updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, opts) {
      opts = opts || {};
      var postBody = updateNoteRequest;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new _Error["default"]("Missing the required parameter 'contactId' when calling updateNoteUsingPATCH");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new _Error["default"]("Missing the required parameter 'noteId' when calling updateNoteUsingPATCH");
      }
      // verify the required parameter 'updateNoteRequest' is set
      if (updateNoteRequest === undefined || updateNoteRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'updateNoteRequest' when calling updateNoteUsingPATCH");
      }
      var pathParams = {
        'contact_id': contactId,
        'note_id': noteId
      };
      var queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateNoteResponse["default"];
      return this.apiClient.callApi('/v2/contacts/{contact_id}/notes/{note_id}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Update a Note
     * Updates a Note for a Contact
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @param {module:com.keap.sdk.core/model/UpdateNoteRequest} updateNoteRequest updateNoteRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/UpdateNoteResponse}
     */
  }, {
    key: "updateNoteUsingPATCH",
    value: function updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, opts) {
      return this.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, opts).then(function (response_and_data) {
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
  }]);
}();