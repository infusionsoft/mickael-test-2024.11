/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using Keap.Sdk.Core.Client;
using Keap.Sdk.Core.Client.Auth;
using Keap.Sdk.Core.Model;

namespace Keap.Sdk.Core.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IMerchantApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// List Merchant accounts
        /// </summary>
        /// <remarks>
        /// Retrieves a list of Merchant accounts
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ListRestMerchantResponse</returns>
        ListRestMerchantResponse ListMerchantsUsingGET(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0);

        /// <summary>
        /// List Merchant accounts
        /// </summary>
        /// <remarks>
        /// Retrieves a list of Merchant accounts
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of ListRestMerchantResponse</returns>
        ApiResponse<ListRestMerchantResponse> ListMerchantsUsingGETWithHttpInfo(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IMerchantApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// List Merchant accounts
        /// </summary>
        /// <remarks>
        /// Retrieves a list of Merchant accounts
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ListRestMerchantResponse</returns>
        System.Threading.Tasks.Task<ListRestMerchantResponse> ListMerchantsUsingGETAsync(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// List Merchant accounts
        /// </summary>
        /// <remarks>
        /// Retrieves a list of Merchant accounts
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (ListRestMerchantResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<ListRestMerchantResponse>> ListMerchantsUsingGETWithHttpInfoAsync(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IMerchantApi : IMerchantApiSync, IMerchantApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class MerchantApi : IMerchantApi
    {
        private Keap.Sdk.Core.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="MerchantApi"/> class.
        /// </summary>
        /// <returns></returns>
        public MerchantApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MerchantApi"/> class.
        /// </summary>
        /// <returns></returns>
        public MerchantApi(string basePath)
        {
            this.Configuration = Keap.Sdk.Core.Client.Configuration.MergeConfigurations(
                Keap.Sdk.Core.Client.GlobalConfiguration.Instance,
                new Keap.Sdk.Core.Client.Configuration { BasePath = basePath }
            );
            this.Client = new Keap.Sdk.Core.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Keap.Sdk.Core.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = Keap.Sdk.Core.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MerchantApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public MerchantApi(Keap.Sdk.Core.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = Keap.Sdk.Core.Client.Configuration.MergeConfigurations(
                Keap.Sdk.Core.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new Keap.Sdk.Core.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Keap.Sdk.Core.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = Keap.Sdk.Core.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="MerchantApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public MerchantApi(Keap.Sdk.Core.Client.ISynchronousClient client, Keap.Sdk.Core.Client.IAsynchronousClient asyncClient, Keap.Sdk.Core.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = Keap.Sdk.Core.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public Keap.Sdk.Core.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public Keap.Sdk.Core.Client.ISynchronousClient Client { get; set; }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public string GetBasePath()
        {
            return this.Configuration.BasePath;
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Keap.Sdk.Core.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Keap.Sdk.Core.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// List Merchant accounts Retrieves a list of Merchant accounts
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ListRestMerchantResponse</returns>
        public ListRestMerchantResponse ListMerchantsUsingGET(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0)
        {
            Keap.Sdk.Core.Client.ApiResponse<ListRestMerchantResponse> localVarResponse = ListMerchantsUsingGETWithHttpInfo(filter, orderBy, pageSize, pageToken);
            return localVarResponse.Data;
        }

        /// <summary>
        /// List Merchant accounts Retrieves a list of Merchant accounts
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of ListRestMerchantResponse</returns>
        public Keap.Sdk.Core.Client.ApiResponse<ListRestMerchantResponse> ListMerchantsUsingGETWithHttpInfo(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0)
        {
            Keap.Sdk.Core.Client.RequestOptions localVarRequestOptions = new Keap.Sdk.Core.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Sdk.Core.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Sdk.Core.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            if (filter != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "filter", filter));
            }
            if (orderBy != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "order_by", orderBy));
            }
            if (pageSize != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "page_size", pageSize));
            }
            if (pageToken != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "page_token", pageToken));
            }

            localVarRequestOptions.Operation = "MerchantApi.ListMerchantsUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Get<ListRestMerchantResponse>("/v2/merchants", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("ListMerchantsUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// List Merchant accounts Retrieves a list of Merchant accounts
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ListRestMerchantResponse</returns>
        public async System.Threading.Tasks.Task<ListRestMerchantResponse> ListMerchantsUsingGETAsync(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Sdk.Core.Client.ApiResponse<ListRestMerchantResponse> localVarResponse = await ListMerchantsUsingGETWithHttpInfoAsync(filter, orderBy, pageSize, pageToken, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// List Merchant accounts Retrieves a list of Merchant accounts
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="filter">Filter to apply, allowed fields are: - (String) id - (String) account_name - (String) type You will need to apply the &#x60;&#x3D;&#x3D;&#x60; operator to check the equality of one of the filters with your searched word, in the encoded form &#x60;%3D%3D&#x60;. For the filters listed above, here are some examples: - &#x60;filter&#x3D;id%3D%3D123&#x60; - &#x60;filter&#x3D;account_name%3D%3Dabc&#x60; - &#x60;filter&#x3D;id%3D%3D123%3Baccount_name&#x3D;abc&#x60; (optional)</param>
        /// <param name="orderBy">Attribute and direction to order items. One of the following fields: - id - account_name - type One of the following directions: - asc - desc (optional)</param>
        /// <param name="pageSize">Total number of items to return per page (optional)</param>
        /// <param name="pageToken">Page token (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (ListRestMerchantResponse)</returns>
        public async System.Threading.Tasks.Task<Keap.Sdk.Core.Client.ApiResponse<ListRestMerchantResponse>> ListMerchantsUsingGETWithHttpInfoAsync(string? filter = default(string?), string? orderBy = default(string?), int? pageSize = default(int?), string? pageToken = default(string?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {

            Keap.Sdk.Core.Client.RequestOptions localVarRequestOptions = new Keap.Sdk.Core.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Sdk.Core.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Sdk.Core.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            if (filter != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "filter", filter));
            }
            if (orderBy != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "order_by", orderBy));
            }
            if (pageSize != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "page_size", pageSize));
            }
            if (pageToken != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("", "page_token", pageToken));
            }

            localVarRequestOptions.Operation = "MerchantApi.ListMerchantsUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<ListRestMerchantResponse>("/v2/merchants", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("ListMerchantsUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
