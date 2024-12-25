/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';

/**
* Sales service.
* @module com.keap.sdk.core/api/SalesApi
* @version 0.0.67
*/
export default class SalesApi {

    /**
    * Constructs a new SalesApi. 
    * @alias module:com.keap.sdk.core/api/SalesApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Set default Merchant Account
     * Sets the specified Merchant Account as the default Merchant Account.
     * @param {Number} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling setMerchantGatewayAsDefaultUsingPOST");
      }

      let pathParams = {
        'id': id
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
        '/v2/sales/merchants/{id}:setDefault', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set default Merchant Account
     * Sets the specified Merchant Account as the default Merchant Account.
     * @param {Number} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    setMerchantGatewayAsDefaultUsingPOST(id) {
      return this.setMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
