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
    /// ListAutomationResponse
    /// </summary>
    [DataContract(Name = "ListAutomationResponse")]
    public partial class ListAutomationResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListAutomationResponse" /> class.
        /// </summary>
        /// <param name="automationCount">automationCount.</param>
        /// <param name="automations">automations.</param>
        /// <param name="nextPageToken">nextPageToken.</param>
        public ListAutomationResponse(int automationCount = default(int), List<Automation> automations = default(List<Automation>), string nextPageToken = default(string))
        {
            this.AutomationCount = automationCount;
            this.Automations = automations;
            this.NextPageToken = nextPageToken;
        }

        /// <summary>
        /// Gets or Sets AutomationCount
        /// </summary>
        [DataMember(Name = "automation_count", EmitDefaultValue = false)]
        public int AutomationCount { get; set; }

        /// <summary>
        /// Gets or Sets Automations
        /// </summary>
        [DataMember(Name = "automations", EmitDefaultValue = false)]
        public List<Automation> Automations { get; set; }

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
            sb.Append("class ListAutomationResponse {\n");
            sb.Append("  AutomationCount: ").Append(AutomationCount).Append("\n");
            sb.Append("  Automations: ").Append(Automations).Append("\n");
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
