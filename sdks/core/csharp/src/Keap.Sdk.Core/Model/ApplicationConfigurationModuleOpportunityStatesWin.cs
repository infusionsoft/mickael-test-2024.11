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
    /// ApplicationConfigurationModuleOpportunityStatesWin
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleOpportunityStatesWin")]
    public partial class ApplicationConfigurationModuleOpportunityStatesWin : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleOpportunityStatesWin" /> class.
        /// </summary>
        /// <param name="reasons">reasons.</param>
        /// <param name="stage">stage.</param>
        public ApplicationConfigurationModuleOpportunityStatesWin(string reasons = default(string), string stage = default(string))
        {
            this.Reasons = reasons;
            this.Stage = stage;
        }

        /// <summary>
        /// Gets or Sets Reasons
        /// </summary>
        [DataMember(Name = "reasons", EmitDefaultValue = false)]
        public string Reasons { get; set; }

        /// <summary>
        /// Gets or Sets Stage
        /// </summary>
        [DataMember(Name = "stage", EmitDefaultValue = false)]
        public string Stage { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleOpportunityStatesWin {\n");
            sb.Append("  Reasons: ").Append(Reasons).Append("\n");
            sb.Append("  Stage: ").Append(Stage).Append("\n");
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
