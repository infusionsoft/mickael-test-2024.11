/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddContactsToSequenceRequest from '../model/AddContactsToSequenceRequest';
import AddContactsToSequenceResponse from '../model/AddContactsToSequenceResponse';
import Campaign from '../model/Campaign';
import Error from '../model/Error';
import ListCampaignsResponse from '../model/ListCampaignsResponse';
import RemoveContactsFromSequenceRequest from '../model/RemoveContactsFromSequenceRequest';
import RemoveContactsFromSequenceResponse from '../model/RemoveContactsFromSequenceResponse';

/**
* Campaign service.
* @module com.keap.sdk.core/api/CampaignApi
* @version 0.0.93
*/
export default class CampaignApi {

    /**
    * Constructs a new CampaignApi. 
    * @alias module:com.keap.sdk.core/api/CampaignApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add Contacts to Campaign Sequence
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * @param {String} campaignId campaign_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/AddContactsToSequenceRequest} addContactsToSequenceRequest addContactsToSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/AddContactsToSequenceResponse} and HTTP response
     */
    addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest) {
      let postBody = addContactsToSequenceRequest;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling addContactsToCampaignSequenceUsingPOST1");
      }
      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new Error("Missing the required parameter 'sequenceId' when calling addContactsToCampaignSequenceUsingPOST1");
      }
      // verify the required parameter 'addContactsToSequenceRequest' is set
      if (addContactsToSequenceRequest === undefined || addContactsToSequenceRequest === null) {
        throw new Error("Missing the required parameter 'addContactsToSequenceRequest' when calling addContactsToCampaignSequenceUsingPOST1");
      }

      let pathParams = {
        'campaign_id': campaignId,
        'sequence_id': sequenceId
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
      let returnType = AddContactsToSequenceResponse;
      return this.apiClient.callApi(
        '/v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add Contacts to Campaign Sequence
     * Adds a list of contacts to a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * @param {String} campaignId campaign_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/AddContactsToSequenceRequest} addContactsToSequenceRequest addContactsToSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/AddContactsToSequenceResponse}
     */
    addContactsToCampaignSequenceUsingPOST1(campaignId, sequenceId, addContactsToSequenceRequest) {
      return this.addContactsToCampaignSequenceUsingPOST1WithHttpInfo(campaignId, sequenceId, addContactsToSequenceRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a Campaign
     * Retrieves a single campaign
     * @param {String} campaignId campaign_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/Campaign} and HTTP response
     */
    getCampaignUsingGET1WithHttpInfo(campaignId) {
      let postBody = null;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaignUsingGET1");
      }

      let pathParams = {
        'campaign_id': campaignId
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
      let returnType = Campaign;
      return this.apiClient.callApi(
        '/v2/campaigns/{campaign_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve a Campaign
     * Retrieves a single campaign
     * @param {String} campaignId campaign_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/Campaign}
     */
    getCampaignUsingGET1(campaignId) {
      return this.getCampaignUsingGET1WithHttpInfo(campaignId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Campaigns
     * Retrieves all campaigns for the authenticated user
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name.   - `filter=name%3D%3DSpring Campaign`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} [orderBy] Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc
     * @param {Number} [pageSize] Total number of items to return per page
     * @param {String} [pageToken] Page token
     * @param {Boolean} [stats] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ListCampaignsResponse} and HTTP response
     */
    listCampaignsUsingGET1WithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page_size': opts['pageSize'],
        'page_token': opts['pageToken'],
        'stats': opts['stats']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListCampaignsResponse;
      return this.apiClient.callApi(
        '/v2/campaigns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Campaigns
     * Retrieves all campaigns for the authenticated user
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter Filter to apply, allowed fields are:   - (String) name    You will need to apply the `==` operator to check the equality of the filter with your searched  text, in the encoded form `%3D%3D`. The search will look for the text anywhere in the campaign name.   - `filter=name%3D%3DSpring Campaign`  - `filter=name%3D%3DTag New Contacts`  
     * @param {String} opts.orderBy Attribute and direction to order items.   One of the following fields:   - name   - publisheddate   - id   - completedContactCount   - activeContacts   - datecreated   - lastupdated   One of the following directions:   - asc   - desc
     * @param {Number} opts.pageSize Total number of items to return per page
     * @param {String} opts.pageToken Page token
     * @param {Boolean} opts.stats 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ListCampaignsResponse}
     */
    listCampaignsUsingGET1(opts) {
      return this.listCampaignsUsingGET1WithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove Contacts from Campaign Sequence
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * @param {String} campaignId campaign_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/RemoveContactsFromSequenceRequest} removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/RemoveContactsFromSequenceResponse} and HTTP response
     */
    removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest) {
      let postBody = removeContactsFromSequenceRequest;
      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling removeContactsFromCampaignSequenceUsingPOST");
      }
      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw new Error("Missing the required parameter 'sequenceId' when calling removeContactsFromCampaignSequenceUsingPOST");
      }
      // verify the required parameter 'removeContactsFromSequenceRequest' is set
      if (removeContactsFromSequenceRequest === undefined || removeContactsFromSequenceRequest === null) {
        throw new Error("Missing the required parameter 'removeContactsFromSequenceRequest' when calling removeContactsFromCampaignSequenceUsingPOST");
      }

      let pathParams = {
        'campaign_id': campaignId,
        'sequence_id': sequenceId
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
      let returnType = RemoveContactsFromSequenceResponse;
      return this.apiClient.callApi(
        '/v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove Contacts from Campaign Sequence
     * Removes a list of contacts from a campaign sequence Response contains a map of the provided list of Contact Ids related to their individual result.
     * @param {String} campaignId campaign_id
     * @param {String} sequenceId sequence_id
     * @param {module:com.keap.sdk.core/model/RemoveContactsFromSequenceRequest} removeContactsFromSequenceRequest removeContactsFromSequenceRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/RemoveContactsFromSequenceResponse}
     */
    removeContactsFromCampaignSequenceUsingPOST(campaignId, sequenceId, removeContactsFromSequenceRequest) {
      return this.removeContactsFromCampaignSequenceUsingPOSTWithHttpInfo(campaignId, sequenceId, removeContactsFromSequenceRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
