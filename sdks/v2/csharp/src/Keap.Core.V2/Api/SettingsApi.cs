/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using Keap.Core.V2.Client;
using Keap.Core.V2.Client.Auth;
using Keap.Core.V2.Model;

namespace Keap.Core.V2.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISettingsApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get Application Configuration
        /// </summary>
        /// <remarks>
        /// Get configuration values for the application instance.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetSettingsResponse</returns>
        GetSettingsResponse GetApplicationConfigurationsUsingGET(List<string>? fields = default(List<string>?), int operationIndex = 0);

        /// <summary>
        /// Get Application Configuration
        /// </summary>
        /// <remarks>
        /// Get configuration values for the application instance.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetSettingsResponse</returns>
        ApiResponse<GetSettingsResponse> GetApplicationConfigurationsUsingGETWithHttpInfo(List<string>? fields = default(List<string>?), int operationIndex = 0);
        /// <summary>
        /// Get Contact Option types
        /// </summary>
        /// <remarks>
        /// Gets a list of Contact Option types.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetContactOptionTypesResponse</returns>
        GetContactOptionTypesResponse GetContactOptionTypesUsingGET1(int operationIndex = 0);

        /// <summary>
        /// Get Contact Option types
        /// </summary>
        /// <remarks>
        /// Gets a list of Contact Option types.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetContactOptionTypesResponse</returns>
        ApiResponse<GetContactOptionTypesResponse> GetContactOptionTypesUsingGET1WithHttpInfo(int operationIndex = 0);
        /// <summary>
        /// Get Application Status
        /// </summary>
        /// <remarks>
        /// Check if the application is enabled or not
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetApplicationEnabledStatusResponse</returns>
        GetApplicationEnabledStatusResponse IsApplicationEnabledUsingGET(int operationIndex = 0);

        /// <summary>
        /// Get Application Status
        /// </summary>
        /// <remarks>
        /// Check if the application is enabled or not
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetApplicationEnabledStatusResponse</returns>
        ApiResponse<GetApplicationEnabledStatusResponse> IsApplicationEnabledUsingGETWithHttpInfo(int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISettingsApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Get Application Configuration
        /// </summary>
        /// <remarks>
        /// Get configuration values for the application instance.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetSettingsResponse</returns>
        System.Threading.Tasks.Task<GetSettingsResponse> GetApplicationConfigurationsUsingGETAsync(List<string>? fields = default(List<string>?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Get Application Configuration
        /// </summary>
        /// <remarks>
        /// Get configuration values for the application instance.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetSettingsResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetSettingsResponse>> GetApplicationConfigurationsUsingGETWithHttpInfoAsync(List<string>? fields = default(List<string>?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        /// <summary>
        /// Get Contact Option types
        /// </summary>
        /// <remarks>
        /// Gets a list of Contact Option types.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetContactOptionTypesResponse</returns>
        System.Threading.Tasks.Task<GetContactOptionTypesResponse> GetContactOptionTypesUsingGET1Async(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Get Contact Option types
        /// </summary>
        /// <remarks>
        /// Gets a list of Contact Option types.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetContactOptionTypesResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetContactOptionTypesResponse>> GetContactOptionTypesUsingGET1WithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        /// <summary>
        /// Get Application Status
        /// </summary>
        /// <remarks>
        /// Check if the application is enabled or not
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetApplicationEnabledStatusResponse</returns>
        System.Threading.Tasks.Task<GetApplicationEnabledStatusResponse> IsApplicationEnabledUsingGETAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Get Application Status
        /// </summary>
        /// <remarks>
        /// Check if the application is enabled or not
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetApplicationEnabledStatusResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetApplicationEnabledStatusResponse>> IsApplicationEnabledUsingGETWithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISettingsApi : ISettingsApiSync, ISettingsApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class SettingsApi : ISettingsApi
    {
        private Keap.Core.V2.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="SettingsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SettingsApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SettingsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SettingsApi(string basePath)
        {
            this.Configuration = Keap.Core.V2.Client.Configuration.MergeConfigurations(
                Keap.Core.V2.Client.GlobalConfiguration.Instance,
                new Keap.Core.V2.Client.Configuration { BasePath = basePath }
            );
            this.Client = new Keap.Core.V2.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Keap.Core.V2.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = Keap.Core.V2.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SettingsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public SettingsApi(Keap.Core.V2.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = Keap.Core.V2.Client.Configuration.MergeConfigurations(
                Keap.Core.V2.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new Keap.Core.V2.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new Keap.Core.V2.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = Keap.Core.V2.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SettingsApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public SettingsApi(Keap.Core.V2.Client.ISynchronousClient client, Keap.Core.V2.Client.IAsynchronousClient asyncClient, Keap.Core.V2.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = Keap.Core.V2.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public Keap.Core.V2.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public Keap.Core.V2.Client.ISynchronousClient Client { get; set; }

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
        public Keap.Core.V2.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Keap.Core.V2.Client.ExceptionFactory ExceptionFactory
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
        /// Get Application Configuration Get configuration values for the application instance.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetSettingsResponse</returns>
        public GetSettingsResponse GetApplicationConfigurationsUsingGET(List<string>? fields = default(List<string>?), int operationIndex = 0)
        {
            Keap.Core.V2.Client.ApiResponse<GetSettingsResponse> localVarResponse = GetApplicationConfigurationsUsingGETWithHttpInfo(fields);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Application Configuration Get configuration values for the application instance.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetSettingsResponse</returns>
        public Keap.Core.V2.Client.ApiResponse<GetSettingsResponse> GetApplicationConfigurationsUsingGETWithHttpInfo(List<string>? fields = default(List<string>?), int operationIndex = 0)
        {
            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Core.V2.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Core.V2.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            if (fields != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Core.V2.Client.ClientUtils.ParameterToMultiMap("multi", "fields", fields));
            }

            localVarRequestOptions.Operation = "SettingsApi.GetApplicationConfigurationsUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Get<GetSettingsResponse>("/v2/settings/applications:getConfiguration", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetApplicationConfigurationsUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get Application Configuration Get configuration values for the application instance.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetSettingsResponse</returns>
        public async System.Threading.Tasks.Task<GetSettingsResponse> GetApplicationConfigurationsUsingGETAsync(List<string>? fields = default(List<string>?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Core.V2.Client.ApiResponse<GetSettingsResponse> localVarResponse = await GetApplicationConfigurationsUsingGETWithHttpInfoAsync(fields, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Application Configuration Get configuration values for the application instance.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fields">By default, only application data is returned. In addition to that, data is returned for the fields that are mentioned in the query. (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetSettingsResponse)</returns>
        public async System.Threading.Tasks.Task<Keap.Core.V2.Client.ApiResponse<GetSettingsResponse>> GetApplicationConfigurationsUsingGETWithHttpInfoAsync(List<string>? fields = default(List<string>?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {

            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Core.V2.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Core.V2.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            if (fields != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Core.V2.Client.ClientUtils.ParameterToMultiMap("multi", "fields", fields));
            }

            localVarRequestOptions.Operation = "SettingsApi.GetApplicationConfigurationsUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<GetSettingsResponse>("/v2/settings/applications:getConfiguration", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetApplicationConfigurationsUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get Contact Option types Gets a list of Contact Option types.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetContactOptionTypesResponse</returns>
        public GetContactOptionTypesResponse GetContactOptionTypesUsingGET1(int operationIndex = 0)
        {
            Keap.Core.V2.Client.ApiResponse<GetContactOptionTypesResponse> localVarResponse = GetContactOptionTypesUsingGET1WithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Contact Option types Gets a list of Contact Option types.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetContactOptionTypesResponse</returns>
        public Keap.Core.V2.Client.ApiResponse<GetContactOptionTypesResponse> GetContactOptionTypesUsingGET1WithHttpInfo(int operationIndex = 0)
        {
            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Core.V2.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Core.V2.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            localVarRequestOptions.Operation = "SettingsApi.GetContactOptionTypesUsingGET1";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Get<GetContactOptionTypesResponse>("/v2/settings/contactOptionTypes", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetContactOptionTypesUsingGET1", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get Contact Option types Gets a list of Contact Option types.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetContactOptionTypesResponse</returns>
        public async System.Threading.Tasks.Task<GetContactOptionTypesResponse> GetContactOptionTypesUsingGET1Async(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Core.V2.Client.ApiResponse<GetContactOptionTypesResponse> localVarResponse = await GetContactOptionTypesUsingGET1WithHttpInfoAsync(operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Contact Option types Gets a list of Contact Option types.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetContactOptionTypesResponse)</returns>
        public async System.Threading.Tasks.Task<Keap.Core.V2.Client.ApiResponse<GetContactOptionTypesResponse>> GetContactOptionTypesUsingGET1WithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {

            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Core.V2.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Core.V2.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            localVarRequestOptions.Operation = "SettingsApi.GetContactOptionTypesUsingGET1";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<GetContactOptionTypesResponse>("/v2/settings/contactOptionTypes", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetContactOptionTypesUsingGET1", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get Application Status Check if the application is enabled or not
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetApplicationEnabledStatusResponse</returns>
        public GetApplicationEnabledStatusResponse IsApplicationEnabledUsingGET(int operationIndex = 0)
        {
            Keap.Core.V2.Client.ApiResponse<GetApplicationEnabledStatusResponse> localVarResponse = IsApplicationEnabledUsingGETWithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Application Status Check if the application is enabled or not
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetApplicationEnabledStatusResponse</returns>
        public Keap.Core.V2.Client.ApiResponse<GetApplicationEnabledStatusResponse> IsApplicationEnabledUsingGETWithHttpInfo(int operationIndex = 0)
        {
            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Core.V2.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Core.V2.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            localVarRequestOptions.Operation = "SettingsApi.IsApplicationEnabledUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Get<GetApplicationEnabledStatusResponse>("/v2/settings/applications:isEnabled", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("IsApplicationEnabledUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Get Application Status Check if the application is enabled or not
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetApplicationEnabledStatusResponse</returns>
        public async System.Threading.Tasks.Task<GetApplicationEnabledStatusResponse> IsApplicationEnabledUsingGETAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Core.V2.Client.ApiResponse<GetApplicationEnabledStatusResponse> localVarResponse = await IsApplicationEnabledUsingGETWithHttpInfoAsync(operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Application Status Check if the application is enabled or not
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetApplicationEnabledStatusResponse)</returns>
        public async System.Threading.Tasks.Task<Keap.Core.V2.Client.ApiResponse<GetApplicationEnabledStatusResponse>> IsApplicationEnabledUsingGETWithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {

            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = Keap.Core.V2.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = Keap.Core.V2.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            localVarRequestOptions.Operation = "SettingsApi.IsApplicationEnabledUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<GetApplicationEnabledStatusResponse>("/v2/settings/applications:isEnabled", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("IsApplicationEnabledUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
