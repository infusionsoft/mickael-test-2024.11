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
    /// ListAffiliateCommissionResponse
    /// </summary>
    [DataContract(Name = "ListAffiliateCommissionResponse")]
    public partial class ListAffiliateCommissionResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListAffiliateCommissionResponse" /> class.
        /// </summary>
        /// <param name="affiliateCommissions">affiliateCommissions.</param>
        /// <param name="nextPageToken">nextPageToken.</param>
        /// <param name="totalAffCommEarned">totalAffCommEarned.</param>
        /// <param name="totalClawBack">totalClawBack.</param>
        /// <param name="totalCommEarned">totalCommEarned.</param>
        public ListAffiliateCommissionResponse(List<AffiliateCommission> affiliateCommissions = default(List<AffiliateCommission>), string nextPageToken = default(string), double totalAffCommEarned = default(double), double totalClawBack = default(double), double totalCommEarned = default(double))
        {
            this.AffiliateCommissions = affiliateCommissions;
            this.NextPageToken = nextPageToken;
            this.TotalAffCommEarned = totalAffCommEarned;
            this.TotalClawBack = totalClawBack;
            this.TotalCommEarned = totalCommEarned;
        }

        /// <summary>
        /// Gets or Sets AffiliateCommissions
        /// </summary>
        [DataMember(Name = "AffiliateCommissions", EmitDefaultValue = false)]
        public List<AffiliateCommission> AffiliateCommissions { get; set; }

        /// <summary>
        /// Gets or Sets NextPageToken
        /// </summary>
        [DataMember(Name = "next_page_token", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// Gets or Sets TotalAffCommEarned
        /// </summary>
        [DataMember(Name = "total_aff_comm_earned", EmitDefaultValue = false)]
        public double TotalAffCommEarned { get; set; }

        /// <summary>
        /// Gets or Sets TotalClawBack
        /// </summary>
        [DataMember(Name = "total_claw_back", EmitDefaultValue = false)]
        public double TotalClawBack { get; set; }

        /// <summary>
        /// Gets or Sets TotalCommEarned
        /// </summary>
        [DataMember(Name = "total_comm_earned", EmitDefaultValue = false)]
        public double TotalCommEarned { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListAffiliateCommissionResponse {\n");
            sb.Append("  AffiliateCommissions: ").Append(AffiliateCommissions).Append("\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
            sb.Append("  TotalAffCommEarned: ").Append(TotalAffCommEarned).Append("\n");
            sb.Append("  TotalClawBack: ").Append(TotalClawBack).Append("\n");
            sb.Append("  TotalCommEarned: ").Append(TotalCommEarned).Append("\n");
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
