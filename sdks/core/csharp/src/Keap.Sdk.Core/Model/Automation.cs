/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772697-hf-202501311118
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
    /// Automation
    /// </summary>
    [DataContract(Name = "Automation")]
    public partial class Automation : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Automation" /> class.
        /// </summary>
        /// <param name="activeContacts">activeContacts.</param>
        /// <param name="categories">categories.</param>
        /// <param name="currentEditLockStatus">currentEditLockStatus.</param>
        /// <param name="errorMessage">errorMessage.</param>
        /// <param name="id">id.</param>
        /// <param name="locked">locked.</param>
        /// <param name="publishedBy">publishedBy.</param>
        /// <param name="publishedDate">publishedDate.</param>
        /// <param name="publishedTimezone">publishedTimezone.</param>
        /// <param name="status">status.</param>
        /// <param name="title">title.</param>
        public Automation(int activeContacts = default(int), List<string> categories = default(List<string>), AutomationLockStatus currentEditLockStatus = default(AutomationLockStatus), string errorMessage = default(string), string id = default(string), bool locked = default(bool), string publishedBy = default(string), DateTime publishedDate = default(DateTime), string publishedTimezone = default(string), string status = default(string), string title = default(string))
        {
            this.ActiveContacts = activeContacts;
            this.Categories = categories;
            this.CurrentEditLockStatus = currentEditLockStatus;
            this.ErrorMessage = errorMessage;
            this.Id = id;
            this.Locked = locked;
            this.PublishedBy = publishedBy;
            this.PublishedDate = publishedDate;
            this.PublishedTimezone = publishedTimezone;
            this.Status = status;
            this.Title = title;
        }

        /// <summary>
        /// Gets or Sets ActiveContacts
        /// </summary>
        [DataMember(Name = "active_contacts", EmitDefaultValue = false)]
        public int ActiveContacts { get; set; }

        /// <summary>
        /// Gets or Sets Categories
        /// </summary>
        [DataMember(Name = "categories", EmitDefaultValue = false)]
        public List<string> Categories { get; set; }

        /// <summary>
        /// Gets or Sets CurrentEditLockStatus
        /// </summary>
        [DataMember(Name = "current_edit_lock_status", EmitDefaultValue = false)]
        public AutomationLockStatus CurrentEditLockStatus { get; set; }

        /// <summary>
        /// Gets or Sets ErrorMessage
        /// </summary>
        [DataMember(Name = "error_message", EmitDefaultValue = false)]
        public string ErrorMessage { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Locked
        /// </summary>
        [DataMember(Name = "locked", EmitDefaultValue = true)]
        public bool Locked { get; set; }

        /// <summary>
        /// Gets or Sets PublishedBy
        /// </summary>
        [DataMember(Name = "published_by", EmitDefaultValue = false)]
        public string PublishedBy { get; set; }

        /// <summary>
        /// Gets or Sets PublishedDate
        /// </summary>
        [DataMember(Name = "published_date", EmitDefaultValue = false)]
        public DateTime PublishedDate { get; set; }

        /// <summary>
        /// Gets or Sets PublishedTimezone
        /// </summary>
        [DataMember(Name = "published_timezone", EmitDefaultValue = false)]
        public string PublishedTimezone { get; set; }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }

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
            sb.Append("class Automation {\n");
            sb.Append("  ActiveContacts: ").Append(ActiveContacts).Append("\n");
            sb.Append("  Categories: ").Append(Categories).Append("\n");
            sb.Append("  CurrentEditLockStatus: ").Append(CurrentEditLockStatus).Append("\n");
            sb.Append("  ErrorMessage: ").Append(ErrorMessage).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Locked: ").Append(Locked).Append("\n");
            sb.Append("  PublishedBy: ").Append(PublishedBy).Append("\n");
            sb.Append("  PublishedDate: ").Append(PublishedDate).Append("\n");
            sb.Append("  PublishedTimezone: ").Append(PublishedTimezone).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
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
