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
    /// Link
    /// </summary>
    [DataContract(Name = "Link")]
    public partial class Link : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Link" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="linkTypeId">linkTypeId.</param>
        /// <param name="linkTypeName">linkTypeName.</param>
        /// <param name="linkedContactId">linkedContactId.</param>
        public Link(string id = default(string), string linkTypeId = default(string), string linkTypeName = default(string), string linkedContactId = default(string))
        {
            this.Id = id;
            this.LinkTypeId = linkTypeId;
            this.LinkTypeName = linkTypeName;
            this.LinkedContactId = linkedContactId;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets LinkTypeId
        /// </summary>
        [DataMember(Name = "link_type_id", EmitDefaultValue = false)]
        public string LinkTypeId { get; set; }

        /// <summary>
        /// Gets or Sets LinkTypeName
        /// </summary>
        [DataMember(Name = "link_type_name", EmitDefaultValue = false)]
        public string LinkTypeName { get; set; }

        /// <summary>
        /// Gets or Sets LinkedContactId
        /// </summary>
        [DataMember(Name = "linked_contact_id", EmitDefaultValue = false)]
        public string LinkedContactId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Link {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LinkTypeId: ").Append(LinkTypeId).Append("\n");
            sb.Append("  LinkTypeName: ").Append(LinkTypeName).Append("\n");
            sb.Append("  LinkedContactId: ").Append(LinkedContactId).Append("\n");
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
