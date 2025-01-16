/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.764128
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
    /// Note
    /// </summary>
    [DataContract(Name = "Note")]
    public partial class Note : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Note" /> class.
        /// </summary>
        /// <param name="assignedToUser">assignedToUser.</param>
        /// <param name="contactId">contactId.</param>
        /// <param name="createTime">createTime.</param>
        /// <param name="createdByUserId">createdByUserId.</param>
        /// <param name="id">id.</param>
        /// <param name="lastUpdatedByUserId">lastUpdatedByUserId.</param>
        /// <param name="pinnedAt">pinnedAt.</param>
        /// <param name="text">text.</param>
        /// <param name="title">title.</param>
        /// <param name="type">type.</param>
        /// <param name="updateTime">updateTime.</param>
        public Note(BasicUser assignedToUser = default(BasicUser), string contactId = default(string), string createTime = default(string), string createdByUserId = default(string), string id = default(string), string lastUpdatedByUserId = default(string), string pinnedAt = default(string), string text = default(string), string title = default(string), string type = default(string), string updateTime = default(string))
        {
            this.AssignedToUser = assignedToUser;
            this.ContactId = contactId;
            this.CreateTime = createTime;
            this.CreatedByUserId = createdByUserId;
            this.Id = id;
            this.LastUpdatedByUserId = lastUpdatedByUserId;
            this.PinnedAt = pinnedAt;
            this.Text = text;
            this.Title = title;
            this.Type = type;
            this.UpdateTime = updateTime;
        }

        /// <summary>
        /// Gets or Sets AssignedToUser
        /// </summary>
        [DataMember(Name = "assigned_to_user", EmitDefaultValue = false)]
        public BasicUser AssignedToUser { get; set; }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// Gets or Sets CreateTime
        /// </summary>
        [DataMember(Name = "create_time", EmitDefaultValue = false)]
        public string CreateTime { get; set; }

        /// <summary>
        /// Gets or Sets CreatedByUserId
        /// </summary>
        [DataMember(Name = "created_by_user_id", EmitDefaultValue = false)]
        public string CreatedByUserId { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets LastUpdatedByUserId
        /// </summary>
        [DataMember(Name = "last_updated_by_user_id", EmitDefaultValue = false)]
        public string LastUpdatedByUserId { get; set; }

        /// <summary>
        /// Gets or Sets PinnedAt
        /// </summary>
        [DataMember(Name = "pinned_at", EmitDefaultValue = false)]
        public string PinnedAt { get; set; }

        /// <summary>
        /// Gets or Sets Text
        /// </summary>
        [DataMember(Name = "text", EmitDefaultValue = false)]
        public string Text { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name = "title", EmitDefaultValue = false)]
        public string Title { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public string Type { get; set; }

        /// <summary>
        /// Gets or Sets UpdateTime
        /// </summary>
        [DataMember(Name = "update_time", EmitDefaultValue = false)]
        public string UpdateTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Note {\n");
            sb.Append("  AssignedToUser: ").Append(AssignedToUser).Append("\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  CreateTime: ").Append(CreateTime).Append("\n");
            sb.Append("  CreatedByUserId: ").Append(CreatedByUserId).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  LastUpdatedByUserId: ").Append(LastUpdatedByUserId).Append("\n");
            sb.Append("  PinnedAt: ").Append(PinnedAt).Append("\n");
            sb.Append("  Text: ").Append(Text).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  UpdateTime: ").Append(UpdateTime).Append("\n");
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
