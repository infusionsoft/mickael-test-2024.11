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
    /// ListAffiliateSummariesResponse
    /// </summary>
    [DataContract(Name = "ListAffiliateSummariesResponse")]
    public partial class ListAffiliateSummariesResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListAffiliateSummariesResponse" /> class.
        /// </summary>
        /// <param name="affiliateSummaries">affiliateSummaries.</param>
        /// <param name="nextPageToken">nextPageToken.</param>
        public ListAffiliateSummariesResponse(List<AffiliateSummaryRecord> affiliateSummaries = default(List<AffiliateSummaryRecord>), string nextPageToken = default(string))
        {
            this.AffiliateSummaries = affiliateSummaries;
            this.NextPageToken = nextPageToken;
        }

        /// <summary>
        /// Gets or Sets AffiliateSummaries
        /// </summary>
        [DataMember(Name = "affiliate_summaries", EmitDefaultValue = false)]
        public List<AffiliateSummaryRecord> AffiliateSummaries { get; set; }

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
            sb.Append("class ListAffiliateSummariesResponse {\n");
            sb.Append("  AffiliateSummaries: ").Append(AffiliateSummaries).Append("\n");
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
