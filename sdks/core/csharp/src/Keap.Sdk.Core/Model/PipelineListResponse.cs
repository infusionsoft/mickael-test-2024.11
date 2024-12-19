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
    /// Response for a list of pipelines.
    /// </summary>
    [DataContract(Name = "PipelineListResponse")]
    public partial class PipelineListResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineListResponse" /> class.
        /// </summary>
        /// <param name="nextPageToken">Token for the next page of results..</param>
        /// <param name="pipelines">The list of pipelines..</param>
        public PipelineListResponse(string nextPageToken = default(string), List<Pipeline> pipelines = default(List<Pipeline>))
        {
            this.NextPageToken = nextPageToken;
            this.Pipelines = pipelines;
        }

        /// <summary>
        /// Token for the next page of results.
        /// </summary>
        /// <value>Token for the next page of results.</value>
        [DataMember(Name = "next_page_token", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// The list of pipelines.
        /// </summary>
        /// <value>The list of pipelines.</value>
        [DataMember(Name = "pipelines", EmitDefaultValue = false)]
        public List<Pipeline> Pipelines { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PipelineListResponse {\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
            sb.Append("  Pipelines: ").Append(Pipelines).Append("\n");
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
