/*
 * Keap REST API
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.70.0.739356-hf-202411181744
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
    /// CreateFunnelIntegrationTriggerEvents
    /// </summary>
    [DataContract(Name = "CreateFunnelIntegrationTriggerEvents")]
    public partial class CreateFunnelIntegrationTriggerEvents : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateFunnelIntegrationTriggerEvents" /> class.
        /// </summary>
        /// <param name="funnelIntegrationTriggerEvents">A list of trigger events to be created..</param>
        public CreateFunnelIntegrationTriggerEvents(List<FunnelIntegrationTriggerEventDTO> funnelIntegrationTriggerEvents = default(List<FunnelIntegrationTriggerEventDTO>))
        {
            this.FunnelIntegrationTriggerEvents = funnelIntegrationTriggerEvents;
        }

        /// <summary>
        /// A list of trigger events to be created.
        /// </summary>
        /// <value>A list of trigger events to be created.</value>
        [DataMember(Name = "funnel_integration_trigger_events", EmitDefaultValue = false)]
        public List<FunnelIntegrationTriggerEventDTO> FunnelIntegrationTriggerEvents { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateFunnelIntegrationTriggerEvents {\n");
            sb.Append("  FunnelIntegrationTriggerEvents: ").Append(FunnelIntegrationTriggerEvents).Append("\n");
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
