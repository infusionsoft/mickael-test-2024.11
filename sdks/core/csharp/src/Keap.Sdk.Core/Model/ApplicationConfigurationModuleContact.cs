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
    /// ApplicationConfigurationModuleContact
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleContact")]
    public partial class ApplicationConfigurationModuleContact : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleContact" /> class.
        /// </summary>
        /// <param name="addressLabels">addressLabels.</param>
        /// <param name="contactTypes">contactTypes.</param>
        /// <param name="defaultNewContactForm">defaultNewContactForm.</param>
        /// <param name="disableContactEditInClientLogin">disableContactEditInClientLogin.</param>
        /// <param name="faxTypes">faxTypes.</param>
        /// <param name="phoneTypes">phoneTypes.</param>
        /// <param name="suffixTypes">suffixTypes.</param>
        /// <param name="titleTypes">titleTypes.</param>
        public ApplicationConfigurationModuleContact(ApplicationConfigurationModuleContactAddressLabels addressLabels = default(ApplicationConfigurationModuleContactAddressLabels), string contactTypes = default(string), string defaultNewContactForm = default(string), bool disableContactEditInClientLogin = default(bool), string faxTypes = default(string), string phoneTypes = default(string), string suffixTypes = default(string), string titleTypes = default(string))
        {
            this.AddressLabels = addressLabels;
            this.ContactTypes = contactTypes;
            this.DefaultNewContactForm = defaultNewContactForm;
            this.DisableContactEditInClientLogin = disableContactEditInClientLogin;
            this.FaxTypes = faxTypes;
            this.PhoneTypes = phoneTypes;
            this.SuffixTypes = suffixTypes;
            this.TitleTypes = titleTypes;
        }

        /// <summary>
        /// Gets or Sets AddressLabels
        /// </summary>
        [DataMember(Name = "address_labels", EmitDefaultValue = false)]
        public ApplicationConfigurationModuleContactAddressLabels AddressLabels { get; set; }

        /// <summary>
        /// Gets or Sets ContactTypes
        /// </summary>
        [DataMember(Name = "contact_types", EmitDefaultValue = false)]
        public string ContactTypes { get; set; }

        /// <summary>
        /// Gets or Sets DefaultNewContactForm
        /// </summary>
        [DataMember(Name = "default_new_contact_form", EmitDefaultValue = false)]
        public string DefaultNewContactForm { get; set; }

        /// <summary>
        /// Gets or Sets DisableContactEditInClientLogin
        /// </summary>
        [DataMember(Name = "disable_contact_edit_in_client_login", EmitDefaultValue = true)]
        public bool DisableContactEditInClientLogin { get; set; }

        /// <summary>
        /// Gets or Sets FaxTypes
        /// </summary>
        [DataMember(Name = "fax_types", EmitDefaultValue = false)]
        public string FaxTypes { get; set; }

        /// <summary>
        /// Gets or Sets PhoneTypes
        /// </summary>
        [DataMember(Name = "phone_types", EmitDefaultValue = false)]
        public string PhoneTypes { get; set; }

        /// <summary>
        /// Gets or Sets SuffixTypes
        /// </summary>
        [DataMember(Name = "suffix_types", EmitDefaultValue = false)]
        public string SuffixTypes { get; set; }

        /// <summary>
        /// Gets or Sets TitleTypes
        /// </summary>
        [DataMember(Name = "title_types", EmitDefaultValue = false)]
        public string TitleTypes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleContact {\n");
            sb.Append("  AddressLabels: ").Append(AddressLabels).Append("\n");
            sb.Append("  ContactTypes: ").Append(ContactTypes).Append("\n");
            sb.Append("  DefaultNewContactForm: ").Append(DefaultNewContactForm).Append("\n");
            sb.Append("  DisableContactEditInClientLogin: ").Append(DisableContactEditInClientLogin).Append("\n");
            sb.Append("  FaxTypes: ").Append(FaxTypes).Append("\n");
            sb.Append("  PhoneTypes: ").Append(PhoneTypes).Append("\n");
            sb.Append("  SuffixTypes: ").Append(SuffixTypes).Append("\n");
            sb.Append("  TitleTypes: ").Append(TitleTypes).Append("\n");
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
