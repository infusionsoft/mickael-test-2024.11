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
    /// Response for a list of stages.
    /// </summary>
    [DataContract(Name = "StageListResponse")]
    public partial class StageListResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="StageListResponse" /> class.
        /// </summary>
        /// <param name="nextPageToken">Token for the next page of results..</param>
        /// <param name="stages">The list of stages..</param>
        public StageListResponse(string nextPageToken = default(string), List<Stage> stages = default(List<Stage>))
        {
            this.NextPageToken = nextPageToken;
            this.Stages = stages;
        }

        /// <summary>
        /// Token for the next page of results.
        /// </summary>
        /// <value>Token for the next page of results.</value>
        [DataMember(Name = "next_page_token", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// The list of stages.
        /// </summary>
        /// <value>The list of stages.</value>
        [DataMember(Name = "stages", EmitDefaultValue = false)]
        public List<Stage> Stages { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class StageListResponse {\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
            sb.Append("  Stages: ").Append(Stages).Append("\n");
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
