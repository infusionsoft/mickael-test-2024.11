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
    /// Request for creating a pipeline.
    /// </summary>
    [DataContract(Name = "CreatePipelineRequest")]
    public partial class CreatePipelineRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreatePipelineRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreatePipelineRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreatePipelineRequest" /> class.
        /// </summary>
        /// <param name="name">The name of the pipeline. (required).</param>
        /// <param name="stages">The stages of the pipeline. (required).</param>
        public CreatePipelineRequest(string name = default(string), List<string> stages = default(List<string>))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new ArgumentNullException("name is a required property for CreatePipelineRequest and cannot be null");
            }
            this.Name = name;
            // to ensure "stages" is required (not null)
            if (stages == null)
            {
                throw new ArgumentNullException("stages is a required property for CreatePipelineRequest and cannot be null");
            }
            this.Stages = stages;
        }

        /// <summary>
        /// The name of the pipeline.
        /// </summary>
        /// <value>The name of the pipeline.</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// The stages of the pipeline.
        /// </summary>
        /// <value>The stages of the pipeline.</value>
        [DataMember(Name = "stages", IsRequired = true, EmitDefaultValue = true)]
        public List<string> Stages { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreatePipelineRequest {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
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
            // Name (string) maxLength
            if (this.Name != null && this.Name.Length > 255)
            {
                yield return new ValidationResult("Invalid value for Name, length must be less than 255.", new [] { "Name" });
            }

            // Name (string) minLength
            if (this.Name != null && this.Name.Length < 1)
            {
                yield return new ValidationResult("Invalid value for Name, length must be greater than 1.", new [] { "Name" });
            }

            yield break;
        }    }

}
