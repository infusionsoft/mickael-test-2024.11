/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateDealNoteRequest from '../model/CreateDealNoteRequest';
import DealNote from '../model/DealNote';
import DealNoteListResponse from '../model/DealNoteListResponse';
import UpdateDealNoteRequest from '../model/UpdateDealNoteRequest';

/**
* Deals service.
* @module com.keap.sdk.core/api/DealsApi
* @version 0.0.86
*/
export default class DealsApi {

    /**
    * Constructs a new DealsApi. 
    * @alias module:com.keap.sdk.core/api/DealsApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param {String} noteId the ID of the note to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    callDeleteWithHttpInfo(noteId) {
      let postBody = null;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling callDelete");
      }

      let pathParams = {
        'note_id': noteId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/deals/-/notes/{note_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a specific deal note by its ID.
     * Deletes a specific deal note by its ID.
     * @param {String} noteId the ID of the note to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    callDelete(noteId) {
      return this.callDeleteWithHttpInfo(noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param {String} id the deal ID to associate the new note with
     * @param {module:com.keap.sdk.core/model/CreateDealNoteRequest} createDealNoteRequest the request body containing note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/DealNote} and HTTP response
     */
    createNoteWithHttpInfo(id, createDealNoteRequest) {
      let postBody = createDealNoteRequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createNote");
      }
      // verify the required parameter 'createDealNoteRequest' is set
      if (createDealNoteRequest === undefined || createDealNoteRequest === null) {
        throw new Error("Missing the required parameter 'createDealNoteRequest' when calling createNote");
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
      let returnType = DealNote;
      return this.apiClient.callApi(
        '/v2/deals/{id}/notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new note for a specific deal.
     * Creates a new note for a specific deal.
     * @param {String} id the deal ID to associate the new note with
     * @param {module:com.keap.sdk.core/model/CreateDealNoteRequest} createDealNoteRequest the request body containing note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/DealNote}
     */
    createNote(id, createDealNoteRequest) {
      return this.createNoteWithHttpInfo(id, createDealNoteRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param {String} noteId the ID of the note to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/DealNote} and HTTP response
     */
    getNoteWithHttpInfo(noteId) {
      let postBody = null;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling getNote");
      }

      let pathParams = {
        'note_id': noteId
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
      let returnType = DealNote;
      return this.apiClient.callApi(
        '/v2/deals/-/notes/{note_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a specific deal note by its ID.
     * Retrieves a specific deal note by its ID.
     * @param {String} noteId the ID of the note to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/DealNote}
     */
    getNote(noteId) {
      return this.getNoteWithHttpInfo(noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param {String} id the deal ID to list notes for
     * @param {Object} opts Optional parameters
     * @param {String} [filter] 
     * @param {String} [pageToken] 
     * @param {String} [orderBy] 
     * @param {Number} [pageSize = 1000)] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/DealNoteListResponse} and HTTP response
     */
    listNotesWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling listNotes");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'filter': opts['filter'],
        'page_token': opts['pageToken'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DealNoteListResponse;
      return this.apiClient.callApi(
        '/v2/deals/{id}/notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Lists all notes associated with a specific deal.
     * Lists all notes associated with a specific deal.
     * @param {String} id the deal ID to list notes for
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter 
     * @param {String} opts.pageToken 
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize  (default to 1000)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/DealNoteListResponse}
     */
    listNotes(id, opts) {
      return this.listNotesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param {String} noteId the ID of the note to update
     * @param {module:com.keap.sdk.core/model/UpdateDealNoteRequest} updateDealNoteRequest the request body containing updated note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/DealNote} and HTTP response
     */
    updateWithHttpInfo(noteId, updateDealNoteRequest) {
      let postBody = updateDealNoteRequest;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling update");
      }
      // verify the required parameter 'updateDealNoteRequest' is set
      if (updateDealNoteRequest === undefined || updateDealNoteRequest === null) {
        throw new Error("Missing the required parameter 'updateDealNoteRequest' when calling update");
      }

      let pathParams = {
        'note_id': noteId
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
      let returnType = DealNote;
      return this.apiClient.callApi(
        '/v2/deals/-/notes/{note_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a specific deal note by its ID.
     * Updates a specific deal note by its ID.
     * @param {String} noteId the ID of the note to update
     * @param {module:com.keap.sdk.core/model/UpdateDealNoteRequest} updateDealNoteRequest the request body containing updated note details
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/DealNote}
     */
    update(noteId, updateDealNoteRequest) {
      return this.updateWithHttpInfo(noteId, updateDealNoteRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
