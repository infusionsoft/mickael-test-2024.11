/*
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
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
    public interface ISalesApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Set default Merchant Account
        /// </summary>
        /// <remarks>
        /// Sets the specified Merchant Account as the default Merchant Account.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns></returns>
        void SetMerchantGatewayAsDefaultUsingPOST(long id, int operationIndex = 0);

        /// <summary>
        /// Set default Merchant Account
        /// </summary>
        /// <remarks>
        /// Sets the specified Merchant Account as the default Merchant Account.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of Object(void)</returns>
        ApiResponse<Object> SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(long id, int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISalesApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Set default Merchant Account
        /// </summary>
        /// <remarks>
        /// Sets the specified Merchant Account as the default Merchant Account.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of void</returns>
        System.Threading.Tasks.Task SetMerchantGatewayAsDefaultUsingPOSTAsync(long id, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Set default Merchant Account
        /// </summary>
        /// <remarks>
        /// Sets the specified Merchant Account as the default Merchant Account.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse<Object>> SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfoAsync(long id, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISalesApi : ISalesApiSync, ISalesApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class SalesApi : ISalesApi
    {
        private Keap.Sdk.Core.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="SalesApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SalesApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SalesApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SalesApi(string basePath)
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
        /// Initializes a new instance of the <see cref="SalesApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public SalesApi(Keap.Sdk.Core.Client.Configuration configuration)
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
        /// Initializes a new instance of the <see cref="SalesApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public SalesApi(Keap.Sdk.Core.Client.ISynchronousClient client, Keap.Sdk.Core.Client.IAsynchronousClient asyncClient, Keap.Sdk.Core.Client.IReadableConfiguration configuration)
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
        /// Set default Merchant Account Sets the specified Merchant Account as the default Merchant Account.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns></returns>
        public void SetMerchantGatewayAsDefaultUsingPOST(long id, int operationIndex = 0)
        {
            SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(id);
        }

        /// <summary>
        /// Set default Merchant Account Sets the specified Merchant Account as the default Merchant Account.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of Object(void)</returns>
        public Keap.Sdk.Core.Client.ApiResponse<Object> SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfo(long id, int operationIndex = 0)
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

            localVarRequestOptions.PathParameters.Add("id", Keap.Sdk.Core.Client.ClientUtils.ParameterToString(id)); // path parameter

            localVarRequestOptions.Operation = "SalesApi.SetMerchantGatewayAsDefaultUsingPOST";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Post<Object>("/v2/sales/merchants/{id}:setDefault", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("SetMerchantGatewayAsDefaultUsingPOST", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Set default Merchant Account Sets the specified Merchant Account as the default Merchant Account.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of void</returns>
        public async System.Threading.Tasks.Task SetMerchantGatewayAsDefaultUsingPOSTAsync(long id, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            await SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfoAsync(id, operationIndex, cancellationToken).ConfigureAwait(false);
        }

        /// <summary>
        /// Set default Merchant Account Sets the specified Merchant Account as the default Merchant Account.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="id">id</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<Keap.Sdk.Core.Client.ApiResponse<Object>> SetMerchantGatewayAsDefaultUsingPOSTWithHttpInfoAsync(long id, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
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

            localVarRequestOptions.PathParameters.Add("id", Keap.Sdk.Core.Client.ClientUtils.ParameterToString(id)); // path parameter

            localVarRequestOptions.Operation = "SalesApi.SetMerchantGatewayAsDefaultUsingPOST";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PostAsync<Object>("/v2/sales/merchants/{id}:setDefault", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("SetMerchantGatewayAsDefaultUsingPOST", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
