/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
    /// OpportunityStage
    /// </summary>
    [DataContract(Name = "OpportunityStage")]
    public partial class OpportunityStage : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OpportunityStage" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected OpportunityStage() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="OpportunityStage" /> class.
        /// </summary>
        /// <param name="details">details.</param>
        /// <param name="id">id (required).</param>
        /// <param name="name">name.</param>
        /// <param name="reasons">reasons.</param>
        public OpportunityStage(StageDetails details = default(StageDetails), string id = default(string), string name = default(string), List<string> reasons = default(List<string>))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new ArgumentNullException("id is a required property for OpportunityStage and cannot be null");
            }
            this.Id = id;
            this.Details = details;
            this.Name = name;
            this.Reasons = reasons;
        }

        /// <summary>
        /// Gets or Sets Details
        /// </summary>
        [DataMember(Name = "details", EmitDefaultValue = false)]
        public StageDetails Details { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        /*
        <example>0</example>
        */
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = true)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Reasons
        /// </summary>
        [DataMember(Name = "reasons", EmitDefaultValue = false)]
        public List<string> Reasons { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OpportunityStage {\n");
            sb.Append("  Details: ").Append(Details).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Reasons: ").Append(Reasons).Append("\n");
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
