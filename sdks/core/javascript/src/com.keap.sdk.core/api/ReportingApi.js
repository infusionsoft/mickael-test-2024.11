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
import Error from '../model/Error';
import ReportExecutionResult from '../model/ReportExecutionResult';

/**
* Reporting service.
* @module com.keap.sdk.core/api/ReportingApi
* @version 0.0.30
*/
export default class ReportingApi {

    /**
    * Constructs a new ReportingApi. 
    * @alias module:com.keap.sdk.core/api/ReportingApi
    * @class
    * @param {module:com.keap.sdk.core/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:com.keap.sdk.core/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Run a Report
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>
     * @param {String} reportId The unique identifier of the report (Saved Search) to execute
     * @param {Object} opts Optional parameters
     * @param {String} [fields] Comma-separated list of fields to return (or do not supply a value to return all)
     * @param {String} [orderBy] Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} [pageSize = 1000)] Total number of items to return per page
     * @param {String} [pageToken] Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.keap.sdk.core/model/ReportExecutionResult} and HTTP response
     */
    runReportUsingPOSTWithHttpInfo(reportId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling runReportUsingPOST");
      }

      let pathParams = {
        'report_id': reportId
      };
      let queryParams = {
        'fields': opts['fields'],
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
      let returnType = ReportExecutionResult;
      return this.apiClient.callApi(
        '/v2/reporting/reports/{report_id}:run', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Run a Report
     * Runs a report as defined in the application (identified as Saved Search)<br/><span style='color:red'>Deprecated as of v2</span>
     * @param {String} reportId The unique identifier of the report (Saved Search) to execute
     * @param {Object} opts Optional parameters
     * @param {String} opts.fields Comma-separated list of fields to return (or do not supply a value to return all)
     * @param {String} opts.orderBy Attribute and direction to order items by. E.g. `given_name desc`
     * @param {Number} opts.pageSize Total number of items to return per page (default to 1000)
     * @param {String} opts.pageToken Representation of the last row retrieved from the previous page. An empty value implies a request for the first page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.keap.sdk.core/model/ReportExecutionResult}
     */
    runReportUsingPOST(reportId, opts) {
      return this.runReportUsingPOSTWithHttpInfo(reportId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
