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
    /// Update profile information about the business that owns/uses this account
    /// </summary>
    [DataContract(Name = "PatchBusinessProfileRequest")]
    public partial class PatchBusinessProfileRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PatchBusinessProfileRequest" /> class.
        /// </summary>
        /// <param name="address">address.</param>
        /// <param name="businessGoals">The goals of this business, ie. Grow Business, Convert more leads.</param>
        /// <param name="businessPrimaryColor">businessPrimaryColor.</param>
        /// <param name="businessSecondaryColor">businessSecondaryColor.</param>
        /// <param name="currencyCode">ISO 4217 Currency Code.</param>
        /// <param name="email">email.</param>
        /// <param name="name">name.</param>
        /// <param name="phone">phone.</param>
        /// <param name="website">website.</param>
        public PatchBusinessProfileRequest(BusinessProfileAddressRequest address = default(BusinessProfileAddressRequest), List<string> businessGoals = default(List<string>), string businessPrimaryColor = default(string), string businessSecondaryColor = default(string), string currencyCode = default(string), string email = default(string), string name = default(string), string phone = default(string), string website = default(string))
        {
            this.Address = address;
            this.BusinessGoals = businessGoals;
            this.BusinessPrimaryColor = businessPrimaryColor;
            this.BusinessSecondaryColor = businessSecondaryColor;
            this.CurrencyCode = currencyCode;
            this.Email = email;
            this.Name = name;
            this.Phone = phone;
            this.Website = website;
        }

        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name = "address", EmitDefaultValue = false)]
        public BusinessProfileAddressRequest Address { get; set; }

        /// <summary>
        /// The goals of this business, ie. Grow Business, Convert more leads
        /// </summary>
        /// <value>The goals of this business, ie. Grow Business, Convert more leads</value>
        [DataMember(Name = "business_goals", EmitDefaultValue = false)]
        public List<string> BusinessGoals { get; set; }

        /// <summary>
        /// Gets or Sets BusinessPrimaryColor
        /// </summary>
        [DataMember(Name = "business_primary_color", EmitDefaultValue = false)]
        public string BusinessPrimaryColor { get; set; }

        /// <summary>
        /// Gets or Sets BusinessSecondaryColor
        /// </summary>
        [DataMember(Name = "business_secondary_color", EmitDefaultValue = false)]
        public string BusinessSecondaryColor { get; set; }

        /// <summary>
        /// ISO 4217 Currency Code
        /// </summary>
        /// <value>ISO 4217 Currency Code</value>
        /*
        <example>USD</example>
        */
        [DataMember(Name = "currency_code", EmitDefaultValue = false)]
        public string CurrencyCode { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Phone
        /// </summary>
        [DataMember(Name = "phone", EmitDefaultValue = false)]
        public string Phone { get; set; }

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
            sb.Append("class PatchBusinessProfileRequest {\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
            sb.Append("  BusinessGoals: ").Append(BusinessGoals).Append("\n");
            sb.Append("  BusinessPrimaryColor: ").Append(BusinessPrimaryColor).Append("\n");
            sb.Append("  BusinessSecondaryColor: ").Append(BusinessSecondaryColor).Append("\n");
            sb.Append("  CurrencyCode: ").Append(CurrencyCode).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Phone: ").Append(Phone).Append("\n");
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
