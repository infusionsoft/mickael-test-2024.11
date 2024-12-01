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
import CreateReferralRequest from '../model/CreateReferralRequest';
import Error from '../model/Error';
import Referral from '../model/Referral';

/**
* Referral service.
* @module com.keap.sdk.core/api/ReferralApi
* @version 0.0.25
*/
export default class ReferralApi {

    /**
    * Constructs a new ReferralApi. 
    * @alias module:com.keap.sdk.core/api/ReferralApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Referral
     * Creates a new referral partner referral on the provided contact
     * @param {module:com.keap.sdk.core/model/CreateReferralRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Referral} and HTTP response
     */
    createReferralUsingPOSTWithHttpInfo(request) {
      let postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling createReferralUsingPOST");
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
      let returnType = Referral;
      return this.apiClient.callApi(
        '/v2/referrals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Referral
     * Creates a new referral partner referral on the provided contact
     * @param {module:com.keap.sdk.core/model/CreateReferralRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Referral}
     */
    createReferralUsingPOST(request) {
      return this.createReferralUsingPOSTWithHttpInfo(request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
