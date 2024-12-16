/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
    public interface IBusinessProfileApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Retrieve Business Profile
        /// </summary>
        /// <remarks>
        /// Retrieves Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetBusinessProfileResponse</returns>
        GetBusinessProfileResponse GetBusinessProfileUsingGET(int operationIndex = 0);

        /// <summary>
        /// Retrieve Business Profile
        /// </summary>
        /// <remarks>
        /// Retrieves Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetBusinessProfileResponse</returns>
        ApiResponse<GetBusinessProfileResponse> GetBusinessProfileUsingGETWithHttpInfo(int operationIndex = 0);
        /// <summary>
        /// Update Business Profile
        /// </summary>
        /// <remarks>
        /// Updates Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetBusinessProfileResponse</returns>
        GetBusinessProfileResponse PatchBusinessProfileUsingPATCH(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0);

        /// <summary>
        /// Update Business Profile
        /// </summary>
        /// <remarks>
        /// Updates Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetBusinessProfileResponse</returns>
        ApiResponse<GetBusinessProfileResponse> PatchBusinessProfileUsingPATCHWithHttpInfo(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IBusinessProfileApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Retrieve Business Profile
        /// </summary>
        /// <remarks>
        /// Retrieves Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetBusinessProfileResponse</returns>
        System.Threading.Tasks.Task<GetBusinessProfileResponse> GetBusinessProfileUsingGETAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Retrieve Business Profile
        /// </summary>
        /// <remarks>
        /// Retrieves Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetBusinessProfileResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetBusinessProfileResponse>> GetBusinessProfileUsingGETWithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        /// <summary>
        /// Update Business Profile
        /// </summary>
        /// <remarks>
        /// Updates Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetBusinessProfileResponse</returns>
        System.Threading.Tasks.Task<GetBusinessProfileResponse> PatchBusinessProfileUsingPATCHAsync(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Update Business Profile
        /// </summary>
        /// <remarks>
        /// Updates Business Profile information.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetBusinessProfileResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<GetBusinessProfileResponse>> PatchBusinessProfileUsingPATCHWithHttpInfoAsync(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IBusinessProfileApi : IBusinessProfileApiSync, IBusinessProfileApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class BusinessProfileApi : IBusinessProfileApi
    {
        private Keap.Sdk.Core.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessProfileApi"/> class.
        /// </summary>
        /// <returns></returns>
        public BusinessProfileApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessProfileApi"/> class.
        /// </summary>
        /// <returns></returns>
        public BusinessProfileApi(string basePath)
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
        /// Initializes a new instance of the <see cref="BusinessProfileApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public BusinessProfileApi(Keap.Sdk.Core.Client.Configuration configuration)
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
        /// Initializes a new instance of the <see cref="BusinessProfileApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public BusinessProfileApi(Keap.Sdk.Core.Client.ISynchronousClient client, Keap.Sdk.Core.Client.IAsynchronousClient asyncClient, Keap.Sdk.Core.Client.IReadableConfiguration configuration)
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
        /// Retrieve Business Profile Retrieves Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetBusinessProfileResponse</returns>
        public GetBusinessProfileResponse GetBusinessProfileUsingGET(int operationIndex = 0)
        {
            Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse> localVarResponse = GetBusinessProfileUsingGETWithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        /// Retrieve Business Profile Retrieves Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetBusinessProfileResponse</returns>
        public Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse> GetBusinessProfileUsingGETWithHttpInfo(int operationIndex = 0)
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


            localVarRequestOptions.Operation = "BusinessProfileApi.GetBusinessProfileUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Get<GetBusinessProfileResponse>("/v2/businessProfile", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetBusinessProfileUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Retrieve Business Profile Retrieves Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetBusinessProfileResponse</returns>
        public async System.Threading.Tasks.Task<GetBusinessProfileResponse> GetBusinessProfileUsingGETAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse> localVarResponse = await GetBusinessProfileUsingGETWithHttpInfoAsync(operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Retrieve Business Profile Retrieves Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetBusinessProfileResponse)</returns>
        public async System.Threading.Tasks.Task<Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse>> GetBusinessProfileUsingGETWithHttpInfoAsync(int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
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


            localVarRequestOptions.Operation = "BusinessProfileApi.GetBusinessProfileUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<GetBusinessProfileResponse>("/v2/businessProfile", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetBusinessProfileUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Update Business Profile Updates Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>GetBusinessProfileResponse</returns>
        public GetBusinessProfileResponse PatchBusinessProfileUsingPATCH(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0)
        {
            Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse> localVarResponse = PatchBusinessProfileUsingPATCHWithHttpInfo(updateMask, businessProfile);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Update Business Profile Updates Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of GetBusinessProfileResponse</returns>
        public Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse> PatchBusinessProfileUsingPATCHWithHttpInfo(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0)
        {
            Keap.Sdk.Core.Client.RequestOptions localVarRequestOptions = new Keap.Sdk.Core.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
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

            if (updateMask != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("multi", "update_mask", updateMask));
            }
            localVarRequestOptions.Data = businessProfile;

            localVarRequestOptions.Operation = "BusinessProfileApi.PatchBusinessProfileUsingPATCH";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Patch<GetBusinessProfileResponse>("/v2/businessProfile", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("PatchBusinessProfileUsingPATCH", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Update Business Profile Updates Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of GetBusinessProfileResponse</returns>
        public async System.Threading.Tasks.Task<GetBusinessProfileResponse> PatchBusinessProfileUsingPATCHAsync(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse> localVarResponse = await PatchBusinessProfileUsingPATCHWithHttpInfoAsync(updateMask, businessProfile, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Update Business Profile Updates Business Profile information.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="updateMask">An optional list of fields to be updated. If set, only the fields provided in the update_mask will be updated and others will be skipped. (optional)</param>
        /// <param name="businessProfile">businessProfile (optional)</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (GetBusinessProfileResponse)</returns>
        public async System.Threading.Tasks.Task<Keap.Sdk.Core.Client.ApiResponse<GetBusinessProfileResponse>> PatchBusinessProfileUsingPATCHWithHttpInfoAsync(List<string>? updateMask = default(List<string>?), PatchBusinessProfileRequest? businessProfile = default(PatchBusinessProfileRequest?), int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {

            Keap.Sdk.Core.Client.RequestOptions localVarRequestOptions = new Keap.Sdk.Core.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
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

            if (updateMask != null)
            {
                localVarRequestOptions.QueryParameters.Add(Keap.Sdk.Core.Client.ClientUtils.ParameterToMultiMap("multi", "update_mask", updateMask));
            }
            localVarRequestOptions.Data = businessProfile;

            localVarRequestOptions.Operation = "BusinessProfileApi.PatchBusinessProfileUsingPATCH";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PatchAsync<GetBusinessProfileResponse>("/v2/businessProfile", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("PatchBusinessProfileUsingPATCH", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
