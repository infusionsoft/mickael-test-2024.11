/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.751586-hf-202412120145
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
    /// DiscountCriteria
    /// </summary>
    [DataContract(Name = "DiscountCriteria")]
    public partial class DiscountCriteria : IValidatableObject
    {
        /// <summary>
        /// Defines Operator
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum OperatorEnum
        {
            /// <summary>
            /// Enum LESSTHAN for value: LESS_THAN
            /// </summary>
            [EnumMember(Value = "LESS_THAN")]
            LESSTHAN = 1,

            /// <summary>
            /// Enum GREATERTHAN for value: GREATER_THAN
            /// </summary>
            [EnumMember(Value = "GREATER_THAN")]
            GREATERTHAN = 2
        }

        /// <summary>
        /// Gets or Sets Operator
        /// </summary>
        [DataMember(Name = "operator", EmitDefaultValue = false)]
        public OperatorEnum? Operator { get; set; }
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum DATERANGE for value: DATE_RANGE
            /// </summary>
            [EnumMember(Value = "DATE_RANGE")]
            DATERANGE = 1,

            /// <summary>
            /// Enum PROMOCODE for value: PROMO_CODE
            /// </summary>
            [EnumMember(Value = "PROMO_CODE")]
            PROMOCODE = 2,

            /// <summary>
            /// Enum PRODUCT for value: PRODUCT
            /// </summary>
            [EnumMember(Value = "PRODUCT")]
            PRODUCT = 3,

            /// <summary>
            /// Enum SUBSCRIPTIONPLAN for value: SUBSCRIPTION_PLAN
            /// </summary>
            [EnumMember(Value = "SUBSCRIPTION_PLAN")]
            SUBSCRIPTIONPLAN = 4,

            /// <summary>
            /// Enum ORDERTOTAL for value: ORDER_TOTAL
            /// </summary>
            [EnumMember(Value = "ORDER_TOTAL")]
            ORDERTOTAL = 5
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="DiscountCriteria" /> class.
        /// </summary>
        /// <param name="code">code.</param>
        /// <param name="criteriaId">criteriaId.</param>
        /// <param name="varOperator">varOperator.</param>
        /// <param name="planId">planId.</param>
        /// <param name="productId">productId.</param>
        /// <param name="productQuantityMax">productQuantityMax.</param>
        /// <param name="productQuantityMin">productQuantityMin.</param>
        /// <param name="rangeEndTime">rangeEndTime.</param>
        /// <param name="rangeStartTime">rangeStartTime.</param>
        /// <param name="subscriptionQuantity">subscriptionQuantity.</param>
        /// <param name="totalAmount">totalAmount.</param>
        /// <param name="type">type.</param>
        public DiscountCriteria(string code = default(string), string criteriaId = default(string), OperatorEnum? varOperator = default(OperatorEnum?), string planId = default(string), string productId = default(string), int productQuantityMax = default(int), int productQuantityMin = default(int), string rangeEndTime = default(string), string rangeStartTime = default(string), int subscriptionQuantity = default(int), double totalAmount = default(double), TypeEnum? type = default(TypeEnum?))
        {
            this.Code = code;
            this.CriteriaId = criteriaId;
            this.Operator = varOperator;
            this.PlanId = planId;
            this.ProductId = productId;
            this.ProductQuantityMax = productQuantityMax;
            this.ProductQuantityMin = productQuantityMin;
            this.RangeEndTime = rangeEndTime;
            this.RangeStartTime = rangeStartTime;
            this.SubscriptionQuantity = subscriptionQuantity;
            this.TotalAmount = totalAmount;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets Code
        /// </summary>
        [DataMember(Name = "code", EmitDefaultValue = false)]
        public string Code { get; set; }

        /// <summary>
        /// Gets or Sets CriteriaId
        /// </summary>
        [DataMember(Name = "criteria_id", EmitDefaultValue = false)]
        public string CriteriaId { get; set; }

        /// <summary>
        /// Gets or Sets PlanId
        /// </summary>
        [DataMember(Name = "plan_id", EmitDefaultValue = false)]
        public string PlanId { get; set; }

        /// <summary>
        /// Gets or Sets ProductId
        /// </summary>
        [DataMember(Name = "product_id", EmitDefaultValue = false)]
        public string ProductId { get; set; }

        /// <summary>
        /// Gets or Sets ProductQuantityMax
        /// </summary>
        [DataMember(Name = "product_quantity_max", EmitDefaultValue = false)]
        public int ProductQuantityMax { get; set; }

        /// <summary>
        /// Gets or Sets ProductQuantityMin
        /// </summary>
        [DataMember(Name = "product_quantity_min", EmitDefaultValue = false)]
        public int ProductQuantityMin { get; set; }

        /// <summary>
        /// Gets or Sets RangeEndTime
        /// </summary>
        [DataMember(Name = "range_end_time", EmitDefaultValue = false)]
        public string RangeEndTime { get; set; }

        /// <summary>
        /// Gets or Sets RangeStartTime
        /// </summary>
        [DataMember(Name = "range_start_time", EmitDefaultValue = false)]
        public string RangeStartTime { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionQuantity
        /// </summary>
        [DataMember(Name = "subscription_quantity", EmitDefaultValue = false)]
        public int SubscriptionQuantity { get; set; }

        /// <summary>
        /// Gets or Sets TotalAmount
        /// </summary>
        [DataMember(Name = "total_amount", EmitDefaultValue = false)]
        public double TotalAmount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class DiscountCriteria {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  CriteriaId: ").Append(CriteriaId).Append("\n");
            sb.Append("  Operator: ").Append(Operator).Append("\n");
            sb.Append("  PlanId: ").Append(PlanId).Append("\n");
            sb.Append("  ProductId: ").Append(ProductId).Append("\n");
            sb.Append("  ProductQuantityMax: ").Append(ProductQuantityMax).Append("\n");
            sb.Append("  ProductQuantityMin: ").Append(ProductQuantityMin).Append("\n");
            sb.Append("  RangeEndTime: ").Append(RangeEndTime).Append("\n");
            sb.Append("  RangeStartTime: ").Append(RangeStartTime).Append("\n");
            sb.Append("  SubscriptionQuantity: ").Append(SubscriptionQuantity).Append("\n");
            sb.Append("  TotalAmount: ").Append(TotalAmount).Append("\n");
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
