/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreatePaymentRequest from '../model/CreatePaymentRequest';
import Error from '../model/Error';
import PaymentResult from '../model/PaymentResult';

/**
* Orders service.
* @module com.keap.sdk.core/api/OrdersApi
* @version 0.0.83
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


}
