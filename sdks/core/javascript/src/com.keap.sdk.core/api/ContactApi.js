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
import Contact from '../model/Contact';
import ContactLink from '../model/ContactLink';
import ContactLinkType from '../model/ContactLinkType';
import CreateContactLinkTypeRequest from '../model/CreateContactLinkTypeRequest';
import CreatePatchContactRequest from '../model/CreatePatchContactRequest';
import Error from '../model/Error';
import LinkContactsRequest from '../model/LinkContactsRequest';
import ListBasicContactResponse from '../model/ListBasicContactResponse';
import ListContactLinkTypesResponse from '../model/ListContactLinkTypesResponse';
import ListContactLinksResponse from '../model/ListContactLinksResponse';
import ListContactsResponse from '../model/ListContactsResponse';
import ObjectModel from '../model/ObjectModel';
import PaymentMethodList from '../model/PaymentMethodList';

/**
* Contact service.
* @module com.keap.sdk.core/api/ContactApi
* @version 0.0.42
*/
export default class ContactApi {

    /**
    * Constructs a new ContactApi. 
    * @alias module:com.keap.sdk.core/api/ContactApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Contact Link type
     * Creates a new type of Contact Link.
     * @param {module:com.keap.sdk.core/model/CreateContactLinkTypeRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ContactLinkType} and HTTP response
     */
    createContactLinkTypeUsingPOSTWithHttpInfo(request) {
      let postBody = request;
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling createContactLinkTypeUsingPOST");
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
      let returnType = ContactLinkType;
      return this.apiClient.callApi(
        '/v2/contacts/links/types', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Contact Link type
     * Creates a new type of Contact Link.
     * @param {module:com.keap.sdk.core/model/CreateContactLinkTypeRequest} request request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ContactLinkType}
     */
    createContactLinkTypeUsingPOST(request) {
      return this.createContactLinkTypeUsingPOSTWithHttpInfo(request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Contact
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} [contact] contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Contact} and HTTP response
     */
    createContactUsingPOST1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['contact'];

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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/v2/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Contact
     * Creates a new Contact. *Note:* Contact must contain at least one item in `email_addresses` or `phone_numbers` and `country_code` is required if `region` is specified.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} opts.contact contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Contact}
     */
    createContactUsingPOST1(opts) {
      return this.createContactUsingPOST1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Contact
     * Deletes the specified Contact.
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteContactUsingDELETE1WithHttpInfo(contactId) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling deleteContactUsingDELETE1");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a Contact
     * Deletes the specified Contact.
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteContactUsingDELETE1(contactId) {
      return this.deleteContactUsingDELETE1WithHttpInfo(contactId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Contact
     * Retrieves a single Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Contact} and HTTP response
     */
    getContactUsingGET1WithHttpInfo(contactId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getContactUsingGET1");
      }

      let pathParams = {
        'contact_id': contactId
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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Contact
     * Retrieves a single Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Contact}
     */
    getContactUsingGET1(contactId, opts) {
      return this.getContactUsingGET1WithHttpInfo(contactId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for Contacts
     * Get a list of Contacts based search parameters.
     * @param {String} searchParam searchParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListBasicContactResponse} and HTTP response
     */
    getContactsBySearchTermUsingGETWithHttpInfo(searchParam) {
      let postBody = null;
      // verify the required parameter 'searchParam' is set
      if (searchParam === undefined || searchParam === null) {
        throw new Error("Missing the required parameter 'searchParam' when calling getContactsBySearchTermUsingGET");
      }

      let pathParams = {
      };
      let queryParams = {
        'searchParam': searchParam
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListBasicContactResponse;
      return this.apiClient.callApi(
        '/v2/contacts:search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search for Contacts
     * Get a list of Contacts based search parameters.
     * @param {String} searchParam searchParam
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListBasicContactResponse}
     */
    getContactsBySearchTermUsingGET(searchParam) {
      return this.getContactsBySearchTermUsingGETWithHttpInfo(searchParam)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Link Contacts
     * Links two Contacts together using the provided Link type
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ContactLink} and HTTP response
     */
    linkContactsUsingPOSTWithHttpInfo(linkContactsRequest) {
      let postBody = linkContactsRequest;
      // verify the required parameter 'linkContactsRequest' is set
      if (linkContactsRequest === undefined || linkContactsRequest === null) {
        throw new Error("Missing the required parameter 'linkContactsRequest' when calling linkContactsUsingPOST");
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
      let returnType = ContactLink;
      return this.apiClient.callApi(
        '/v2/contacts:link', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Link Contacts
     * Links two Contacts together using the provided Link type
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ContactLink}
     */
    linkContactsUsingPOST(linkContactsRequest) {
      return this.linkContactsUsingPOSTWithHttpInfo(linkContactsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Contact Link types
     * Retrieves a list of Contact Link types.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/String} [filter] Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue
     * @param {String} [orderBy] 
     * @param {Number} [pageSize] 
     * @param {String} [pageToken] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListContactLinkTypesResponse} and HTTP response
     */
    listContactLinkTypesUsingGETWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'orderBy': opts['orderBy'],
        'pageSize': opts['pageSize'],
        'pageToken': opts['pageToken']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListContactLinkTypesResponse;
      return this.apiClient.callApi(
        '/v2/contacts/links/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Contact Link types
     * Retrieves a list of Contact Link types.
     * @param {Object} opts Optional parameters
     * @param {module:com.keap.sdk.core/model/String} opts.filter Search filter to apply to results. Formatted as (unencoded) ?filter=name==expectedValue
     * @param {String} opts.orderBy 
     * @param {Number} opts.pageSize 
     * @param {String} opts.pageToken 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListContactLinkTypesResponse}
     */
    listContactLinkTypesUsingGET(opts) {
      return this.listContactLinkTypesUsingGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Linked Contacts
     * Retrieves a list of Linked Contacts for a given Contact
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListContactLinksResponse} and HTTP response
     */
    listContactLinksUsingGETWithHttpInfo(contactId) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling listContactLinksUsingGET");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListContactLinksResponse;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Linked Contacts
     * Retrieves a list of Linked Contacts for a given Contact
     * @param {String} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListContactLinksResponse}
     */
    listContactLinksUsingGET(contactId) {
      return this.listContactLinksUsingGETWithHttpInfo(contactId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Contacts
     * Retrieves a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [fields] Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123;family_name=Smith`  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListContactsResponse} and HTTP response
     */
    listContactsUsingGET1WithHttpInfo(opts) {
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
      let returnType = ListContactsResponse;
      return this.apiClient.callApi(
        '/v2/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Contacts
     * Retrieves a list of Contacts
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields Comma-delimited list of Contact properties to include in the response. (Available fields are: `score_value`, `addresses`, `anniversary`, `birthday`, `company`, `contact_type`, `custom_fields`, `create_time`, `email_addresses`, `fax_numbers`, `job_title`, `update_time`, `create_time`, `leadsource_id`,`middle_name`, `origin`, `owner_id`, `phone_numbers`, `preferred_locale`, `preferred_name`,`prefix`, `relationships`, `social_accounts`, `source_type`, `spouse_name`, `suffix`, `time_zone`,`website`, `tag_ids`, `utm_parameters`)
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) email   - (String) given_name   - (String) family_name   - (String) company_id   - (Set[String]) contact_ids   - (String) start_update_time   - (String) end_update_time   You will need to apply the `==` operator to check the equality of one of the filters with your searched  word, in the encoded form `%3D%3D`. For the filters listed above, here are some examples:   - `filter=given_name%3D%3DMary`  - `filter=company_id%3D%3D123`  - `filter=company_id%3D%3D123;family_name=Smith`  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - id   - date_created   - email   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListContactsResponse}
     */
    listContactsUsingGET1(opts) {
      return this.listContactsUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Payment Methods
     * List all Payment Methods for a Contact.
     * @param {Number} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/PaymentMethodList} and HTTP response
     */
    listPaymentMethodsUsingGETWithHttpInfo(contactId) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling listPaymentMethodsUsingGET");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaymentMethodList;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}/paymentMethods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Payment Methods
     * List all Payment Methods for a Contact.
     * @param {Number} contactId contact_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/PaymentMethodList}
     */
    listPaymentMethodsUsingGET(contactId) {
      return this.listPaymentMethodsUsingGETWithHttpInfo(contactId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Contact
     * Updates a Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} [updateMask] An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} [contact] contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Contact} and HTTP response
     */
    patchContactUsingPATCHWithHttpInfo(contactId, opts) {
      opts = opts || {};
      let postBody = opts['contact'];
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling patchContactUsingPATCH");
      }

      let pathParams = {
        'contact_id': contactId
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
      let returnType = Contact;
      return this.apiClient.callApi(
        '/v2/contacts/{contact_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a Contact
     * Updates a Contact
     * @param {String} contactId contact_id
     * @param {Object} opts Optional parameters
     * @param {Array.<module:com.keap.sdk.core/model/String>} opts.updateMask An optional list of properties to be updated. If set, only the provided properties will be updated and others will be skipped.
     * @param {module:com.keap.sdk.core/model/CreatePatchContactRequest} opts.contact contact
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Contact}
     */
    patchContactUsingPATCH(contactId, opts) {
      return this.patchContactUsingPATCHWithHttpInfo(contactId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve Contact Model
     * Get the custom fields and optional properties for the Contact object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ObjectModel} and HTTP response
     */
    retrieveContactModelUsingGET1WithHttpInfo() {
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
        '/v2/contacts/model', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve Contact Model
     * Get the custom fields and optional properties for the Contact object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ObjectModel}
     */
    retrieveContactModelUsingGET1() {
      return this.retrieveContactModelUsingGET1WithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Link between two Contacts
     * Deletes Link between two Contacts
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest) {
      let postBody = linkContactsRequest;
      // verify the required parameter 'linkContactsRequest' is set
      if (linkContactsRequest === undefined || linkContactsRequest === null) {
        throw new Error("Missing the required parameter 'linkContactsRequest' when calling unlinkContactsUsingPOST");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/contacts:unlink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Link between two Contacts
     * Deletes Link between two Contacts
     * @param {module:com.keap.sdk.core/model/LinkContactsRequest} linkContactsRequest linkContactsRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unlinkContactsUsingPOST(linkContactsRequest) {
      return this.unlinkContactsUsingPOSTWithHttpInfo(linkContactsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
