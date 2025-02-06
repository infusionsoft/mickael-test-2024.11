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
    /// Item
    /// </summary>
    [DataContract(Name = "Item")]
    public partial class Item : IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum NULL for value: NULL
            /// </summary>
            [EnumMember(Value = "NULL")]
            NULL = 1,

            /// <summary>
            /// Enum Start for value: Start
            /// </summary>
            [EnumMember(Value = "Start")]
            Start = 2,

            /// <summary>
            /// Enum Wait for value: Wait
            /// </summary>
            [EnumMember(Value = "Wait")]
            Wait = 3,

            /// <summary>
            /// Enum DelayTimer for value: DelayTimer
            /// </summary>
            [EnumMember(Value = "DelayTimer")]
            DelayTimer = 4,

            /// <summary>
            /// Enum ContactTimer for value: ContactTimer
            /// </summary>
            [EnumMember(Value = "ContactTimer")]
            ContactTimer = 5,

            /// <summary>
            /// Enum DateTimer for value: DateTimer
            /// </summary>
            [EnumMember(Value = "DateTimer")]
            DateTimer = 6,

            /// <summary>
            /// Enum AppointmentTimer for value: AppointmentTimer
            /// </summary>
            [EnumMember(Value = "AppointmentTimer")]
            AppointmentTimer = 7,

            /// <summary>
            /// Enum Email for value: Email
            /// </summary>
            [EnumMember(Value = "Email")]
            Email = 8,

            /// <summary>
            /// Enum BardEmail for value: BardEmail
            /// </summary>
            [EnumMember(Value = "BardEmail")]
            BardEmail = 9,

            /// <summary>
            /// Enum UnlayerEmail for value: UnlayerEmail
            /// </summary>
            [EnumMember(Value = "UnlayerEmail")]
            UnlayerEmail = 10,

            /// <summary>
            /// Enum EmailConfirm for value: EmailConfirm
            /// </summary>
            [EnumMember(Value = "EmailConfirm")]
            EmailConfirm = 11,

            /// <summary>
            /// Enum Voice for value: Voice
            /// </summary>
            [EnumMember(Value = "Voice")]
            Voice = 12,

            /// <summary>
            /// Enum Fax for value: Fax
            /// </summary>
            [EnumMember(Value = "Fax")]
            Fax = 13,

            /// <summary>
            /// Enum Letter for value: Letter
            /// </summary>
            [EnumMember(Value = "Letter")]
            Letter = 14,

            /// <summary>
            /// Enum AutomatedSms for value: AutomatedSms
            /// </summary>
            [EnumMember(Value = "AutomatedSms")]
            AutomatedSms = 15,

            /// <summary>
            /// Enum Tag for value: Tag
            /// </summary>
            [EnumMember(Value = "Tag")]
            Tag = 16,

            /// <summary>
            /// Enum Opportunity for value: Opportunity
            /// </summary>
            [EnumMember(Value = "Opportunity")]
            Opportunity = 17,

            /// <summary>
            /// Enum Note for value: Note
            /// </summary>
            [EnumMember(Value = "Note")]
            Note = 18,

            /// <summary>
            /// Enum Task for value: Task
            /// </summary>
            [EnumMember(Value = "Task")]
            Task = 19,

            /// <summary>
            /// Enum CompleteTasks for value: CompleteTasks
            /// </summary>
            [EnumMember(Value = "CompleteTasks")]
            CompleteTasks = 20,

            /// <summary>
            /// Enum Appointment for value: Appointment
            /// </summary>
            [EnumMember(Value = "Appointment")]
            Appointment = 21,

            /// <summary>
            /// Enum AssignOwner for value: AssignOwner
            /// </summary>
            [EnumMember(Value = "AssignOwner")]
            AssignOwner = 22,

            /// <summary>
            /// Enum FieldValue for value: FieldValue
            /// </summary>
            [EnumMember(Value = "FieldValue")]
            FieldValue = 23,

            /// <summary>
            /// Enum Fulfillment for value: Fulfillment
            /// </summary>
            [EnumMember(Value = "Fulfillment")]
            Fulfillment = 24,

            /// <summary>
            /// Enum CreateOrder for value: CreateOrder
            /// </summary>
            [EnumMember(Value = "CreateOrder")]
            CreateOrder = 25,

            /// <summary>
            /// Enum Deal for value: Deal
            /// </summary>
            [EnumMember(Value = "Deal")]
            Deal = 26,

            /// <summary>
            /// Enum AddToSequence for value: AddToSequence
            /// </summary>
            [EnumMember(Value = "AddToSequence")]
            AddToSequence = 27,

            /// <summary>
            /// Enum CancelSubscription for value: CancelSubscription
            /// </summary>
            [EnumMember(Value = "CancelSubscription")]
            CancelSubscription = 28,

            /// <summary>
            /// Enum MoveOpportunity for value: MoveOpportunity
            /// </summary>
            [EnumMember(Value = "MoveOpportunity")]
            MoveOpportunity = 29,

            /// <summary>
            /// Enum Http for value: Http
            /// </summary>
            [EnumMember(Value = "Http")]
            Http = 30,

            /// <summary>
            /// Enum CustomerHub for value: CustomerHub
            /// </summary>
            [EnumMember(Value = "CustomerHub")]
            CustomerHub = 31,

            /// <summary>
            /// Enum HttpRequest for value: HttpRequest
            /// </summary>
            [EnumMember(Value = "HttpRequest")]
            HttpRequest = 32,

            /// <summary>
            /// Enum IntegrationAction for value: IntegrationAction
            /// </summary>
            [EnumMember(Value = "IntegrationAction")]
            IntegrationAction = 33,

            /// <summary>
            /// Enum ActionSet for value: ActionSet
            /// </summary>
            [EnumMember(Value = "ActionSet")]
            ActionSet = 34
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Item" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="nextItemId">nextItemId.</param>
        /// <param name="previousItemId">previousItemId.</param>
        /// <param name="type">type.</param>
        public Item(string id = default(string), string name = default(string), string nextItemId = default(string), string previousItemId = default(string), TypeEnum? type = default(TypeEnum?))
        {
            this.Id = id;
            this.Name = name;
            this.NextItemId = nextItemId;
            this.PreviousItemId = previousItemId;
            this.Type = type;
        }

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
        /// Gets or Sets NextItemId
        /// </summary>
        [DataMember(Name = "next_item_id", EmitDefaultValue = false)]
        public string NextItemId { get; set; }

        /// <summary>
        /// Gets or Sets PreviousItemId
        /// </summary>
        [DataMember(Name = "previous_item_id", EmitDefaultValue = false)]
        public string PreviousItemId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Item {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  NextItemId: ").Append(NextItemId).Append("\n");
            sb.Append("  PreviousItemId: ").Append(PreviousItemId).Append("\n");
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
