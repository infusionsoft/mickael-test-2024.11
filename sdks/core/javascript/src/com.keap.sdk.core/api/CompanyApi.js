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
import Company from '../model/Company';
import CreateCompanyRequest from '../model/CreateCompanyRequest';
import Error from '../model/Error';
import ListCompaniesResponse from '../model/ListCompaniesResponse';
import PatchCompanyRequest from '../model/PatchCompanyRequest';

/**
* Company service.
* @module com.keap.sdk.core/api/CompanyApi
* @version 0.0.48
*/
export default class CompanyApi {

    /**
    * Constructs a new CompanyApi. 
    * @alias module:com.keap.sdk.core/api/CompanyApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Company
     * Creates a new Company.`country_code` is required if `region` is specified.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateCompanyRequest} [createCompanyRequest] company
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Company} and HTTP response
     */
    createCompanyUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createCompanyRequest'];

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
      let returnType = Company;
      return this.apiClient.callApi(
        '/v2/companies', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Company
     * Creates a new Company.`country_code` is required if `region` is specified.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreateCompanyRequest} opts.createCompanyRequest company
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Company}
     */
    createCompanyUsingPOST1(opts) {
      return this.createCompanyUsingPOST1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Company
     * Deletes the specified Company
     * @param {String} companyId company_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCompanyUsingDELETEWithHttpInfo(companyId) {
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling deleteCompanyUsingDELETE");
      }

      let pathParams = {
        'company_id': companyId
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
        '/v2/companies/{company_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Company
     * Deletes the specified Company
     * @param {String} companyId company_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCompanyUsingDELETE(companyId) {
      return this.deleteCompanyUsingDELETEWithHttpInfo(companyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Company
     * Retrieves a single Company
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Company} and HTTP response
     */
    getCompanyUsingGET1WithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getCompanyUsingGET1");
      }

      let pathParams = {
        'company_id': companyId
      };
      let queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Company;
      return this.apiClient.callApi(
        '/v2/companies/{company_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Company
     * Retrieves a single Company
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Company properties to include in the response. (Available fields are: `company_name`, `address`, `custom_fields`, `email_address`, `fax_number`, `phone_number`, `website`, `notes`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Company}
     */
    getCompanyUsingGET1(companyId, opts) {
      return this.getCompanyUsingGET1WithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Companies
     * Retrieves a list of all Companies
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren't included, by default.)
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListCompaniesResponse} and HTTP response
     */
    listCompaniesUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
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
      let returnType = ListCompaniesResponse;
      return this.apiClient.callApi(
        '/v2/companies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Companies
     * Retrieves a list of all Companies
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Company properties to include in the response. (Fields such as `notes`, `fax_number` and `custom_fields` aren't included, by default.)
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListCompaniesResponse}
     */
    listCompaniesUsingGET1(opts) {
      return this.listCompaniesUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Company
     * Updates a Company with the values provided in the request
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchCompanyRequest} [patchCompanyRequest] company
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Company} and HTTP response
     */
    patchCompanyUsingPATCHWithHttpInfo(companyId, opts) {
      opts = opts || {};
      let postBody = opts['patchCompanyRequest'];
      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling patchCompanyUsingPATCH");
      }

      let pathParams = {
        'company_id': companyId
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
      let returnType = Company;
      return this.apiClient.callApi(
        '/v2/companies/{company_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Company
     * Updates a Company with the values provided in the request
     * @param {String} companyId company_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/PatchCompanyRequest} opts.patchCompanyRequest company
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Company}
     */
    patchCompanyUsingPATCH(companyId, opts) {
      return this.patchCompanyUsingPATCHWithHttpInfo(companyId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
