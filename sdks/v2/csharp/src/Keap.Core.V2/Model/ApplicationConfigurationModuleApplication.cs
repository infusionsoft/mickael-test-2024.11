/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
    /// ApplicationConfigurationModuleApplication
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleApplication")]
    public partial class ApplicationConfigurationModuleApplication : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleApplication" /> class.
        /// </summary>
        /// <param name="company">company.</param>
        /// <param name="defaultViewLocale">defaultViewLocale.</param>
        /// <param name="featuresEnabled">featuresEnabled.</param>
        /// <param name="varTimeZone">varTimeZone.</param>
        public ApplicationConfigurationModuleApplication(ApplicationCompany company = default(ApplicationCompany), string defaultViewLocale = default(string), ApplicationFeaturesEnabled featuresEnabled = default(ApplicationFeaturesEnabled), string varTimeZone = default(string))
        {
            this.Company = company;
            this.DefaultViewLocale = defaultViewLocale;
            this.FeaturesEnabled = featuresEnabled;
            this.VarTimeZone = varTimeZone;
        }

        /// <summary>
        /// Gets or Sets Company
        /// </summary>
        [DataMember(Name = "company", EmitDefaultValue = false)]
        public ApplicationCompany Company { get; set; }

        /// <summary>
        /// Gets or Sets DefaultViewLocale
        /// </summary>
        [DataMember(Name = "default_view_locale", EmitDefaultValue = false)]
        public string DefaultViewLocale { get; set; }

        /// <summary>
        /// Gets or Sets FeaturesEnabled
        /// </summary>
        [DataMember(Name = "features_enabled", EmitDefaultValue = false)]
        public ApplicationFeaturesEnabled FeaturesEnabled { get; set; }

        /// <summary>
        /// Gets or Sets VarTimeZone
        /// </summary>
        [DataMember(Name = "time_zone", EmitDefaultValue = false)]
        public string VarTimeZone { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleApplication {\n");
            sb.Append("  Company: ").Append(Company).Append("\n");
            sb.Append("  DefaultViewLocale: ").Append(DefaultViewLocale).Append("\n");
            sb.Append("  FeaturesEnabled: ").Append(FeaturesEnabled).Append("\n");
            sb.Append("  VarTimeZone: ").Append(VarTimeZone).Append("\n");
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
