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
import CreateNoteRequest from '../model/CreateNoteRequest';
import Error from '../model/Error';
import GetNoteResponse from '../model/GetNoteResponse';
import ListNotesResponse from '../model/ListNotesResponse';
import Note from '../model/Note';
import UpdateNoteRequest from '../model/UpdateNoteRequest';
import UpdateNoteResponse from '../model/UpdateNoteResponse';

/**
* Note service.
* @module com.keap.sdk.core/api/NoteApi
* @version 0.0.64
*/
export default class NoteApi {

    /**
    * Constructs a new NoteApi. 
    * @alias module:com.keap.sdk.core/api/NoteApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Note
     * Creates a new Note.
     * @param {String} contactId contact_id
     * @param {module:com.keap.sdk.core/model/CreateNoteRequest} createNoteRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Note} and HTTP response
     */
    createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest) {
      let postBody = createNoteRequest;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling createNoteUsingPOST1");
      }
      // verify the required parameter 'createNoteRequest' is set
      if (createNoteRequest === undefined || createNoteRequest === null) {
        throw new Error("Missing the required parameter 'createNoteRequest' when calling createNoteUsingPOST1");
      }

      let pathParams = {
        'contact_id': contactId
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
      let returnType = Note;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}/notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Note
     * Creates a new Note.
     * @param {String} contactId contact_id
     * @param {module:com.keap.sdk.core/model/CreateNoteRequest} createNoteRequest request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Note}
     */
    createNoteUsingPOST1(contactId, createNoteRequest) {
      return this.createNoteUsingPOST1WithHttpInfo(contactId, createNoteRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Note
     * Deletes the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling deleteNoteUsingDELETE1");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling deleteNoteUsingDELETE1");
      }

      let pathParams = {
        'contact_id': contactId,
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}/notes/{note_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Note
     * Deletes the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteNoteUsingDELETE1(contactId, noteId) {
      return this.deleteNoteUsingDELETE1WithHttpInfo(contactId, noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Note
     * Retrieves the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/GetNoteResponse} and HTTP response
     */
    getNoteUsingGET1WithHttpInfo(contactId, noteId) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getNoteUsingGET1");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling getNoteUsingGET1");
      }

      let pathParams = {
        'contact_id': contactId,
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
      let returnType = GetNoteResponse;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}/notes/{note_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Note
     * Retrieves the specified Note
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/GetNoteResponse}
     */
    getNoteUsingGET1(contactId, noteId) {
      return this.getNoteUsingGET1WithHttpInfo(contactId, noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Notes
     * Retrieves a list of Notes
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Search filter to apply to results
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListNotesResponse} and HTTP response
     */
    listNotesUsingGET1WithHttpInfo(contactId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling listNotesUsingGET1");
      }

      let pathParams = {
        'contact_id': contactId
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
      let returnType = ListNotesResponse;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}/notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Notes
     * Retrieves a list of Notes
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Search filter to apply to results
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListNotesResponse}
     */
    listNotesUsingGET1(contactId, opts) {
      return this.listNotesUsingGET1WithHttpInfo(contactId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Note
     * Updates a Note for a Contact
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @param {module:com.keap.sdk.core/model/UpdateNoteRequest} updateNoteRequest updateNoteRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/UpdateNoteResponse} and HTTP response
     */
    updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, opts) {
      opts = opts || {};
      let postBody = updateNoteRequest;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling updateNoteUsingPATCH");
      }
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling updateNoteUsingPATCH");
      }
      // verify the required parameter 'updateNoteRequest' is set
      if (updateNoteRequest === undefined || updateNoteRequest === null) {
        throw new Error("Missing the required parameter 'updateNoteRequest' when calling updateNoteUsingPATCH");
      }

      let pathParams = {
        'contact_id': contactId,
        'note_id': noteId
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
      let returnType = UpdateNoteResponse;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}/notes/{note_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Note
     * Updates a Note for a Contact
     * @param {String} contactId contact_id
     * @param {String} noteId note_id
     * @param {module:com.keap.sdk.core/model/UpdateNoteRequest} updateNoteRequest updateNoteRequest
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/UpdateNoteResponse}
     */
    updateNoteUsingPATCH(contactId, noteId, updateNoteRequest, opts) {
      return this.updateNoteUsingPATCHWithHttpInfo(contactId, noteId, updateNoteRequest, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
