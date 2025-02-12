/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.775756
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
    /// UpdateSubscriptionPlanRequest
    /// </summary>
    [DataContract(Name = "UpdateSubscriptionPlanRequest")]
    public partial class UpdateSubscriptionPlanRequest : IValidatableObject
    {
        /// <summary>
        /// The cycle type of the subscription plan.
        /// </summary>
        /// <value>The cycle type of the subscription plan.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum CycleTypeEnum
        {
            /// <summary>
            /// Enum DAILY for value: DAILY
            /// </summary>
            [EnumMember(Value = "DAILY")]
            DAILY = 1,

            /// <summary>
            /// Enum WEEKLY for value: WEEKLY
            /// </summary>
            [EnumMember(Value = "WEEKLY")]
            WEEKLY = 2,

            /// <summary>
            /// Enum MONTHLY for value: MONTHLY
            /// </summary>
            [EnumMember(Value = "MONTHLY")]
            MONTHLY = 3,

            /// <summary>
            /// Enum YEARLY for value: YEARLY
            /// </summary>
            [EnumMember(Value = "YEARLY")]
            YEARLY = 4
        }

        /// <summary>
        /// The cycle type of the subscription plan.
        /// </summary>
        /// <value>The cycle type of the subscription plan.</value>
        [DataMember(Name = "cycle_type", IsRequired = true, EmitDefaultValue = true)]
        public CycleTypeEnum CycleType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSubscriptionPlanRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateSubscriptionPlanRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSubscriptionPlanRequest" /> class.
        /// </summary>
        /// <param name="active">Whether the subscription plan is active..</param>
        /// <param name="allowProrating">Allow prorating of the subscription plan..</param>
        /// <param name="cycleType">The cycle type of the subscription plan. (required).</param>
        /// <param name="displayOrderIndex">The order that this plan will be displayed to the user..</param>
        /// <param name="frequency">The frequency of the subscription plan..</param>
        /// <param name="planPrice">The price of the subscription plan in the smallest currency unit. (required).</param>
        /// <param name="totalCycles">How many cycles the subscription plan will have.  0 means infinite..</param>
        public UpdateSubscriptionPlanRequest(bool active = default(bool), bool allowProrating = default(bool), CycleTypeEnum cycleType = default(CycleTypeEnum), int displayOrderIndex = default(int), int frequency = default(int), double planPrice = default(double), int totalCycles = default(int))
        {
            this.CycleType = cycleType;
            this.PlanPrice = planPrice;
            this.Active = active;
            this.AllowProrating = allowProrating;
            this.DisplayOrderIndex = displayOrderIndex;
            this.Frequency = frequency;
            this.TotalCycles = totalCycles;
        }

        /// <summary>
        /// Whether the subscription plan is active.
        /// </summary>
        /// <value>Whether the subscription plan is active.</value>
        [DataMember(Name = "active", EmitDefaultValue = true)]
        public bool Active { get; set; }

        /// <summary>
        /// Allow prorating of the subscription plan.
        /// </summary>
        /// <value>Allow prorating of the subscription plan.</value>
        [DataMember(Name = "allow_prorating", EmitDefaultValue = true)]
        public bool AllowProrating { get; set; }

        /// <summary>
        /// The order that this plan will be displayed to the user.
        /// </summary>
        /// <value>The order that this plan will be displayed to the user.</value>
        [DataMember(Name = "display_order_index", EmitDefaultValue = false)]
        public int DisplayOrderIndex { get; set; }

        /// <summary>
        /// The frequency of the subscription plan.
        /// </summary>
        /// <value>The frequency of the subscription plan.</value>
        [DataMember(Name = "frequency", EmitDefaultValue = false)]
        public int Frequency { get; set; }

        /// <summary>
        /// The price of the subscription plan in the smallest currency unit.
        /// </summary>
        /// <value>The price of the subscription plan in the smallest currency unit.</value>
        [DataMember(Name = "plan_price", IsRequired = true, EmitDefaultValue = true)]
        public double PlanPrice { get; set; }

        /// <summary>
        /// How many cycles the subscription plan will have.  0 means infinite.
        /// </summary>
        /// <value>How many cycles the subscription plan will have.  0 means infinite.</value>
        [DataMember(Name = "total_cycles", EmitDefaultValue = false)]
        public int TotalCycles { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateSubscriptionPlanRequest {\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  AllowProrating: ").Append(AllowProrating).Append("\n");
            sb.Append("  CycleType: ").Append(CycleType).Append("\n");
            sb.Append("  DisplayOrderIndex: ").Append(DisplayOrderIndex).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
            sb.Append("  PlanPrice: ").Append(PlanPrice).Append("\n");
            sb.Append("  TotalCycles: ").Append(TotalCycles).Append("\n");
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
