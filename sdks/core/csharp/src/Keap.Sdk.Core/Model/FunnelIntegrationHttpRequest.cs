/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
 * Contact: api@keap.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Keap.Sdk.Core.Client.OpenAPIDateConverter;

namespace Keap.Sdk.Core.Model
{
    /// <summary>
    /// FunnelIntegrationHttpRequest
    /// </summary>
    [DataContract(Name = "FunnelIntegrationHttpRequest")]
    public partial class FunnelIntegrationHttpRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FunnelIntegrationHttpRequest" /> class.
        /// </summary>
        /// <param name="body">The body of the HTTP request that will be made when this action is processed in the builder(s)..</param>
        /// <param name="callType">The type of HTTP request that will be made when this action is processed in the builder(s)..</param>
        /// <param name="headerParameters">A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s)..</param>
        /// <param name="queryParameters">A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s)..</param>
        /// <param name="url">The URL of the HTTP request that will be made when this action is processed in the builder(s)..</param>
        public FunnelIntegrationHttpRequest(string body = default(string), string callType = default(string), Dictionary<string, string> headerParameters = default(Dictionary<string, string>), Dictionary<string, string> queryParameters = default(Dictionary<string, string>), string url = default(string))
        {
            this.Body = body;
            this.CallType = callType;
            this.HeaderParameters = headerParameters;
            this.QueryParameters = queryParameters;
            this.Url = url;
        }

        /// <summary>
        /// The body of the HTTP request that will be made when this action is processed in the builder(s).
        /// </summary>
        /// <value>The body of the HTTP request that will be made when this action is processed in the builder(s).</value>
        /*
        <example>{&quot;contact_id&quot;:&quot;123&quot;}</example>
        */
        [DataMember(Name = "body", EmitDefaultValue = false)]
        public string Body { get; set; }

        /// <summary>
        /// The type of HTTP request that will be made when this action is processed in the builder(s).
        /// </summary>
        /// <value>The type of HTTP request that will be made when this action is processed in the builder(s).</value>
        /*
        <example>POST</example>
        */
        [DataMember(Name = "call_type", EmitDefaultValue = false)]
        public string CallType { get; set; }

        /// <summary>
        /// A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s).
        /// </summary>
        /// <value>A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s).</value>
        /*
        <example>{&quot;header1&quot;:&quot;value1&quot;,&quot;contact_name&quot;:&quot;~Contact.FirstName~&quot;}</example>
        */
        [DataMember(Name = "header_parameters", EmitDefaultValue = false)]
        public Dictionary<string, string> HeaderParameters { get; set; }

        /// <summary>
        /// A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s).
        /// </summary>
        /// <value>A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s).</value>
        /*
        <example>{&quot;param1&quot;:&quot;value1&quot;,&quot;contact_name&quot;:&quot;~Contact.FirstName~&quot;}</example>
        */
        [DataMember(Name = "query_parameters", EmitDefaultValue = false)]
        public Dictionary<string, string> QueryParameters { get; set; }

        /// <summary>
        /// The URL of the HTTP request that will be made when this action is processed in the builder(s).
        /// </summary>
        /// <value>The URL of the HTTP request that will be made when this action is processed in the builder(s).</value>
        /*
        <example>https://api.example.com</example>
        */
        [DataMember(Name = "url", EmitDefaultValue = false)]
        public string Url { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FunnelIntegrationHttpRequest {\n");
            sb.Append("  Body: ").Append(Body).Append("\n");
            sb.Append("  CallType: ").Append(CallType).Append("\n");
            sb.Append("  HeaderParameters: ").Append(HeaderParameters).Append("\n");
            sb.Append("  QueryParameters: ").Append(QueryParameters).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }    }

}
