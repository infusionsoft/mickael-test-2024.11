/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
    /// Represents a stage in a pipeline.
    /// </summary>
    [DataContract(Name = "Stage")]
    public partial class Stage : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Stage" /> class.
        /// </summary>
        /// <param name="id">Unique identifier for the model..</param>
        /// <param name="name">The name of the stage..</param>
        /// <param name="pipelineId">The ID of the pipeline..</param>
        public Stage(string id = default(string), string name = default(string), string pipelineId = default(string))
        {
            this.Id = id;
            this.Name = name;
            this.PipelineId = pipelineId;
        }

        /// <summary>
        /// Unique identifier for the model.
        /// </summary>
        /// <value>Unique identifier for the model.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// The name of the stage.
        /// </summary>
        /// <value>The name of the stage.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The ID of the pipeline.
        /// </summary>
        /// <value>The ID of the pipeline.</value>
        [DataMember(Name = "pipeline_id", EmitDefaultValue = false)]
        public string PipelineId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Stage {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
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
            yield break;
        }    }

}
