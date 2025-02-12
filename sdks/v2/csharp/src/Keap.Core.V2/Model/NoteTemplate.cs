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
    /// NoteTemplate
    /// </summary>
    [DataContract(Name = "NoteTemplate")]
    public partial class NoteTemplate : IValidatableObject
    {
        /// <summary>
        /// Defines ActionType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ActionTypeEnum
        {
            /// <summary>
            /// Enum APPOINTMENT for value: APPOINTMENT
            /// </summary>
            [EnumMember(Value = "APPOINTMENT")]
            APPOINTMENT = 1,

            /// <summary>
            /// Enum CALL for value: CALL
            /// </summary>
            [EnumMember(Value = "CALL")]
            CALL = 2,

            /// <summary>
            /// Enum EMAIL for value: EMAIL
            /// </summary>
            [EnumMember(Value = "EMAIL")]
            EMAIL = 3,

            /// <summary>
            /// Enum FAX for value: FAX
            /// </summary>
            [EnumMember(Value = "FAX")]
            FAX = 4,

            /// <summary>
            /// Enum LETTER for value: LETTER
            /// </summary>
            [EnumMember(Value = "LETTER")]
            LETTER = 5,

            /// <summary>
            /// Enum OTHER for value: OTHER
            /// </summary>
            [EnumMember(Value = "OTHER")]
            OTHER = 6
        }

        /// <summary>
        /// Gets or Sets ActionType
        /// </summary>
        [DataMember(Name = "action_type", EmitDefaultValue = false)]
        public ActionTypeEnum? ActionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="NoteTemplate" /> class.
        /// </summary>
        /// <param name="actionType">actionType.</param>
        /// <param name="assignmentUserId">assignmentUserId.</param>
        /// <param name="description">description.</param>
        /// <param name="id">id.</param>
        /// <param name="notifyUsers">notifyUsers.</param>
        /// <param name="title">title.</param>
        public NoteTemplate(ActionTypeEnum? actionType = default(ActionTypeEnum?), long assignmentUserId = default(long), string description = default(string), string id = default(string), List<string> notifyUsers = default(List<string>), string title = default(string))
        {
            this.ActionType = actionType;
            this.AssignmentUserId = assignmentUserId;
            this.Description = description;
            this.Id = id;
            this.NotifyUsers = notifyUsers;
            this.Title = title;
        }

        /// <summary>
        /// Gets or Sets AssignmentUserId
        /// </summary>
        [DataMember(Name = "assignment_user_id", EmitDefaultValue = false)]
        public long AssignmentUserId { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets NotifyUsers
        /// </summary>
        [DataMember(Name = "notify_users", EmitDefaultValue = false)]
        public List<string> NotifyUsers { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [DataMember(Name = "title", EmitDefaultValue = false)]
        public string Title { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NoteTemplate {\n");
            sb.Append("  ActionType: ").Append(ActionType).Append("\n");
            sb.Append("  AssignmentUserId: ").Append(AssignmentUserId).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  NotifyUsers: ").Append(NotifyUsers).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
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
