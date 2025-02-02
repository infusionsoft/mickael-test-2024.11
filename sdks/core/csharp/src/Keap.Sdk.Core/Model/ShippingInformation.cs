/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
    /// ShippingInformation
    /// </summary>
    [DataContract(Name = "ShippingInformation")]
    public partial class ShippingInformation : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ShippingInformation" /> class.
        /// </summary>
        /// <param name="addresses">addresses.</param>
        /// <param name="company">company.</param>
        /// <param name="familyName">familyName.</param>
        /// <param name="givenName">givenName.</param>
        /// <param name="id">id.</param>
        /// <param name="invoiceToCompany">invoiceToCompany.</param>
        /// <param name="phoneNumbers">phoneNumbers.</param>
        public ShippingInformation(List<Address> addresses = default(List<Address>), BasicCompany company = default(BasicCompany), string familyName = default(string), string givenName = default(string), string id = default(string), bool invoiceToCompany = default(bool), List<PhoneNumber> phoneNumbers = default(List<PhoneNumber>))
        {
            this.Addresses = addresses;
            this.Company = company;
            this.FamilyName = familyName;
            this.GivenName = givenName;
            this.Id = id;
            this.InvoiceToCompany = invoiceToCompany;
            this.PhoneNumbers = phoneNumbers;
        }

        /// <summary>
        /// Gets or Sets Addresses
        /// </summary>
        [DataMember(Name = "addresses", EmitDefaultValue = false)]
        public List<Address> Addresses { get; set; }

        /// <summary>
        /// Gets or Sets Company
        /// </summary>
        [DataMember(Name = "company", EmitDefaultValue = false)]
        public BasicCompany Company { get; set; }

        /// <summary>
        /// Gets or Sets FamilyName
        /// </summary>
        [DataMember(Name = "family_name", EmitDefaultValue = false)]
        public string FamilyName { get; set; }

        /// <summary>
        /// Gets or Sets GivenName
        /// </summary>
        [DataMember(Name = "given_name", EmitDefaultValue = false)]
        public string GivenName { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets InvoiceToCompany
        /// </summary>
        [DataMember(Name = "invoice_to_company", EmitDefaultValue = true)]
        public bool InvoiceToCompany { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumbers
        /// </summary>
        [DataMember(Name = "phone_numbers", EmitDefaultValue = false)]
        public List<PhoneNumber> PhoneNumbers { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ShippingInformation {\n");
            sb.Append("  Addresses: ").Append(Addresses).Append("\n");
            sb.Append("  Company: ").Append(Company).Append("\n");
            sb.Append("  FamilyName: ").Append(FamilyName).Append("\n");
            sb.Append("  GivenName: ").Append(GivenName).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  InvoiceToCompany: ").Append(InvoiceToCompany).Append("\n");
            sb.Append("  PhoneNumbers: ").Append(PhoneNumbers).Append("\n");
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
