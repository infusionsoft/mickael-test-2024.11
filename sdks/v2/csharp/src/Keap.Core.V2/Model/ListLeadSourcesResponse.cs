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
    /// ListLeadSourcesResponse
    /// </summary>
    [DataContract(Name = "ListLeadSourcesResponse")]
    public partial class ListLeadSourcesResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListLeadSourcesResponse" /> class.
        /// </summary>
        /// <param name="leadsources">leadsources.</param>
        /// <param name="nextPageToken">nextPageToken.</param>
        public ListLeadSourcesResponse(List<LeadSource> leadsources = default(List<LeadSource>), string nextPageToken = default(string))
        {
            this.Leadsources = leadsources;
            this.NextPageToken = nextPageToken;
        }

        /// <summary>
        /// Gets or Sets Leadsources
        /// </summary>
        [DataMember(Name = "leadsources", EmitDefaultValue = false)]
        public List<LeadSource> Leadsources { get; set; }

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
            sb.Append("class ListLeadSourcesResponse {\n");
            sb.Append("  Leadsources: ").Append(Leadsources).Append("\n");
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
