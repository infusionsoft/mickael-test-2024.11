/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
    public interface ISubscriptionsApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Create Subscription
        /// </summary>
        /// <remarks>
        /// Creates a subscription with the specified product and product subscription id.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>RestSubscriptionV2</returns>
        RestSubscriptionV2 CreateSubscriptionV2UsingPOST(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0);

        /// <summary>
        /// Create Subscription
        /// </summary>
        /// <remarks>
        /// Creates a subscription with the specified product and product subscription id.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of RestSubscriptionV2</returns>
        ApiResponse<RestSubscriptionV2> CreateSubscriptionV2UsingPOSTWithHttpInfo(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISubscriptionsApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Create Subscription
        /// </summary>
        /// <remarks>
        /// Creates a subscription with the specified product and product subscription id.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of RestSubscriptionV2</returns>
        System.Threading.Tasks.Task<RestSubscriptionV2> CreateSubscriptionV2UsingPOSTAsync(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Create Subscription
        /// </summary>
        /// <remarks>
        /// Creates a subscription with the specified product and product subscription id.
        /// </remarks>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (RestSubscriptionV2)</returns>
        System.Threading.Tasks.Task<ApiResponse<RestSubscriptionV2>> CreateSubscriptionV2UsingPOSTWithHttpInfoAsync(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISubscriptionsApi : ISubscriptionsApiSync, ISubscriptionsApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class SubscriptionsApi : ISubscriptionsApi
    {
        private Keap.Sdk.Core.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="SubscriptionsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SubscriptionsApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SubscriptionsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SubscriptionsApi(string basePath)
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
        /// Initializes a new instance of the <see cref="SubscriptionsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public SubscriptionsApi(Keap.Sdk.Core.Client.Configuration configuration)
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
        /// Initializes a new instance of the <see cref="SubscriptionsApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public SubscriptionsApi(Keap.Sdk.Core.Client.ISynchronousClient client, Keap.Sdk.Core.Client.IAsynchronousClient asyncClient, Keap.Sdk.Core.Client.IReadableConfiguration configuration)
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
        /// Create Subscription Creates a subscription with the specified product and product subscription id.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>RestSubscriptionV2</returns>
        public RestSubscriptionV2 CreateSubscriptionV2UsingPOST(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0)
        {
            Keap.Sdk.Core.Client.ApiResponse<RestSubscriptionV2> localVarResponse = CreateSubscriptionV2UsingPOSTWithHttpInfo(createSubscriptionV2);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Create Subscription Creates a subscription with the specified product and product subscription id.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of RestSubscriptionV2</returns>
        public Keap.Sdk.Core.Client.ApiResponse<RestSubscriptionV2> CreateSubscriptionV2UsingPOSTWithHttpInfo(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0)
        {
            // verify the required parameter 'createSubscriptionV2' is set
            if (createSubscriptionV2 == null)
            {
                throw new Keap.Sdk.Core.Client.ApiException(400, "Missing required parameter 'createSubscriptionV2' when calling SubscriptionsApi->CreateSubscriptionV2UsingPOST");
            }

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

            localVarRequestOptions.Data = createSubscriptionV2;

            localVarRequestOptions.Operation = "SubscriptionsApi.CreateSubscriptionV2UsingPOST";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Post<RestSubscriptionV2>("/v2/subscriptions", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("CreateSubscriptionV2UsingPOST", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Create Subscription Creates a subscription with the specified product and product subscription id.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of RestSubscriptionV2</returns>
        public async System.Threading.Tasks.Task<RestSubscriptionV2> CreateSubscriptionV2UsingPOSTAsync(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Sdk.Core.Client.ApiResponse<RestSubscriptionV2> localVarResponse = await CreateSubscriptionV2UsingPOSTWithHttpInfoAsync(createSubscriptionV2, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Create Subscription Creates a subscription with the specified product and product subscription id.
        /// </summary>
        /// <exception cref="Keap.Sdk.Core.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="createSubscriptionV2">createSubscriptionV2</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (RestSubscriptionV2)</returns>
        public async System.Threading.Tasks.Task<Keap.Sdk.Core.Client.ApiResponse<RestSubscriptionV2>> CreateSubscriptionV2UsingPOSTWithHttpInfoAsync(CreateSubscriptionV2 createSubscriptionV2, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            // verify the required parameter 'createSubscriptionV2' is set
            if (createSubscriptionV2 == null)
            {
                throw new Keap.Sdk.Core.Client.ApiException(400, "Missing required parameter 'createSubscriptionV2' when calling SubscriptionsApi->CreateSubscriptionV2UsingPOST");
            }


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

            localVarRequestOptions.Data = createSubscriptionV2;

            localVarRequestOptions.Operation = "SubscriptionsApi.CreateSubscriptionV2UsingPOST";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PostAsync<RestSubscriptionV2>("/v2/subscriptions", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("CreateSubscriptionV2UsingPOST", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
