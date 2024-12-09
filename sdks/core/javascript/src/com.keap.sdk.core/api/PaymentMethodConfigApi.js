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
import CreatePaymentMethodConfigRequest from '../model/CreatePaymentMethodConfigRequest';
import Error from '../model/Error';
import PaymentMethodConfig from '../model/PaymentMethodConfig';

/**
* PaymentMethodConfig service.
* @module com.keap.sdk.core/api/PaymentMethodConfigApi
* @version 0.0.34
*/
export default class PaymentMethodConfigApi {

    /**
    * Constructs a new PaymentMethodConfigApi. 
    * @alias module:com.keap.sdk.core/api/PaymentMethodConfigApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Payment Method Configuration
     * Creates configuration details for rendering payment method components
     * @param {module:com.keap.sdk.core/model/CreatePaymentMethodConfigRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PaymentMethodConfig} and HTTP response
     */
    createPaymentMethodConfigUsingPOSTWithHttpInfo(request) {
      let postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling createPaymentMethodConfigUsingPOST");
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
      let returnType = PaymentMethodConfig;
      return this.apiClient.callApi(
        '/v2/paymentMethodConfigs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Payment Method Configuration
     * Creates configuration details for rendering payment method components
     * @param {module:com.keap.sdk.core/model/CreatePaymentMethodConfigRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PaymentMethodConfig}
     */
    createPaymentMethodConfigUsingPOST(request) {
      return this.createPaymentMethodConfigUsingPOSTWithHttpInfo(request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
