/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.778988
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
    /// OpportunityContact
    /// </summary>
    [DataContract(Name = "OpportunityContact")]
    public partial class OpportunityContact : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OpportunityContact" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected OpportunityContact() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="OpportunityContact" /> class.
        /// </summary>
        /// <param name="companyName">companyName.</param>
        /// <param name="email">email.</param>
        /// <param name="firstName">firstName.</param>
        /// <param name="id">id (required).</param>
        /// <param name="jobTitle">jobTitle.</param>
        /// <param name="lastName">lastName.</param>
        /// <param name="phoneNumber">phoneNumber.</param>
        public OpportunityContact(string companyName = default(string), string email = default(string), string firstName = default(string), string id = default(string), string jobTitle = default(string), string lastName = default(string), string phoneNumber = default(string))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new ArgumentNullException("id is a required property for OpportunityContact and cannot be null");
            }
            this.Id = id;
            this.CompanyName = companyName;
            this.Email = email;
            this.FirstName = firstName;
            this.JobTitle = jobTitle;
            this.LastName = lastName;
            this.PhoneNumber = phoneNumber;
        }

        /// <summary>
        /// Gets or Sets CompanyName
        /// </summary>
        [DataMember(Name = "company_name", EmitDefaultValue = false)]
        public string CompanyName { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets FirstName
        /// </summary>
        [DataMember(Name = "first_name", EmitDefaultValue = false)]
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        /*
        <example>0</example>
        */
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = true)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets JobTitle
        /// </summary>
        [DataMember(Name = "job_title", EmitDefaultValue = false)]
        public string JobTitle { get; set; }

        /// <summary>
        /// Gets or Sets LastName
        /// </summary>
        [DataMember(Name = "last_name", EmitDefaultValue = false)]
        public string LastName { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumber
        /// </summary>
        [DataMember(Name = "phone_number", EmitDefaultValue = false)]
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OpportunityContact {\n");
            sb.Append("  CompanyName: ").Append(CompanyName).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  FirstName: ").Append(FirstName).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  JobTitle: ").Append(JobTitle).Append("\n");
            sb.Append("  LastName: ").Append(LastName).Append("\n");
            sb.Append("  PhoneNumber: ").Append(PhoneNumber).Append("\n");
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
