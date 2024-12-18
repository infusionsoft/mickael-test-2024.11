/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateOrderTotalDiscountRequest from '../model/CreateOrderTotalDiscountRequest';
import Error from '../model/Error';
import ListOrderTotalDiscountsResponse from '../model/ListOrderTotalDiscountsResponse';
import OrderTotalDiscount from '../model/OrderTotalDiscount';
import UpdateOrderTotalDiscountRequest from '../model/UpdateOrderTotalDiscountRequest';

/**
* OrderTotalDiscount service.
* @module com.keap.sdk.core/api/OrderTotalDiscountApi
* @version 0.0.47
*/
export default class OrderTotalDiscountApi {

    /**
    * Constructs a new OrderTotalDiscountApi. 
    * @alias module:com.keap.sdk.core/api/OrderTotalDiscountApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an Order Total Discount
     * Creates an Order Total Discount
     * @param {module:com.keap.sdk.core/model/CreateOrderTotalDiscountRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/OrderTotalDiscount} and HTTP response
     */
    createOrderTotalDiscountUsingPOSTWithHttpInfo(request) {
      let postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling createOrderTotalDiscountUsingPOST");
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
      let returnType = OrderTotalDiscount;
      return this.apiClient.callApi(
        '/v2/discounts/orderTotals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Order Total Discount
     * Creates an Order Total Discount
     * @param {module:com.keap.sdk.core/model/CreateOrderTotalDiscountRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/OrderTotalDiscount}
     */
    createOrderTotalDiscountUsingPOST(request) {
      return this.createOrderTotalDiscountUsingPOSTWithHttpInfo(request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Order Total Discount
     * Deletes a specified Order Total Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId) {
      let postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new Error("Missing the required parameter 'discountId' when calling deleteOrderTotalDiscountUsingDELETE");
      }

      let pathParams = {
        'discount_id': discountId
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
        '/v2/discounts/orderTotals/{discount_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an Order Total Discount
     * Deletes a specified Order Total Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOrderTotalDiscountUsingDELETE(discountId) {
      return this.deleteOrderTotalDiscountUsingDELETEWithHttpInfo(discountId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an Order Total Discount
     * Retrieves an Order Total Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/OrderTotalDiscount} and HTTP response
     */
    getOrderTotalDiscountUsingGETWithHttpInfo(discountId) {
      let postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new Error("Missing the required parameter 'discountId' when calling getOrderTotalDiscountUsingGET");
      }

      let pathParams = {
        'discount_id': discountId
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
      let returnType = OrderTotalDiscount;
      return this.apiClient.callApi(
        '/v2/discounts/orderTotals/{discount_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Order Total Discount
     * Retrieves an Order Total Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/OrderTotalDiscount}
     */
    getOrderTotalDiscountUsingGET(discountId) {
      return this.getOrderTotalDiscountUsingGETWithHttpInfo(discountId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all Order Total Discounts
     * Retrieves all Order Total Discounts
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET` 
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListOrderTotalDiscountsResponse} and HTTP response
     */
    listOrderTotalDiscountsUsingGETWithHttpInfo(opts) {
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
      let returnType = ListOrderTotalDiscountsResponse;
      return this.apiClient.callApi(
        '/v2/discounts/orderTotals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all Order Total Discounts
     * Retrieves all Order Total Discounts
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are: - (String) name - (String) description - (Boolean) apply_to_commissions - (DiscountType) discount_type: AMOUNT or PERCENT - (DiscountStrategy) discount_strategy: GROSS or NET  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=name%3D%3DMary` - `filter=applyToCommissions%3D%3DTrue` - `filter=discount_type%3D%3DAMOUNT%3Bdiscount_strategy%3D%3DNET` 
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListOrderTotalDiscountsResponse}
     */
    listOrderTotalDiscountsUsingGET(opts) {
      return this.listOrderTotalDiscountsUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an Order Total Discount
     * Updates an Order Total Discount
     * @param {String} discountId discount_id
     * @param {module:com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/OrderTotalDiscount} and HTTP response
     */
    updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, request, opts) {
      opts = opts || {};
      let postBody = request;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new Error("Missing the required parameter 'discountId' when calling updateOrderTotalDiscountUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateOrderTotalDiscountUsingPATCH");
      }

      let pathParams = {
        'discount_id': discountId
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
      let returnType = OrderTotalDiscount;
      return this.apiClient.callApi(
        '/v2/discounts/orderTotals/{discount_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an Order Total Discount
     * Updates an Order Total Discount
     * @param {String} discountId discount_id
     * @param {module:com.keap.sdk.core/model/UpdateOrderTotalDiscountRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/OrderTotalDiscount}
     */
    updateOrderTotalDiscountUsingPATCH(discountId, request, opts) {
      return this.updateOrderTotalDiscountUsingPATCHWithHttpInfo(discountId, request, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
