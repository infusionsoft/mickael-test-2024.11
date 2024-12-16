/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
    /// ApplicationConfigurationModuleOpportunity
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleOpportunity")]
    public partial class ApplicationConfigurationModuleOpportunity : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleOpportunity" /> class.
        /// </summary>
        /// <param name="defaultStage">defaultStage.</param>
        /// <param name="states">states.</param>
        public ApplicationConfigurationModuleOpportunity(string defaultStage = default(string), ApplicationConfigurationModuleOpportunityStates states = default(ApplicationConfigurationModuleOpportunityStates))
        {
            this.DefaultStage = defaultStage;
            this.States = states;
        }

        /// <summary>
        /// Gets or Sets DefaultStage
        /// </summary>
        [DataMember(Name = "default_stage", EmitDefaultValue = false)]
        public string DefaultStage { get; set; }

        /// <summary>
        /// Gets or Sets States
        /// </summary>
        [DataMember(Name = "states", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleOpportunityStates States { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleOpportunity {\n");
            sb.Append("  DefaultStage: ").Append(DefaultStage).Append("\n");
            sb.Append("  States: ").Append(States).Append("\n");
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
