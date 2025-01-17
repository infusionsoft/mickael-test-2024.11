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
import CreateSubscriptionV2 from '../model/CreateSubscriptionV2';
import Error from '../model/Error';
import RestSubscriptionV2 from '../model/RestSubscriptionV2';

/**
* Subscriptions service.
* @module com.keap.sdk.core/api/SubscriptionsApi
* @version 0.0.89
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:com.keap.sdk.core/api/SubscriptionsApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Subscription
     * Creates a subscription with the specified product and product subscription id.
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionV2} createSubscriptionV2 createSubscriptionV2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestSubscriptionV2} and HTTP response
     */
    createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2) {
      let postBody = createSubscriptionV2;
      // verify the required parameter 'createSubscriptionV2' is set
      if (createSubscriptionV2 === undefined || createSubscriptionV2 === null) {
        throw new Error("Missing the required parameter 'createSubscriptionV2' when calling createSubscriptionV2UsingPOST");
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
      let returnType = RestSubscriptionV2;
      return this.apiClient.callApi(
        '/v2/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Subscription
     * Creates a subscription with the specified product and product subscription id.
     * @param {module:com.keap.sdk.core/model/CreateSubscriptionV2} createSubscriptionV2 createSubscriptionV2
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestSubscriptionV2}
     */
    createSubscriptionV2UsingPOST(createSubscriptionV2) {
      return this.createSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
