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
    /// AffiliateRemoveFromProgramRequest
    /// </summary>
    [DataContract(Name = "AffiliateRemoveFromProgramRequest")]
    public partial class AffiliateRemoveFromProgramRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AffiliateRemoveFromProgramRequest" /> class.
        /// </summary>
        /// <param name="affiliateProgramId">affiliateProgramId.</param>
        public AffiliateRemoveFromProgramRequest(string affiliateProgramId = default(string))
        {
            this.AffiliateProgramId = affiliateProgramId;
        }

        /// <summary>
        /// Gets or Sets AffiliateProgramId
        /// </summary>
        [DataMember(Name = "affiliate_program_id", EmitDefaultValue = false)]
        public string AffiliateProgramId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AffiliateRemoveFromProgramRequest {\n");
            sb.Append("  AffiliateProgramId: ").Append(AffiliateProgramId).Append("\n");
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
