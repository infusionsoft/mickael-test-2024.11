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
    /// CreateUserRequestV2
    /// </summary>
    [DataContract(Name = "CreateUserRequestV2")]
    public partial class CreateUserRequestV2 : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateUserRequestV2" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateUserRequestV2() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateUserRequestV2" /> class.
        /// </summary>
        /// <param name="admin">admin.</param>
        /// <param name="emailAddress">emailAddress (required).</param>
        /// <param name="givenName">givenName (required).</param>
        /// <param name="partner">partner.</param>
        public CreateUserRequestV2(bool admin = default(bool), EmailAddressRequest emailAddress = default(EmailAddressRequest), string givenName = default(string), bool partner = default(bool))
        {
            // to ensure "emailAddress" is required (not null)
            if (emailAddress == null)
            {
                throw new ArgumentNullException("emailAddress is a required property for CreateUserRequestV2 and cannot be null");
            }
            this.EmailAddress = emailAddress;
            // to ensure "givenName" is required (not null)
            if (givenName == null)
            {
                throw new ArgumentNullException("givenName is a required property for CreateUserRequestV2 and cannot be null");
            }
            this.GivenName = givenName;
            this.Admin = admin;
            this.Partner = partner;
        }

        /// <summary>
        /// Gets or Sets Admin
        /// </summary>
        [DataMember(Name = "admin", EmitDefaultValue = true)]
        public bool Admin { get; set; }

        /// <summary>
        /// Gets or Sets EmailAddress
        /// </summary>
        [DataMember(Name = "email_address", IsRequired = true, EmitDefaultValue = true)]
        public EmailAddressRequest EmailAddress { get; set; }

        /// <summary>
        /// Gets or Sets GivenName
        /// </summary>
        [DataMember(Name = "given_name", IsRequired = true, EmitDefaultValue = true)]
        public string GivenName { get; set; }

        /// <summary>
        /// Gets or Sets Partner
        /// </summary>
        [DataMember(Name = "partner", EmitDefaultValue = true)]
        public bool Partner { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateUserRequestV2 {\n");
            sb.Append("  Admin: ").Append(Admin).Append("\n");
            sb.Append("  EmailAddress: ").Append(EmailAddress).Append("\n");
            sb.Append("  GivenName: ").Append(GivenName).Append("\n");
            sb.Append("  Partner: ").Append(Partner).Append("\n");
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
