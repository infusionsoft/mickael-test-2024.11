/*
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.767807-hf-202501161156
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
    /// RestV2OrderItem
    /// </summary>
    [DataContract(Name = "RestV2OrderItem")]
    public partial class RestV2OrderItem : IValidatableObject
    {
        /// <summary>
        /// The interval at which the customer is charged for the subscription.
        /// </summary>
        /// <value>The interval at which the customer is charged for the subscription.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum CycleEnum
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
        /// The interval at which the customer is charged for the subscription.
        /// </summary>
        /// <value>The interval at which the customer is charged for the subscription.</value>
        /*
        <example>YEARLY</example>
        */
        [DataMember(Name = "cycle", EmitDefaultValue = false)]
        public CycleEnum? Cycle { get; set; }
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum UNKNOWN for value: UNKNOWN
            /// </summary>
            [EnumMember(Value = "UNKNOWN")]
            UNKNOWN,

            /// <summary>
            /// Enum SHIPPING for value: SHIPPING
            /// </summary>
            [EnumMember(Value = "SHIPPING")]
            SHIPPING,

            /// <summary>
            /// Enum TAX for value: TAX
            /// </summary>
            [EnumMember(Value = "TAX")]
            TAX,

            /// <summary>
            /// Enum SERVICE for value: SERVICE
            /// </summary>
            [EnumMember(Value = "SERVICE")]
            SERVICE,

            /// <summary>
            /// Enum PRODUCT for value: PRODUCT
            /// </summary>
            [EnumMember(Value = "PRODUCT")]
            PRODUCT,

            /// <summary>
            /// Enum UPSELL for value: UPSELL
            /// </summary>
            [EnumMember(Value = "UPSELL")]
            UPSELL,

            /// <summary>
            /// Enum FINANCECHARGE for value: FINANCE_CHARGE
            /// </summary>
            [EnumMember(Value = "FINANCE_CHARGE")]
            FINANCECHARGE,

            /// <summary>
            /// Enum SPECIAL for value: SPECIAL
            /// </summary>
            [EnumMember(Value = "SPECIAL")]
            SPECIAL,

            /// <summary>
            /// Enum PROGRAM for value: PROGRAM
            /// </summary>
            [EnumMember(Value = "PROGRAM")]
            PROGRAM,

            /// <summary>
            /// Enum SUBSCRIPTION for value: SUBSCRIPTION
            /// </summary>
            [EnumMember(Value = "SUBSCRIPTION")]
            SUBSCRIPTION,

            /// <summary>
            /// Enum SPECIALFREETRIALDAYS for value: SPECIAL_FREE_TRIAL_DAYS
            /// </summary>
            [EnumMember(Value = "SPECIAL_FREE_TRIAL_DAYS")]
            SPECIALFREETRIALDAYS,

            /// <summary>
            /// Enum SPECIALORDERTOTAL for value: SPECIAL_ORDER_TOTAL
            /// </summary>
            [EnumMember(Value = "SPECIAL_ORDER_TOTAL")]
            SPECIALORDERTOTAL,

            /// <summary>
            /// Enum SPECIALPRODUCT for value: SPECIAL_PRODUCT
            /// </summary>
            [EnumMember(Value = "SPECIAL_PRODUCT")]
            SPECIALPRODUCT,

            /// <summary>
            /// Enum SPECIALCATEGORY for value: SPECIAL_CATEGORY
            /// </summary>
            [EnumMember(Value = "SPECIAL_CATEGORY")]
            SPECIALCATEGORY,

            /// <summary>
            /// Enum SPECIALSHIPPING for value: SPECIAL_SHIPPING
            /// </summary>
            [EnumMember(Value = "SPECIAL_SHIPPING")]
            SPECIALSHIPPING,

            /// <summary>
            /// Enum TIP for value: TIP
            /// </summary>
            [EnumMember(Value = "TIP")]
            TIP,

            /// <summary>
            /// Enum OTHER for value: OTHER
            /// </summary>
            [EnumMember(Value = "OTHER")]
            OTHER
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="RestV2OrderItem" /> class.
        /// </summary>
        /// <param name="billingCycle">billingCycle.</param>
        /// <param name="cost">cost.</param>
        /// <param name="cycle">The interval at which the customer is charged for the subscription..</param>
        /// <param name="description">description.</param>
        /// <param name="discount">discount.</param>
        /// <param name="frequency">Interval at which a customer receives a product or service as part of a subscription plan..</param>
        /// <param name="id">id.</param>
        /// <param name="name">name.</param>
        /// <param name="notes">notes.</param>
        /// <param name="numberOfPayments">numberOfPayments.</param>
        /// <param name="orderItemTaxes">orderItemTaxes.</param>
        /// <param name="price">price.</param>
        /// <param name="product">product.</param>
        /// <param name="quantity">quantity.</param>
        /// <param name="special">special.</param>
        /// <param name="subscription">subscription.</param>
        /// <param name="subscriptionBased">subscriptionBased.</param>
        /// <param name="subscriptionId">subscriptionId.</param>
        /// <param name="subscriptionPlan">subscriptionPlan.</param>
        /// <param name="type">type.</param>
        public RestV2OrderItem(int billingCycle = default(int), double cost = default(double), CycleEnum? cycle = default(CycleEnum?), string description = default(string), double discount = default(double), int frequency = default(int), string id = default(string), string name = default(string), string notes = default(string), int numberOfPayments = default(int), List<OrderItemTax> orderItemTaxes = default(List<OrderItemTax>), double price = default(double), OrderItemProduct product = default(OrderItemProduct), int quantity = default(int), Discount special = default(Discount), RestV2Subscription subscription = default(RestV2Subscription), bool subscriptionBased = default(bool), string subscriptionId = default(string), RestSubscriptionPlan subscriptionPlan = default(RestSubscriptionPlan), TypeEnum? type = default(TypeEnum?))
        {
            this.BillingCycle = billingCycle;
            this.Cost = cost;
            this.Cycle = cycle;
            this.Description = description;
            this.Discount = discount;
            this.Frequency = frequency;
            this.Id = id;
            this.Name = name;
            this.Notes = notes;
            this.NumberOfPayments = numberOfPayments;
            this.OrderItemTaxes = orderItemTaxes;
            this.Price = price;
            this.Product = product;
            this.Quantity = quantity;
            this.Special = special;
            this.Subscription = subscription;
            this.SubscriptionBased = subscriptionBased;
            this.SubscriptionId = subscriptionId;
            this.SubscriptionPlan = subscriptionPlan;
            this.Type = type;
        }

        /// <summary>
        /// Gets or Sets BillingCycle
        /// </summary>
        [DataMember(Name = "billing_cycle", EmitDefaultValue = false)]
        public int BillingCycle { get; set; }

        /// <summary>
        /// Gets or Sets Cost
        /// </summary>
        [DataMember(Name = "cost", EmitDefaultValue = false)]
        public double Cost { get; set; }

        /// <summary>
        /// Gets or Sets Description
        /// </summary>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Discount
        /// </summary>
        [DataMember(Name = "discount", EmitDefaultValue = false)]
        public double Discount { get; set; }

        /// <summary>
        /// Interval at which a customer receives a product or service as part of a subscription plan.
        /// </summary>
        /// <value>Interval at which a customer receives a product or service as part of a subscription plan.</value>
        /*
        <example>2</example>
        */
        [DataMember(Name = "frequency", EmitDefaultValue = false)]
        public int Frequency { get; set; }

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
        /// Gets or Sets Notes
        /// </summary>
        [DataMember(Name = "notes", EmitDefaultValue = false)]
        public string Notes { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfPayments
        /// </summary>
        [DataMember(Name = "number_of_payments", EmitDefaultValue = false)]
        public int NumberOfPayments { get; set; }

        /// <summary>
        /// Gets or Sets OrderItemTaxes
        /// </summary>
        [DataMember(Name = "order_item_taxes", EmitDefaultValue = false)]
        public List<OrderItemTax> OrderItemTaxes { get; set; }

        /// <summary>
        /// Gets or Sets Price
        /// </summary>
        [DataMember(Name = "price", EmitDefaultValue = false)]
        public double Price { get; set; }

        /// <summary>
        /// Gets or Sets Product
        /// </summary>
        [DataMember(Name = "product", EmitDefaultValue = false)]
        public OrderItemProduct Product { get; set; }

        /// <summary>
        /// Gets or Sets Quantity
        /// </summary>
        [DataMember(Name = "quantity", EmitDefaultValue = false)]
        public int Quantity { get; set; }

        /// <summary>
        /// Gets or Sets Special
        /// </summary>
        [DataMember(Name = "special", EmitDefaultValue = false)]
        public Discount Special { get; set; }

        /// <summary>
        /// Gets or Sets Subscription
        /// </summary>
        [DataMember(Name = "subscription", EmitDefaultValue = false)]
        public RestV2Subscription Subscription { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionBased
        /// </summary>
        [DataMember(Name = "subscription_based", EmitDefaultValue = true)]
        public bool SubscriptionBased { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionId
        /// </summary>
        [DataMember(Name = "subscription_id", EmitDefaultValue = false)]
        public string SubscriptionId { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionPlan
        /// </summary>
        [DataMember(Name = "subscription_plan", EmitDefaultValue = false)]
        public RestSubscriptionPlan SubscriptionPlan { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RestV2OrderItem {\n");
            sb.Append("  BillingCycle: ").Append(BillingCycle).Append("\n");
            sb.Append("  Cost: ").Append(Cost).Append("\n");
            sb.Append("  Cycle: ").Append(Cycle).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Discount: ").Append(Discount).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Notes: ").Append(Notes).Append("\n");
            sb.Append("  NumberOfPayments: ").Append(NumberOfPayments).Append("\n");
            sb.Append("  OrderItemTaxes: ").Append(OrderItemTaxes).Append("\n");
            sb.Append("  Price: ").Append(Price).Append("\n");
            sb.Append("  Product: ").Append(Product).Append("\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
            sb.Append("  Special: ").Append(Special).Append("\n");
            sb.Append("  Subscription: ").Append(Subscription).Append("\n");
            sb.Append("  SubscriptionBased: ").Append(SubscriptionBased).Append("\n");
            sb.Append("  SubscriptionId: ").Append(SubscriptionId).Append("\n");
            sb.Append("  SubscriptionPlan: ").Append(SubscriptionPlan).Append("\n");
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
