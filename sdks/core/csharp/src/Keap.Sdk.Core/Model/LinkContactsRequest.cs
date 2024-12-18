/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.752995
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
    /// LinkContactsRequest
    /// </summary>
    [DataContract(Name = "LinkContactsRequest")]
    public partial class LinkContactsRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LinkContactsRequest" /> class.
        /// </summary>
        /// <param name="contact1Id">contact1Id.</param>
        /// <param name="contact2Id">contact2Id.</param>
        /// <param name="linkTypeId">linkTypeId.</param>
        public LinkContactsRequest(string contact1Id = default(string), string contact2Id = default(string), string linkTypeId = default(string))
        {
            this.Contact1Id = contact1Id;
            this.Contact2Id = contact2Id;
            this.LinkTypeId = linkTypeId;
        }

        /// <summary>
        /// Gets or Sets Contact1Id
        /// </summary>
        [DataMember(Name = "contact1_id", EmitDefaultValue = false)]
        public string Contact1Id { get; set; }

        /// <summary>
        /// Gets or Sets Contact2Id
        /// </summary>
        [DataMember(Name = "contact2_id", EmitDefaultValue = false)]
        public string Contact2Id { get; set; }

        /// <summary>
        /// Gets or Sets LinkTypeId
        /// </summary>
        [DataMember(Name = "link_type_id", EmitDefaultValue = false)]
        public string LinkTypeId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class LinkContactsRequest {\n");
            sb.Append("  Contact1Id: ").Append(Contact1Id).Append("\n");
            sb.Append("  Contact2Id: ").Append(Contact2Id).Append("\n");
            sb.Append("  LinkTypeId: ").Append(LinkTypeId).Append("\n");
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
