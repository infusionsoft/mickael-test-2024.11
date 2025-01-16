/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
    /// Request for updating a stage.
    /// </summary>
    [DataContract(Name = "UpdateStageRequest")]
    public partial class UpdateStageRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateStageRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateStageRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateStageRequest" /> class.
        /// </summary>
        /// <param name="name">The name of the stage. (required).</param>
        /// <param name="previousStageId">The ID of the previous stage. (required).</param>
        /// <param name="nextStageId">The ID of the next stage. (required).</param>
        /// <param name="pipelineId">The ID of the pipeline. (required).</param>
        public UpdateStageRequest(string name = default(string), string previousStageId = default(string), string nextStageId = default(string), string pipelineId = default(string))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new ArgumentNullException("name is a required property for UpdateStageRequest and cannot be null");
            }
            this.Name = name;
            // to ensure "previousStageId" is required (not null)
            if (previousStageId == null)
            {
                throw new ArgumentNullException("previousStageId is a required property for UpdateStageRequest and cannot be null");
            }
            this.PreviousStageId = previousStageId;
            // to ensure "nextStageId" is required (not null)
            if (nextStageId == null)
            {
                throw new ArgumentNullException("nextStageId is a required property for UpdateStageRequest and cannot be null");
            }
            this.NextStageId = nextStageId;
            // to ensure "pipelineId" is required (not null)
            if (pipelineId == null)
            {
                throw new ArgumentNullException("pipelineId is a required property for UpdateStageRequest and cannot be null");
            }
            this.PipelineId = pipelineId;
        }

        /// <summary>
        /// The name of the stage.
        /// </summary>
        /// <value>The name of the stage.</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// The ID of the previous stage.
        /// </summary>
        /// <value>The ID of the previous stage.</value>
        [DataMember(Name = "previous_stage_id", IsRequired = true, EmitDefaultValue = true)]
        public string PreviousStageId { get; set; }

        /// <summary>
        /// The ID of the next stage.
        /// </summary>
        /// <value>The ID of the next stage.</value>
        [DataMember(Name = "next_stage_id", IsRequired = true, EmitDefaultValue = true)]
        public string NextStageId { get; set; }

        /// <summary>
        /// The ID of the pipeline.
        /// </summary>
        /// <value>The ID of the pipeline.</value>
        [DataMember(Name = "pipeline_id", IsRequired = true, EmitDefaultValue = true)]
        public string PipelineId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateStageRequest {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  PreviousStageId: ").Append(PreviousStageId).Append("\n");
            sb.Append("  NextStageId: ").Append(NextStageId).Append("\n");
            sb.Append("  PipelineId: ").Append(PipelineId).Append("\n");
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
            // Name (string) minLength
            if (this.Name != null && this.Name.Length < 1)
            {
                yield return new ValidationResult("Invalid value for Name, length must be greater than 1.", new [] { "Name" });
            }

            // PreviousStageId (string) minLength
            if (this.PreviousStageId != null && this.PreviousStageId.Length < 1)
            {
                yield return new ValidationResult("Invalid value for PreviousStageId, length must be greater than 1.", new [] { "PreviousStageId" });
            }

            // NextStageId (string) minLength
            if (this.NextStageId != null && this.NextStageId.Length < 1)
            {
                yield return new ValidationResult("Invalid value for NextStageId, length must be greater than 1.", new [] { "NextStageId" });
            }

            // PipelineId (string) minLength
            if (this.PipelineId != null && this.PipelineId.Length < 1)
            {
                yield return new ValidationResult("Invalid value for PipelineId, length must be greater than 1.", new [] { "PipelineId" });
            }

            yield break;
        }    }

}
