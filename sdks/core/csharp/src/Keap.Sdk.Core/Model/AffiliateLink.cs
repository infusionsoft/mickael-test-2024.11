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
    /// AffiliateLink
    /// </summary>
    [DataContract(Name = "AffiliateLink")]
    public partial class AffiliateLink : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AffiliateLink" /> class.
        /// </summary>
        /// <param name="affiliateId">affiliateId.</param>
        /// <param name="dateCreated">dateCreated.</param>
        /// <param name="id">id.</param>
        /// <param name="localUrlCode">localUrlCode.</param>
        /// <param name="name">name.</param>
        /// <param name="programIds">programIds.</param>
        /// <param name="redirectUrl">redirectUrl.</param>
        public AffiliateLink(string affiliateId = default(string), string dateCreated = default(string), string id = default(string), string localUrlCode = default(string), string name = default(string), List<string> programIds = default(List<string>), string redirectUrl = default(string))
        {
            this.AffiliateId = affiliateId;
            this.DateCreated = dateCreated;
            this.Id = id;
            this.LocalUrlCode = localUrlCode;
            this.Name = name;
            this.ProgramIds = programIds;
            this.RedirectUrl = redirectUrl;
        }

        /// <summary>
        /// Gets or Sets AffiliateId
        /// </summary>
        [DataMember(Name = "affiliate_id", EmitDefaultValue = false)]
        public string AffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets DateCreated
        /// </summary>
        [DataMember(Name = "date_created", EmitDefaultValue = false)]
        public string DateCreated { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets LocalUrlCode
        /// </summary>
        [DataMember(Name = "local_url_code", EmitDefaultValue = false)]
        public string LocalUrlCode { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets ProgramIds
        /// </summary>
        [DataMember(Name = "program_ids", EmitDefaultValue = false)]
        public List<string> ProgramIds { get; set; }

        /// <summary>
        /// Gets or Sets RedirectUrl
        /// </summary>
        [DataMember(Name = "redirect_url", EmitDefaultValue = false)]
        public string RedirectUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AffiliateLink {\n");
            sb.Append("  AffiliateId: ").Append(AffiliateId).Append("\n");
            sb.Append("  DateCreated: ").Append(DateCreated).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LocalUrlCode: ").Append(LocalUrlCode).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ProgramIds: ").Append(ProgramIds).Append("\n");
            sb.Append("  RedirectUrl: ").Append(RedirectUrl).Append("\n");
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
