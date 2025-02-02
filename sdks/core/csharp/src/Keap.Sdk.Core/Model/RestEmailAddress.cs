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
    /// RestEmailAddress
    /// </summary>
    [DataContract(Name = "RestEmailAddress")]
    public partial class RestEmailAddress : IValidatableObject
    {
        /// <summary>
        /// Defines Status
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum UnengagedMarketable for value: Unengaged Marketable
            /// </summary>
            [EnumMember(Value = "Unengaged Marketable")]
            UnengagedMarketable = 1,

            /// <summary>
            /// Enum Unconfirmed for value: Unconfirmed
            /// </summary>
            [EnumMember(Value = "Unconfirmed")]
            Unconfirmed = 2,

            /// <summary>
            /// Enum ConfirmedLegacy for value: Confirmed (Legacy)
            /// </summary>
            [EnumMember(Value = "Confirmed (Legacy)")]
            ConfirmedLegacy = 3,

            /// <summary>
            /// Enum Confirmed for value: Confirmed
            /// </summary>
            [EnumMember(Value = "Confirmed")]
            Confirmed = 4,

            /// <summary>
            /// Enum UnengagedNonMarketable for value: Unengaged NonMarketable
            /// </summary>
            [EnumMember(Value = "Unengaged NonMarketable")]
            UnengagedNonMarketable = 5,

            /// <summary>
            /// Enum NonMarketable for value: Non-marketable
            /// </summary>
            [EnumMember(Value = "Non-marketable")]
            NonMarketable = 6,

            /// <summary>
            /// Enum Lockdown for value: Lockdown
            /// </summary>
            [EnumMember(Value = "Lockdown")]
            Lockdown = 7,

            /// <summary>
            /// Enum SoftBounce for value: Soft Bounce
            /// </summary>
            [EnumMember(Value = "Soft Bounce")]
            SoftBounce = 8,

            /// <summary>
            /// Enum HardBounce for value: Hard Bounce
            /// </summary>
            [EnumMember(Value = "Hard Bounce")]
            HardBounce = 9,

            /// <summary>
            /// Enum OptOut for value: Opt-Out
            /// </summary>
            [EnumMember(Value = "Opt-Out")]
            OptOut = 10,

            /// <summary>
            /// Enum OptOutAdmin for value: Opt-Out: Admin
            /// </summary>
            [EnumMember(Value = "Opt-Out: Admin")]
            OptOutAdmin = 11,

            /// <summary>
            /// Enum OptOutSystem for value: Opt-Out: System
            /// </summary>
            [EnumMember(Value = "Opt-Out: System")]
            OptOutSystem = 12,

            /// <summary>
            /// Enum ListUnsubscribe for value: List Unsubscribe
            /// </summary>
            [EnumMember(Value = "List Unsubscribe")]
            ListUnsubscribe = 13,

            /// <summary>
            /// Enum ProvidedFeedback for value: Provided Feedback
            /// </summary>
            [EnumMember(Value = "Provided Feedback")]
            ProvidedFeedback = 14,

            /// <summary>
            /// Enum ReportedSpam for value: Reported Spam
            /// </summary>
            [EnumMember(Value = "Reported Spam")]
            ReportedSpam = 15,

            /// <summary>
            /// Enum InvalidEmail for value: Invalid Email
            /// </summary>
            [EnumMember(Value = "Invalid Email")]
            InvalidEmail = 16,

            /// <summary>
            /// Enum DeactivatedDelinquentMailbox for value: Deactivated/Delinquent Mailbox
            /// </summary>
            [EnumMember(Value = "Deactivated/Delinquent Mailbox")]
            DeactivatedDelinquentMailbox = 17
        }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", IsRequired = true, EmitDefaultValue = true)]
        public StatusEnum Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestEmailAddress" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RestEmailAddress() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestEmailAddress" /> class.
        /// </summary>
        /// <param name="email">email (required).</param>
        /// <param name="optedIn">optedIn (required).</param>
        /// <param name="status">status (required).</param>
        public RestEmailAddress(string email = default(string), bool optedIn = default(bool), StatusEnum status = default(StatusEnum))
        {
            // to ensure "email" is required (not null)
            if (email == null)
            {
                throw new ArgumentNullException("email is a required property for RestEmailAddress and cannot be null");
            }
            this.Email = email;
            this.OptedIn = optedIn;
            this.Status = status;
        }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", IsRequired = true, EmitDefaultValue = true)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets OptedIn
        /// </summary>
        [DataMember(Name = "opted_in", IsRequired = true, EmitDefaultValue = true)]
        public bool OptedIn { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestEmailAddress {\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  OptedIn: ").Append(OptedIn).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
