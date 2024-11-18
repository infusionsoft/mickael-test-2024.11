/*
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.736468-hf-202411121210
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
    /// ListAutomationIdsResponse
    /// </summary>
    [DataContract(Name = "ListAutomationIdsResponse")]
    public partial class ListAutomationIdsResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListAutomationIdsResponse" /> class.
        /// </summary>
        /// <param name="automationIds">automationIds.</param>
        /// <param name="lockedAutomationIds">lockedAutomationIds.</param>
        public ListAutomationIdsResponse(List<string> automationIds = default(List<string>), List<string> lockedAutomationIds = default(List<string>))
        {
            this.AutomationIds = automationIds;
            this.LockedAutomationIds = lockedAutomationIds;
        }

        /// <summary>
        /// Gets or Sets AutomationIds
        /// </summary>
        [DataMember(Name = "automation_ids", EmitDefaultValue = false)]
        public List<string> AutomationIds { get; set; }

        /// <summary>
        /// Gets or Sets LockedAutomationIds
        /// </summary>
        [DataMember(Name = "locked_automation_ids", EmitDefaultValue = false)]
        public List<string> LockedAutomationIds { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListAutomationIdsResponse {\n");
            sb.Append("  AutomationIds: ").Append(AutomationIds).Append("\n");
            sb.Append("  LockedAutomationIds: ").Append(LockedAutomationIds).Append("\n");
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
