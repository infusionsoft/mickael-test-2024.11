/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.772488
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
    /// Campaign
    /// </summary>
    [DataContract(Name = "Campaign")]
    public partial class Campaign : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Campaign" /> class.
        /// </summary>
        /// <param name="activeContactCount">activeContactCount.</param>
        /// <param name="completedContactCount">completedContactCount.</param>
        /// <param name="createdByGlobalId">createdByGlobalId.</param>
        /// <param name="dateCreated">dateCreated.</param>
        /// <param name="errorMessage">errorMessage.</param>
        /// <param name="goals">goals.</param>
        /// <param name="id">id.</param>
        /// <param name="locked">locked.</param>
        /// <param name="name">name.</param>
        /// <param name="publishedDate">publishedDate.</param>
        /// <param name="publishedStatus">publishedStatus.</param>
        /// <param name="publishedTimeZone">publishedTimeZone.</param>
        /// <param name="sequences">sequences.</param>
        /// <param name="varTimeZone">varTimeZone.</param>
        public Campaign(int activeContactCount = default(int), int completedContactCount = default(int), string createdByGlobalId = default(string), string dateCreated = default(string), string errorMessage = default(string), List<Goal> goals = default(List<Goal>), string id = default(string), bool locked = default(bool), string name = default(string), DateTime publishedDate = default(DateTime), bool publishedStatus = default(bool), string publishedTimeZone = default(string), List<Sequence> sequences = default(List<Sequence>), string varTimeZone = default(string))
        {
            this.ActiveContactCount = activeContactCount;
            this.CompletedContactCount = completedContactCount;
            this.CreatedByGlobalId = createdByGlobalId;
            this.DateCreated = dateCreated;
            this.ErrorMessage = errorMessage;
            this.Goals = goals;
            this.Id = id;
            this.Locked = locked;
            this.Name = name;
            this.PublishedDate = publishedDate;
            this.PublishedStatus = publishedStatus;
            this.PublishedTimeZone = publishedTimeZone;
            this.Sequences = sequences;
            this.VarTimeZone = varTimeZone;
        }

        /// <summary>
        /// Gets or Sets ActiveContactCount
        /// </summary>
        [DataMember(Name = "active_contact_count", EmitDefaultValue = false)]
        public int ActiveContactCount { get; set; }

        /// <summary>
        /// Gets or Sets CompletedContactCount
        /// </summary>
        [DataMember(Name = "completed_contact_count", EmitDefaultValue = false)]
        public int CompletedContactCount { get; set; }

        /// <summary>
        /// Gets or Sets CreatedByGlobalId
        /// </summary>
        [DataMember(Name = "created_by_global_id", EmitDefaultValue = false)]
        public string CreatedByGlobalId { get; set; }

        /// <summary>
        /// Gets or Sets DateCreated
        /// </summary>
        [DataMember(Name = "date_created", EmitDefaultValue = false)]
        public string DateCreated { get; set; }

        /// <summary>
        /// Gets or Sets ErrorMessage
        /// </summary>
        [DataMember(Name = "error_message", EmitDefaultValue = false)]
        public string ErrorMessage { get; set; }

        /// <summary>
        /// Gets or Sets Goals
        /// </summary>
        [DataMember(Name = "goals", EmitDefaultValue = false)]
        public List<Goal> Goals { get; set; }

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
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets PublishedDate
        /// </summary>
        [DataMember(Name = "published_date", EmitDefaultValue = false)]
        public DateTime PublishedDate { get; set; }

        /// <summary>
        /// Gets or Sets PublishedStatus
        /// </summary>
        [DataMember(Name = "published_status", EmitDefaultValue = true)]
        public bool PublishedStatus { get; set; }

        /// <summary>
        /// Gets or Sets PublishedTimeZone
        /// </summary>
        [DataMember(Name = "published_time_zone", EmitDefaultValue = false)]
        public string PublishedTimeZone { get; set; }

        /// <summary>
        /// Gets or Sets Sequences
        /// </summary>
        [DataMember(Name = "sequences", EmitDefaultValue = false)]
        public List<Sequence> Sequences { get; set; }

        /// <summary>
        /// Gets or Sets VarTimeZone
        /// </summary>
        [DataMember(Name = "time_zone", EmitDefaultValue = false)]
        public string VarTimeZone { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Campaign {\n");
            sb.Append("  ActiveContactCount: ").Append(ActiveContactCount).Append("\n");
            sb.Append("  CompletedContactCount: ").Append(CompletedContactCount).Append("\n");
            sb.Append("  CreatedByGlobalId: ").Append(CreatedByGlobalId).Append("\n");
            sb.Append("  DateCreated: ").Append(DateCreated).Append("\n");
            sb.Append("  ErrorMessage: ").Append(ErrorMessage).Append("\n");
            sb.Append("  Goals: ").Append(Goals).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Locked: ").Append(Locked).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  PublishedDate: ").Append(PublishedDate).Append("\n");
            sb.Append("  PublishedStatus: ").Append(PublishedStatus).Append("\n");
            sb.Append("  PublishedTimeZone: ").Append(PublishedTimeZone).Append("\n");
            sb.Append("  Sequences: ").Append(Sequences).Append("\n");
            sb.Append("  VarTimeZone: ").Append(VarTimeZone).Append("\n");
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
