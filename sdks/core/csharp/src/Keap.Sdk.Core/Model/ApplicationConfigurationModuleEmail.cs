/*
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
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
    /// ApplicationConfigurationModuleEmail
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleEmail")]
    public partial class ApplicationConfigurationModuleEmail : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleEmail" /> class.
        /// </summary>
        /// <param name="appendContactKeyToLinks">appendContactKeyToLinks.</param>
        /// <param name="defaultOptInLink">defaultOptInLink.</param>
        /// <param name="defaultOptOutLink">defaultOptOutLink.</param>
        /// <param name="hideEmailsToAndFromDomains">hideEmailsToAndFromDomains.</param>
        /// <param name="whitelistedDomains">whitelistedDomains.</param>
        public ApplicationConfigurationModuleEmail(bool appendContactKeyToLinks = default(bool), string defaultOptInLink = default(string), string defaultOptOutLink = default(string), string hideEmailsToAndFromDomains = default(string), string whitelistedDomains = default(string))
        {
            this.AppendContactKeyToLinks = appendContactKeyToLinks;
            this.DefaultOptInLink = defaultOptInLink;
            this.DefaultOptOutLink = defaultOptOutLink;
            this.HideEmailsToAndFromDomains = hideEmailsToAndFromDomains;
            this.WhitelistedDomains = whitelistedDomains;
        }

        /// <summary>
        /// Gets or Sets AppendContactKeyToLinks
        /// </summary>
        [DataMember(Name = "append_contact_key_to_links", EmitDefaultValue = true)]
        public bool AppendContactKeyToLinks { get; set; }

        /// <summary>
        /// Gets or Sets DefaultOptInLink
        /// </summary>
        [DataMember(Name = "default_opt_in_link", EmitDefaultValue = false)]
        public string DefaultOptInLink { get; set; }

        /// <summary>
        /// Gets or Sets DefaultOptOutLink
        /// </summary>
        [DataMember(Name = "default_opt_out_link", EmitDefaultValue = false)]
        public string DefaultOptOutLink { get; set; }

        /// <summary>
        /// Gets or Sets HideEmailsToAndFromDomains
        /// </summary>
        [DataMember(Name = "hide_emails_to_and_from_domains", EmitDefaultValue = false)]
        public string HideEmailsToAndFromDomains { get; set; }

        /// <summary>
        /// Gets or Sets WhitelistedDomains
        /// </summary>
        [DataMember(Name = "whitelisted_domains", EmitDefaultValue = false)]
        public string WhitelistedDomains { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleEmail {\n");
            sb.Append("  AppendContactKeyToLinks: ").Append(AppendContactKeyToLinks).Append("\n");
            sb.Append("  DefaultOptInLink: ").Append(DefaultOptInLink).Append("\n");
            sb.Append("  DefaultOptOutLink: ").Append(DefaultOptOutLink).Append("\n");
            sb.Append("  HideEmailsToAndFromDomains: ").Append(HideEmailsToAndFromDomains).Append("\n");
            sb.Append("  WhitelistedDomains: ").Append(WhitelistedDomains).Append("\n");
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
