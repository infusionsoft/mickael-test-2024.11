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
    /// UpdateTaskResponse
    /// </summary>
    [DataContract(Name = "UpdateTaskResponse")]
    public partial class UpdateTaskResponse : IValidatableObject
    {
        /// <summary>
        /// Defines Priority
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PriorityEnum
        {
            /// <summary>
            /// Enum CRITICAL for value: CRITICAL
            /// </summary>
            [EnumMember(Value = "CRITICAL")]
            CRITICAL = 1,

            /// <summary>
            /// Enum ESSENTIAL for value: ESSENTIAL
            /// </summary>
            [EnumMember(Value = "ESSENTIAL")]
            ESSENTIAL = 2,

            /// <summary>
            /// Enum NONESSENTIAL for value: NONESSENTIAL
            /// </summary>
            [EnumMember(Value = "NONESSENTIAL")]
            NONESSENTIAL = 3
        }

        /// <summary>
        /// Gets or Sets Priority
        /// </summary>
        [DataMember(Name = "priority", EmitDefaultValue = false)]
        public PriorityEnum? Priority { get; set; }
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum EMAIL for value: EMAIL
            /// </summary>
            [EnumMember(Value = "EMAIL")]
            EMAIL = 1,

            /// <summary>
            /// Enum CALL for value: CALL
            /// </summary>
            [EnumMember(Value = "CALL")]
            CALL = 2,

            /// <summary>
            /// Enum APPOINTMENT for value: APPOINTMENT
            /// </summary>
            [EnumMember(Value = "APPOINTMENT")]
            APPOINTMENT = 3,

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
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateTaskResponse" /> class.
        /// </summary>
        /// <param name="assignedToUserId">assignedToUserId.</param>
        /// <param name="completed">completed.</param>
        /// <param name="completionTime">completionTime.</param>
        /// <param name="contactId">contactId.</param>
        /// <param name="createTime">On initial object the returned value for this property may not accurately represent the exact stored value..</param>
        /// <param name="createdByUserId">createdByUserId.</param>
        /// <param name="description">description.</param>
        /// <param name="dueTime">dueTime.</param>
        /// <param name="id">id.</param>
        /// <param name="modificationTime">modificationTime.</param>
        /// <param name="priority">priority.</param>
        /// <param name="remindTimeMins">remindTimeMins.</param>
        /// <param name="title">title.</param>
        /// <param name="type">type.</param>
        public UpdateTaskResponse(string assignedToUserId = default(string), bool completed = default(bool), string completionTime = default(string), string contactId = default(string), string createTime = default(string), string createdByUserId = default(string), string description = default(string), string dueTime = default(string), string id = default(string), string modificationTime = default(string), PriorityEnum? priority = default(PriorityEnum?), int remindTimeMins = default(int), string title = default(string), TypeEnum? type = default(TypeEnum?))
        {
            this.AssignedToUserId = assignedToUserId;
            this.Completed = completed;
            this.CompletionTime = completionTime;
            this.ContactId = contactId;
            this.CreateTime = createTime;
            this.CreatedByUserId = createdByUserId;
            this.Description = description;
            this.DueTime = dueTime;
            this.Id = id;
            this.ModificationTime = modificationTime;
            this.Priority = priority;
            this.RemindTimeMins = remindTimeMins;
            this.Title = title;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets AssignedToUserId
        /// </summary>
        [DataMember(Name = "assigned_to_user_id", EmitDefaultValue = false)]
        public string AssignedToUserId { get; set; }

        /// <summary>
        /// Gets or Sets Completed
        /// </summary>
        [DataMember(Name = "completed", EmitDefaultValue = true)]
        public bool Completed { get; set; }

        /// <summary>
        /// Gets or Sets CompletionTime
        /// </summary>
        [DataMember(Name = "completion_time", EmitDefaultValue = false)]
        public string CompletionTime { get; set; }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// On initial object the returned value for this property may not accurately represent the exact stored value.
        /// </summary>
        /// <value>On initial object the returned value for this property may not accurately represent the exact stored value.</value>
        [DataMember(Name = "create_time", EmitDefaultValue = false)]
        public string CreateTime { get; set; }

        /// <summary>
        /// Gets or Sets CreatedByUserId
        /// </summary>
        [DataMember(Name = "created_by_user_id", EmitDefaultValue = false)]
        public string CreatedByUserId { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets DueTime
        /// </summary>
        [DataMember(Name = "due_time", EmitDefaultValue = false)]
        public string DueTime { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets ModificationTime
        /// </summary>
        [DataMember(Name = "modification_time", EmitDefaultValue = false)]
        public string ModificationTime { get; set; }

        /// <summary>
        /// Gets or Sets RemindTimeMins
        /// </summary>
        [DataMember(Name = "remind_time_mins", EmitDefaultValue = false)]
        public int RemindTimeMins { get; set; }

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
            sb.Append("class UpdateTaskResponse {\n");
            sb.Append("  AssignedToUserId: ").Append(AssignedToUserId).Append("\n");
            sb.Append("  Completed: ").Append(Completed).Append("\n");
            sb.Append("  CompletionTime: ").Append(CompletionTime).Append("\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  CreateTime: ").Append(CreateTime).Append("\n");
            sb.Append("  CreatedByUserId: ").Append(CreatedByUserId).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  DueTime: ").Append(DueTime).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  ModificationTime: ").Append(ModificationTime).Append("\n");
            sb.Append("  Priority: ").Append(Priority).Append("\n");
            sb.Append("  RemindTimeMins: ").Append(RemindTimeMins).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
