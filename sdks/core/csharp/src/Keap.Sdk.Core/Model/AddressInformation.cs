/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
    /// AddressInformation
    /// </summary>
    [DataContract(Name = "AddressInformation")]
    public partial class AddressInformation : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AddressInformation" /> class.
        /// </summary>
        /// <param name="company">company.</param>
        /// <param name="countryCode">countryCode.</param>
        /// <param name="firstName">firstName.</param>
        /// <param name="isInvoiceToCompany">isInvoiceToCompany.</param>
        /// <param name="lastName">lastName.</param>
        /// <param name="line1">line1.</param>
        /// <param name="line2">line2.</param>
        /// <param name="locality">locality.</param>
        /// <param name="middleName">middleName.</param>
        /// <param name="phone">phone.</param>
        /// <param name="region">region.</param>
        /// <param name="zipCode">zipCode.</param>
        /// <param name="zipFour">zipFour.</param>
        public AddressInformation(string company = default(string), string countryCode = default(string), string firstName = default(string), bool isInvoiceToCompany = default(bool), string lastName = default(string), string line1 = default(string), string line2 = default(string), string locality = default(string), string middleName = default(string), string phone = default(string), string region = default(string), string zipCode = default(string), string zipFour = default(string))
        {
            this.Company = company;
            this.CountryCode = countryCode;
            this.FirstName = firstName;
            this.IsInvoiceToCompany = isInvoiceToCompany;
            this.LastName = lastName;
            this.Line1 = line1;
            this.Line2 = line2;
            this.Locality = locality;
            this.MiddleName = middleName;
            this.Phone = phone;
            this.Region = region;
            this.ZipCode = zipCode;
            this.ZipFour = zipFour;
        }

        /// <summary>
        /// Gets or Sets Company
        /// </summary>
        [DataMember(Name = "company", EmitDefaultValue = false)]
        public string Company { get; set; }

        /// <summary>
        /// Gets or Sets CountryCode
        /// </summary>
        [DataMember(Name = "country_code", EmitDefaultValue = false)]
        public string CountryCode { get; set; }

        /// <summary>
        /// Gets or Sets FirstName
        /// </summary>
        [DataMember(Name = "first_name", EmitDefaultValue = false)]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or Sets IsInvoiceToCompany
        /// </summary>
        [DataMember(Name = "is_invoice_to_company", EmitDefaultValue = true)]
        public bool IsInvoiceToCompany { get; set; }

        /// <summary>
        /// Gets or Sets LastName
        /// </summary>
        [DataMember(Name = "last_name", EmitDefaultValue = false)]
        public string LastName { get; set; }

        /// <summary>
        /// Gets or Sets Line1
        /// </summary>
        [DataMember(Name = "line1", EmitDefaultValue = false)]
        public string Line1 { get; set; }

        /// <summary>
        /// Gets or Sets Line2
        /// </summary>
        [DataMember(Name = "line2", EmitDefaultValue = false)]
        public string Line2 { get; set; }

        /// <summary>
        /// Gets or Sets Locality
        /// </summary>
        [DataMember(Name = "locality", EmitDefaultValue = false)]
        public string Locality { get; set; }

        /// <summary>
        /// Gets or Sets MiddleName
        /// </summary>
        [DataMember(Name = "middle_name", EmitDefaultValue = false)]
        public string MiddleName { get; set; }

        /// <summary>
        /// Gets or Sets Phone
        /// </summary>
        [DataMember(Name = "phone", EmitDefaultValue = false)]
        public string Phone { get; set; }

        /// <summary>
        /// Gets or Sets Region
        /// </summary>
        [DataMember(Name = "region", EmitDefaultValue = false)]
        public string Region { get; set; }

        /// <summary>
        /// Gets or Sets ZipCode
        /// </summary>
        [DataMember(Name = "zip_code", EmitDefaultValue = false)]
        public string ZipCode { get; set; }

        /// <summary>
        /// Gets or Sets ZipFour
        /// </summary>
        [DataMember(Name = "zip_four", EmitDefaultValue = false)]
        public string ZipFour { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AddressInformation {\n");
            sb.Append("  Company: ").Append(Company).Append("\n");
            sb.Append("  CountryCode: ").Append(CountryCode).Append("\n");
            sb.Append("  FirstName: ").Append(FirstName).Append("\n");
            sb.Append("  IsInvoiceToCompany: ").Append(IsInvoiceToCompany).Append("\n");
            sb.Append("  LastName: ").Append(LastName).Append("\n");
            sb.Append("  Line1: ").Append(Line1).Append("\n");
            sb.Append("  Line2: ").Append(Line2).Append("\n");
            sb.Append("  Locality: ").Append(Locality).Append("\n");
            sb.Append("  MiddleName: ").Append(MiddleName).Append("\n");
            sb.Append("  Phone: ").Append(Phone).Append("\n");
            sb.Append("  Region: ").Append(Region).Append("\n");
            sb.Append("  ZipCode: ").Append(ZipCode).Append("\n");
            sb.Append("  ZipFour: ").Append(ZipFour).Append("\n");
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
