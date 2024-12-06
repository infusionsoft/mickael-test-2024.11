/**
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


import ApiClient from "../ApiClient";
import CreateCustomFieldRequest from '../model/CreateCustomFieldRequest';
import CreatePaymentRequest from '../model/CreatePaymentRequest';
import CreateRestOrderItemRequest from '../model/CreateRestOrderItemRequest';
import CustomFieldMetaData from '../model/CustomFieldMetaData';
import Error from '../model/Error';
import ListOrders from '../model/ListOrders';
import ObjectModel from '../model/ObjectModel';
import PaymentResult from '../model/PaymentResult';
import RestCreateOrderRequest from '../model/RestCreateOrderRequest';
import RestV2Order from '../model/RestV2Order';
import RestV2OrderItem from '../model/RestV2OrderItem';
import RestV2PatchOrderRequest from '../model/RestV2PatchOrderRequest';
import UpdateCustomFieldMetaDataRequest from '../model/UpdateCustomFieldMetaDataRequest';

/**
* Orders service.
* @module com.keap.sdk.core/api/OrdersApi
* @version 0.0.31
*/
export default class OrdersApi {

    /**
    * Constructs a new OrdersApi. 
    * @alias module:com.keap.sdk.core/api/OrdersApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an Order's Custom Field
     * Adds a custom field of the specified type and options to the Order object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
    createOrderCustomFieldUsingPOSTWithHttpInfo(customField) {
      let postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new Error("Missing the required parameter 'customField' when calling createOrderCustomFieldUsingPOST");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomFieldMetaData;
      return this.apiClient.callApi(
        '/v2/orders/model/customFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Order's Custom Field
     * Adds a custom field of the specified type and options to the Order object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
    createOrderCustomFieldUsingPOST(customField) {
      return this.createOrderCustomFieldUsingPOSTWithHttpInfo(customField)
        .then(function(response_and_data) {
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
    createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest) {
      let postBody = createRestOrderItemRequest;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling createOrderItemsOnOrderUsingPOST1");
      }
      // verify the required parameter 'createRestOrderItemRequest' is set
      if (createRestOrderItemRequest === undefined || createRestOrderItemRequest === null) {
        throw new Error("Missing the required parameter 'createRestOrderItemRequest' when calling createOrderItemsOnOrderUsingPOST1");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestV2OrderItem;
      return this.apiClient.callApi(
        '/v2/orders/{order_id}/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Order Item
     * Creates an order item on an existing order.
     * @param {String} orderId order_id
     * @param {module:com.keap.sdk.core/model/CreateRestOrderItemRequest} createRestOrderItemRequest createRestOrderItemRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2OrderItem}
     */
    createOrderItemsOnOrderUsingPOST1(orderId, createRestOrderItemRequest) {
      return this.createOrderItemsOnOrderUsingPOST1WithHttpInfo(orderId, createRestOrderItemRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an Order
     * Create a one time Order with Order items.
     * @param {module:com.keap.sdk.core/model/RestCreateOrderRequest} createOrderRequest createOrderRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Order} and HTTP response
     */
    createOrderUsingPOST1WithHttpInfo(createOrderRequest) {
      let postBody = createOrderRequest;
      // verify the required parameter 'createOrderRequest' is set
      if (createOrderRequest === undefined || createOrderRequest === null) {
        throw new Error("Missing the required parameter 'createOrderRequest' when calling createOrderUsingPOST1");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestV2Order;
      return this.apiClient.callApi(
        '/v2/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Order
     * Create a one time Order with Order items.
     * @param {module:com.keap.sdk.core/model/RestCreateOrderRequest} createOrderRequest createOrderRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Order}
     */
    createOrderUsingPOST1(createOrderRequest) {
      return this.createOrderUsingPOST1WithHttpInfo(createOrderRequest)
        .then(function(response_and_data) {
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
    createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest) {
      let postBody = createPaymentRequest;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling createPaymentOnOrderUsingPOST1");
      }
      // verify the required parameter 'createPaymentRequest' is set
      if (createPaymentRequest === undefined || createPaymentRequest === null) {
        throw new Error("Missing the required parameter 'createPaymentRequest' when calling createPaymentOnOrderUsingPOST1");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PaymentResult;
      return this.apiClient.callApi(
        '/v2/orders/{order_id}/payments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Payment
     * Creates a payment record that can charge a credit card. Alternatively, adds a record of historical or external payment of cash or credit card.
     * @param {String} orderId order_id
     * @param {module:com.keap.sdk.core/model/CreatePaymentRequest} createPaymentRequest createPaymentRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PaymentResult}
     */
    createPaymentOnOrderUsingPOST1(orderId, createPaymentRequest) {
      return this.createPaymentOnOrderUsingPOST1WithHttpInfo(orderId, createPaymentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Order
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOrderUsingDELETE1WithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrderUsingDELETE1");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/orders/{order_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an Order
     *   Deletes an Order<br/>   Note: The Order must not have any transactions recorded to be subject to deletion. 
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOrderUsingDELETE1(orderId) {
      return this.deleteOrderUsingDELETE1WithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an Order
     * Retrieves a single Order for a given order id
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestV2Order} and HTTP response
     */
    getOrderUsingGET1WithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderUsingGET1");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RestV2Order;
      return this.apiClient.callApi(
        '/v2/orders/{order_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Order
     * Retrieves a single Order for a given order id
     * @param {String} orderId order_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestV2Order}
     */
    getOrderUsingGET1(orderId) {
      return this.getOrderUsingGET1WithHttpInfo(orderId)
        .then(function(response_and_data) {
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
    listOrdersUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListOrders;
      return this.apiClient.callApi(
        '/v2/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    listOrdersUsingGET1(opts) {
      return this.listOrdersUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
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
    patchOrderUsingPATCHWithHttpInfo(orderId, opts) {
      opts = opts || {};
      let postBody = opts['order'];
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling patchOrderUsingPATCH");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestV2Order;
      return this.apiClient.callApi(
        '/v2/orders/{order_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    patchOrderUsingPATCH(orderId, opts) {
      return this.patchOrderUsingPATCHWithHttpInfo(orderId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an Order's Custom Field Model
     * Gets the custom field's model for the Order object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
    retrieveOrderCustomFieldModelUsingGETWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ObjectModel;
      return this.apiClient.callApi(
        '/v2/orders/model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Order's Custom Field Model
     * Gets the custom field's model for the Order object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
    retrieveOrderCustomFieldModelUsingGET() {
      return this.retrieveOrderCustomFieldModelUsingGETWithHttpInfo()
        .then(function(response_and_data) {
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
    updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      let postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling updateOrderCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateOrderCustomFieldUsingPATCH");
      }

      let pathParams = {
        'custom_field_id': customFieldId
      };
      let queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CustomFieldMetaData;
      return this.apiClient.callApi(
        '/v2/orders/model/customFields/{custom_field_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    updateOrderCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateOrderCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
