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
import CategoryDiscount from '../model/CategoryDiscount';
import CreateUpdateDiscountRequest from '../model/CreateUpdateDiscountRequest';
import Error from '../model/Error';

/**
* CategoryDiscount service.
* @module com.keap.sdk.core/api/CategoryDiscountApi
* @version 0.0.47
*/
export default class CategoryDiscountApi {

    /**
    * Constructs a new CategoryDiscountApi. 
    * @alias module:com.keap.sdk.core/api/CategoryDiscountApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Category Discount
     * Create a Category Discount.
     * @param {module:com.keap.sdk.core/model/CreateUpdateDiscountRequest} createUpdateDiscountRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CategoryDiscount} and HTTP response
     */
    createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest) {
      let postBody = createUpdateDiscountRequest;
      // verify the required parameter 'createUpdateDiscountRequest' is set
      if (createUpdateDiscountRequest === undefined || createUpdateDiscountRequest === null) {
        throw new Error("Missing the required parameter 'createUpdateDiscountRequest' when calling createDiscountUsingPOST");
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
      let returnType = CategoryDiscount;
      return this.apiClient.callApi(
        '/v2/discounts/productCategories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Category Discount
     * Create a Category Discount.
     * @param {module:com.keap.sdk.core/model/CreateUpdateDiscountRequest} createUpdateDiscountRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CategoryDiscount}
     */
    createDiscountUsingPOST(createUpdateDiscountRequest) {
      return this.createDiscountUsingPOSTWithHttpInfo(createUpdateDiscountRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Category Discount
     * Deletes a specified Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteDiscountUsingDELETEWithHttpInfo(discountId) {
      let postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new Error("Missing the required parameter 'discountId' when calling deleteDiscountUsingDELETE");
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
        '/v2/discounts/productCategories/{discount_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Category Discount
     * Deletes a specified Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteDiscountUsingDELETE(discountId) {
      return this.deleteDiscountUsingDELETEWithHttpInfo(discountId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Category Discount
     * Retrieves a single Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CategoryDiscount} and HTTP response
     */
    getDiscountUsingGETWithHttpInfo(discountId) {
      let postBody = null;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new Error("Missing the required parameter 'discountId' when calling getDiscountUsingGET");
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
      let returnType = CategoryDiscount;
      return this.apiClient.callApi(
        '/v2/discounts/productCategories/{discount_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Category Discount
     * Retrieves a single Category Discount
     * @param {String} discountId discount_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CategoryDiscount}
     */
    getDiscountUsingGET(discountId) {
      return this.getDiscountUsingGETWithHttpInfo(discountId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Category Discount
     * Update a Category Discount.
     * @param {String} discountId discount_id
     * @param {module:com.keap.sdk.core/model/CreateUpdateDiscountRequest} createUpdateDiscountRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/CategoryDiscount} and HTTP response
     */
    updateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, opts) {
      opts = opts || {};
      let postBody = createUpdateDiscountRequest;
      // verify the required parameter 'discountId' is set
      if (discountId === undefined || discountId === null) {
        throw new Error("Missing the required parameter 'discountId' when calling updateDiscountUsingPATCH");
      }
      // verify the required parameter 'createUpdateDiscountRequest' is set
      if (createUpdateDiscountRequest === undefined || createUpdateDiscountRequest === null) {
        throw new Error("Missing the required parameter 'createUpdateDiscountRequest' when calling updateDiscountUsingPATCH");
      }

      let pathParams = {
        'discount_id': discountId
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
      let returnType = CategoryDiscount;
      return this.apiClient.callApi(
        '/v2/discounts/productCategories/{discount_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Category Discount
     * Update a Category Discount.
     * @param {String} discountId discount_id
     * @param {module:com.keap.sdk.core/model/CreateUpdateDiscountRequest} createUpdateDiscountRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/CategoryDiscount}
     */
    updateDiscountUsingPATCH(discountId, createUpdateDiscountRequest, opts) {
      return this.updateDiscountUsingPATCHWithHttpInfo(discountId, createUpdateDiscountRequest, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
