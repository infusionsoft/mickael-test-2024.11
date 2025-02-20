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
    /// ApplicationConfigurationModuleAffiliateCommission
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleAffiliateCommission")]
    public partial class ApplicationConfigurationModuleAffiliateCommission : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleAffiliateCommission" /> class.
        /// </summary>
        /// <param name="calculationType">calculationType.</param>
        /// <param name="levels">levels.</param>
        /// <param name="participantTypes">participantTypes.</param>
        public ApplicationConfigurationModuleAffiliateCommission(string calculationType = default(string), int levels = default(int), string participantTypes = default(string))
        {
            this.CalculationType = calculationType;
            this.Levels = levels;
            this.ParticipantTypes = participantTypes;
        }

        /// <summary>
        /// Gets or Sets CalculationType
        /// </summary>
        [DataMember(Name = "calculation_type", EmitDefaultValue = false)]
        public string CalculationType { get; set; }

        /// <summary>
        /// Gets or Sets Levels
        /// </summary>
        [DataMember(Name = "levels", EmitDefaultValue = false)]
        public int Levels { get; set; }

        /// <summary>
        /// Gets or Sets ParticipantTypes
        /// </summary>
        [DataMember(Name = "participant_types", EmitDefaultValue = false)]
        public string ParticipantTypes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleAffiliateCommission {\n");
            sb.Append("  CalculationType: ").Append(CalculationType).Append("\n");
            sb.Append("  Levels: ").Append(Levels).Append("\n");
            sb.Append("  ParticipantTypes: ").Append(ParticipantTypes).Append("\n");
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
