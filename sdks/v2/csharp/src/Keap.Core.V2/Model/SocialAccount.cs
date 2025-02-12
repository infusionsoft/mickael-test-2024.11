/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
    /// SocialAccount
    /// </summary>
    [DataContract(Name = "SocialAccount")]
    public partial class SocialAccount : IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum SOCIALACCOUNTTYPEUNSPECIFIED for value: SOCIAL_ACCOUNT_TYPE_UNSPECIFIED
            /// </summary>
            [EnumMember(Value = "SOCIAL_ACCOUNT_TYPE_UNSPECIFIED")]
            SOCIALACCOUNTTYPEUNSPECIFIED = 1,

            /// <summary>
            /// Enum FACEBOOK for value: FACEBOOK
            /// </summary>
            [EnumMember(Value = "FACEBOOK")]
            FACEBOOK = 2,

            /// <summary>
            /// Enum LINKEDIN for value: LINKED_IN
            /// </summary>
            [EnumMember(Value = "LINKED_IN")]
            LINKEDIN = 3,

            /// <summary>
            /// Enum TWITTER for value: TWITTER
            /// </summary>
            [EnumMember(Value = "TWITTER")]
            TWITTER = 4,

            /// <summary>
            /// Enum INSTAGRAM for value: INSTAGRAM
            /// </summary>
            [EnumMember(Value = "INSTAGRAM")]
            INSTAGRAM = 5,

            /// <summary>
            /// Enum SNAPCHAT for value: SNAPCHAT
            /// </summary>
            [EnumMember(Value = "SNAPCHAT")]
            SNAPCHAT = 6,

            /// <summary>
            /// Enum YOUTUBE for value: YOUTUBE
            /// </summary>
            [EnumMember(Value = "YOUTUBE")]
            YOUTUBE = 7,

            /// <summary>
            /// Enum PINTEREST for value: PINTEREST
            /// </summary>
            [EnumMember(Value = "PINTEREST")]
            PINTEREST = 8
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", IsRequired = true, EmitDefaultValue = true)]
        public TypeEnum Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="SocialAccount" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SocialAccount() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SocialAccount" /> class.
        /// </summary>
        /// <param name="name">name.</param>
        /// <param name="type">type (required).</param>
        public SocialAccount(string name = default(string), TypeEnum type = default(TypeEnum))
        {
            this.Type = type;
            this.Name = name;
        }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SocialAccount {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
