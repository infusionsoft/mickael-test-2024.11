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
    /// ApplicationConfigurationModuleTask
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleTask")]
    public partial class ApplicationConfigurationModuleTask : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleTask" /> class.
        /// </summary>
        /// <param name="appointmentTypes">appointmentTypes.</param>
        /// <param name="shareOpportunityWithRelatedUser">shareOpportunityWithRelatedUser.</param>
        public ApplicationConfigurationModuleTask(string appointmentTypes = default(string), bool shareOpportunityWithRelatedUser = default(bool))
        {
            this.AppointmentTypes = appointmentTypes;
            this.ShareOpportunityWithRelatedUser = shareOpportunityWithRelatedUser;
        }

        /// <summary>
        /// Gets or Sets AppointmentTypes
        /// </summary>
        [DataMember(Name = "appointment_types", EmitDefaultValue = false)]
        public string AppointmentTypes { get; set; }

        /// <summary>
        /// Gets or Sets ShareOpportunityWithRelatedUser
        /// </summary>
        [DataMember(Name = "share_opportunity_with_related_user", EmitDefaultValue = true)]
        public bool ShareOpportunityWithRelatedUser { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleTask {\n");
            sb.Append("  AppointmentTypes: ").Append(AppointmentTypes).Append("\n");
            sb.Append("  ShareOpportunityWithRelatedUser: ").Append(ShareOpportunityWithRelatedUser).Append("\n");
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
