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
    /// UpdateAutomationCategoryRequest
    /// </summary>
    [DataContract(Name = "UpdateAutomationCategoryRequest")]
    public partial class UpdateAutomationCategoryRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateAutomationCategoryRequest" /> class.
        /// </summary>
        /// <param name="applyCategory">applyCategory.</param>
        /// <param name="automationIds">automationIds.</param>
        /// <param name="categoryIds">categoryIds.</param>
        public UpdateAutomationCategoryRequest(bool applyCategory = default(bool), List<long> automationIds = default(List<long>), List<long> categoryIds = default(List<long>))
        {
            this.ApplyCategory = applyCategory;
            this.AutomationIds = automationIds;
            this.CategoryIds = categoryIds;
        }

        /// <summary>
        /// Gets or Sets ApplyCategory
        /// </summary>
        [DataMember(Name = "apply_category", EmitDefaultValue = true)]
        public bool ApplyCategory { get; set; }

        /// <summary>
        /// Gets or Sets AutomationIds
        /// </summary>
        [DataMember(Name = "automation_ids", EmitDefaultValue = false)]
        public List<long> AutomationIds { get; set; }

        /// <summary>
        /// Gets or Sets CategoryIds
        /// </summary>
        [DataMember(Name = "category_ids", EmitDefaultValue = false)]
        public List<long> CategoryIds { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateAutomationCategoryRequest {\n");
            sb.Append("  ApplyCategory: ").Append(ApplyCategory).Append("\n");
            sb.Append("  AutomationIds: ").Append(AutomationIds).Append("\n");
            sb.Append("  CategoryIds: ").Append(CategoryIds).Append("\n");
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
