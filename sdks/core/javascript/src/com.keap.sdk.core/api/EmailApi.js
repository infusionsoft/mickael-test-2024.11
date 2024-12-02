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
import CreateEmailSentRequest from '../model/CreateEmailSentRequest';
import CreateEmailsSentRequest from '../model/CreateEmailsSentRequest';
import DeleteEmailsRequest from '../model/DeleteEmailsRequest';
import DeleteEmailsResponse from '../model/DeleteEmailsResponse';
import EmailSendRequest from '../model/EmailSendRequest';
import EmailSentWithContent from '../model/EmailSentWithContent';
import EmailsSentList from '../model/EmailsSentList';
import Error from '../model/Error';

/**
* Email service.
* @module com.keap.sdk.core/api/EmailApi
* @version 0.0.26
*/
export default class EmailApi {

    /**
    * Constructs a new EmailApi. 
    * @alias module:com.keap.sdk.core/api/EmailApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an Email Record
     * Creates a Record of an Email sent to a Contact
     * @param {module:com.keap.sdk.core/model/CreateEmailSentRequest} emailWithContent emailWithContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent} and HTTP response
     */
    createEmailUsingPOST1WithHttpInfo(emailWithContent) {
      let postBody = emailWithContent;
      // verify the required parameter 'emailWithContent' is set
      if (emailWithContent === undefined || emailWithContent === null) {
        throw new Error("Missing the required parameter 'emailWithContent' when calling createEmailUsingPOST1");
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
      let returnType = EmailSentWithContent;
      return this.apiClient.callApi(
        '/v2/emails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Email Record
     * Creates a Record of an Email sent to a Contact
     * @param {module:com.keap.sdk.core/model/CreateEmailSentRequest} emailWithContent emailWithContent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent}
     */
    createEmailUsingPOST1(emailWithContent) {
      return this.createEmailUsingPOST1WithHttpInfo(emailWithContent)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a set of Email Records
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateEmailsSentRequest} [createEmailsSentRequest] Email records to persist, with content.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/EmailsSentList} and HTTP response
     */
    createEmailsUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createEmailsSentRequest'];

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
      let returnType = EmailsSentList;
      return this.apiClient.callApi(
        '/v2/emails:batchAdd', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a set of Email Records
     * Creates a set of Records of Emails sent to Contacts, maximum 1000 per transaction.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateEmailsSentRequest} opts.createEmailsSentRequest Email records to persist, with content.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/EmailsSentList}
     */
    createEmailsUsingPOST1(opts) {
      return this.createEmailsUsingPOST1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Email Record
     * Deletes a specific Email Record
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteEmailUsingDELETE1WithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteEmailUsingDELETE1");
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
        '/v2/emails/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an Email Record
     * Deletes a specific Email Record
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteEmailUsingDELETE1(id) {
      return this.deleteEmailUsingDELETE1WithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a set of Email Records
     * Removes a set of Email Records
     * @param {module:com.keap.sdk.core/model/DeleteEmailsRequest} deleteEmailsRequest deleteEmailsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/DeleteEmailsResponse} and HTTP response
     */
    deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest) {
      let postBody = deleteEmailsRequest;
      // verify the required parameter 'deleteEmailsRequest' is set
      if (deleteEmailsRequest === undefined || deleteEmailsRequest === null) {
        throw new Error("Missing the required parameter 'deleteEmailsRequest' when calling deleteEmailsUsingPOST1");
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
      let returnType = DeleteEmailsResponse;
      return this.apiClient.callApi(
        '/v2/emails:batchRemove', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove a set of Email Records
     * Removes a set of Email Records
     * @param {module:com.keap.sdk.core/model/DeleteEmailsRequest} deleteEmailsRequest deleteEmailsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/DeleteEmailsResponse}
     */
    deleteEmailsUsingPOST1(deleteEmailsRequest) {
      return this.deleteEmailsUsingPOST1WithHttpInfo(deleteEmailsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an Email
     * Retrieves a single Email that has been sent
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent} and HTTP response
     */
    getEmailUsingGET1WithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEmailUsingGET1");
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
      let returnType = EmailSentWithContent;
      return this.apiClient.callApi(
        '/v2/emails/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Email
     * Retrieves a single Email that has been sent
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/EmailSentWithContent}
     */
    getEmailUsingGET1(id) {
      return this.getEmailUsingGET1WithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send an Email
     * Sends an Email to a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/EmailSendRequest} [emailSendRequest] emailSendRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    sendEmailUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['emailSendRequest'];

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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/emails:send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send an Email
     * Sends an Email to a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/EmailSendRequest} opts.emailSendRequest emailSendRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    sendEmailUsingPOST1(opts) {
      return this.sendEmailUsingPOST1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
