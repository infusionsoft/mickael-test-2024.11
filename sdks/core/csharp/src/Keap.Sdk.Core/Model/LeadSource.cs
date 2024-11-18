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
    /// LeadSource
    /// </summary>
    [DataContract(Name = "LeadSource")]
    public partial class LeadSource : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LeadSource" /> class.
        /// </summary>
        /// <param name="category">category.</param>
        /// <param name="description">description.</param>
        /// <param name="endTime">endTime.</param>
        /// <param name="id">id.</param>
        /// <param name="medium">medium.</param>
        /// <param name="message">message.</param>
        /// <param name="name">name.</param>
        /// <param name="startTime">startTime.</param>
        /// <param name="statusIsActive">statusIsActive.</param>
        /// <param name="vendor">vendor.</param>
        public LeadSource(LeadSourceCategory category = default(LeadSourceCategory), string description = default(string), string endTime = default(string), string id = default(string), string medium = default(string), string message = default(string), string name = default(string), string startTime = default(string), bool statusIsActive = default(bool), string vendor = default(string))
        {
            this.Category = category;
            this.Description = description;
            this.EndTime = endTime;
            this.Id = id;
            this.Medium = medium;
            this.Message = message;
            this.Name = name;
            this.StartTime = startTime;
            this.StatusIsActive = statusIsActive;
            this.Vendor = vendor;
        }

        /// <summary>
        /// Gets or Sets Category
        /// </summary>
        [DataMember(Name = "category", EmitDefaultValue = false)]
        public LeadSourceCategory Category { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets EndTime
        /// </summary>
        [DataMember(Name = "end_time", EmitDefaultValue = false)]
        public string EndTime { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Medium
        /// </summary>
        [DataMember(Name = "medium", EmitDefaultValue = false)]
        public string Medium { get; set; }

        /// <summary>
        /// Gets or Sets Message
        /// </summary>
        [DataMember(Name = "message", EmitDefaultValue = false)]
        public string Message { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets StartTime
        /// </summary>
        [DataMember(Name = "start_time", EmitDefaultValue = false)]
        public string StartTime { get; set; }

        /// <summary>
        /// Gets or Sets StatusIsActive
        /// </summary>
        [DataMember(Name = "status_is_active", EmitDefaultValue = true)]
        public bool StatusIsActive { get; set; }

        /// <summary>
        /// Gets or Sets Vendor
        /// </summary>
        [DataMember(Name = "vendor", EmitDefaultValue = false)]
        public string Vendor { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class LeadSource {\n");
            sb.Append("  Category: ").Append(Category).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  EndTime: ").Append(EndTime).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Medium: ").Append(Medium).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  StartTime: ").Append(StartTime).Append("\n");
            sb.Append("  StatusIsActive: ").Append(StatusIsActive).Append("\n");
            sb.Append("  Vendor: ").Append(Vendor).Append("\n");
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
