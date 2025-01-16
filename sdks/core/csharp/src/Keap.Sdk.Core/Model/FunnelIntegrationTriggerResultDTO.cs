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
    /// FunnelIntegrationTriggerResultDTO
    /// </summary>
    [DataContract(Name = "FunnelIntegrationTriggerResultDTO")]
    public partial class FunnelIntegrationTriggerResultDTO : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FunnelIntegrationTriggerResultDTO" /> class.
        /// </summary>
        /// <param name="automationId">automationId.</param>
        /// <param name="goalId">goalId.</param>
        /// <param name="message">message.</param>
        /// <param name="schemaData">schemaData.</param>
        /// <param name="success">success.</param>
        public FunnelIntegrationTriggerResultDTO(long automationId = default(long), long goalId = default(long), string message = default(string), string schemaData = default(string), bool success = default(bool))
        {
            this.AutomationId = automationId;
            this.GoalId = goalId;
            this.Message = message;
            this.SchemaData = schemaData;
            this.Success = success;
        }

        /// <summary>
        /// Gets or Sets AutomationId
        /// </summary>
        [DataMember(Name = "automation_id", EmitDefaultValue = false)]
        public long AutomationId { get; set; }

        /// <summary>
        /// Gets or Sets GoalId
        /// </summary>
        [DataMember(Name = "goal_id", EmitDefaultValue = false)]
        public long GoalId { get; set; }

        /// <summary>
        /// Gets or Sets Message
        /// </summary>
        [DataMember(Name = "message", EmitDefaultValue = false)]
        public string Message { get; set; }

        /// <summary>
        /// Gets or Sets SchemaData
        /// </summary>
        [DataMember(Name = "schema_data", EmitDefaultValue = false)]
        public string SchemaData { get; set; }

        /// <summary>
        /// Gets or Sets Success
        /// </summary>
        [DataMember(Name = "success", EmitDefaultValue = true)]
        public bool Success { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FunnelIntegrationTriggerResultDTO {\n");
            sb.Append("  AutomationId: ").Append(AutomationId).Append("\n");
            sb.Append("  GoalId: ").Append(GoalId).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  SchemaData: ").Append(SchemaData).Append("\n");
            sb.Append("  Success: ").Append(Success).Append("\n");
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
