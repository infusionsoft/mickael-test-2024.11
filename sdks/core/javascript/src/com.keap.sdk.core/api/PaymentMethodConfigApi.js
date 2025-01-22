/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
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
* @version 0.0.99
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
     * @param {module:com.keap.sdk.core/model/CreatePaymentMethodConfigRequest} createPaymentMethodConfigRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PaymentMethodConfig} and HTTP response
     */
    createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest) {
      let postBody = createPaymentMethodConfigRequest;
      // verify the required parameter 'createPaymentMethodConfigRequest' is set
      if (createPaymentMethodConfigRequest === undefined || createPaymentMethodConfigRequest === null) {
        throw new Error("Missing the required parameter 'createPaymentMethodConfigRequest' when calling createPaymentMethodConfigUsingPOST");
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
     * @param {module:com.keap.sdk.core/model/CreatePaymentMethodConfigRequest} createPaymentMethodConfigRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PaymentMethodConfig}
     */
    createPaymentMethodConfigUsingPOST(createPaymentMethodConfigRequest) {
      return this.createPaymentMethodConfigUsingPOSTWithHttpInfo(createPaymentMethodConfigRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
