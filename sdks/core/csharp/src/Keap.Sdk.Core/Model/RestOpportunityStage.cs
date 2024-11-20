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
    /// RestOpportunityStage
    /// </summary>
    [DataContract(Name = "RestOpportunityStage")]
    public partial class RestOpportunityStage : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RestOpportunityStage" /> class.
        /// </summary>
        /// <param name="checkListItems">checkListItems.</param>
        /// <param name="createdTime">createdTime.</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="order">order.</param>
        /// <param name="probability">probability.</param>
        /// <param name="targetNumberDays">targetNumberDays.</param>
        /// <param name="updatedTime">updatedTime.</param>
        public RestOpportunityStage(List<CheckListItem> checkListItems = default(List<CheckListItem>), string createdTime = default(string), string id = default(string), string name = default(string), int order = default(int), int probability = default(int), int targetNumberDays = default(int), string updatedTime = default(string))
        {
            this.CheckListItems = checkListItems;
            this.CreatedTime = createdTime;
            this.Id = id;
            this.Name = name;
            this.Order = order;
            this.Probability = probability;
            this.TargetNumberDays = targetNumberDays;
            this.UpdatedTime = updatedTime;
        }

        /// <summary>
        /// Gets or Sets CheckListItems
        /// </summary>
        [DataMember(Name = "check_list_items", EmitDefaultValue = false)]
        public List<CheckListItem> CheckListItems { get; set; }

        /// <summary>
        /// Gets or Sets CreatedTime
        /// </summary>
        [DataMember(Name = "created_time", EmitDefaultValue = false)]
        public string CreatedTime { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Order
        /// </summary>
        [DataMember(Name = "order", EmitDefaultValue = false)]
        public int Order { get; set; }

        /// <summary>
        /// Gets or Sets Probability
        /// </summary>
        [DataMember(Name = "probability", EmitDefaultValue = false)]
        public int Probability { get; set; }

        /// <summary>
        /// Gets or Sets TargetNumberDays
        /// </summary>
        [DataMember(Name = "target_number_days", EmitDefaultValue = false)]
        public int TargetNumberDays { get; set; }

        /// <summary>
        /// Gets or Sets UpdatedTime
        /// </summary>
        [DataMember(Name = "updated_time", EmitDefaultValue = false)]
        public string UpdatedTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestOpportunityStage {\n");
            sb.Append("  CheckListItems: ").Append(CheckListItems).Append("\n");
            sb.Append("  CreatedTime: ").Append(CreatedTime).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
            sb.Append("  Probability: ").Append(Probability).Append("\n");
            sb.Append("  TargetNumberDays: ").Append(TargetNumberDays).Append("\n");
            sb.Append("  UpdatedTime: ").Append(UpdatedTime).Append("\n");
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
