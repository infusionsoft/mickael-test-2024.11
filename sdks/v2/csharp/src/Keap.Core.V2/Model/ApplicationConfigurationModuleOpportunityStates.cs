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
    /// ApplicationConfigurationModuleOpportunityStates
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleOpportunityStates")]
    public partial class ApplicationConfigurationModuleOpportunityStates : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleOpportunityStates" /> class.
        /// </summary>
        /// <param name="active">active.</param>
        /// <param name="loss">loss.</param>
        /// <param name="win">win.</param>
        public ApplicationConfigurationModuleOpportunityStates(ApplicationConfigurationModuleOpportunityStatesActive active = default(ApplicationConfigurationModuleOpportunityStatesActive), ApplicationConfigurationModuleOpportunityStatesLoss loss = default(ApplicationConfigurationModuleOpportunityStatesLoss), ApplicationConfigurationModuleOpportunityStatesWin win = default(ApplicationConfigurationModuleOpportunityStatesWin))
        {
            this.Active = active;
            this.Loss = loss;
            this.Win = win;
        }

        /// <summary>
        /// Gets or Sets Active
        /// </summary>
        [DataMember(Name = "active", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleOpportunityStatesActive Active { get; set; }

        /// <summary>
        /// Gets or Sets Loss
        /// </summary>
        [DataMember(Name = "loss", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleOpportunityStatesLoss Loss { get; set; }

        /// <summary>
        /// Gets or Sets Win
        /// </summary>
        [DataMember(Name = "win", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleOpportunityStatesWin Win { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleOpportunityStates {\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  Loss: ").Append(Loss).Append("\n");
            sb.Append("  Win: ").Append(Win).Append("\n");
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
