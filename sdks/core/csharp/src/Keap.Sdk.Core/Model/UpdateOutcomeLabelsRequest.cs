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
    /// Represents a request to update outcome labels for a pipeline.
    /// </summary>
    [DataContract(Name = "UpdateOutcomeLabelsRequest")]
    public partial class UpdateOutcomeLabelsRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateOutcomeLabelsRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateOutcomeLabelsRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateOutcomeLabelsRequest" /> class.
        /// </summary>
        /// <param name="outcomeLabels">List of outcome labels to be updated. (required).</param>
        public UpdateOutcomeLabelsRequest(List<PipelineOutcomeLabel> outcomeLabels = default(List<PipelineOutcomeLabel>))
        {
            // to ensure "outcomeLabels" is required (not null)
            if (outcomeLabels == null)
            {
                throw new ArgumentNullException("outcomeLabels is a required property for UpdateOutcomeLabelsRequest and cannot be null");
            }
            this.OutcomeLabels = outcomeLabels;
        }

        /// <summary>
        /// List of outcome labels to be updated.
        /// </summary>
        /// <value>List of outcome labels to be updated.</value>
        [DataMember(Name = "outcome_labels", IsRequired = true, EmitDefaultValue = true)]
        public List<PipelineOutcomeLabel> OutcomeLabels { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateOutcomeLabelsRequest {\n");
            sb.Append("  OutcomeLabels: ").Append(OutcomeLabels).Append("\n");
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
