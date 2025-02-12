/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
    /// A model representing a note associated with a deal.
    /// </summary>
    [DataContract(Name = "DealNote")]
    public partial class DealNote : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DealNote" /> class.
        /// </summary>
        /// <param name="id">Unique identifier for the model..</param>
        /// <param name="dealId">The ID of the deal associated with the note..</param>
        /// <param name="body">The body content of the note..</param>
        /// <param name="createdBy">The ID of the user who created the note..</param>
        /// <param name="createdTime">The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;..</param>
        /// <param name="modifiedTime">The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;..</param>
        public DealNote(string id = default(string), string dealId = default(string), string body = default(string), string createdBy = default(string), DateTime createdTime = default(DateTime), DateTime modifiedTime = default(DateTime))
        {
            this.Id = id;
            this.DealId = dealId;
            this.Body = body;
            this.CreatedBy = createdBy;
            this.CreatedTime = createdTime;
            this.ModifiedTime = modifiedTime;
        }

        /// <summary>
        /// Unique identifier for the model.
        /// </summary>
        /// <value>Unique identifier for the model.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// The ID of the deal associated with the note.
        /// </summary>
        /// <value>The ID of the deal associated with the note.</value>
        [DataMember(Name = "deal_id", EmitDefaultValue = false)]
        public string DealId { get; set; }

        /// <summary>
        /// The body content of the note.
        /// </summary>
        /// <value>The body content of the note.</value>
        [DataMember(Name = "body", EmitDefaultValue = false)]
        public string Body { get; set; }

        /// <summary>
        /// The ID of the user who created the note.
        /// </summary>
        /// <value>The ID of the user who created the note.</value>
        [DataMember(Name = "created_by", EmitDefaultValue = false)]
        public string CreatedBy { get; set; }

        /// <summary>
        /// The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;.
        /// </summary>
        /// <value>The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;.</value>
        [DataMember(Name = "created_time", EmitDefaultValue = false)]
        public DateTime CreatedTime { get; set; }

        /// <summary>
        /// The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;.
        /// </summary>
        /// <value>The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;.</value>
        [DataMember(Name = "modified_time", EmitDefaultValue = false)]
        public DateTime ModifiedTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DealNote {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  DealId: ").Append(DealId).Append("\n");
            sb.Append("  Body: ").Append(Body).Append("\n");
            sb.Append("  CreatedBy: ").Append(CreatedBy).Append("\n");
            sb.Append("  CreatedTime: ").Append(CreatedTime).Append("\n");
            sb.Append("  ModifiedTime: ").Append(ModifiedTime).Append("\n");
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
