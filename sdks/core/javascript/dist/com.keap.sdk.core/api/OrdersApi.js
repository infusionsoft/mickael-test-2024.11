"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _CreateCustomFieldRequest = _interopRequireDefault(require("../model/CreateCustomFieldRequest"));
var _CreatePaymentRequest = _interopRequireDefault(require("../model/CreatePaymentRequest"));
var _CreateRestOrderItemRequest = _interopRequireDefault(require("../model/CreateRestOrderItemRequest"));
var _CustomFieldMetaData = _interopRequireDefault(require("../model/CustomFieldMetaData"));
var _Error = _interopRequireDefault(require("../model/Error"));
var _ListOrders = _interopRequireDefault(require("../model/ListOrders"));
var _ObjectModel = _interopRequireDefault(require("../model/ObjectModel"));
var _PaymentResult = _interopRequireDefault(require("../model/PaymentResult"));
var _RestCreateOrderRequest = _interopRequireDefault(require("../model/RestCreateOrderRequest"));
var _RestV2Order = _interopRequireDefault(require("../model/RestV2Order"));
var _RestV2OrderItem = _interopRequireDefault(require("../model/RestV2OrderItem"));
var _RestV2PatchOrderRequest = _interopRequireDefault(require("../model/RestV2PatchOrderRequest"));
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
* Orders service.
* @module com.keap.sdk.core/api/OrdersApi
* @version 0.0.36
*/
var OrdersApi = exports["default"] = /*#__PURE__*/function () {
  /**
  * Constructs a new OrdersApi. 
  * @alias module:com.keap.sdk.core/api/OrdersApi
  * @class
  * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
  */
  function OrdersApi(apiClient) {
    _classCallCheck(this, OrdersApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Create an Order's Custom Field
   * Adds a custom field of the specified type and options to the Order object.
   * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
   */
  return _createClass(OrdersApi, [{
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
     * Create a Payment
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * @param {String} orderId order_id
     * @param {module:com.keap.sdk.core/model/CreatePaymentRequest} createPaymentRequest createPaymentRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PaymentResult} and HTTP response
     */
  }, {
    key: "createPaymentOnOrderUsingPOST1WithHttpInfo",
    value: function createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest) {
      var postBody = createPaymentRequest;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new _Error["default"]("Missing the required parameter 'orderId' when calling createPaymentOnOrderUsingPOST1");
      }
      // verify the required parameter 'createPaymentRequest' is set
      if (createPaymentRequest === undefined || createPaymentRequest === null) {
        throw new _Error["default"]("Missing the required parameter 'createPaymentRequest' when calling createPaymentOnOrderUsingPOST1");
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
      var returnType = _PaymentResult["default"];
      return this.apiClient.callApi('/v2/orders/{order_id}/payments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }

    /**
     * Create a Payment
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * @param {String} orderId order_id
     * @param {module:com.keap.sdk.core/model/CreatePaymentRequest} createPaymentRequest createPaymentRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PaymentResult}
     */
  }, {
    key: "createPaymentOnOrderUsingPOST1",
    value: function createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest) {
      return this.createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest).then(function (response_and_data) {
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
  }]);
}();