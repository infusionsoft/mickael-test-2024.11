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
    /// CreateOrUpdateAffiliateLinkRequest
    /// </summary>
    [DataContract(Name = "CreateOrUpdateAffiliateLinkRequest")]
    public partial class CreateOrUpdateAffiliateLinkRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateOrUpdateAffiliateLinkRequest" /> class.
        /// </summary>
        /// <param name="affiliateId">The AffiliateId.</param>
        /// <param name="code">Code.</param>
        /// <param name="name">The Affiliate Link Name.</param>
        /// <param name="programIds">programIds.</param>
        /// <param name="websiteAddress">Website Address.</param>
        public CreateOrUpdateAffiliateLinkRequest(string affiliateId = default(string), string code = default(string), string name = default(string), List<string> programIds = default(List<string>), string websiteAddress = default(string))
        {
            this.AffiliateId = affiliateId;
            this.Code = code;
            this.Name = name;
            this.ProgramIds = programIds;
            this.WebsiteAddress = websiteAddress;
        }

        /// <summary>
        /// The AffiliateId
        /// </summary>
        /// <value>The AffiliateId</value>
        /*
        <example>1</example>
        */
        [DataMember(Name = "affiliate_id", EmitDefaultValue = false)]
        public string AffiliateId { get; set; }

        /// <summary>
        /// Code
        /// </summary>
        /// <value>Code</value>
        /*
        <example>fP100</example>
        */
        [DataMember(Name = "code", EmitDefaultValue = false)]
        public string Code { get; set; }

        /// <summary>
        /// The Affiliate Link Name
        /// </summary>
        /// <value>The Affiliate Link Name</value>
        /*
        <example>Fitness Program</example>
        */
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets ProgramIds
        /// </summary>
        [DataMember(Name = "program_ids", EmitDefaultValue = false)]
        public List<string> ProgramIds { get; set; }

        /// <summary>
        /// Website Address
        /// </summary>
        /// <value>Website Address</value>
        /*
        <example>www.fitnessProgram.com</example>
        */
        [DataMember(Name = "website_address", EmitDefaultValue = false)]
        public string WebsiteAddress { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateOrUpdateAffiliateLinkRequest {\n");
            sb.Append("  AffiliateId: ").Append(AffiliateId).Append("\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ProgramIds: ").Append(ProgramIds).Append("\n");
            sb.Append("  WebsiteAddress: ").Append(WebsiteAddress).Append("\n");
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
