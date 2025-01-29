/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
    /// GetContactOptionTypesResponse
    /// </summary>
    [DataContract(Name = "GetContactOptionTypesResponse")]
    public partial class GetContactOptionTypesResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetContactOptionTypesResponse" /> class.
        /// </summary>
        /// <param name="optionTypes">optionTypes.</param>
        public GetContactOptionTypesResponse(List<string> optionTypes = default(List<string>))
        {
            this.OptionTypes = optionTypes;
        }

        /// <summary>
        /// Gets or Sets OptionTypes
        /// </summary>
        [DataMember(Name = "option_types", EmitDefaultValue = false)]
        public List<string> OptionTypes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetContactOptionTypesResponse {\n");
            sb.Append("  OptionTypes: ").Append(OptionTypes).Append("\n");
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
