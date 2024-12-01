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
import CreateUserRequestV2 from '../model/CreateUserRequestV2';
import Error from '../model/Error';
import GetUserInfoResponse from '../model/GetUserInfoResponse';
import ListUserResponse from '../model/ListUserResponse';
import PatchUserRequestV2 from '../model/PatchUserRequestV2';
import User from '../model/User';

/**
* Users service.
* @module com.keap.sdk.core/api/UsersApi
* @version 0.0.25
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:com.keap.sdk.core/api/UsersApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a User
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateUserRequestV2} [user] user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/User} and HTTP response
     */
    createUserUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['user'];

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
      let returnType = User;
      return this.apiClient.callApi(
        '/v2/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a User
     * Creates a new user record. NB: Users will be invited to the application and remain in the \"Invited\" status until the user accepts the invite. \"Inactive\" users will not take up a user license.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateUserRequestV2} opts.user user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/User}
     */
    createUserUsingPOST1(opts) {
      return this.createUserUsingPOST1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get User
     * Retrieves a specific User
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/User} and HTTP response
     */
    getUserByIdUsingGETWithHttpInfo(userId) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserByIdUsingGET");
      }

      let pathParams = {
        'user_id': userId
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
      let returnType = User;
      return this.apiClient.callApi(
        '/v2/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get User
     * Retrieves a specific User
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/User}
     */
    getUserByIdUsingGET(userId) {
      return this.getUserByIdUsingGETWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve User Info
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetUserInfoResponse} and HTTP response
     */
    getUserInfoUsingGET1WithHttpInfo() {
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
      let returnType = GetUserInfoResponse;
      return this.apiClient.callApi(
        '/v2/oauth/connect/userinfo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve User Info
     * Retrieves information for the current authenticated end-user, as outlined by the [OpenID Connect specification](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetUserInfoResponse}
     */
    getUserInfoUsingGET1() {
      return this.getUserInfoUsingGET1WithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get User email signature
     * Retrieves a HTML snippet that contains the user's email signature.
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    getUserSignatureUsingGET1WithHttpInfo(userId) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getUserSignatureUsingGET1");
      }

      let pathParams = {
        'user_id': userId
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/v2/users/{user_id}/signature', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get User email signature
     * Retrieves a HTML snippet that contains the user's email signature.
     * @param {String} userId user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    getUserSignatureUsingGET1(userId) {
      return this.getUserSignatureUsingGET1WithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Users
     * Retrieves a list of users
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. 'given_name desc'
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListUserResponse} and HTTP response
     */
    listUsersUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListUserResponse;
      return this.apiClient.callApi(
        '/v2/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Users
     * Retrieves a list of users
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. 'given_name desc'
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListUserResponse}
     */
    listUsersUsingGET1(opts) {
      return this.listUsersUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update User
     * Updates information on a specific User
     * @param {String} userId user_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchUserRequestV2} [user] user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/User} and HTTP response
     */
    patchUserUsingPATCHWithHttpInfo(userId, opts) {
      opts = opts || {};
      let postBody = opts['user'];
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling patchUserUsingPATCH");
      }

      let pathParams = {
        'user_id': userId
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
      let returnType = User;
      return this.apiClient.callApi(
        '/v2/users/{user_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update User
     * Updates information on a specific User
     * @param {String} userId user_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of fields to be updated. If set, only the provided fields will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchUserRequestV2} opts.user user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/User}
     */
    patchUserUsingPATCH(userId, opts) {
      return this.patchUserUsingPATCHWithHttpInfo(userId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
