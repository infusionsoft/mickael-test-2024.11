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
    /// PhoneNumber
    /// </summary>
    [DataContract(Name = "PhoneNumber")]
    public partial class PhoneNumber : IValidatableObject
    {
        /// <summary>
        /// Defines Field
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FieldEnum
        {
            /// <summary>
            /// Enum PHONENUMBERFIELDUNSPECIFIED for value: PHONE_NUMBER_FIELD_UNSPECIFIED
            /// </summary>
            [EnumMember(Value = "PHONE_NUMBER_FIELD_UNSPECIFIED")]
            PHONENUMBERFIELDUNSPECIFIED = 1,

            /// <summary>
            /// Enum PHONE1 for value: PHONE1
            /// </summary>
            [EnumMember(Value = "PHONE1")]
            PHONE1 = 2,

            /// <summary>
            /// Enum PHONE2 for value: PHONE2
            /// </summary>
            [EnumMember(Value = "PHONE2")]
            PHONE2 = 3,

            /// <summary>
            /// Enum PHONE3 for value: PHONE3
            /// </summary>
            [EnumMember(Value = "PHONE3")]
            PHONE3 = 4,

            /// <summary>
            /// Enum PHONE4 for value: PHONE4
            /// </summary>
            [EnumMember(Value = "PHONE4")]
            PHONE4 = 5,

            /// <summary>
            /// Enum PHONE5 for value: PHONE5
            /// </summary>
            [EnumMember(Value = "PHONE5")]
            PHONE5 = 6
        }

        /// <summary>
        /// Gets or Sets Field
        /// </summary>
        [DataMember(Name = "field", EmitDefaultValue = false)]
        public FieldEnum? Field { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PhoneNumber" /> class.
        /// </summary>
        /// <param name="extension">extension.</param>
        /// <param name="field">field.</param>
        /// <param name="number">number.</param>
        /// <param name="numberE164">numberE164.</param>
        /// <param name="type">type.</param>
        public PhoneNumber(string extension = default(string), FieldEnum? field = default(FieldEnum?), string number = default(string), string numberE164 = default(string), string type = default(string))
        {
            this.Extension = extension;
            this.Field = field;
            this.Number = number;
            this.NumberE164 = numberE164;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets Extension
        /// </summary>
        [DataMember(Name = "extension", EmitDefaultValue = false)]
        public string Extension { get; set; }

        /// <summary>
        /// Gets or Sets Number
        /// </summary>
        [DataMember(Name = "number", EmitDefaultValue = false)]
        public string Number { get; set; }

        /// <summary>
        /// Gets or Sets NumberE164
        /// </summary>
        [DataMember(Name = "number_e164", EmitDefaultValue = false)]
        public string NumberE164 { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public string Type { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PhoneNumber {\n");
            sb.Append("  Extension: ").Append(Extension).Append("\n");
            sb.Append("  Field: ").Append(Field).Append("\n");
            sb.Append("  Number: ").Append(Number).Append("\n");
            sb.Append("  NumberE164: ").Append(NumberE164).Append("\n");
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
