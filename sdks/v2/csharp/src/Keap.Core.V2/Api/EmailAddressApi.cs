/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
    public interface IEmailAddressApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Retrieve an Email Address status
        /// </summary>
        /// <remarks>
        /// Retrieves the opt-in status for given Email Address
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>RestEmailAddress</returns>
        RestEmailAddress GetEmailAddressStatusUsingGET(string email, int operationIndex = 0);

        /// <summary>
        /// Retrieve an Email Address status
        /// </summary>
        /// <remarks>
        /// Retrieves the opt-in status for given Email Address
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of RestEmailAddress</returns>
        ApiResponse<RestEmailAddress> GetEmailAddressStatusUsingGETWithHttpInfo(string email, int operationIndex = 0);
        /// <summary>
        /// Update an Email Address opt-in status
        /// </summary>
        /// <remarks>
        /// Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>RestEmailAddress</returns>
        RestEmailAddress UpdateEmailAddressOptStatusUsingPUT(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0);

        /// <summary>
        /// Update an Email Address opt-in status
        /// </summary>
        /// <remarks>
        /// Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of RestEmailAddress</returns>
        ApiResponse<RestEmailAddress> UpdateEmailAddressOptStatusUsingPUTWithHttpInfo(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IEmailAddressApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Retrieve an Email Address status
        /// </summary>
        /// <remarks>
        /// Retrieves the opt-in status for given Email Address
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of RestEmailAddress</returns>
        System.Threading.Tasks.Task<RestEmailAddress> GetEmailAddressStatusUsingGETAsync(string email, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Retrieve an Email Address status
        /// </summary>
        /// <remarks>
        /// Retrieves the opt-in status for given Email Address
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (RestEmailAddress)</returns>
        System.Threading.Tasks.Task<ApiResponse<RestEmailAddress>> GetEmailAddressStatusUsingGETWithHttpInfoAsync(string email, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        /// <summary>
        /// Update an Email Address opt-in status
        /// </summary>
        /// <remarks>
        /// Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of RestEmailAddress</returns>
        System.Threading.Tasks.Task<RestEmailAddress> UpdateEmailAddressOptStatusUsingPUTAsync(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));

        /// <summary>
        /// Update an Email Address opt-in status
        /// </summary>
        /// <remarks>
        /// Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </remarks>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (RestEmailAddress)</returns>
        System.Threading.Tasks.Task<ApiResponse<RestEmailAddress>> UpdateEmailAddressOptStatusUsingPUTWithHttpInfoAsync(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IEmailAddressApi : IEmailAddressApiSync, IEmailAddressApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class EmailAddressApi : IEmailAddressApi
    {
        private Keap.Core.V2.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="EmailAddressApi"/> class.
        /// </summary>
        /// <returns></returns>
        public EmailAddressApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EmailAddressApi"/> class.
        /// </summary>
        /// <returns></returns>
        public EmailAddressApi(string basePath)
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
        /// Initializes a new instance of the <see cref="EmailAddressApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public EmailAddressApi(Keap.Core.V2.Client.Configuration configuration)
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
        /// Initializes a new instance of the <see cref="EmailAddressApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public EmailAddressApi(Keap.Core.V2.Client.ISynchronousClient client, Keap.Core.V2.Client.IAsynchronousClient asyncClient, Keap.Core.V2.Client.IReadableConfiguration configuration)
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
        /// Retrieve an Email Address status Retrieves the opt-in status for given Email Address
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>RestEmailAddress</returns>
        public RestEmailAddress GetEmailAddressStatusUsingGET(string email, int operationIndex = 0)
        {
            Keap.Core.V2.Client.ApiResponse<RestEmailAddress> localVarResponse = GetEmailAddressStatusUsingGETWithHttpInfo(email);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Retrieve an Email Address status Retrieves the opt-in status for given Email Address
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of RestEmailAddress</returns>
        public Keap.Core.V2.Client.ApiResponse<RestEmailAddress> GetEmailAddressStatusUsingGETWithHttpInfo(string email, int operationIndex = 0)
        {
            // verify the required parameter 'email' is set
            if (email == null)
            {
                throw new Keap.Core.V2.Client.ApiException(400, "Missing required parameter 'email' when calling EmailAddressApi->GetEmailAddressStatusUsingGET");
            }

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

            localVarRequestOptions.PathParameters.Add("email", Keap.Core.V2.Client.ClientUtils.ParameterToString(email)); // path parameter

            localVarRequestOptions.Operation = "EmailAddressApi.GetEmailAddressStatusUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Get<RestEmailAddress>("/v2/emailAddresses/{email}", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetEmailAddressStatusUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Retrieve an Email Address status Retrieves the opt-in status for given Email Address
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of RestEmailAddress</returns>
        public async System.Threading.Tasks.Task<RestEmailAddress> GetEmailAddressStatusUsingGETAsync(string email, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Core.V2.Client.ApiResponse<RestEmailAddress> localVarResponse = await GetEmailAddressStatusUsingGETWithHttpInfoAsync(email, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Retrieve an Email Address status Retrieves the opt-in status for given Email Address
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (RestEmailAddress)</returns>
        public async System.Threading.Tasks.Task<Keap.Core.V2.Client.ApiResponse<RestEmailAddress>> GetEmailAddressStatusUsingGETWithHttpInfoAsync(string email, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            // verify the required parameter 'email' is set
            if (email == null)
            {
                throw new Keap.Core.V2.Client.ApiException(400, "Missing required parameter 'email' when calling EmailAddressApi->GetEmailAddressStatusUsingGET");
            }


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

            localVarRequestOptions.PathParameters.Add("email", Keap.Core.V2.Client.ClientUtils.ParameterToString(email)); // path parameter

            localVarRequestOptions.Operation = "EmailAddressApi.GetEmailAddressStatusUsingGET";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<RestEmailAddress>("/v2/emailAddresses/{email}", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetEmailAddressStatusUsingGET", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Update an Email Address opt-in status Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>RestEmailAddress</returns>
        public RestEmailAddress UpdateEmailAddressOptStatusUsingPUT(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0)
        {
            Keap.Core.V2.Client.ApiResponse<RestEmailAddress> localVarResponse = UpdateEmailAddressOptStatusUsingPUTWithHttpInfo(email, updateEmailAddress);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Update an Email Address opt-in status Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <returns>ApiResponse of RestEmailAddress</returns>
        public Keap.Core.V2.Client.ApiResponse<RestEmailAddress> UpdateEmailAddressOptStatusUsingPUTWithHttpInfo(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0)
        {
            // verify the required parameter 'email' is set
            if (email == null)
            {
                throw new Keap.Core.V2.Client.ApiException(400, "Missing required parameter 'email' when calling EmailAddressApi->UpdateEmailAddressOptStatusUsingPUT");
            }

            // verify the required parameter 'updateEmailAddress' is set
            if (updateEmailAddress == null)
            {
                throw new Keap.Core.V2.Client.ApiException(400, "Missing required parameter 'updateEmailAddress' when calling EmailAddressApi->UpdateEmailAddressOptStatusUsingPUT");
            }

            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
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

            localVarRequestOptions.PathParameters.Add("email", Keap.Core.V2.Client.ClientUtils.ParameterToString(email)); // path parameter
            localVarRequestOptions.Data = updateEmailAddress;

            localVarRequestOptions.Operation = "EmailAddressApi.UpdateEmailAddressOptStatusUsingPUT";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = this.Client.Put<RestEmailAddress>("/v2/emailAddresses/{email}", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("UpdateEmailAddressOptStatusUsingPUT", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

        /// <summary>
        /// Update an Email Address opt-in status Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of RestEmailAddress</returns>
        public async System.Threading.Tasks.Task<RestEmailAddress> UpdateEmailAddressOptStatusUsingPUTAsync(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            Keap.Core.V2.Client.ApiResponse<RestEmailAddress> localVarResponse = await UpdateEmailAddressOptStatusUsingPUTWithHttpInfoAsync(email, updateEmailAddress, operationIndex, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Update an Email Address opt-in status Updates an Email Address opt-in status  You may opt-in or mark an email address as _Marketable_ by including the following field in the request JSON with an opt-in reason. (This field is also shown in the complete request body sample.) The reason you provide here will help with compliance. Example reasons: \&quot;Customer opted-in through webform\&quot;, \&quot;Company gave explicit permission.\&quot;  &#x60;&#x60;&#x60;json \&quot;opt_in_reason\&quot;: \&quot;your reason for opt-in\&quot; &#x60;&#x60;&#x60; Note that the email address status will only be updated to &#x60;Unconfirmed&#x60; (marketable) for email addresses that are currently in the following states: - &#x60;Unengaged Marketable&#x60; - &#x60;Unengaged Non-Marketable&#x60; - &#x60;Non-Marketable&#x60; - &#x60;Opt-Out: Manual&#x60;  All other existing statuses e.g. &#x60;List Unsubscribe&#x60;, &#x60;Opt-Out&#x60;, &#x60;System&#x60; etc will remain non-marketable and in their existing state.
        /// </summary>
        /// <exception cref="Keap.Core.V2.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="email">email</param>
        /// <param name="updateEmailAddress">updateEmailAddress</param>
        /// <param name="operationIndex">Index associated with the operation.</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (RestEmailAddress)</returns>
        public async System.Threading.Tasks.Task<Keap.Core.V2.Client.ApiResponse<RestEmailAddress>> UpdateEmailAddressOptStatusUsingPUTWithHttpInfoAsync(string email, UpdateEmailAddress updateEmailAddress, int operationIndex = 0, System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
        {
            // verify the required parameter 'email' is set
            if (email == null)
            {
                throw new Keap.Core.V2.Client.ApiException(400, "Missing required parameter 'email' when calling EmailAddressApi->UpdateEmailAddressOptStatusUsingPUT");
            }

            // verify the required parameter 'updateEmailAddress' is set
            if (updateEmailAddress == null)
            {
                throw new Keap.Core.V2.Client.ApiException(400, "Missing required parameter 'updateEmailAddress' when calling EmailAddressApi->UpdateEmailAddressOptStatusUsingPUT");
            }


            Keap.Core.V2.Client.RequestOptions localVarRequestOptions = new Keap.Core.V2.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
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

            localVarRequestOptions.PathParameters.Add("email", Keap.Core.V2.Client.ClientUtils.ParameterToString(email)); // path parameter
            localVarRequestOptions.Data = updateEmailAddress;

            localVarRequestOptions.Operation = "EmailAddressApi.UpdateEmailAddressOptStatusUsingPUT";
            localVarRequestOptions.OperationIndex = operationIndex;


            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PutAsync<RestEmailAddress>("/v2/emailAddresses/{email}", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("UpdateEmailAddressOptStatusUsingPUT", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}
