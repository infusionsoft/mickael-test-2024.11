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
import CancelSubscriptionsRequest from '../model/CancelSubscriptionsRequest';
import CreateCustomFieldRequest from '../model/CreateCustomFieldRequest';
import CreateSubscriptionV2 from '../model/CreateSubscriptionV2';
import CustomFieldMetaData from '../model/CustomFieldMetaData';
import Error from '../model/Error';
import ListSubscriptionsResponse from '../model/ListSubscriptionsResponse';
import ObjectModel from '../model/ObjectModel';
import RestSubscriptionV2 from '../model/RestSubscriptionV2';
import UpdateCustomFieldMetaDataRequest from '../model/UpdateCustomFieldMetaDataRequest';

/**
* Subscriptions service.
* @module com.keap.sdk.core/api/SubscriptionsApi
* @version 0.0.44
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
    cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest) {
      let postBody = cancelSubscriptionsRequest;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling cancelSubscriptionUsingPOST");
      }
      // verify the required parameter 'cancelSubscriptionsRequest' is set
      if (cancelSubscriptionsRequest === undefined || cancelSubscriptionsRequest === null) {
        throw new Error("Missing the required parameter 'cancelSubscriptionsRequest' when calling cancelSubscriptionUsingPOST");
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
    cancelSubscriptionUsingPOST(subscriptionId, cancelSubscriptionsRequest) {
      return this.cancelSubscriptionUsingPOSTWithHttpInfo(subscriptionId, cancelSubscriptionsRequest)
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
    createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField) {
      let postBody = customField;
      // verify the required parameter 'customField' is set
      if (customField === undefined || customField === null) {
        throw new Error("Missing the required parameter 'customField' when calling createSubscriptionCustomFieldUsingPOST");
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
    createSubscriptionCustomFieldUsingPOST(customField) {
      return this.createSubscriptionCustomFieldUsingPOSTWithHttpInfo(customField)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
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


    /**
     * List Subscriptions
     * Retrieves a list of subscriptions using the specified search criteria.
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * @param {String} [orderBy] Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListSubscriptionsResponse} and HTTP response
     */
    listSubscriptionsUsingGET1WithHttpInfo(opts) {
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
      let returnType = ListSubscriptionsResponse;
      return this.apiClient.callApi(
        '/v2/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Subscriptions
     * Retrieves a list of subscriptions using the specified search criteria.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are: - (String) contact_id - (String) subscription_plan_id 
     * @param {String} opts.orderBy Attribute and direction to order items. One of the following fields: - id - contact_id - subscription_plan_id One of the following directions: - ASC - DESC 
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListSubscriptionsResponse}
     */
    listSubscriptionsUsingGET1(opts) {
      return this.listSubscriptionsUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Subscription's Custom Field Model
     * Gets the custom field's model for the Subscription object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
    retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo() {
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
    retrieveSubscriptionCustomFieldModelUsingGET() {
      return this.retrieveSubscriptionCustomFieldModelUsingGETWithHttpInfo()
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
    updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts) {
      opts = opts || {};
      let postBody = request;
      // verify the required parameter 'customFieldId' is set
      if (customFieldId === undefined || customFieldId === null) {
        throw new Error("Missing the required parameter 'customFieldId' when calling updateSubscriptionCustomFieldUsingPATCH");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateSubscriptionCustomFieldUsingPATCH");
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
    updateSubscriptionCustomFieldUsingPATCH(customFieldId, request, opts) {
      return this.updateSubscriptionCustomFieldUsingPATCHWithHttpInfo(customFieldId, request, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
