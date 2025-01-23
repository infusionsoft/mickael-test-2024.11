/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.768375
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
    /// Goal
    /// </summary>
    [DataContract(Name = "Goal")]
    public partial class Goal : IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum WebForm for value: WebForm
            /// </summary>
            [EnumMember(Value = "WebForm")]
            WebForm = 1,

            /// <summary>
            /// Enum LandingPage for value: LandingPage
            /// </summary>
            [EnumMember(Value = "LandingPage")]
            LandingPage = 2,

            /// <summary>
            /// Enum Survey for value: Survey
            /// </summary>
            [EnumMember(Value = "Survey")]
            Survey = 3,

            /// <summary>
            /// Enum LinkClick for value: LinkClick
            /// </summary>
            [EnumMember(Value = "LinkClick")]
            LinkClick = 4,

            /// <summary>
            /// Enum EmailOpened for value: EmailOpened
            /// </summary>
            [EnumMember(Value = "EmailOpened")]
            EmailOpened = 5,

            /// <summary>
            /// Enum Score for value: Score
            /// </summary>
            [EnumMember(Value = "Score")]
            Score = 6,

            /// <summary>
            /// Enum Purchase for value: Purchase
            /// </summary>
            [EnumMember(Value = "Purchase")]
            Purchase = 7,

            /// <summary>
            /// Enum FailedPurchase for value: FailedPurchase
            /// </summary>
            [EnumMember(Value = "FailedPurchase")]
            FailedPurchase = 8,

            /// <summary>
            /// Enum Quote for value: Quote
            /// </summary>
            [EnumMember(Value = "Quote")]
            Quote = 9,

            /// <summary>
            /// Enum WebsiteTrigger for value: WebsiteTrigger
            /// </summary>
            [EnumMember(Value = "WebsiteTrigger")]
            WebsiteTrigger = 10,

            /// <summary>
            /// Enum InternalForm for value: InternalForm
            /// </summary>
            [EnumMember(Value = "InternalForm")]
            InternalForm = 11,

            /// <summary>
            /// Enum SmartForm for value: SmartForm
            /// </summary>
            [EnumMember(Value = "SmartForm")]
            SmartForm = 12,

            /// <summary>
            /// Enum AppointmentEvent for value: AppointmentEvent
            /// </summary>
            [EnumMember(Value = "AppointmentEvent")]
            AppointmentEvent = 13,

            /// <summary>
            /// Enum Task for value: Task
            /// </summary>
            [EnumMember(Value = "Task")]
            Task = 14,

            /// <summary>
            /// Enum StageMove for value: StageMove
            /// </summary>
            [EnumMember(Value = "StageMove")]
            StageMove = 15,

            /// <summary>
            /// Enum Note for value: Note
            /// </summary>
            [EnumMember(Value = "Note")]
            Note = 16,

            /// <summary>
            /// Enum Tag for value: Tag
            /// </summary>
            [EnumMember(Value = "Tag")]
            Tag = 17,

            /// <summary>
            /// Enum PipelineStageMove for value: PipelineStageMove
            /// </summary>
            [EnumMember(Value = "PipelineStageMove")]
            PipelineStageMove = 18,

            /// <summary>
            /// Enum UnlayerLandingPage for value: UnlayerLandingPage
            /// </summary>
            [EnumMember(Value = "UnlayerLandingPage")]
            UnlayerLandingPage = 19,

            /// <summary>
            /// Enum GroSocial for value: GroSocial
            /// </summary>
            [EnumMember(Value = "GroSocial")]
            GroSocial = 20,

            /// <summary>
            /// Enum TwitterForm for value: TwitterForm
            /// </summary>
            [EnumMember(Value = "TwitterForm")]
            TwitterForm = 21,

            /// <summary>
            /// Enum API for value: API
            /// </summary>
            [EnumMember(Value = "API")]
            API = 22,

            /// <summary>
            /// Enum WordPress for value: WordPress
            /// </summary>
            [EnumMember(Value = "WordPress")]
            WordPress = 23,

            /// <summary>
            /// Enum NewLandingPage for value: NewLandingPage
            /// </summary>
            [EnumMember(Value = "NewLandingPage")]
            NewLandingPage = 24,

            /// <summary>
            /// Enum IntegrationTrigger for value: IntegrationTrigger
            /// </summary>
            [EnumMember(Value = "IntegrationTrigger")]
            IntegrationTrigger = 25
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Goal" /> class.
        /// </summary>
        /// <param name="historicalContactCounts">historicalContactCounts.</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="nextSequenceIds">nextSequenceIds.</param>
        /// <param name="previousSequenceIds">previousSequenceIds.</param>
        /// <param name="type">type.</param>
        public Goal(HistoricalCounts historicalContactCounts = default(HistoricalCounts), string id = default(string), string name = default(string), List<string> nextSequenceIds = default(List<string>), List<string> previousSequenceIds = default(List<string>), TypeEnum? type = default(TypeEnum?))
        {
            this.HistoricalContactCounts = historicalContactCounts;
            this.Id = id;
            this.Name = name;
            this.NextSequenceIds = nextSequenceIds;
            this.PreviousSequenceIds = previousSequenceIds;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets HistoricalContactCounts
        /// </summary>
        [DataMember(Name = "historical_contact_counts", EmitDefaultValue = false)]
        public HistoricalCounts HistoricalContactCounts { get; set; }

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
        /// Gets or Sets NextSequenceIds
        /// </summary>
        [DataMember(Name = "next_sequence_ids", EmitDefaultValue = false)]
        public List<string> NextSequenceIds { get; set; }

        /// <summary>
        /// Gets or Sets PreviousSequenceIds
        /// </summary>
        [DataMember(Name = "previous_sequence_ids", EmitDefaultValue = false)]
        public List<string> PreviousSequenceIds { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Goal {\n");
            sb.Append("  HistoricalContactCounts: ").Append(HistoricalContactCounts).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  NextSequenceIds: ").Append(NextSequenceIds).Append("\n");
            sb.Append("  PreviousSequenceIds: ").Append(PreviousSequenceIds).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
