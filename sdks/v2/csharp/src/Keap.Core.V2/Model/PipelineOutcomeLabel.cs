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
    /// Represents a label for a pipeline outcome.
    /// </summary>
    [DataContract(Name = "PipelineOutcomeLabel")]
    public partial class PipelineOutcomeLabel : IValidatableObject
    {

        /// <summary>
        /// The status of the deal. This field is required.
        /// </summary>
        /// <value>The status of the deal. This field is required.</value>
        [DataMember(Name = "value", IsRequired = true, EmitDefaultValue = true)]
        public DealStatus Value { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineOutcomeLabel" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PipelineOutcomeLabel() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PipelineOutcomeLabel" /> class.
        /// </summary>
        /// <param name="value">The status of the deal. This field is required. (required).</param>
        /// <param name="label">The label for the outcome. This field is optional but must have at least one character if provided..</param>
        public PipelineOutcomeLabel(DealStatus value = default(DealStatus), string label = default(string))
        {
            this.Value = value;
            this.Label = label;
        }

        /// <summary>
        /// The label for the outcome. This field is optional but must have at least one character if provided.
        /// </summary>
        /// <value>The label for the outcome. This field is optional but must have at least one character if provided.</value>
        [DataMember(Name = "label", EmitDefaultValue = true)]
        public string Label { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PipelineOutcomeLabel {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
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
            // Label (string) minLength
            if (this.Label != null && this.Label.Length < 1)
            {
                yield return new ValidationResult("Invalid value for Label, length must be greater than 1.", new [] { "Label" });
            }

            yield break;
        }    }

}
