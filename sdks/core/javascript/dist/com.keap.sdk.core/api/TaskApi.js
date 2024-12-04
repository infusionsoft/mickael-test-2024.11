"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCustomFieldRequest = _interopRequireDefault(require("../model/CreateCustomFieldRequest"));
var _CreateCustomFieldResponse = _interopRequireDefault(require("../model/CreateCustomFieldResponse"));
var _CreatePatchTaskRequest = _interopRequireDefault(require("../model/CreatePatchTaskRequest"));
var _CreateTaskRequest = _interopRequireDefault(require("../model/CreateTaskRequest"));
var _CustomFieldMetaData = _interopRequireDefault(require("../model/CustomFieldMetaData"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListTasksResponse = _interopRequireDefault(require("../model/ListTasksResponse"));
var _ObjectModel = _interopRequireDefault(require("../model/ObjectModel"));
var _Task = _interopRequireDefault(require("../model/Task"));
var _UpdateCustomFieldMetaDataRequest = _interopRequireDefault(require("../model/UpdateCustomFieldMetaDataRequest"));
var _UpdateTaskResponse = _interopRequireDefault(require("../model/UpdateTaskResponse"));
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
* Task service.
* @module com.keap.sdk.core/api/TaskApi
* @version 0.0.30
*/
var TaskApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new TaskApi. 
  * @alias module:com.keap.sdk.core/api/TaskApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function TaskApi(apiClient) {
    _classCallCheck(this, TaskApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create a Custom Field
   * Adds a custom field of the specified type and options to the Task object.
   * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CreateCustomFieldResponse} and HTTP response
   */
  return _createClass(TaskApi, [{
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