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
import CreateFileRequest from '../model/CreateFileRequest';
import Error from '../model/Error';
import FileMetadata from '../model/FileMetadata';
import ListFilesResponse from '../model/ListFilesResponse';
import UpdateFileRequest from '../model/UpdateFileRequest';

/**
* Files service.
* @module com.keap.sdk.core/api/FilesApi
* @version 0.0.48
*/
export default class FilesApi {

    /**
    * Constructs a new FilesApi. 
    * @alias module:com.keap.sdk.core/api/FilesApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a file
     * Creates a file and uploads it
     * @param {module:com.keap.sdk.core/model/CreateFileRequest} createFileRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/FileMetadata} and HTTP response
     */
    createFileUsingPOST1WithHttpInfo(createFileRequest) {
      let postBody = createFileRequest;
      // verify the required parameter 'createFileRequest' is set
      if (createFileRequest === undefined || createFileRequest === null) {
        throw new Error("Missing the required parameter 'createFileRequest' when calling createFileUsingPOST1");
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
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = FileMetadata;
      return this.apiClient.callApi(
        '/v2/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a file
     * Creates a file and uploads it
     * @param {module:com.keap.sdk.core/model/CreateFileRequest} createFileRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/FileMetadata}
     */
    createFileUsingPOST1(createFileRequest) {
      return this.createFileUsingPOST1WithHttpInfo(createFileRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a file
     * Deletes a specified file
     * @param {String} fileId file_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFileUsingDELETE1WithHttpInfo(fileId) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteFileUsingDELETE1");
      }

      let pathParams = {
        'file_id': fileId
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
        '/v2/files/{file_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a file
     * Deletes a specified file
     * @param {String} fileId file_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFileUsingDELETE1(fileId) {
      return this.deleteFileUsingDELETE1WithHttpInfo(fileId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a file's data
     * Retrieves a file's data
     * @param {String} fileId file_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Blob} and HTTP response
     */
    getFileDataUsingGETWithHttpInfo(fileId) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFileDataUsingGET");
      }

      let pathParams = {
        'file_id': fileId
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
      let returnType = 'Blob';
      return this.apiClient.callApi(
        '/v2/files/{file_id}:data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a file's data
     * Retrieves a file's data
     * @param {String} fileId file_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Blob}
     */
    getFileDataUsingGET(fileId) {
      return this.getFileDataUsingGETWithHttpInfo(fileId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a file
     * Retrieves a file
     * @param {String} fileId file_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/FileMetadata} and HTTP response
     */
    getFileUsingGET1WithHttpInfo(fileId) {
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling getFileUsingGET1");
      }

      let pathParams = {
        'file_id': fileId
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
      let returnType = FileMetadata;
      return this.apiClient.callApi(
        '/v2/files/{file_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a file
     * Retrieves a file
     * @param {String} fileId file_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/FileMetadata}
     */
    getFileUsingGET1(fileId) {
      return this.getFileUsingGET1WithHttpInfo(fileId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all files
     * Retrieves all files
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
     * @param {String} [orderBy] Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListFilesResponse} and HTTP response
     */
    listFilesUsingGET1WithHttpInfo(opts) {
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
      let returnType = ListFilesResponse;
      return this.apiClient.callApi(
        '/v2/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all files
     * Retrieves all files
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are: - (Boolean) is_public - (String) contact_id - (String) user_id - (String) category - (String) file_box_type  You will need to apply the `==` operator to check the equality of one of the filters with your searched word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples: - `filter=contact_id%3D%3D123` - `filter=category%3D%3DATTACHMENTS` - `filter=file_box_type%3D%3DTICKET%3Bcategory%3D%3DATTACHMENTS` 
     * @param {String} opts.orderBy Attribute and direction to order items. One of the following fields: - file_name - updated_time - ... One of the following directions: - asc - desc 
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListFilesResponse}
     */
    listFilesUsingGET1(opts) {
      return this.listFilesUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a file
     * Updates a file
     * @param {String} fileId file_id
     * @param {module:com.keap.sdk.core/model/UpdateFileRequest} updateFileRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/FileMetadata} and HTTP response
     */
    updateFileUsingPATCHWithHttpInfo(fileId, updateFileRequest, opts) {
      opts = opts || {};
      let postBody = updateFileRequest;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling updateFileUsingPATCH");
      }
      // verify the required parameter 'updateFileRequest' is set
      if (updateFileRequest === undefined || updateFileRequest === null) {
        throw new Error("Missing the required parameter 'updateFileRequest' when calling updateFileUsingPATCH");
      }

      let pathParams = {
        'file_id': fileId
      };
      let queryParams = {
        'update_mask': this.apiClient.buildCollectionParam(opts['updateMask'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = FileMetadata;
      return this.apiClient.callApi(
        '/v2/files/{file_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a file
     * Updates a file
     * @param {String} fileId file_id
     * @param {module:com.keap.sdk.core/model/UpdateFileRequest} updateFileRequest request
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/FileMetadata}
     */
    updateFileUsingPATCH(fileId, updateFileRequest, opts) {
      return this.updateFileUsingPATCHWithHttpInfo(fileId, updateFileRequest, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
