/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.770650
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
    /// Sequence
    /// </summary>
    [DataContract(Name = "Sequence")]
    public partial class Sequence : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Sequence" /> class.
        /// </summary>
        /// <param name="activeContactCount">activeContactCount.</param>
        /// <param name="activeContactCountCompleted">activeContactCountCompleted.</param>
        /// <param name="historicalContactCount">historicalContactCount.</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="paths">paths.</param>
        public Sequence(int activeContactCount = default(int), int activeContactCountCompleted = default(int), HistoricalCounts historicalContactCount = default(HistoricalCounts), string id = default(string), string name = default(string), List<SequencePath> paths = default(List<SequencePath>))
        {
            this.ActiveContactCount = activeContactCount;
            this.ActiveContactCountCompleted = activeContactCountCompleted;
            this.HistoricalContactCount = historicalContactCount;
            this.Id = id;
            this.Name = name;
            this.Paths = paths;
        }

        /// <summary>
        /// Gets or Sets ActiveContactCount
        /// </summary>
        [DataMember(Name = "active_contact_count", EmitDefaultValue = false)]
        public int ActiveContactCount { get; set; }

        /// <summary>
        /// Gets or Sets ActiveContactCountCompleted
        /// </summary>
        [DataMember(Name = "active_contact_count_completed", EmitDefaultValue = false)]
        public int ActiveContactCountCompleted { get; set; }

        /// <summary>
        /// Gets or Sets HistoricalContactCount
        /// </summary>
        [DataMember(Name = "historical_contact_count", EmitDefaultValue = false)]
        public HistoricalCounts HistoricalContactCount { get; set; }

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
        /// Gets or Sets Paths
        /// </summary>
        [DataMember(Name = "paths", EmitDefaultValue = false)]
        public List<SequencePath> Paths { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Sequence {\n");
            sb.Append("  ActiveContactCount: ").Append(ActiveContactCount).Append("\n");
            sb.Append("  ActiveContactCountCompleted: ").Append(ActiveContactCountCompleted).Append("\n");
            sb.Append("  HistoricalContactCount: ").Append(HistoricalContactCount).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Paths: ").Append(Paths).Append("\n");
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
