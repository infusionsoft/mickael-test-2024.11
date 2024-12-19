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
import AffiliateCommissionProgramResponse from '../model/AffiliateCommissionProgramResponse';
import CreateAffiliateRequest from '../model/CreateAffiliateRequest';
import Error from '../model/Error';
import PatchAffiliateRequest from '../model/PatchAffiliateRequest';
import PatchCommissionProgramRequest from '../model/PatchCommissionProgramRequest';
import RestAffiliate from '../model/RestAffiliate';

/**
* Affiliate service.
* @module com.keap.sdk.core/api/AffiliateApi
* @version 0.0.60
*/
export default class AffiliateApi {

    /**
    * Constructs a new AffiliateApi. 
    * @alias module:com.keap.sdk.core/api/AffiliateApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an Affiliate
     * Creates a single Affiliate
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateAffiliateRequest} [createAffiliateRequest] Affiliate request to insert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestAffiliate} and HTTP response
     */
    addAffiliateUsingPOSTWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createAffiliateRequest'];

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
      let returnType = RestAffiliate;
      return this.apiClient.callApi(
        '/v2/affiliates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an Affiliate
     * Creates a single Affiliate
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateAffiliateRequest} opts.createAffiliateRequest Affiliate request to insert
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestAffiliate}
     */
    addAffiliateUsingPOST(opts) {
      return this.addAffiliateUsingPOSTWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve an Affiliate
     * Retrieves a single Affiliate
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestAffiliate} and HTTP response
     */
    getAffiliateUsingGET1WithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAffiliateUsingGET1");
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
      let returnType = RestAffiliate;
      return this.apiClient.callApi(
        '/v2/affiliates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve an Affiliate
     * Retrieves a single Affiliate
     * @param {String} id id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestAffiliate}
     */
    getAffiliateUsingGET1(id) {
      return this.getAffiliateUsingGET1WithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Affiliate Commission Program
     * Updates the properties of an Affiliate Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {module:com.keap.sdk.core/model/PatchCommissionProgramRequest} patchCommissionProgramRequest patchCommissionProgramRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse} and HTTP response
     */
    patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, opts) {
      opts = opts || {};
      let postBody = patchCommissionProgramRequest;
      // verify the required parameter 'commissionProgramId' is set
      if (commissionProgramId === undefined || commissionProgramId === null) {
        throw new Error("Missing the required parameter 'commissionProgramId' when calling patchCommissionProgramUsingPATCH");
      }
      // verify the required parameter 'patchCommissionProgramRequest' is set
      if (patchCommissionProgramRequest === undefined || patchCommissionProgramRequest === null) {
        throw new Error("Missing the required parameter 'patchCommissionProgramRequest' when calling patchCommissionProgramUsingPATCH");
      }

      let pathParams = {
        'commission_program_id': commissionProgramId
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
      let returnType = AffiliateCommissionProgramResponse;
      return this.apiClient.callApi(
        '/v2/affiliates/commissionPrograms/{commission_program_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Affiliate Commission Program
     * Updates the properties of an Affiliate Commission Program
     * @param {String} commissionProgramId commission_program_id
     * @param {module:com.keap.sdk.core/model/PatchCommissionProgramRequest} patchCommissionProgramRequest patchCommissionProgramRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AffiliateCommissionProgramResponse}
     */
    patchCommissionProgramUsingPATCH(commissionProgramId, patchCommissionProgramRequest, opts) {
      return this.patchCommissionProgramUsingPATCHWithHttpInfo(commissionProgramId, patchCommissionProgramRequest, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an Affiliate
     * Updates a single Affiliate
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/PatchAffiliateRequest} [patchAffiliateRequest] Affiliate request to patch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RestAffiliate} and HTTP response
     */
    updateAffiliateUsingPATCHWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['patchAffiliateRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateAffiliateUsingPATCH");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestAffiliate;
      return this.apiClient.callApi(
        '/v2/affiliates/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an Affiliate
     * Updates a single Affiliate
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/PatchAffiliateRequest} opts.patchAffiliateRequest Affiliate request to patch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RestAffiliate}
     */
    updateAffiliateUsingPATCH(id, opts) {
      return this.updateAffiliateUsingPATCHWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
