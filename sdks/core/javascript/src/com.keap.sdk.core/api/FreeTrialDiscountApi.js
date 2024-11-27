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
import Error from '../model/Error';

/**
* FreeTrialDiscount service.
* @module com.keap.sdk.core/api/FreeTrialDiscountApi
* @version 0.0.21
*/
export default class FreeTrialDiscountApi {

    /**
    * Constructs a new FreeTrialDiscountApi. 
    * @alias module:com.keap.sdk.core/api/FreeTrialDiscountApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a Free Trial Discount
     * Deletes a specified Free Trial Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDiscountUsingDELETE1WithHttpInfo(discountId) {
      let postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new Error("Missing the required parameter 'discountId' when calling deleteDiscountUsingDELETE1");
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
        '/v2/discounts/freeTrials/{discount_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Free Trial Discount
     * Deletes a specified Free Trial Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDiscountUsingDELETE1(discountId) {
      return this.deleteDiscountUsingDELETE1WithHttpInfo(discountId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
