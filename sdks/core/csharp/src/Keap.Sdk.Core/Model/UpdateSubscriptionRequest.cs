/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.762682-hf-202501071525
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
    /// UpdateSubscriptionRequest
    /// </summary>
    [DataContract(Name = "UpdateSubscriptionRequest")]
    public partial class UpdateSubscriptionRequest : IValidatableObject
    {
        /// <summary>
        /// Defines BillingCycle
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum BillingCycleEnum
        {
            /// <summary>
            /// Enum YEAR for value: YEAR
            /// </summary>
            [EnumMember(Value = "YEAR")]
            YEAR = 1,

            /// <summary>
            /// Enum MONTH for value: MONTH
            /// </summary>
            [EnumMember(Value = "MONTH")]
            MONTH = 2,

            /// <summary>
            /// Enum WEEK for value: WEEK
            /// </summary>
            [EnumMember(Value = "WEEK")]
            WEEK = 3,

            /// <summary>
            /// Enum DAY for value: DAY
            /// </summary>
            [EnumMember(Value = "DAY")]
            DAY = 4
        }

        /// <summary>
        /// Gets or Sets BillingCycle
        /// </summary>
        [DataMember(Name = "billing_cycle", EmitDefaultValue = false)]
        public BillingCycleEnum? BillingCycle { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSubscriptionRequest" /> class.
        /// </summary>
        /// <param name="active">active.</param>
        /// <param name="allowTax">allowTax.</param>
        /// <param name="autoCharge">autoCharge.</param>
        /// <param name="billingAmount">billingAmount.</param>
        /// <param name="billingCycle">billingCycle.</param>
        /// <param name="billingFrequency">billingFrequency.</param>
        /// <param name="contactId">contactId.</param>
        /// <param name="daysBetweenRetries">daysBetweenRetries.</param>
        /// <param name="endBillDate">endBillDate.</param>
        /// <param name="leadAffiliateId">leadAffiliateId.</param>
        /// <param name="maxChargeAttempts">maxChargeAttempts.</param>
        /// <param name="nextBillDate">nextBillDate.</param>
        /// <param name="paymentMethodId">paymentMethodId.</param>
        /// <param name="previousBillDate">previousBillDate.</param>
        /// <param name="productId">productId.</param>
        /// <param name="quantity">quantity.</param>
        /// <param name="saleAffiliateId">saleAffiliateId.</param>
        /// <param name="shippingAddress">shippingAddress.</param>
        /// <param name="startDate">startDate.</param>
        /// <param name="subscriptionPlanId">subscriptionPlanId.</param>
        public UpdateSubscriptionRequest(bool active = default(bool), bool allowTax = default(bool), bool autoCharge = default(bool), double billingAmount = default(double), BillingCycleEnum? billingCycle = default(BillingCycleEnum?), int billingFrequency = default(int), string contactId = default(string), int daysBetweenRetries = default(int), string endBillDate = default(string), string leadAffiliateId = default(string), int maxChargeAttempts = default(int), string nextBillDate = default(string), string paymentMethodId = default(string), string previousBillDate = default(string), string productId = default(string), int quantity = default(int), string saleAffiliateId = default(string), Address shippingAddress = default(Address), string startDate = default(string), string subscriptionPlanId = default(string))
        {
            this.Active = active;
            this.AllowTax = allowTax;
            this.AutoCharge = autoCharge;
            this.BillingAmount = billingAmount;
            this.BillingCycle = billingCycle;
            this.BillingFrequency = billingFrequency;
            this.ContactId = contactId;
            this.DaysBetweenRetries = daysBetweenRetries;
            this.EndBillDate = endBillDate;
            this.LeadAffiliateId = leadAffiliateId;
            this.MaxChargeAttempts = maxChargeAttempts;
            this.NextBillDate = nextBillDate;
            this.PaymentMethodId = paymentMethodId;
            this.PreviousBillDate = previousBillDate;
            this.ProductId = productId;
            this.Quantity = quantity;
            this.SaleAffiliateId = saleAffiliateId;
            this.ShippingAddress = shippingAddress;
            this.StartDate = startDate;
            this.SubscriptionPlanId = subscriptionPlanId;
        }

        /// <summary>
        /// Gets or Sets Active
        /// </summary>
        [DataMember(Name = "active", EmitDefaultValue = true)]
        public bool Active { get; set; }

        /// <summary>
        /// Gets or Sets AllowTax
        /// </summary>
        [DataMember(Name = "allow_tax", EmitDefaultValue = true)]
        public bool AllowTax { get; set; }

        /// <summary>
        /// Gets or Sets AutoCharge
        /// </summary>
        [DataMember(Name = "auto_charge", EmitDefaultValue = true)]
        public bool AutoCharge { get; set; }

        /// <summary>
        /// Gets or Sets BillingAmount
        /// </summary>
        [DataMember(Name = "billing_amount", EmitDefaultValue = false)]
        public double BillingAmount { get; set; }

        /// <summary>
        /// Gets or Sets BillingFrequency
        /// </summary>
        [DataMember(Name = "billing_frequency", EmitDefaultValue = false)]
        public int BillingFrequency { get; set; }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", EmitDefaultValue = false)]
        public string ContactId { get; set; }

        /// <summary>
        /// Gets or Sets DaysBetweenRetries
        /// </summary>
        [DataMember(Name = "days_between_retries", EmitDefaultValue = false)]
        public int DaysBetweenRetries { get; set; }

        /// <summary>
        /// Gets or Sets EndBillDate
        /// </summary>
        [DataMember(Name = "end_bill_date", EmitDefaultValue = false)]
        public string EndBillDate { get; set; }

        /// <summary>
        /// Gets or Sets LeadAffiliateId
        /// </summary>
        [DataMember(Name = "lead_affiliate_id", EmitDefaultValue = false)]
        public string LeadAffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets MaxChargeAttempts
        /// </summary>
        [DataMember(Name = "max_charge_attempts", EmitDefaultValue = false)]
        public int MaxChargeAttempts { get; set; }

        /// <summary>
        /// Gets or Sets NextBillDate
        /// </summary>
        [DataMember(Name = "next_bill_date", EmitDefaultValue = false)]
        public string NextBillDate { get; set; }

        /// <summary>
        /// Gets or Sets PaymentMethodId
        /// </summary>
        [DataMember(Name = "payment_method_id", EmitDefaultValue = false)]
        public string PaymentMethodId { get; set; }

        /// <summary>
        /// Gets or Sets PreviousBillDate
        /// </summary>
        [DataMember(Name = "previous_bill_date", EmitDefaultValue = false)]
        public string PreviousBillDate { get; set; }

        /// <summary>
        /// Gets or Sets ProductId
        /// </summary>
        [DataMember(Name = "product_id", EmitDefaultValue = false)]
        public string ProductId { get; set; }

        /// <summary>
        /// Gets or Sets Quantity
        /// </summary>
        [DataMember(Name = "quantity", EmitDefaultValue = false)]
        public int Quantity { get; set; }

        /// <summary>
        /// Gets or Sets SaleAffiliateId
        /// </summary>
        [DataMember(Name = "sale_affiliate_id", EmitDefaultValue = false)]
        public string SaleAffiliateId { get; set; }

        /// <summary>
        /// Gets or Sets ShippingAddress
        /// </summary>
        [DataMember(Name = "shipping_address", EmitDefaultValue = false)]
        public Address ShippingAddress { get; set; }

        /// <summary>
        /// Gets or Sets StartDate
        /// </summary>
        [DataMember(Name = "start_date", EmitDefaultValue = false)]
        public string StartDate { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionPlanId
        /// </summary>
        [DataMember(Name = "subscription_plan_id", EmitDefaultValue = false)]
        public string SubscriptionPlanId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UpdateSubscriptionRequest {\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  AllowTax: ").Append(AllowTax).Append("\n");
            sb.Append("  AutoCharge: ").Append(AutoCharge).Append("\n");
            sb.Append("  BillingAmount: ").Append(BillingAmount).Append("\n");
            sb.Append("  BillingCycle: ").Append(BillingCycle).Append("\n");
            sb.Append("  BillingFrequency: ").Append(BillingFrequency).Append("\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  DaysBetweenRetries: ").Append(DaysBetweenRetries).Append("\n");
            sb.Append("  EndBillDate: ").Append(EndBillDate).Append("\n");
            sb.Append("  LeadAffiliateId: ").Append(LeadAffiliateId).Append("\n");
            sb.Append("  MaxChargeAttempts: ").Append(MaxChargeAttempts).Append("\n");
            sb.Append("  NextBillDate: ").Append(NextBillDate).Append("\n");
            sb.Append("  PaymentMethodId: ").Append(PaymentMethodId).Append("\n");
            sb.Append("  PreviousBillDate: ").Append(PreviousBillDate).Append("\n");
            sb.Append("  ProductId: ").Append(ProductId).Append("\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
            sb.Append("  SaleAffiliateId: ").Append(SaleAffiliateId).Append("\n");
            sb.Append("  ShippingAddress: ").Append(ShippingAddress).Append("\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  SubscriptionPlanId: ").Append(SubscriptionPlanId).Append("\n");
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
