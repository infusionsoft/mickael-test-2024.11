/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
    /// ApplicationCompany
    /// </summary>
    [DataContract(Name = "ApplicationCompany")]
    public partial class ApplicationCompany : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationCompany" /> class.
        /// </summary>
        /// <param name="callerIdNumber">callerIdNumber.</param>
        /// <param name="city">city.</param>
        /// <param name="country">country.</param>
        /// <param name="email">email.</param>
        /// <param name="name">name.</param>
        /// <param name="phone">phone.</param>
        /// <param name="phoneExt">phoneExt.</param>
        /// <param name="state">state.</param>
        /// <param name="streetAddress1">streetAddress1.</param>
        /// <param name="streetAddress2">streetAddress2.</param>
        /// <param name="webLogoUrl">webLogoUrl.</param>
        /// <param name="website">website.</param>
        /// <param name="zip">zip.</param>
        public ApplicationCompany(string callerIdNumber = default(string), string city = default(string), string country = default(string), string email = default(string), string name = default(string), string phone = default(string), string phoneExt = default(string), string state = default(string), string streetAddress1 = default(string), string streetAddress2 = default(string), string webLogoUrl = default(string), string website = default(string), string zip = default(string))
        {
            this.CallerIdNumber = callerIdNumber;
            this.City = city;
            this.Country = country;
            this.Email = email;
            this.Name = name;
            this.Phone = phone;
            this.PhoneExt = phoneExt;
            this.State = state;
            this.StreetAddress1 = streetAddress1;
            this.StreetAddress2 = streetAddress2;
            this.WebLogoUrl = webLogoUrl;
            this.Website = website;
            this.Zip = zip;
        }

        /// <summary>
        /// Gets or Sets CallerIdNumber
        /// </summary>
        [DataMember(Name = "caller_id_number", EmitDefaultValue = false)]
        public string CallerIdNumber { get; set; }

        /// <summary>
        /// Gets or Sets City
        /// </summary>
        [DataMember(Name = "city", EmitDefaultValue = false)]
        public string City { get; set; }

        /// <summary>
        /// Gets or Sets Country
        /// </summary>
        [DataMember(Name = "country", EmitDefaultValue = false)]
        public string Country { get; set; }

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
        /// Gets or Sets PhoneExt
        /// </summary>
        [DataMember(Name = "phone_ext", EmitDefaultValue = false)]
        public string PhoneExt { get; set; }

        /// <summary>
        /// Gets or Sets State
        /// </summary>
        [DataMember(Name = "state", EmitDefaultValue = false)]
        public string State { get; set; }

        /// <summary>
        /// Gets or Sets StreetAddress1
        /// </summary>
        [DataMember(Name = "street_address_1", EmitDefaultValue = false)]
        public string StreetAddress1 { get; set; }

        /// <summary>
        /// Gets or Sets StreetAddress2
        /// </summary>
        [DataMember(Name = "street_address_2", EmitDefaultValue = false)]
        public string StreetAddress2 { get; set; }

        /// <summary>
        /// Gets or Sets WebLogoUrl
        /// </summary>
        [DataMember(Name = "web_logo_url", EmitDefaultValue = false)]
        public string WebLogoUrl { get; set; }

        /// <summary>
        /// Gets or Sets Website
        /// </summary>
        [DataMember(Name = "website", EmitDefaultValue = false)]
        public string Website { get; set; }

        /// <summary>
        /// Gets or Sets Zip
        /// </summary>
        [DataMember(Name = "zip", EmitDefaultValue = false)]
        public string Zip { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationCompany {\n");
            sb.Append("  CallerIdNumber: ").Append(CallerIdNumber).Append("\n");
            sb.Append("  City: ").Append(City).Append("\n");
            sb.Append("  Country: ").Append(Country).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Phone: ").Append(Phone).Append("\n");
            sb.Append("  PhoneExt: ").Append(PhoneExt).Append("\n");
            sb.Append("  State: ").Append(State).Append("\n");
            sb.Append("  StreetAddress1: ").Append(StreetAddress1).Append("\n");
            sb.Append("  StreetAddress2: ").Append(StreetAddress2).Append("\n");
            sb.Append("  WebLogoUrl: ").Append(WebLogoUrl).Append("\n");
            sb.Append("  Website: ").Append(Website).Append("\n");
            sb.Append("  Zip: ").Append(Zip).Append("\n");
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
