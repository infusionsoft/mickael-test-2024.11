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
    /// RestV2Subscription
    /// </summary>
    [DataContract(Name = "RestV2Subscription")]
    public partial class RestV2Subscription : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RestV2Subscription" /> class.
        /// </summary>
        /// <param name="subscriptionActive">subscriptionActive.</param>
        /// <param name="subscriptionCyclesCompleted">subscriptionCyclesCompleted.</param>
        /// <param name="subscriptionEndDate">subscriptionEndDate.</param>
        /// <param name="subscriptionId">subscriptionId.</param>
        /// <param name="subscriptionNextBillDate">subscriptionNextBillDate.</param>
        /// <param name="subscriptionStartDate">subscriptionStartDate.</param>
        public RestV2Subscription(bool subscriptionActive = default(bool), int subscriptionCyclesCompleted = default(int), string subscriptionEndDate = default(string), string subscriptionId = default(string), string subscriptionNextBillDate = default(string), string subscriptionStartDate = default(string))
        {
            this.SubscriptionActive = subscriptionActive;
            this.SubscriptionCyclesCompleted = subscriptionCyclesCompleted;
            this.SubscriptionEndDate = subscriptionEndDate;
            this.SubscriptionId = subscriptionId;
            this.SubscriptionNextBillDate = subscriptionNextBillDate;
            this.SubscriptionStartDate = subscriptionStartDate;
        }

        /// <summary>
        /// Gets or Sets SubscriptionActive
        /// </summary>
        [DataMember(Name = "subscription_active", EmitDefaultValue = true)]
        public bool SubscriptionActive { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionCyclesCompleted
        /// </summary>
        [DataMember(Name = "subscription_cycles_completed", EmitDefaultValue = false)]
        public int SubscriptionCyclesCompleted { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionEndDate
        /// </summary>
        [DataMember(Name = "subscription_end_date", EmitDefaultValue = false)]
        public string SubscriptionEndDate { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionId
        /// </summary>
        [DataMember(Name = "subscription_id", EmitDefaultValue = false)]
        public string SubscriptionId { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionNextBillDate
        /// </summary>
        [DataMember(Name = "subscription_next_bill_date", EmitDefaultValue = false)]
        public string SubscriptionNextBillDate { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionStartDate
        /// </summary>
        [DataMember(Name = "subscription_start_date", EmitDefaultValue = false)]
        public string SubscriptionStartDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestV2Subscription {\n");
            sb.Append("  SubscriptionActive: ").Append(SubscriptionActive).Append("\n");
            sb.Append("  SubscriptionCyclesCompleted: ").Append(SubscriptionCyclesCompleted).Append("\n");
            sb.Append("  SubscriptionEndDate: ").Append(SubscriptionEndDate).Append("\n");
            sb.Append("  SubscriptionId: ").Append(SubscriptionId).Append("\n");
            sb.Append("  SubscriptionNextBillDate: ").Append(SubscriptionNextBillDate).Append("\n");
            sb.Append("  SubscriptionStartDate: ").Append(SubscriptionStartDate).Append("\n");
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
