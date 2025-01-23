/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
    /// ListAffiliateCommissionProgramsResponse
    /// </summary>
    [DataContract(Name = "ListAffiliateCommissionProgramsResponse")]
    public partial class ListAffiliateCommissionProgramsResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListAffiliateCommissionProgramsResponse" /> class.
        /// </summary>
        /// <param name="commissionPrograms">commissionPrograms.</param>
        /// <param name="nextPageToken">nextPageToken.</param>
        public ListAffiliateCommissionProgramsResponse(List<AffiliateProgramV2> commissionPrograms = default(List<AffiliateProgramV2>), string nextPageToken = default(string))
        {
            this.CommissionPrograms = commissionPrograms;
            this.NextPageToken = nextPageToken;
        }

        /// <summary>
        /// Gets or Sets CommissionPrograms
        /// </summary>
        [DataMember(Name = "commission_programs", EmitDefaultValue = false)]
        public List<AffiliateProgramV2> CommissionPrograms { get; set; }

        /// <summary>
        /// Gets or Sets NextPageToken
        /// </summary>
        [DataMember(Name = "next_page_token", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListAffiliateCommissionProgramsResponse {\n");
            sb.Append("  CommissionPrograms: ").Append(CommissionPrograms).Append("\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
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
