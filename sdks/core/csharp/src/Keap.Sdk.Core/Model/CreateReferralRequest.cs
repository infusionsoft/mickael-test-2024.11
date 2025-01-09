/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
    /// CreateReferralRequest
    /// </summary>
    [DataContract(Name = "CreateReferralRequest")]
    public partial class CreateReferralRequest : IValidatableObject
    {
        /// <summary>
        /// Defines ReferralType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ReferralTypeEnum
        {
            /// <summary>
            /// Enum COOKIE for value: COOKIE
            /// </summary>
            [EnumMember(Value = "COOKIE")]
            COOKIE = 1,

            /// <summary>
            /// Enum PERMANENT for value: PERMANENT
            /// </summary>
            [EnumMember(Value = "PERMANENT")]
            PERMANENT = 2,

            /// <summary>
            /// Enum MANUAL for value: MANUAL
            /// </summary>
            [EnumMember(Value = "MANUAL")]
            MANUAL = 3
        }

        /// <summary>
        /// Gets or Sets ReferralType
        /// </summary>
        [DataMember(Name = "referral_type", EmitDefaultValue = false)]
        public ReferralTypeEnum? ReferralType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateReferralRequest" /> class.
        /// </summary>
        /// <param name="contactId">contactId.</param>
        /// <param name="description">description.</param>
        /// <param name="expirationTime">expirationTime.</param>
        /// <param name="ipAddress">ipAddress.</param>
        /// <param name="referralPartnerId">referralPartnerId.</param>
        /// <param name="referralTime">referralTime.</param>
        /// <param name="referralType">referralType.</param>
        /// <param name="source">source.</param>
        public CreateReferralRequest(string contactId = default(string), string description = default(string), string expirationTime = default(string), string ipAddress = default(string), string referralPartnerId = default(string), string referralTime = default(string), ReferralTypeEnum? referralType = default(ReferralTypeEnum?), string source = default(string))
        {
            this.ContactId = contactId;
            this.Description = description;
            this.ExpirationTime = expirationTime;
            this.IpAddress = ipAddress;
            this.ReferralPartnerId = referralPartnerId;
            this.ReferralTime = referralTime;
            this.ReferralType = referralType;
            this.Source = source;
        }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets ExpirationTime
        /// </summary>
        [DataMember(Name = "expiration_time", EmitDefaultValue = false)]
        public string ExpirationTime { get; set; }

        /// <summary>
        /// Gets or Sets IpAddress
        /// </summary>
        [DataMember(Name = "ip_address", EmitDefaultValue = false)]
        public string IpAddress { get; set; }

        /// <summary>
        /// Gets or Sets ReferralPartnerId
        /// </summary>
        [DataMember(Name = "referral_partner_id", EmitDefaultValue = false)]
        public string ReferralPartnerId { get; set; }

        /// <summary>
        /// Gets or Sets ReferralTime
        /// </summary>
        [DataMember(Name = "referral_time", EmitDefaultValue = false)]
        public string ReferralTime { get; set; }

        /// <summary>
        /// Gets or Sets Source
        /// </summary>
        [DataMember(Name = "source", EmitDefaultValue = false)]
        public string Source { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateReferralRequest {\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  ExpirationTime: ").Append(ExpirationTime).Append("\n");
            sb.Append("  IpAddress: ").Append(IpAddress).Append("\n");
            sb.Append("  ReferralPartnerId: ").Append(ReferralPartnerId).Append("\n");
            sb.Append("  ReferralTime: ").Append(ReferralTime).Append("\n");
            sb.Append("  ReferralType: ").Append(ReferralType).Append("\n");
            sb.Append("  Source: ").Append(Source).Append("\n");
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
