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
import RestEmailAddress from '../model/RestEmailAddress';
import UpdateEmailAddress from '../model/UpdateEmailAddress';

/**
* EmailAddress service.
* @module com.keap.sdk.core/api/EmailAddressApi
* @version 0.0.22
*/
export default class EmailAddressApi {

    /**
    * Constructs a new EmailAddressApi. 
    * @alias module:com.keap.sdk.core/api/EmailAddressApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieve an Email Address status
     * Retrieves the opt-in status for given Email Address
     * @param {String} email email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestEmailAddress} and HTTP response
     */
    getEmailAddressStatusUsingGETWithHttpInfo(email) {
      let postBody = null;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling getEmailAddressStatusUsingGET");
      }

      let pathParams = {
        'email': email
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
      let returnType = RestEmailAddress;
      return this.apiClient.callApi(
        '/v2/emailAddresses/{email}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Email Address status
     * Retrieves the opt-in status for given Email Address
     * @param {String} email email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestEmailAddress}
     */
    getEmailAddressStatusUsingGET(email) {
      return this.getEmailAddressStatusUsingGETWithHttpInfo(email)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an Email Address opt-in status
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * @param {String} email email
     * @param {module:com.keap.sdk.core/model/UpdateEmailAddress} updateEmailAddress updateEmailAddress
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestEmailAddress} and HTTP response
     */
    updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress) {
      let postBody = updateEmailAddress;
      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling updateEmailAddressOptStatusUsingPUT");
      }
      // verify the required parameter 'updateEmailAddress' is set
      if (updateEmailAddress === undefined || updateEmailAddress === null) {
        throw new Error("Missing the required parameter 'updateEmailAddress' when calling updateEmailAddressOptStatusUsingPUT");
      }

      let pathParams = {
        'email': email
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
      let returnType = RestEmailAddress;
      return this.apiClient.callApi(
        '/v2/emailAddresses/{email}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an Email Address opt-in status
     * Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \"Customer opted-in through webform\", \"Company gave explicit permission.\"  ```json \"opt_in_reason\": \"your reason for opt-in\" ``` Note that the email address status will only be updated to `Unconfirmed` (marketable) for email addresses that are currently in the following states: - `Unengaged Marketable` - `Unengaged Non-Marketable` - `Non-Marketable` - `Opt-Out: Manual`  All other existing statuses e.g. `List Unsubscribe`, `Opt-Out`, `System` etc will remain non-marketable and in their existing state.
     * @param {String} email email
     * @param {module:com.keap.sdk.core/model/UpdateEmailAddress} updateEmailAddress updateEmailAddress
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestEmailAddress}
     */
    updateEmailAddressOptStatusUsingPUT(email, updateEmailAddress) {
      return this.updateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
