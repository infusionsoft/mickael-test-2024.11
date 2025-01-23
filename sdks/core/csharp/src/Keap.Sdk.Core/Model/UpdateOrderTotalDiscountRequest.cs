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
    /// UpdateOrderTotalDiscountRequest
    /// </summary>
    [DataContract(Name = "UpdateOrderTotalDiscountRequest")]
    public partial class UpdateOrderTotalDiscountRequest : IValidatableObject
    {
        /// <summary>
        /// Defines DiscountStrategy
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum DiscountStrategyEnum
        {
            /// <summary>
            /// Enum GROSS for value: GROSS
            /// </summary>
            [EnumMember(Value = "GROSS")]
            GROSS = 1,

            /// <summary>
            /// Enum NET for value: NET
            /// </summary>
            [EnumMember(Value = "NET")]
            NET = 2
        }

        /// <summary>
        /// Gets or Sets DiscountStrategy
        /// </summary>
        [DataMember(Name = "discount_strategy", EmitDefaultValue = false)]
        public DiscountStrategyEnum? DiscountStrategy { get; set; }
        /// <summary>
        /// Defines DiscountType
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum DiscountTypeEnum
        {
            /// <summary>
            /// Enum AMOUNT for value: AMOUNT
            /// </summary>
            [EnumMember(Value = "AMOUNT")]
            AMOUNT = 1,

            /// <summary>
            /// Enum PERCENT for value: PERCENT
            /// </summary>
            [EnumMember(Value = "PERCENT")]
            PERCENT = 2
        }

        /// <summary>
        /// Gets or Sets DiscountType
        /// </summary>
        [DataMember(Name = "discount_type", EmitDefaultValue = false)]
        public DiscountTypeEnum? DiscountType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateOrderTotalDiscountRequest" /> class.
        /// </summary>
        /// <param name="applyToCommissions">applyToCommissions.</param>
        /// <param name="criteria">criteria.</param>
        /// <param name="description">description.</param>
        /// <param name="discountStrategy">discountStrategy.</param>
        /// <param name="discountType">discountType.</param>
        /// <param name="discountValue">discountValue.</param>
        /// <param name="name">name.</param>
        public UpdateOrderTotalDiscountRequest(bool applyToCommissions = default(bool), List<DiscountCriteria> criteria = default(List<DiscountCriteria>), string description = default(string), DiscountStrategyEnum? discountStrategy = default(DiscountStrategyEnum?), DiscountTypeEnum? discountType = default(DiscountTypeEnum?), double discountValue = default(double), string name = default(string))
        {
            this.ApplyToCommissions = applyToCommissions;
            this.Criteria = criteria;
            this.Description = description;
            this.DiscountStrategy = discountStrategy;
            this.DiscountType = discountType;
            this.DiscountValue = discountValue;
            this.Name = name;
        }

        /// <summary>
        /// Gets or Sets ApplyToCommissions
        /// </summary>
        [DataMember(Name = "apply_to_commissions", EmitDefaultValue = true)]
        public bool ApplyToCommissions { get; set; }

        /// <summary>
        /// Gets or Sets Criteria
        /// </summary>
        [DataMember(Name = "criteria", EmitDefaultValue = false)]
        public List<DiscountCriteria> Criteria { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets DiscountValue
        /// </summary>
        [DataMember(Name = "discount_value", EmitDefaultValue = false)]
        public double DiscountValue { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateOrderTotalDiscountRequest {\n");
            sb.Append("  ApplyToCommissions: ").Append(ApplyToCommissions).Append("\n");
            sb.Append("  Criteria: ").Append(Criteria).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  DiscountStrategy: ").Append(DiscountStrategy).Append("\n");
            sb.Append("  DiscountType: ").Append(DiscountType).Append("\n");
            sb.Append("  DiscountValue: ").Append(DiscountValue).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
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
