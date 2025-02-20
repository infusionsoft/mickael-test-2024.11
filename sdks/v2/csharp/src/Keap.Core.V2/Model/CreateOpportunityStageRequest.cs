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
    /// CreateOpportunityStageRequest
    /// </summary>
    [DataContract(Name = "CreateOpportunityStageRequest")]
    public partial class CreateOpportunityStageRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateOpportunityStageRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateOpportunityStageRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateOpportunityStageRequest" /> class.
        /// </summary>
        /// <param name="checklistItems">checklistItems.</param>
        /// <param name="name">name (required).</param>
        /// <param name="order">order (required).</param>
        /// <param name="probability">probability (required).</param>
        /// <param name="targetNumberDays">targetNumberDays (required).</param>
        public CreateOpportunityStageRequest(List<CreateOpportunityStageChecklistItem> checklistItems = default(List<CreateOpportunityStageChecklistItem>), string name = default(string), int order = default(int), int probability = default(int), int targetNumberDays = default(int))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new ArgumentNullException("name is a required property for CreateOpportunityStageRequest and cannot be null");
            }
            this.Name = name;
            this.Order = order;
            this.Probability = probability;
            this.TargetNumberDays = targetNumberDays;
            this.ChecklistItems = checklistItems;
        }

        /// <summary>
        /// Gets or Sets ChecklistItems
        /// </summary>
        [DataMember(Name = "checklist_items", EmitDefaultValue = false)]
        public List<CreateOpportunityStageChecklistItem> ChecklistItems { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        /*
        <example>Won</example>
        */
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Order
        /// </summary>
        [DataMember(Name = "order", IsRequired = true, EmitDefaultValue = true)]
        public int Order { get; set; }

        /// <summary>
        /// Gets or Sets Probability
        /// </summary>
        [DataMember(Name = "probability", IsRequired = true, EmitDefaultValue = true)]
        public int Probability { get; set; }

        /// <summary>
        /// Gets or Sets TargetNumberDays
        /// </summary>
        [DataMember(Name = "target_number_days", IsRequired = true, EmitDefaultValue = true)]
        public int TargetNumberDays { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateOpportunityStageRequest {\n");
            sb.Append("  ChecklistItems: ").Append(ChecklistItems).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
            sb.Append("  Probability: ").Append(Probability).Append("\n");
            sb.Append("  TargetNumberDays: ").Append(TargetNumberDays).Append("\n");
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
