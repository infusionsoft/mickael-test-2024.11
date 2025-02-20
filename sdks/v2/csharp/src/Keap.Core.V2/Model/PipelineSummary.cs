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
using OpenAPIDateConverter = Keap.Core.V2.Client.OpenAPIDateConverter;

namespace Keap.Core.V2.Model
{
    /// <summary>
    /// Represents a summary of a pipeline.
    /// </summary>
    [DataContract(Name = "PipelineSummary")]
    public partial class PipelineSummary : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineSummary" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PipelineSummary() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineSummary" /> class.
        /// </summary>
        /// <param name="id">Unique identifier for the model..</param>
        /// <param name="pipelineId">The ID of the pipeline. Can be null and must be a string of digits if present..</param>
        /// <param name="pipelineName">The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters. (required).</param>
        /// <param name="statTotalDealCount">The total count of deals in the pipeline. Can be null..</param>
        /// <param name="statNewDealCount">The count of new deals in the pipeline. Can be null..</param>
        public PipelineSummary(string id = default(string), string pipelineId = default(string), string pipelineName = default(string), int? statTotalDealCount = default(int?), int? statNewDealCount = default(int?))
        {
            // to ensure "pipelineName" is required (not null)
            if (pipelineName == null)
            {
                throw new ArgumentNullException("pipelineName is a required property for PipelineSummary and cannot be null");
            }
            this.PipelineName = pipelineName;
            this.Id = id;
            this.PipelineId = pipelineId;
            this.StatTotalDealCount = statTotalDealCount;
            this.StatNewDealCount = statNewDealCount;
        }

        /// <summary>
        /// Unique identifier for the model.
        /// </summary>
        /// <value>Unique identifier for the model.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// The ID of the pipeline. Can be null and must be a string of digits if present.
        /// </summary>
        /// <value>The ID of the pipeline. Can be null and must be a string of digits if present.</value>
        [DataMember(Name = "pipeline_id", EmitDefaultValue = true)]
        public string PipelineId { get; set; }

        /// <summary>
        /// The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters.
        /// </summary>
        /// <value>The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters.</value>
        [DataMember(Name = "pipeline_name", IsRequired = true, EmitDefaultValue = true)]
        public string PipelineName { get; set; }

        /// <summary>
        /// The total count of deals in the pipeline. Can be null.
        /// </summary>
        /// <value>The total count of deals in the pipeline. Can be null.</value>
        [DataMember(Name = "stat_total_deal_count", EmitDefaultValue = true)]
        public int? StatTotalDealCount { get; set; }

        /// <summary>
        /// The count of new deals in the pipeline. Can be null.
        /// </summary>
        /// <value>The count of new deals in the pipeline. Can be null.</value>
        [DataMember(Name = "stat_new_deal_count", EmitDefaultValue = true)]
        public int? StatNewDealCount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PipelineSummary {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  PipelineId: ").Append(PipelineId).Append("\n");
            sb.Append("  PipelineName: ").Append(PipelineName).Append("\n");
            sb.Append("  StatTotalDealCount: ").Append(StatTotalDealCount).Append("\n");
            sb.Append("  StatNewDealCount: ").Append(StatNewDealCount).Append("\n");
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
            if (this.PipelineId != null) {
                // PipelineId (string) pattern
                                Regex regexPipelineId = new Regex(@"^\d+$", RegexOptions.CultureInvariant);
                                if (!regexPipelineId.Match(this.PipelineId).Success)
                                {
                                    yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for PipelineId, must match a pattern of " + regexPipelineId, new [] { "PipelineId" });
                                }
            }

            // PipelineName (string) maxLength
            if (this.PipelineName != null && this.PipelineName.Length > 255)
            {
                yield return new ValidationResult("Invalid value for PipelineName, length must be less than 255.", new [] { "PipelineName" });
            }

            // PipelineName (string) minLength
            if (this.PipelineName != null && this.PipelineName.Length < 1)
            {
                yield return new ValidationResult("Invalid value for PipelineName, length must be greater than 1.", new [] { "PipelineName" });
            }

            yield break;
        }    }

}
