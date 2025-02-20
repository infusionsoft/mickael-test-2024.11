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
    /// Represents a deal.
    /// </summary>
    [DataContract(Name = "Deal")]
    public partial class Deal : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Deal" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Deal() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Deal" /> class.
        /// </summary>
        /// <param name="id">Unique identifier for the model..</param>
        /// <param name="name">The name of the deal. This field is required and must have at least one character. (required).</param>
        /// <param name="value">value (required).</param>
        /// <param name="contacts">The list of contacts associated with the deal. This field is required. (required).</param>
        /// <param name="stage">stage (required).</param>
        /// <param name="stageAssignmentTime">The time when the deal was assigned to the current stage. This field is required. (required).</param>
        /// <param name="owners">The list of owners of the deal. This field is required. (required).</param>
        /// <param name="ownerId">The ID of the owner of the deal. This field is optional..</param>
        /// <param name="taskIds">The list of task IDs associated with the deal. This field is required. (required).</param>
        /// <param name="orderId">The order of the deal. This field is optional..</param>
        /// <param name="status">The status of the deal. This field is required. (required).</param>
        /// <param name="estimatedCloseTime">The estimated close time of the deal. This field is optional..</param>
        /// <param name="closedTime">The actual close time of the deal. This field is optional..</param>
        /// <param name="customFields">The custom fields associated with the deal. This field is optional..</param>
        public Deal(string id = default(string), string name = default(string), DealValue value = default(DealValue), List<DealContact> contacts = default(List<DealContact>), DealStage stage = default(DealStage), DateTime stageAssignmentTime = default(DateTime), List<Owner> owners = default(List<Owner>), string ownerId = default(string), List<string> taskIds = default(List<string>), string orderId = default(string), string status = default(string), DateTime? estimatedCloseTime = default(DateTime?), DateTime? closedTime = default(DateTime?), Dictionary<string, Object> customFields = default(Dictionary<string, Object>))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new ArgumentNullException("name is a required property for Deal and cannot be null");
            }
            this.Name = name;
            // to ensure "value" is required (not null)
            if (value == null)
            {
                throw new ArgumentNullException("value is a required property for Deal and cannot be null");
            }
            this.Value = value;
            // to ensure "contacts" is required (not null)
            if (contacts == null)
            {
                throw new ArgumentNullException("contacts is a required property for Deal and cannot be null");
            }
            this.Contacts = contacts;
            // to ensure "stage" is required (not null)
            if (stage == null)
            {
                throw new ArgumentNullException("stage is a required property for Deal and cannot be null");
            }
            this.Stage = stage;
            this.StageAssignmentTime = stageAssignmentTime;
            // to ensure "owners" is required (not null)
            if (owners == null)
            {
                throw new ArgumentNullException("owners is a required property for Deal and cannot be null");
            }
            this.Owners = owners;
            // to ensure "taskIds" is required (not null)
            if (taskIds == null)
            {
                throw new ArgumentNullException("taskIds is a required property for Deal and cannot be null");
            }
            this.TaskIds = taskIds;
            // to ensure "status" is required (not null)
            if (status == null)
            {
                throw new ArgumentNullException("status is a required property for Deal and cannot be null");
            }
            this.Status = status;
            this.Id = id;
            this.OwnerId = ownerId;
            this.OrderId = orderId;
            this.EstimatedCloseTime = estimatedCloseTime;
            this.ClosedTime = closedTime;
            this.CustomFields = customFields;
        }

        /// <summary>
        /// Unique identifier for the model.
        /// </summary>
        /// <value>Unique identifier for the model.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// The name of the deal. This field is required and must have at least one character.
        /// </summary>
        /// <value>The name of the deal. This field is required and must have at least one character.</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name = "value", IsRequired = true, EmitDefaultValue = true)]
        public DealValue Value { get; set; }

        /// <summary>
        /// The list of contacts associated with the deal. This field is required.
        /// </summary>
        /// <value>The list of contacts associated with the deal. This field is required.</value>
        [DataMember(Name = "contacts", IsRequired = true, EmitDefaultValue = true)]
        public List<DealContact> Contacts { get; set; }

        /// <summary>
        /// Gets or Sets Stage
        /// </summary>
        [DataMember(Name = "stage", IsRequired = true, EmitDefaultValue = true)]
        public DealStage Stage { get; set; }

        /// <summary>
        /// The time when the deal was assigned to the current stage. This field is required.
        /// </summary>
        /// <value>The time when the deal was assigned to the current stage. This field is required.</value>
        [DataMember(Name = "stage_assignment_time", IsRequired = true, EmitDefaultValue = true)]
        public DateTime StageAssignmentTime { get; set; }

        /// <summary>
        /// The list of owners of the deal. This field is required.
        /// </summary>
        /// <value>The list of owners of the deal. This field is required.</value>
        [DataMember(Name = "owners", IsRequired = true, EmitDefaultValue = true)]
        public List<Owner> Owners { get; set; }

        /// <summary>
        /// The ID of the owner of the deal. This field is optional.
        /// </summary>
        /// <value>The ID of the owner of the deal. This field is optional.</value>
        [DataMember(Name = "owner_id", EmitDefaultValue = true)]
        public string OwnerId { get; set; }

        /// <summary>
        /// The list of task IDs associated with the deal. This field is required.
        /// </summary>
        /// <value>The list of task IDs associated with the deal. This field is required.</value>
        [DataMember(Name = "task_ids", IsRequired = true, EmitDefaultValue = true)]
        public List<string> TaskIds { get; set; }

        /// <summary>
        /// The order of the deal. This field is optional.
        /// </summary>
        /// <value>The order of the deal. This field is optional.</value>
        [DataMember(Name = "order_id", EmitDefaultValue = true)]
        public string OrderId { get; set; }

        /// <summary>
        /// The status of the deal. This field is required.
        /// </summary>
        /// <value>The status of the deal. This field is required.</value>
        [DataMember(Name = "status", IsRequired = true, EmitDefaultValue = true)]
        public string Status { get; set; }

        /// <summary>
        /// The estimated close time of the deal. This field is optional.
        /// </summary>
        /// <value>The estimated close time of the deal. This field is optional.</value>
        [DataMember(Name = "estimated_close_time", EmitDefaultValue = true)]
        public DateTime? EstimatedCloseTime { get; set; }

        /// <summary>
        /// The actual close time of the deal. This field is optional.
        /// </summary>
        /// <value>The actual close time of the deal. This field is optional.</value>
        [DataMember(Name = "closed_time", EmitDefaultValue = true)]
        public DateTime? ClosedTime { get; set; }

        /// <summary>
        /// The custom fields associated with the deal. This field is optional.
        /// </summary>
        /// <value>The custom fields associated with the deal. This field is optional.</value>
        [DataMember(Name = "custom_fields", EmitDefaultValue = true)]
        public Dictionary<string, Object> CustomFields { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Deal {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Contacts: ").Append(Contacts).Append("\n");
            sb.Append("  Stage: ").Append(Stage).Append("\n");
            sb.Append("  StageAssignmentTime: ").Append(StageAssignmentTime).Append("\n");
            sb.Append("  Owners: ").Append(Owners).Append("\n");
            sb.Append("  OwnerId: ").Append(OwnerId).Append("\n");
            sb.Append("  TaskIds: ").Append(TaskIds).Append("\n");
            sb.Append("  OrderId: ").Append(OrderId).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  EstimatedCloseTime: ").Append(EstimatedCloseTime).Append("\n");
            sb.Append("  ClosedTime: ").Append(ClosedTime).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
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
            // Name (string) minLength
            if (this.Name != null && this.Name.Length < 1)
            {
                yield return new ValidationResult("Invalid value for Name, length must be greater than 1.", new [] { "Name" });
            }

            yield break;
        }    }

}
