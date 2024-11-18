/**
 * Keap REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CancelSubscriptionsRequest from '../model/CancelSubscriptionsRequest';
import CreateCustomFieldRequest from '../model/CreateCustomFieldRequest';
import CustomFieldMetaData from '../model/CustomFieldMetaData';
import Error from '../model/Error';
import ObjectModel from '../model/ObjectModel';
import UpdateCustomFieldMetaDataRequest from '../model/UpdateCustomFieldMetaDataRequest';

/**
* Subscriptions service.
* @module com.keap.sdk.core/api/SubscriptionsApi
* @version 2.70.0.736468-hf-202411121210
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
     * Cancel Subscription
     * Cancels the specified subscription
     * @param {String} subscriptionId subscription_id
     * @param {module:com.keap.sdk.core/model/CancelSubscriptionsRequest} cancelSubscriptionsRequest cancelSubscriptionsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelSubscriptionUsingPOST_0WithHttpInfo(subscriptionId, cancelSubscriptionsRequest) {
      let postBody = cancelSubscriptionsRequest;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cancelSubscriptionUsingPOST_0");
      }
      // verify the required parameter 'cancelSubscriptionsRequest' is set
      if (cancelSubscriptionsRequest === undefined || cancelSubscriptionsRequest === null) {
        throw new Error("Missing the required parameter 'cancelSubscriptionsRequest' when calling cancelSubscriptionUsingPOST_0");
      }

      let pathParams = {
        'subscription_id': subscriptionId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/subscriptions/{subscription_id}:deactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel Subscription
     * Cancels the specified subscription
     * @param {String} subscriptionId subscription_id
     * @param {module:com.keap.sdk.core/model/CancelSubscriptionsRequest} cancelSubscriptionsRequest cancelSubscriptionsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cancelSubscriptionUsingPOST_0(subscriptionId, cancelSubscriptionsRequest) {
      return this.cancelSubscriptionUsingPOST_0WithHttpInfo(subscriptionId, cancelSubscriptionsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Subscription's Custom Field
     * Adds a custom field of the specified type and options to the Subscription object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
    createSubscriptionCustomFieldUsingPOST_0WithHttpInfo(customField) {
      let postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new Error("Missing the required parameter 'customField' when calling createSubscriptionCustomFieldUsingPOST_0");
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
        '/v2/subscriptions/model/customFields', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Subscription's Custom Field
     * Adds a custom field of the specified type and options to the Subscription object.
     * @param {module:com.keap.sdk.core/model/CreateCustomFieldRequest} customField customField
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
    createSubscriptionCustomFieldUsingPOST_0(customField) {
      return this.createSubscriptionCustomFieldUsingPOST_0WithHttpInfo(customField)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Subscription's Custom Field Model
     * Gets the custom field's model for the Subscription object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
    retrieveSubscriptionCustomFieldModelUsingGET_0WithHttpInfo() {
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
        '/v2/subscriptions/model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Subscription's Custom Field Model
     * Gets the custom field's model for the Subscription object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
    retrieveSubscriptionCustomFieldModelUsingGET_0() {
      return this.retrieveSubscriptionCustomFieldModelUsingGET_0WithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Subscription's Custom Field
     * Updates a custom field of the specified type and options to the Subscription object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData} and HTTP response
     */
    updateSubscriptionCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      let postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling updateSubscriptionCustomFieldUsingPATCH_0");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateSubscriptionCustomFieldUsingPATCH_0");
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
        '/v2/subscriptions/model/customFields/{custom_field_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Subscription's Custom Field
     * Updates a custom field of the specified type and options to the Subscription object.
     * @param {String} customFieldId custom_field_id
     * @param {module:com.keap.sdk.core/model/UpdateCustomFieldMetaDataRequest} request request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CustomFieldMetaData}
     */
    updateSubscriptionCustomFieldUsingPATCH_0(customFieldId, request, opts) {
      return this.updateSubscriptionCustomFieldUsingPATCH_0WithHttpInfo(customFieldId, request, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
