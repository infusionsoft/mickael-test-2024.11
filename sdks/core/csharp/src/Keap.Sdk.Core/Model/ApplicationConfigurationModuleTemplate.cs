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
    /// ApplicationConfigurationModuleTemplate
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleTemplate")]
    public partial class ApplicationConfigurationModuleTemplate : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleTemplate" /> class.
        /// </summary>
        /// <param name="defaultCountryCode">defaultCountryCode.</param>
        /// <param name="defaultUserId">defaultUserId.</param>
        public ApplicationConfigurationModuleTemplate(int defaultCountryCode = default(int), long defaultUserId = default(long))
        {
            this.DefaultCountryCode = defaultCountryCode;
            this.DefaultUserId = defaultUserId;
        }

        /// <summary>
        /// Gets or Sets DefaultCountryCode
        /// </summary>
        [DataMember(Name = "default_country_code", EmitDefaultValue = false)]
        public int DefaultCountryCode { get; set; }

        /// <summary>
        /// Gets or Sets DefaultUserId
        /// </summary>
        [DataMember(Name = "default_user_id", EmitDefaultValue = false)]
        public long DefaultUserId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleTemplate {\n");
            sb.Append("  DefaultCountryCode: ").Append(DefaultCountryCode).Append("\n");
            sb.Append("  DefaultUserId: ").Append(DefaultUserId).Append("\n");
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
