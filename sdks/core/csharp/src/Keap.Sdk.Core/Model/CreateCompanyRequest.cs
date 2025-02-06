/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
    /// CreateCompanyRequest
    /// </summary>
    [DataContract(Name = "CreateCompanyRequest")]
    public partial class CreateCompanyRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCompanyRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateCompanyRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCompanyRequest" /> class.
        /// </summary>
        /// <param name="address">address.</param>
        /// <param name="companyName">companyName (required).</param>
        /// <param name="customFields">customFields.</param>
        /// <param name="emailAddress">emailAddress.</param>
        /// <param name="faxNumber">faxNumber.</param>
        /// <param name="notes">notes.</param>
        /// <param name="phoneNumber">phoneNumber.</param>
        /// <param name="website">website.</param>
        public CreateCompanyRequest(Address address = default(Address), string companyName = default(string), List<CustomFieldValue> customFields = default(List<CustomFieldValue>), EmailAddress emailAddress = default(EmailAddress), FaxNumber faxNumber = default(FaxNumber), string notes = default(string), PhoneNumber phoneNumber = default(PhoneNumber), string website = default(string))
        {
            // to ensure "companyName" is required (not null)
            if (companyName == null)
            {
                throw new ArgumentNullException("companyName is a required property for CreateCompanyRequest and cannot be null");
            }
            this.CompanyName = companyName;
            this.Address = address;
            this.CustomFields = customFields;
            this.EmailAddress = emailAddress;
            this.FaxNumber = faxNumber;
            this.Notes = notes;
            this.PhoneNumber = phoneNumber;
            this.Website = website;
        }

        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name = "address", EmitDefaultValue = false)]
        public Address Address { get; set; }

        /// <summary>
        /// Gets or Sets CompanyName
        /// </summary>
        [DataMember(Name = "company_name", IsRequired = true, EmitDefaultValue = true)]
        public string CompanyName { get; set; }

        /// <summary>
        /// Gets or Sets CustomFields
        /// </summary>
        [DataMember(Name = "custom_fields", EmitDefaultValue = false)]
        public List<CustomFieldValue> CustomFields { get; set; }

        /// <summary>
        /// Gets or Sets EmailAddress
        /// </summary>
        [DataMember(Name = "email_address", EmitDefaultValue = false)]
        public EmailAddress EmailAddress { get; set; }

        /// <summary>
        /// Gets or Sets FaxNumber
        /// </summary>
        [DataMember(Name = "fax_number", EmitDefaultValue = false)]
        public FaxNumber FaxNumber { get; set; }

        /// <summary>
        /// Gets or Sets Notes
        /// </summary>
        [DataMember(Name = "notes", EmitDefaultValue = false)]
        public string Notes { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumber
        /// </summary>
        [DataMember(Name = "phone_number", EmitDefaultValue = false)]
        public PhoneNumber PhoneNumber { get; set; }

        /// <summary>
        /// Gets or Sets Website
        /// </summary>
        [DataMember(Name = "website", EmitDefaultValue = false)]
        public string Website { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateCompanyRequest {\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
            sb.Append("  CompanyName: ").Append(CompanyName).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  EmailAddress: ").Append(EmailAddress).Append("\n");
            sb.Append("  FaxNumber: ").Append(FaxNumber).Append("\n");
            sb.Append("  Notes: ").Append(Notes).Append("\n");
            sb.Append("  PhoneNumber: ").Append(PhoneNumber).Append("\n");
            sb.Append("  Website: ").Append(Website).Append("\n");
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
