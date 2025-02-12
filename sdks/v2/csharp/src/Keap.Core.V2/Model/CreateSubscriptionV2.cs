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
    /// CreateSubscriptionV2
    /// </summary>
    [DataContract(Name = "CreateSubscriptionV2")]
    public partial class CreateSubscriptionV2 : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateSubscriptionV2" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateSubscriptionV2() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateSubscriptionV2" /> class.
        /// </summary>
        /// <param name="allowDuplicate">If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false..</param>
        /// <param name="allowTax">Only works if the product the product subscription is for is taxable. Default is false..</param>
        /// <param name="autoCharge">Defaults to true..</param>
        /// <param name="billingAmount">Must be 0 or greater. Default is the price in the product subscription..</param>
        /// <param name="contactId">contactId (required).</param>
        /// <param name="firstBillDate">The first day the subscription will bill, in EST. Must not be in the past. Default is today..</param>
        /// <param name="paymentMethodId">Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise..</param>
        /// <param name="quantity">Must be greater than 0. Default is 1..</param>
        /// <param name="saleAffiliateId">saleAffiliateId.</param>
        /// <param name="subscriptionPlanId">Id of the product subscription..</param>
        public CreateSubscriptionV2(bool allowDuplicate = default(bool), bool allowTax = default(bool), bool autoCharge = default(bool), double billingAmount = default(double), string contactId = default(string), DateOnly firstBillDate = default(DateOnly), string paymentMethodId = default(string), int quantity = default(int), string saleAffiliateId = default(string), string subscriptionPlanId = default(string))
        {
            // to ensure "contactId" is required (not null)
            if (contactId == null)
            {
                throw new ArgumentNullException("contactId is a required property for CreateSubscriptionV2 and cannot be null");
            }
            this.ContactId = contactId;
            this.AllowDuplicate = allowDuplicate;
            this.AllowTax = allowTax;
            this.AutoCharge = autoCharge;
            this.BillingAmount = billingAmount;
            this.FirstBillDate = firstBillDate;
            this.PaymentMethodId = paymentMethodId;
            this.Quantity = quantity;
            this.SaleAffiliateId = saleAffiliateId;
            this.SubscriptionPlanId = subscriptionPlanId;
        }

        /// <summary>
        /// If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false.
        /// </summary>
        /// <value>If true, it will disable the check to see if there is already an identical subscription for the contact. Default is false.</value>
        [DataMember(Name = "allow_duplicate", EmitDefaultValue = true)]
        public bool AllowDuplicate { get; set; }

        /// <summary>
        /// Only works if the product the product subscription is for is taxable. Default is false.
        /// </summary>
        /// <value>Only works if the product the product subscription is for is taxable. Default is false.</value>
        [DataMember(Name = "allow_tax", EmitDefaultValue = true)]
        public bool AllowTax { get; set; }

        /// <summary>
        /// Defaults to true.
        /// </summary>
        /// <value>Defaults to true.</value>
        [DataMember(Name = "auto_charge", EmitDefaultValue = true)]
        public bool AutoCharge { get; set; }

        /// <summary>
        /// Must be 0 or greater. Default is the price in the product subscription.
        /// </summary>
        /// <value>Must be 0 or greater. Default is the price in the product subscription.</value>
        [DataMember(Name = "billing_amount", EmitDefaultValue = false)]
        public double BillingAmount { get; set; }

        /// <summary>
        /// Gets or Sets ContactId
        /// </summary>
        [DataMember(Name = "contact_id", IsRequired = true, EmitDefaultValue = true)]
        public string ContactId { get; set; }

        /// <summary>
        /// The first day the subscription will bill, in EST. Must not be in the past. Default is today.
        /// </summary>
        /// <value>The first day the subscription will bill, in EST. Must not be in the past. Default is today.</value>
        [DataMember(Name = "first_bill_date", EmitDefaultValue = false)]
        public DateOnly FirstBillDate { get; set; }

        /// <summary>
        /// Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise.
        /// </summary>
        /// <value>Default is the contact&#39;s most recently used card, if auto charge is true. Default is 0 otherwise.</value>
        [DataMember(Name = "payment_method_id", EmitDefaultValue = false)]
        public string PaymentMethodId { get; set; }

        /// <summary>
        /// Must be greater than 0. Default is 1.
        /// </summary>
        /// <value>Must be greater than 0. Default is 1.</value>
        [DataMember(Name = "quantity", EmitDefaultValue = false)]
        public int Quantity { get; set; }

        /// <summary>
        /// Gets or Sets SaleAffiliateId
        /// </summary>
        [DataMember(Name = "sale_affiliate_id", EmitDefaultValue = false)]
        public string SaleAffiliateId { get; set; }

        /// <summary>
        /// Id of the product subscription.
        /// </summary>
        /// <value>Id of the product subscription.</value>
        [DataMember(Name = "subscription_plan_id", EmitDefaultValue = false)]
        public string SubscriptionPlanId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateSubscriptionV2 {\n");
            sb.Append("  AllowDuplicate: ").Append(AllowDuplicate).Append("\n");
            sb.Append("  AllowTax: ").Append(AllowTax).Append("\n");
            sb.Append("  AutoCharge: ").Append(AutoCharge).Append("\n");
            sb.Append("  BillingAmount: ").Append(BillingAmount).Append("\n");
            sb.Append("  ContactId: ").Append(ContactId).Append("\n");
            sb.Append("  FirstBillDate: ").Append(FirstBillDate).Append("\n");
            sb.Append("  PaymentMethodId: ").Append(PaymentMethodId).Append("\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
            sb.Append("  SaleAffiliateId: ").Append(SaleAffiliateId).Append("\n");
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
