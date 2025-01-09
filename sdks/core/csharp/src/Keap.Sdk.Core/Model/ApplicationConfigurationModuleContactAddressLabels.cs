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
    /// ApplicationConfigurationModuleContactAddressLabels
    /// </summary>
    [DataContract(Name = "ApplicationConfigurationModuleContactAddressLabels")]
    public partial class ApplicationConfigurationModuleContactAddressLabels : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApplicationConfigurationModuleContactAddressLabels" /> class.
        /// </summary>
        /// <param name="line1">line1.</param>
        /// <param name="line2">line2.</param>
        /// <param name="line3">line3.</param>
        public ApplicationConfigurationModuleContactAddressLabels(string line1 = default(string), string line2 = default(string), string line3 = default(string))
        {
            this.Line1 = line1;
            this.Line2 = line2;
            this.Line3 = line3;
        }

        /// <summary>
        /// Gets or Sets Line1
        /// </summary>
        [DataMember(Name = "line_1", EmitDefaultValue = false)]
        public string Line1 { get; set; }

        /// <summary>
        /// Gets or Sets Line2
        /// </summary>
        [DataMember(Name = "line_2", EmitDefaultValue = false)]
        public string Line2 { get; set; }

        /// <summary>
        /// Gets or Sets Line3
        /// </summary>
        [DataMember(Name = "line_3", EmitDefaultValue = false)]
        public string Line3 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApplicationConfigurationModuleContactAddressLabels {\n");
            sb.Append("  Line1: ").Append(Line1).Append("\n");
            sb.Append("  Line2: ").Append(Line2).Append("\n");
            sb.Append("  Line3: ").Append(Line3).Append("\n");
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
